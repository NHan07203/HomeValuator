import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import nav from "../../CSS/navigation.module.css";

function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Hook để điều hướng

  const handleClick = () =>{
    navigate("/");
  }

  return (
    <div className={nav.navbar}>
      <div>
        <img onClick={handleClick} src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/service">Dịch vụ</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li className="dropdown">
            <Link href="#" onClick={() => setShowDropdown(!showDropdown)}>
              Khám phá <FontAwesomeIcon icon={faChevronDown} />
            </Link>
            {showDropdown && (
              <ul className={nav.dropdownMenu}>
                <li>
                  <Link to="/houses">Định giá nhà</Link>
                </li>
                <li>
                  <Link to="/news">Tin tức BĐS</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className={nav.authButtons}>
        <button className={nav.signinBtn} onClick={() => navigate("/auth")}>
          Đăng nhập
        </button>
        <button className={nav.tryBtn} onClick={() => navigate("/service")}>Dùng thử</button>
      </div>
    </div>
  );
}

export default Navigation;