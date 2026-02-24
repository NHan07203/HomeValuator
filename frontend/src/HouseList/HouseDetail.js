import { useParams } from "react-router-dom";
import { houses } from "./data.js";
import styles from "./CSS/HouseDetail.module.css";

export default function HouseDetail() {
  const { id } = useParams();
  const house = houses.find((h) => h.id === parseInt(id));

  return (
    <div className={styles.container}>
      <img src={house.image} alt="House" className={styles.image} />
      <h1 className={styles.title}>{house.name}</h1>
      <p className={styles.location}>{house.location}</p>
      <p className={styles.price}>{house.price} VND</p>
      <p className={styles.details}>Diện tích: {house.area} m²</p>
      <p className={styles.details}>Số phòng ngủ: {house.bedrooms}</p>
    </div>
  );
}
