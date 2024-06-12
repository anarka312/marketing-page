import React from "react";
import styles from "./Header.module.css";
import logo from "./../assets/header_images/logo.svg";
import dot from "./../assets/header_images/dot.svg";
import icon_down from "./../assets/header_images/icon_down.svg";
import lang from "./../assets/header_images/lang.svg";
import search from "./../assets/header_images/search.svg";

const Header = () => {
  return (
    <section className="container">
      <div className={styles.header}>
        <div className={styles.header_part1}>
          <img src={logo} alt="logo" />
          <p>Home</p>
          <p>Components</p>
          <div className={styles.header_links}>
            <img style={{ margin: "4px" }} src={dot} alt="dot" />
            <p className={styles.dropdown_trigger}>Pages</p>
            <img src={icon_down} alt="down" />
            <div className={styles.dropdownMenu}>
              <a href="#page1">Page 1</a>
              <a href="#page2">Page 2</a>
              <a href="#page3">Page 3</a>
            </div>
          </div>
          <p>Documentation</p>
        </div>
        <div className={styles.header_part2}>
          <img src={lang} alt="language" />
          <img src={search} alt="search" />
          <div
            style={{
              transform: "rotate(90deg)",
              width: "24px",
              border: "1px solid #919EAB",
            }}
          ></div>
          <h4>Login</h4>
          <button className={styles.header_button}>Join us</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
