import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import AuthFeatures from "./Home/AuthFeatures/AuthFeatures.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import MissionStatement from "./Home/MissionStatement/MissionStatement.js";
import Navigation from "./Home/Navigation/Navigation.js";
import ValuationAI from "./Home/AuthFeatures/ValuationAI.js";
import UserFriendly from "./Home/AuthFeatures/UserFriendly.js";
import TryService from "./Home/TryService/TryService.js";
import Faqs from "./Home/Faqs/Faqs.js";
import Newsletter from "./Home/Newsletter/Newsletter.js";
import Statistical from "./Home/Statistical/Statistical.js";
import Comparison from "./Home/Comparison/Comparison.js";
import Footer from "./Home/Footer/Footer.js";
import AuthForm from "./Auth/AuthForm/AuthForm.js";
import ValuationService from "./ValuationService/ValuationService.js";
import ContactForm from "./ContactForm/ContactForm.js";
import "./App.module.css";
import HouseList from "./HouseList/HouseList.js";
import HouseDetail from "./HouseList/HouseDetail.js";
import NewsList from "./NewsList/NewsList.js";

function App() {
  const [showGoTop, setShowGoTop] = useState(false);

  // Kiểm tra khi nào hiển thị nút Go to Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div className="App">
        {/* Điều hướng */}
        <Navigation />

        {/* Định tuyến các trang */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MissionStatement />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <AuthFeatures />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <ValuationAI />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <UserFriendly />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TryService />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Faqs />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Newsletter />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Statistical />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Comparison />
                </motion.div>
              </>
            }
          />
          <Route path="/service" element={<ValuationService />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/houses" element={<HouseList />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Nút Go to Top */}
        {showGoTop && (
          <button className="go-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>

      {/* CSS */}
      <style jsx="true">{`
        .go-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #b23135;
          color: white;
          border: none;
          padding: 18px;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        .go-to-top:hover {
          background: rgb(137, 47, 50);
          transform: scale(1.1);
        }
      `}</style>
    </Router>
  );
}

export default App;
