import React from "react";
import styles from "./Main.module.css";
import marketing from "./../assets/main_images/marketing.png";

const Main = () => {
  return (
    <section className="container">
      <div className={styles.main}>
        <div>
          <h4>Digital Marketing</h4>
          <h1>Boosts Your Website Traffic</h1>
          <p>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.
          </p>
          <div>
            <button></button>
            <p>See our work</p>
          </div>
        </div>
        <div>
          <img src={marketing} alt="pic" />
        </div>
      </div>
    </section>
  );
};

export default Main;
