import React from "react";
import styles from "./Services.module.css";
import seo from "./../assets/services_img/seo.svg";
import email from "./../assets/services_img/email.svg";
import search from "./../assets/services_img/search.svg";
import media from "./../assets/services_img/media.svg";
import arrow from "./../assets/services_img/arrow.svg";

const Services = () => {
  return (
    <section className="container">
      <div className={styles.services_section}>
        <div className={styles.services_content}>
          <h4>Our Services</h4>
          <h2>We Provide</h2>
          <p>
            Nunc nonummy metus. Donec elit libero, sodales nec,
            <br /> volutpat a, suscipit non, turpis.
          </p>
        </div>
        <div className={styles.services_cards}>
          <div className={styles.services_cards_item}>
            <img src={seo} alt="seo" />
            <h2>SEO</h2>
            <p>Nunc nonummy metus. Donec elit libero</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={styles.services_cards_item}>
            <img src={email} alt="email" />
            <h2>Email Marketing</h2>
            <p>Nunc nonummy metus. Donec elit libero</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={styles.services_cards_item}>
            <img src={search} alt="searc" />
            <h2>Search Engine <br/> Oprimization</h2>
            <p>Nunc nonummy metus. Donec elit libero</p>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={styles.services_cards_item}>
            <img src={media} alt="media" />
            <h2>Social Marketing</h2>
            <p>Nunc nonummy metus. Donec elit libero</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
