import React from "react";
import styles from "./Main.module.css";
import marketing from "./../assets/main_images/marketing.png";

const Main = () => {
  return (
    <section className="container">
      <div className={styles.main}>
        <div className={styles.main_content}>
          <h4 className={styles.main_text}>Digital Marketing</h4>
          <h1 className={styles.main_title}>Boosts Your Website Traffic</h1>
          <p className={styles.main_desc}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.
          </p>
          <div className={styles.main_button}>
            <button className={styles.main_btn}>Try for free</button>
            <p className={styles.main_play}>See our work</p>
          </div>
        </div>
        <div>
          <img className={styles.main_pic} src={marketing} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Main;
