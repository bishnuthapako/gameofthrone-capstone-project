import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      Copyright © Bishnu Bahadur Thapa @{new Date().getFullYear()}
    </div>
  );
};

export default Footer;
