import React from "react";
import styles from "./Footer.module.css";
import Logo from "./../assets/footer_img/Logo.svg";
import facebbook from "./../assets/footer_img/facebbook.svg";
import instagram from "./../assets/footer_img/instagram.svg";
import linkedin from "./../assets/footer_img/linkedin.svg";
import twitter from "./../assets/footer_img/twitter.svg";
import message from "./../assets/footer_img/message.svg";
import map_marker from "./../assets/footer_img/map_marker.svg";
import right from "./../assets/footer_img/right.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.footer_section}>
        <div className={styles.footer_social}>
          <img src={Logo} alt="img" />
          <p>
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </p>
          <div className={styles.footer_icons}>
            <img src={facebbook} alt="img" />
            <img src={instagram} alt="img" />
            <img src={linkedin} alt="img" />
            <img src={twitter} alt="img" />
          </div>
        </div>
        <div className={styles.footer_contacts}>
          <div className={styles.footer_email}>
            <img src={message} alt="img" />
            <p>info@example.com</p>
          </div>
          <div className={styles.footer_map}>
            <img src={map_marker} alt="img" />
            <p>655 Schaefer Dale</p>
          </div>
        </div>
        <div className={styles.footer_form}>
          <input type="text" placeholder="Email address" />
          <button type="submit">
            <img src={right} alt="img" />
          </button>
        </div>
      </div>
      <div className={styles.footer_terms}>
        <p className={styles.footer_rights}>© 2021. All rights reserved</p>
        <div className={styles.footer_terms_items}>
          <p>Help Center</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
