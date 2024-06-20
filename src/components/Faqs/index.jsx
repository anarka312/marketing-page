import React from "react";
import styles from "./Faqs.module.css";
import faqs from './../assets/faqs_img/faqs.png'

const Faqs = () => {
  return (
    <div className="container">
      <div className={styles.faqs}>
        <div className={styles.faqs_content}>
          <div className={styles.faqs_header}>
            <h4>Faqs</h4>
            <h2>Frequently Asked <br/> Questions</h2>
          </div>
          <div className={styles.faqs_container}>
            <div className={styles.faqs_item}>
              <div className={styles.faqs_question}>
                <p>Sed augue ipsum, egestas nec, vestibulum et</p>
              </div>
            </div>
            <div className={styles.faqs_item}>
              <div className={styles.faqs_question}>
                <p>Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.</p>
              </div>
            </div>
            <div className={styles.faqs_item}>
              <div className={styles.faqs_question}>
                <p>Ut varius tincidunt libero.</p>
              </div>
            </div>
            <div className={styles.faqs_item}>
              <div className={styles.faqs_question}>
                <p>In ut quam vitae odio lacinia tincidunt.</p>
              </div>
            </div>
            <div className={styles.faqs_item}>
              <div className={styles.faqs_question}>
                <p>Fusce vel dui Morbi nec metus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.faqs_img}>
            <img src={faqs} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
