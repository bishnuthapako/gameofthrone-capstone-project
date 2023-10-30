import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={`p-3 ${styles.footer}`}>
      <p className="text-center fw-bolder">Copyright © Bishnu Bahadur Thapa @{new Date().getFullYear()} <br/>
      <span className="fst-italic fs-6">Note: This project was created by Bishnu Thapa; credit goes to Springboard and my mentor, Renish</span>
      </p>
    </div>
  );
};

export default Footer;
