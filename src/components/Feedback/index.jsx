import React from "react";
import styles from "./Feedback.module.css";
import img from "./../assets/feedback_img/img.png";
import left from "./../assets/feedback_img/left.svg";
import right from "./../assets/feedback_img/right.svg";

const Feedback = () => {
  return (
    <div className={styles.feedback_section}>
      <div className="container">
        <div className={styles.feedback_header}>
          <h4>Testimonials</h4>
          <h2>Who Love Our Work</h2>
        </div>
        <div className={styles.feedback_wrapper}>
          <div className={styles.feedback_arrows}>
            <img src={left} alt="left arrow" className={styles.feedback_arrow} />
            <div className={styles.feedback_content}>
              <div className={styles.feedback_text}>
                <p>
                  Amazing experience i love it a lot. Thanks to the team that dreams
                  come true, great! I appreciate their <br /> attitude and approach.
                </p>
              </div>
              <div className={styles.feedback_img}>
                <img src={img} alt="Client" />
                <div className={styles.feedback_author}>
                  <h4>Robert Fox</h4>
                  <p>Designer</p>
                </div>
              </div>
            </div>
            <img src={right} alt="right arrow" className={styles.feedback_arrow} />
          </div>
        </div>
        <div className={styles.feedback_dots}>
          <div className={styles.feedback_dot}></div>
          <div className={styles.feedback_dot}></div>
          <div className={styles.feedback_dot}></div>
          <div className={styles.feedback_dot}></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
