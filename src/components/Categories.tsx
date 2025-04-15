import styles from "./categories.module.css";

export const Categories = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.categories}>
        <button>홈</button>
        <button>IT</button>
        <button>문학</button>
        <button>자기계발</button>
        <button>심리</button>
        <button>인문</button>
      </div>
      <input className={styles.search} type="text" placeholder="search" />
    </nav>
  );
};
