import { Outlet } from "react-router-dom";
import { useDeviceType } from "../hooks/useDeviceType";
import { Header } from "./Header";
import { Categories } from "./Categories";
import { Sidebar } from "./Sidebar";
import styles from "./layout.module.css";
import { BottomNavbar } from "./BottomNavbar";

export const Layout = () => {
  const { isTablet, isDesktop } = useDeviceType();

  if (isDesktop) {
    return (
      <div className={styles.desktop__layout}>
        <Sidebar />
        <div className={styles.desktop__content}>
          <Header />
          <Outlet />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <>
        <Header />
        <Categories />
        <Outlet />
      </>
    );
  }

  return (
    <div className={styles.mobile__layout}>
      <Header />
      <Categories />
      <Outlet />
      <BottomNavbar />
    </div>
  );
};
