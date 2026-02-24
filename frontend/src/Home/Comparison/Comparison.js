import Button from "../../component/Button";
import styles from "../../CSS/Comparison.module.css";

function Comparison() {
  return (
    <div className={styles.comparisonContainer}>
      {/* Lời chào và tiêu đề */}
      <h1 className={styles.welcomeText}>Chào mừng!</h1>
      <h2 className={styles.title}>So sánh dịch vụ dự đoán giá đất và giá nhà</h2>
      <p className={styles.subtitle}>
        Hãy xem sự khác biệt giữa hai dịch vụ và chọn giải pháp phù hợp nhất!
      </p>

      {/* Bảng so sánh */}
      <div className={styles.tableContainer}>
        <table className={styles.comparisonTable}>
          <thead>
            <tr>
              <th>Chức năng</th>
              <th>Dự đoán giá đất</th>
              <th>Dự đoán giá nhà</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Độ chính xác</td>
              <td>95%</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>Dữ liệu cập nhật</td>
              <td>Hàng tuần</td>
              <td>Hàng tháng</td>
            </tr>
            <tr>
              <td>Báo cáo chi tiết</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Biểu đồ phân tích</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Hỗ trợ khách hàng</td>
              <td>24/7</td>
              <td>Giờ hành chính</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Nút hành động */}
      <div className={styles.buttonContainer}>
        <Button text="Nâng cấp" bgColor="#B23135" textColor="#fff"/>
        <Button text="Tìm hiểu" textColor="#B23135"/>
      </div>
    </div>
  );
}

export default Comparison;
