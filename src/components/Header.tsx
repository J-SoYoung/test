import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>BOOKSOME</h1>
      <div className={styles.right}>
        <span className={styles.username}>sobbang님</span>
        <button className={styles.button}>내서재</button>
        <button className={styles.button}>글쓰기</button>
      </div>
    </header>
  );
};
