import Button from "../../component/Button";
import newsStyle from "../../CSS/Newsletter.module.css";

function Newsletter() {
  return (
    <div className={newsStyle.newsletterContainer}>
      <div className={newsStyle.newsletterContent}>
        <h2 className={newsStyle.newsletterTitle}>Đăng ký nhận bản tin mới</h2>
        <p className={newsStyle.newsletterText}>
          Hãy đăng ký để nhận thông tin mới về giá trị nhà và đất.
        </p>

        <form className={newsStyle.newsletterForm}>
          <input
            type="text"
            placeholder="Nhập email của bạn"
            className={newsStyle.newsletterInput}
          />
          <Button text="Đăng ký" bgColor="#B23135" textColor="#fff" />
        </form>

        <p className={newsStyle.newsletterDisclaimer}>
          Bằng cách nhấn Đăng ký, bạn đồng ý với Điều khoản và Điều kiện của chúng tôi.
        </p>
      </div>

      <div className={newsStyle.newsletterImageContainer}>
        <img
          src={process.env.PUBLIC_URL + `/img/newsletter.jpg`}
          alt="news"
          className={newsStyle.newsletterImage}
        />
      </div>
    </div>
  );
}

export default Newsletter;
