import { useState } from "react";
import Button from "../../component/Button";
import faqStyles from "../../CSS/Faqs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Dự đoán giá trị là gì?",
      answer:
        "Dự đoán giá trị là quá trình sử dụng dữ liệu và công nghệ để ước lượng giá trị của bất động sản. Chúng tôi sử dụng trí tuệ nhân tạo để phân tích nhiều yếu tố khác nhau, giúp cung cấp thông tin chính xác và đáng tin cậy cho người dùng.",
    },
    {
      question: "Làm thế nào để dự đoán?",
      answer:
        "Bạn chỉ cần nhập thông tin cần thiết về bất động sản. Hệ thống sẽ tự động phân tích và đưa ra dự đoán. Quy trình này rất nhanh chóng và dễ dàng.",
    },
    {
      question: "Dữ liệu được cập nhật như thế nào?",
      answer:
        "Chúng tôi liên tục cập nhật dữ liệu từ nhiều nguồn khác nhau để đảm bảo các dự đoán luôn chính xác và phù hợp với thị trường hiện tại.",
    },
    {
      question: "Có phí dịch vụ không?",
      answer:
        "Chúng tôi cung cấp dịch vụ dự đoán miễn phí cho người dùng. Tuy nhiên, có thể có các dịch vụ cao cấp với phí dịch vụ. Bạn có thể tìm hiểu thêm trên trang web của chúng tôi.",
    },
    {
      question: "Liệu dự đoán có chính xác?",
      answer:
        "Chúng tôi sử dụng công nghệ tiên tiến để đảm bảo tính chính xác của các dự đoán. Tuy nhiên, giá trị thực tế có thể thay đổi do nhiều yếu tố. Bạn nên tham khảo thêm thông tin từ các nguồn khác.",
    },
  ];

  return (
    <div className={faqStyles.faqContainer}>
      <h1 className={faqStyles.faqTitle}>Câu hỏi</h1>
      <p className={faqStyles.faqIntro}>
        Dưới đây là những câu hỏi thường gặp về dịch vụ dự đoán giá trị nhà và đất.
      </p>

      {faqs.map((faq, index) => (
        <div key={index}>
          <div className={faqStyles.faqItem} onClick={() => toggleAnswer(index)}>
            <div className={faqStyles.faqHeader}>
              <b className={faqStyles.faqQuestion}>{faq.question}</b>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${faqStyles.faqIcon} ${openIndex === index ? faqStyles.open : ""}`}
              />
            </div>
            {openIndex === index && <p className={faqStyles.faqAnswer}>{faq.answer}</p>}
          </div>
          <hr className={faqStyles.faqDivider} />
        </div>
      ))}

      <div className={faqStyles.contactSection}>
        <h1 className={faqStyles.contactTitle}>Còn câu hỏi?</h1>
        <p className={faqStyles.contactText}>Chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
        <Button text="Liên hệ" textColor="#B23135" />
      </div>
    </div>
  );
}

export default Faqs;