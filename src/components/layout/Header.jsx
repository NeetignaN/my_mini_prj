import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FiHome, FiUsers, FiFolder, FiSettings } from "react-icons/fi";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  const logoUrl = logo;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoUrl} alt="Interiora" className={styles.logoImage} />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={`${styles.navLink} ${styles.navLinkActive}`}>
          <FiHome /> Dashboard
        </Link>
        <Link to="/clients" className={styles.navLink}>
          <FiUsers /> Clients
        </Link>
        <Link to="/projects" className={styles.navLink}>
          <FiFolder /> Projects
        </Link>
        <Link to="/settings" className={styles.navLink}>
          <FiSettings /> Settings
        </Link>
      </nav>

      <div className={styles.userProfile}>
        <div className={styles.avatar}>JD</div>
      </div>
    </header>
  );
};

export default Header;
