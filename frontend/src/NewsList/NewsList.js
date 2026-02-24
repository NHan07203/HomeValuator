import { useState } from "react";
import { news } from "./data";
import styles from "./CSS/NewsList.module.css";

export default function NewsList() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tin tức Bất Động Sản</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Tìm kiếm tin tức..."
          className={styles.input}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.newsGrid}>
        {news
          .filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
          .map((article) => (
            <div key={article.id} className={styles.newsCard}>
              <img src={article.image} alt="News" className={styles.image} />
              <h3 className={styles.newsTitle}>{article.title}</h3>
              <p className={styles.date}>{article.date}</p>
              <p className={styles.summary}>{article.summary}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
