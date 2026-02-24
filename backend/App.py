import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import requests

app = Flask(__name__)
CORS(app)

# Load mô hình
model = joblib.load("model/stacking_model.pkl")

# Cache tọa độ thành phố
city_coordinates_cache = {}

# Danh sách cột đặc trưng đúng thứ tự
FEATURE_COLUMNS = [
    "Diện tích", "Mặt tiền", "Số tầng", "Tổng số phòng",
    "Vĩ độ", "Kinh độ", "Khoảng cách trung tâm (km)",
    "Hướng_Đông", "Hướng_Tây", "Hướng_Nam", "Hướng_Bắc",
    "Hướng_Đông_Bắc", "Hướng_Đông_Nam", "Hướng_Tây_Bắc", "Hướng_Tây_Nam",
    "Giấy_tờ_Sổ_đỏ_Sổ_hồng", "Giấy_tờ_Sổ_đỏ", "Giấy_tờ_Sổ_hồng", "Giấy_tờ_Sổ_chung",
    "Nội_thất_Cơ_bản", "Nội_thất_Đầy_đủ", "Nội_thất_Không_nội_thất", "Nội_thất_Nội_thất_cao_cấp",
    "school", "hospital", "supermarket", "park", "bus_station", "restaurant", "pharmacy",
    "bank", "police", "fire_station",
    "diện_tích_per_phòng", "diện_tích_số_tầng"
]

def get_coordinates(address):
    url = "https://nominatim.openstreetmap.org/search"
    params = {"q": f"{address}, Vietnam", "format": "json", "limit": 1}
    headers = {"User-Agent": "RealEstatePredictor/1.0"}
    response = requests.get(url, params=params, headers=headers)
    if response.status_code == 200 and response.json():
        data = response.json()[0]
        return float(data["lat"]), float(data["lon"])
    return None, None

def get_city_center_coordinates(city_name):
    if city_name in city_coordinates_cache:
        return city_coordinates_cache[city_name]
    lat, lon = get_coordinates(city_name)
    city_coordinates_cache[city_name] = (lat, lon)
    return lat, lon

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Earth radius in km
    dlat = np.radians(lat2 - lat1)
    dlon = np.radians(lon2 - lon1)
    a = np.sin(dlat / 2)**2 + np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * np.sin(dlon / 2)**2
    c = 2 * np.arcsin(np.sqrt(a))
    return R * c

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json

        # Lấy tọa độ từ địa chỉ nếu chưa có
        lat, lon = data.get("latitude"), data.get("longitude")
        if (not lat or not lon) and data.get("address"):
            lat, lon = get_coordinates(data["address"])
        if lat is None or lon is None:
            return jsonify({"error": "Không thể lấy tọa độ từ địa chỉ!"})

        # Tính khoảng cách đến trung tâm thành phố tương ứng
        address = data.get("address", "")
        city_name = address.split(",")[-1].strip()
        center_lat, center_lon = get_city_center_coordinates(city_name)
        if center_lat is None or center_lon is None:
            return jsonify({"error": f"Không thể lấy tọa độ trung tâm thành phố: {city_name}"})

        distance_to_center = haversine_distance(lat, lon, center_lat, center_lon)

        # Các trường cơ bản
        area = float(data.get("area", 0))
        frontage = float(data.get("frontage", 0))
        floors = int(data.get("floors", 0))
        total_rooms = int(data.get("totalRooms", 0))

        # One-hot hướng nhà
        directions = ["Đông", "Tây", "Nam", "Bắc", "Đông_Bắc", "Đông_Nam", "Tây_Bắc", "Tây_Nam"]
        direction_onehot = [1 if data.get("direction") == d else 0 for d in directions]

        # One-hot giấy tờ
        legal_statuses = ["Sổ_đỏ_Sổ_hồng", "Sổ_đỏ", "Sổ_hồng", "Sổ_chung"]
        legal_onehot = [1 if data.get("legalStatus") == l else 0 for l in legal_statuses]

        # One-hot nội thất
        furniture_options = ["Cơ_bản", "Đầy_đủ", "Không_nội_thất", "Nội_thất_cao_cấp"]
        furniture_onehot = [1 if data.get("furniture") == f else 0 for f in furniture_options]

        # One-hot tiện ích
        all_amenities = ["school", "hospital", "supermarket", "park", "bus_station",
                         "restaurant", "pharmacy", "bank", "police", "fire_station"]
        selected_amenities = data.get("amenities", [])
        amenity_onehot = [1 if a in selected_amenities else 0 for a in all_amenities]

        # Đặc trưng mới (log để match mô hình)
        log_area = np.log(area)
        log_distance_to_center = np.log(distance_to_center)
        area_per_room = log_area / total_rooms if total_rooms > 0 else 0
        area_times_floors = log_area * floors

        # Tổng hợp đầu vào
        full_features = [log_area, frontage, floors, total_rooms,
                         lat, lon, log_distance_to_center] + \
                        direction_onehot + legal_onehot + furniture_onehot + \
                        amenity_onehot + [area_per_room, area_times_floors]

        input_df = pd.DataFrame([full_features], columns=FEATURE_COLUMNS)

        # Dự đoán log(price_per_m2), rồi convert về triệu/m2
        y_pred_log = model.predict(input_df)[0]
        y_pred_per_m2 = np.expm1(y_pred_log)

        # Giá gốc (triệu VNĐ)
        total_price = y_pred_per_m2 * area
        lower_price = total_price * 0.95
        upper_price = total_price * 1.05

        return jsonify({
            "price": f"{total_price:.2f} triệu VNĐ",
            "range": f"{lower_price:.2f} - {upper_price:.2f} triệu VNĐ"
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
