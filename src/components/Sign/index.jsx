import React from "react";
import styles from "./Sign.module.css";
import email from "./../assets/sign_img/email.svg";

const Sign = () => {
  return (
    <div className={styles.sign_section}>
      <div className="container">
        <div className={styles.sign_left}>
          <div className={styles.sign_img}>
            <img src={email} alt="img" />
          </div>
          <div className={styles.sign_ttl}>
            <h4>Sign Up For Newsletter</h4>
            <p>Receive 50% discount on first project</p>
          </div>
        </div>
        <div className={styles.sign_rig}>
          <form>
            <input type="text" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
