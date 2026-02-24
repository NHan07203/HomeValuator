import statisticalStyles from "../../CSS/Statistical.module.css";

function Statistical() {
  return (
    <div className={statisticalStyles.statisticalContainer}>
      {/* Ảnh bên trái */}
      <div className={statisticalStyles.imageContainer}>
        <img
          src={process.env.PUBLIC_URL + `/img/statistical.jpg`}
          alt="Statistical"
          className={statisticalStyles.statisticalImage}
        />
      </div>

      {/* Nội dung bên phải */}
      <div className={statisticalStyles.contentContainer}>
        <h2 className={statisticalStyles.statisticalTitle}>
          Độ chính xác và hiệu quả của dự đoán giá trị nhà đất
        </h2>

        <p className={statisticalStyles.statisticalText}>
          Chúng tôi tự hào cung cấp những dự đoán giá trị nhà và đất chính xác.
          Dữ liệu của chúng tôi được cập nhật liên tục để đảm bảo tính hiệu quả.
        </p>

        {/* Thông số */}
        <div className={statisticalStyles.statisticalGrid}>
          <div className={statisticalStyles.statisticalBox}>
            <h2>95%</h2>
            <p>Dữ liệu chính xác.</p>
          </div>

          <div className={statisticalStyles.statisticalBox}>
            <h2>90%</h2>
            <p>Dự đoán đáng tin cậy.</p>
          </div>
        </div>

        {/* Cảm nhận khách hàng */}
        <p className={statisticalStyles.customerReview}>
          🗣️ <i>"Dự đoán này thực sự giúp tôi đưa ra quyết định mua nhà!"</i> - Khách hàng A
        </p>
      </div>
    </div>
  );
}

export default Statistical;
