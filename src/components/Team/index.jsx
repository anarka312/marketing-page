import React from "react";
import styles from "./Team.module.css";
import left from "./../assets/team_img/left.svg";
import right from "./../assets/team_img/right.svg";
import img1 from "./../assets/team_img/img1.png";
import img2 from "./../assets/team_img/img2.png";
import img3 from "./../assets/team_img/img3.png";

const Team = () => {
  return (
    <section className={styles.team_section}>
      {/* <div className="container"> */}
        <div className={styles.inner_section}>
          <div className={styles.team_content}>
            <h4>Team</h4>
            <h2>Meet Our Team</h2>
            <p>
              Since wire-frame renderings are relatively simple and fast to
              calculate, they are often used in cases
            </p>
            <div className={styles.team_button}>
              <img className={styles.team_btn_left} src={left} alt="Previous" />
              <img src={right} alt="Next" />
            </div>
          </div>
          <div className={styles.team_cards}>
            <div className={styles.team_items}>
              <img src={img1} alt="Eleanor Pena" />
              <h3>Eleanor Pena</h3>
              <p>UI Designer</p>
            </div>
            <div className={styles.team_items}>
              <img src={img2} alt="Ralph Edwards" />
              <h3>Ralph Edwards</h3>
              <p>Project Manager</p>
            </div>
            <div className={styles.team_items}>
              <img src={img3} alt="Marvin McKinney" />
              <h3>Marvin McKinney</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Team;
