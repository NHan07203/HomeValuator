import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../CSS/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Logo & Subscription */}
        <div className={styles.subscription}>
          <img
            className={styles.logo}
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
          />
          <p>
            Đăng ký nhận bản tin để cập nhật tính năng và thông báo mới nhất.
          </p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Nhập email của bạn" />
            <button>Đăng ký</button>
          </div>
          <p className={styles.privacyNote}>
            Bằng cách đăng ký, bạn đồng ý với <a href="#">Chính sách bảo mật</a>{" "}
            của chúng tôi.
          </p>
        </div>

        {/* Links */}
        <div className={styles.footerLinks}>
          <div>
            <h3>Bạn có thể xem</h3>
            <ul>
              <li>
                <Link to="/">Trang Chủ</Link>
              </li>
              <li>
                <Link to="/services">Dịch Vụ</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Khác</h3>
            <ul>
              <li>
                <a href="https://example.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://example.com/faq">Câu Hỏi Thường Gặp</a>
              </li>
              <li>
                <a href="https://example.com/testimonials">Đánh Giá</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className={styles.socialMedia}>
          <h3>Theo dõi chúng tôi</h3>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faSquareInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>© 2025 Nguyễn Trung Nhân</p>
        <div>
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản Dịch vụ</a>
          <a href="#">Cài đặt Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
