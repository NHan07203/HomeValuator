# HomeValuator - Hệ thống dự đoán giá nhà bằng AI

## Giới thiệu

HomeValuator là một ứng dụng web fullstack sử dụng Machine Learning để dự đoán giá nhà dựa trên các đặc trưng như diện tích, vị trí, số phòng,...

Dự án được xây dựng với mục tiêu:

* Áp dụng Machine Learning vào bài toán thực tế
* Triển khai mô hình dưới dạng RESTful API
* Tích hợp AI vào hệ thống web hoàn chỉnh (Frontend + Backend)

---

## Kiến trúc hệ thống

Frontend (ReactJS) ->
REST API (Flask)
->
Machine Learning Model (Stacking)

---

## Công nghệ sử dụng

### Backend

* Flask (Python)
* RESTful API

### Frontend

* ReactJS

### Machine Learning

* Scikit-learn
* XGBoost
* LightGBM
* CatBoost

### Xử lý dữ liệu

* Pandas
* NumPy

---

## Tính năng chính

* Dự đoán giá nhà dựa trên dữ liệu đầu vào từ người dùng
* Cung cấp API phục vụ inference
* Giao diện web hỗ trợ nhập liệu và hiển thị kết quả
* Tích hợp mô hình Machine Learning vào backend

---

## API mẫu

### POST /predict

**Request:**

```json
{
  "area": 120,
  "bedrooms": 3,
  "...": "..."
}
```

**Response:**

```json
{
  "predicted_price": 250000
}
```

---

## Cấu trúc thư mục

```
home-valuator/
├── backend/        # Flask API + xử lý logic + tích hợp model
├── frontend/       # Giao diện ReactJS
├── data/           # Dataset (không đưa lên Git)
├── model/          # File model đã train (không đưa lên Git)
└── README.md
```

---

## Lưu ý

* File model (.pkl) và dataset không được đưa lên repository
* Có thể cần train lại model trước khi chạy hệ thống
* Dự án hiện ở mức demo, chưa deploy production

---

## Hướng dẫn cài đặt

### Backend

```bash
python -m venv .venv
.venv\Scripts\activate   # Windows
# source .venv/bin/activate  # macOS/Linux

cd backend
pip install -r requirements.txt
python App.py
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## Ứng dụng AI trong phát triển

Trong quá trình thực hiện dự án, AI được sử dụng để:

* Hỗ trợ xây dựng cấu trúc backend và API
* Gợi ý logic xử lý và tối ưu code
* Hỗ trợ debug và viết nhanh các thành phần cơ bản

---

## Định hướng phát triển

* Deploy hệ thống (Backend + Frontend)
* Tối ưu mô hình và pipeline xử lý dữ liệu
* Cải thiện hiệu năng API
* Mở rộng sang các bài toán recommendation
