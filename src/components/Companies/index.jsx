import React from "react";
import styles from "./Companies.module.css";
import spotify from "./../assets/companies_img/spotify.svg";
import slack from "./../assets/companies_img/slack.svg";
import netflix from "./../assets/companies_img/netflix.svg";
import heroku from "./../assets/companies_img/heroku.svg";
import vimeo from "./../assets/companies_img/vimeo.svg";
import airbnb from "./../assets/companies_img/airbnb.svg";

const Companies = () => {
  return (
    <section className="container">
      <div className={styles.companies_logo}>
        <img src={spotify} alt="spotify" />
        <img src={slack} alt="slack" />
        <img src={netflix} alt="netflix" />
        <img src={heroku} alt="heroku" />
        <img src={vimeo} alt="vimeo" />
        <img src={airbnb} alt="airbnb" />
      </div>
    </section>
  );
};

export default Companies;
