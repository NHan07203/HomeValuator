import { useState } from "react";
import { houses } from "./data";
import styles from "./CSS/HouseList.module.css";
import { Link } from "react-router-dom";

export default function HouseList() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Tìm kiếm theo địa điểm..."
          className={styles.input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.houseGrid}>
        {houses
          .filter((h) => h.location.toLowerCase().includes(search.toLowerCase()))
          .map((house) => (
            <div key={house.id} className={styles.houseCard}>
              <img src={house.image} alt="House" className={styles.image} />
              <h3 className={styles.title}>{house.name}</h3>
              <p className={styles.location}>{house.location}</p>
              <p className={styles.price}>{house.price} VND</p>
              <p className={styles.details}>Diện tích: {house.area} m²</p>
              <p className={styles.details}>Số phòng ngủ: {house.bedrooms}</p>
              <Link to={`/house/${house.id}`} className={styles.button}>
                Xem chi tiết
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}