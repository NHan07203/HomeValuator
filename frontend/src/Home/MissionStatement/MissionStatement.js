import mission from "../../CSS/MissionStatement.module.css"

function MissionStatement() {
  const images = [
    { id: 1, src: process.env.PUBLIC_URL + '/img/slide-1.jpg', alt: 'Modern apartment' },
    { id: 2, src: process.env.PUBLIC_URL + '/img/slide-2.jpg', alt: 'Luxury villa' },
    { id: 3, src: process.env.PUBLIC_URL + '/img/slide-3.jpg', alt: 'Urban house' },
    { id: 4, src: process.env.PUBLIC_URL + '/img/slide-3.jpg', alt: 'Commercial space' },
    { id: 5, src: process.env.PUBLIC_URL + '/img/slide-5.jpg', alt: 'Residential area' },
    { id: 6, src: process.env.PUBLIC_URL + '/img/slide-1.jpg', alt: 'Smart home' },
  ];

  
  return (
    <section className={mission.infoMain}>
      <div className={mission.info}>
        <h2>Khám phá giá trị bất động sản chính xác</h2>
        <p>
          Chúng tôi cung cấp những dự đoán giá trị nhà và đất chính xác dựa trên
          công nghệ AI tiên tiến. Mục tiêu của chúng tôi là giúp bạn đưa ra
          quyết định thông minh trong việc đầu tư bất động sản.
        </p>
        <div className={mission.authButtons}>
            <button className={mission.signupBtn}>Đăng ký</button>
            <button className={mission.tryBtn}>Dùng thử</button>
        </div>
      </div>

      <div className={mission.listImg}>
        {images.map((image) => (
          <div key={image.id} className={mission.imageWrapper}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MissionStatement;