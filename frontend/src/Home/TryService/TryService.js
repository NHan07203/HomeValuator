import Button from "../../component/Button"
import style from "../../CSS/TryService.module.css"

function TryService() {
    return(
        <div className={style.tryService}>
            <h2>Khám Phá Giá Trị Bất Động Sản</h2>
            <p>Đăng ký ngay hôm nay để trải nghiệm dịch vụ dự đoán giá trị nhà và đất chính xác!</p>

            <div>
                <Button text="Đăng Ký" bgColor="#B23135" textColor="#fff"/>
                <Button text="Dùng thử" bgColor="#E3E1E2"  textColor="#B23135"/>
            </div>
        </div>
    )
}

export default TryService