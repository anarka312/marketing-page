import React from "react";
import styles from "./Header.module.css";
import logo from "./img/logo.svg";
import dot from "./img/dot.svg";
import icon_down from "./img/icon_down.svg";
import lang from "./img/lang.svg";
import search from "./img/search.svg";

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
            <p>Pages</p>
            <img src={icon_down} alt="down" />
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
