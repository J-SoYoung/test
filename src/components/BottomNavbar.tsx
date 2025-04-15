import styles from "./bottomNavbar.module.css";

export const BottomNavbar = () => {
  return (
    <div className={styles.bottom__navbar}>
      <button>HOME</button>
      <button>SEARCH</button>
      <button>WRITE</button>
      <button>MYBOOK</button>
    </div>
  );
};
