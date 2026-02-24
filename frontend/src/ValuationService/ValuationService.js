import React, { useState } from "react";
import styles from "./ValuationService.module.css";
import axios from "axios";

const directions = [
  "Đông",
  "Tây",
  "Nam",
  "Bắc",
  "Đông_Bắc",
  "Đông_Nam",
  "Tây_Bắc",
  "Tây_Nam",
];

const legalTypes = ["Sổ_đỏ_Sổ_hồng", "Sổ_đỏ", "Sổ_hồng", "Sổ_chung"];

const furnitureTypes = [
  "Cơ_bản",
  "Đầy_đủ",
  "Không_nội_thất",
  "Nội_thất_cao_cấp",
];

const amenityLabelMap = {
  school: "Trường học",
  hospital: "Bệnh viện",
  supermarket: "Siêu thị",
  park: "Công viên",
  "bus station": "Trạm xe buýt",
  restaurant: "Nhà hàng",
  pharmacy: "Hiệu thuốc",
  bank: "Ngân hàng",
  police: "Đồn công an",
  "fire station": "Trạm cứu hỏa",
};

const amenityList = Object.keys(amenityLabelMap);

export default function HomePage() {
  const [formData, setFormData] = useState({
    address: "",
    area: "",
    frontage: "", // Đổi từ width thành frontage
    floors: "",
    totalRooms: "",
    direction: "",
    legalStatus: "",
    furniture: "",
    amenities: [],
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData((prev) => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Chuẩn hóa dữ liệu trước khi gửi
    const payload = {
      address: formData.address,
      area: parseFloat(formData.area) || 0,
      frontage: parseFloat(formData.frontage) || 0, // Đổi từ width
      floors: parseInt(formData.floors) || 0,
      totalRooms: parseInt(formData.totalRooms) || 0,
      direction: formData.direction,
      legalStatus: formData.legalStatus,
      furniture: formData.furniture,
      amenities: formData.amenities,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        payload
      );
      setResult(response.data);
    } catch (error) {
      setResult({ error: "Lỗi khi dự đoán: " + error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bg-1.jpg"})`,
        }}
      ></div>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Dự đoán giá bất động sản</h1>
        <p className={styles.subtitle}>Nhập thông tin chi tiết để dự đoán</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <input
                type="number"
                name="area"
                placeholder="Diện tích (m²)"
                value={formData.area}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="number"
                name="frontage"
                placeholder="Mặt tiền (m)"
                value={formData.frontage}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="number"
                name="floors"
                placeholder="Số tầng"
                value={formData.floors}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="number"
                name="totalRooms"
                placeholder="Tổng số phòng"
                value={formData.totalRooms}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <select
              name="direction"
              value={formData.direction}
              onChange={handleChange}
              required
            >
              <option value="">Chọn hướng</option>
              {directions.map((dir, idx) => (
                <option key={idx} value={dir}>
                  {dir.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <select
              name="legalStatus"
              value={formData.legalStatus}
              onChange={handleChange}
              required
            >
              <option value="">Giấy tờ pháp lý</option>
              {legalTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <select
              name="furniture"
              value={formData.furniture}
              onChange={handleChange}
              required
            >
              <option value="">Nội thất</option>
              {furnitureTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label style={{ marginBottom: "8px" }}>
              Chọn tiện ích xung quanh:
            </label>
            <div className={styles.grid}>
              {amenityList.map((a) => {
                const id = `amenity-${a.replace(" ", "-")}`; // tránh dấu cách trong id
                return (
                  <label
                    key={a}
                    htmlFor={id}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={formData.amenities.includes(a)}
                      onChange={() => handleAmenityToggle(a)}
                      style={{ marginRight: "6px" }}
                    />
                    {amenityLabelMap[a] || a}
                  </label>
                );
              })}
            </div>
          </div>

          <button
            className={styles.predictButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Đang dự đoán..." : "Dự đoán"}
          </button>
        </form>

        {result && (
          <div className={styles.result}>
            {result.error ? (
              <p className={styles.error}>{result.error}</p>
            ) : (
              <>
                <p className={styles.price}>Giá dự đoán: {result.price}</p>
                <p className={styles.range}>Khoảng: {result.range}</p>
                {result.price_per_m2 && (
                  <p className={styles.price}>Giá/m²: {result.price_per_m2}</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
