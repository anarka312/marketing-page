import React from "react";
import styles from "./AboutUs.module.css";
import office from "./../assets/aboutUs_img/office.png";

const AboutUs = () => {
  return (
    <section className="container">
      <div className={styles.aboutUs}>
        <div className={styles.aboutUs_pic_office}>
          <img className={styles.aboutUs_pic} src={office} alt="office" />
        </div>
        <div className={styles.aboutUs_content}>
          <div className={styles.aboutUs_info}>
            <p>About us</p>
            <h2>Who We Are</h2>
            <p>
              In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit. In dui magna,
              posuere eget, vestibulum et, tempor auctor, justo. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
            </p>
            <p>Learn more</p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stats_block}>
              <div className={styles.stats_number}>
                <h2 className={styles.stats_num}>
                  150<sup>+</sup>
                </h2>
                <p className={styles.stats_title}>projects</p>
              </div>
              <div>
                <p className={styles.stats_ttl}>
                  Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy
                  metus.
                </p>
              </div>
            </div>
            <div className={styles.stats_block}>
              <div className={styles.stats_number}>
                <h2 className={styles.stats_num}>
                  32k<sup>+</sup>
                </h2>
                <p className={styles.stats_title}>Happy clients</p>
              </div>
              <div>
                <p className={styles.stats_ttl}>
                  Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy
                  metus.
                </p>
              </div>
            </div>
            <div className={styles.stats_block}>
              <div className={styles.stats_number}>
                <h2 className={styles.stats_num}>
                  20<sup>+</sup>
                </h2>
                <p className={styles.stats_title}>years of experience</p>
              </div>
              <div>
                <p className={styles.stats_ttl}>
                  Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy
                  metus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
