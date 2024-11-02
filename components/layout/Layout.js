import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>AutoMarket</h2>
          <p>A marketplace for used cars</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>2024 AutoMarket. All rights reserved.&copy;</footer>
    </>
  );
}
export default Layout;
