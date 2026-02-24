import { useState, useEffect } from "react";
import styles from "../CSS/AuthForm.module.css";

function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Cập nhật trạng thái khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${
          isRegister && !isMobile ? styles.rightPanelActive : ""
        }`}
      >
        {/* Background bao phủ */}
        <div className={styles.background}></div>

        {/* Wrapper chứa toàn bộ form */}
        <div className={styles.formWrapper}>
          {/* Form Đăng nhập (Chỉ hiển thị nếu không phải mobile hoặc không bấm Đăng ký) */}
          {(!isMobile || !isRegister) && (
            <div className={styles.formContainer}>
              <h2>Đăng nhập</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mật khẩu" />

              {/* Nhớ mật khẩu */}
              <div className={styles.rememberMe}>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Nhớ mật khẩu</label>
              </div>

              <button className={styles.button}>Đăng nhập</button>

              {/* Đăng nhập bằng mạng xã hội */}
              <p>Hoặc đăng nhập bằng</p>
              <div className={styles.socialLogin}>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>

              {isMobile && (
                <button className={styles.button} onClick={() => setIsRegister(true)}>Đăng ký</button>
              )}
            </div>
          )}

          {/* Khám phá (Chỉ hiển thị trên PC) */}
          {!isMobile && (
            <>
              <div className={styles.formContainer1}>
                <h2>Bắt đầu hành trình nào</h2>
                <p>Đăng ký ngay để dự đoán giá bất động sản!</p>
                <button className={styles.button} onClick={() => setIsRegister(true)}>Đăng ký</button>
              </div>

              <div className={styles.formContainer1}>
                <h2>Tham gia ngay hôm nay</h2>
                <p>Có tài khoản? Đăng nhập để dự đoán giá bất động sản!</p>
                <button className={styles.button} onClick={() => setIsRegister(false)}>Đăng nhập</button>
              </div>
            </>
          )}

          {/* Form Đăng ký (Chỉ hiển thị trên mobile khi bấm Đăng ký) */}
          {(!isMobile || isRegister) && (
            <div className={styles.formContainer}>
              <h2>Đăng ký</h2>
              <input type="text" placeholder="Họ và tên" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Mật khẩu" />
              <button className={styles.button}>Đăng ký</button>

              {isMobile && (
                <button className={styles.button} onClick={() => setIsRegister(false)}>Quay lại</button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
