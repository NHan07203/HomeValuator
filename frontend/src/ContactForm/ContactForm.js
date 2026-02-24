import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactContainer}>
      {/* Ảnh nền */}
      <div className={styles.background}></div>

      {/* Nội dung chính */}
      <div className={styles.content}>
        <h2 className={styles.title}>Liên hệ với chúng tôi</h2>
        <p className={styles.subtitle}>Hãy để lại lời nhắn, chúng tôi sẽ phản hồi sớm nhất!</p>

        {/* Thông tin liên hệ */}
        <div className={styles.contactInfo}>
          <p><FaPhone className={styles.icon} /> 0123-456-789</p>
          <p><FaEnvelope className={styles.icon} /> contact@yourwebsite.com</p>
          <p><FaMapMarkerAlt className={styles.icon} /> 123 Đường ABC, Quận XYZ, TP.HCM</p>
        </div>

        {/* Form liên hệ */}
        <form className={styles.form}>
          <input type="text" placeholder="Họ và Tên" required />
          <input type="email" placeholder="Email của bạn" required />
          <textarea placeholder="Nội dung liên hệ" required></textarea>
          <button type="submit" className={styles.submitButton}>Gửi tin nhắn</button>
        </form>

        {/* Mạng xã hội */}
        <div className={styles.socials}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}
    