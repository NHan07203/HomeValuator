import auth from "../CSS/AuthFeatures.module.css";

function Feature({
  imageLeft = false,
  featureLayout = "grid",
  subTitle = "",
  title,
  content,
  feature = [],
  img,
}) {
  return (
    <div className={`${auth.authMain} ${imageLeft ? auth.reverse : ""}`}>
      <div className={auth.left}>
        {subTitle && <i>{subTitle}</i>}   
        <h2>{title}</h2>
        <p>{content}</p>

        <div className={`${auth.feature} ${auth[featureLayout]}`}>
          {feature.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>

      <div className={auth.right}>
        <img src={process.env.PUBLIC_URL + `/img/${img}`} alt="img" />
      </div>
    </div>
  );
}

export default Feature;
