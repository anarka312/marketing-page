import React from "react";
import styles from "./Case.module.css";
import case1 from "./../assets/case_img/case1.png";
import case2 from "./../assets/case_img/case2.png";
import case3 from "./../assets/case_img/case3.png";
import case4 from "./../assets/case_img/case4.png";
import case5 from "./../assets/case_img/case5.png";
import case6 from "./../assets/case_img/case6.png";

const Case = () => {
  return (
    <section className="container">
      <div className={styles.case_section}>
        <h3>Our Work</h3>
        <h2>Case Studies</h2>
      </div>

      <div className={styles.case_cards}>
        <div className={styles.case_item1}>
          <img src={case1} alt="img" />
          <div className={styles.case_desc}>
            <span>Marketing</span>
            <h3>General Energetic</h3>
          </div>
        </div>
        <div className={styles.case_item2}>
          <div className={styles.case_img}>
            <img src={case2} alt="img" />
          </div>
          <div className={styles.case_content}>
            <p className={styles.case_title}>Branding</p>
            <h2>Bank of Amerika</h2>
            <p>
              Quisque id odio. Nunc egestas, augue at pellentesque laoreet,
              felis eros vehicul
            </p>
          </div>
            <div className={styles.case_link}>
              Learn more
            </div>
        </div>
        <div className={styles.case_item3}>
          <img src={case3} alt="img" />
          <div className={styles.case_desc}>
            <span>Seo</span>
            <h3>Louis Vuitton</h3>
          </div>
          
        </div>
        <div className={styles.case_item4}>
          <img src={case4} alt="img" />
          <div className={styles.case_desc}>
            <span>Web</span>
            <h3>Gillete</h3>
          </div>
        </div>
        <div className={styles.case_item5}>
          <img src={case5} alt="img" />
          <div className={styles.case_desc}>
            <span>Marketing</span>
            <h3>Gillete</h3>
          </div>
        </div>
        <div className={styles.case_item6}>
          <div className={styles.case_img}>
            <img src={case6} alt="img" />
          </div>
          <div className={styles.case_content}>
            <p className={styles.case_title}>Social</p>
            <h2>Louis Vuitton</h2>
            <p>Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul</p>
          </div>
            <div className={styles.case_link}>
              Learn more
            </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
