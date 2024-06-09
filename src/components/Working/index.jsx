import React from "react";
import styles from "./Working.module.css";
import planning from "./../assets/working_img/planning.svg";
import search from "./../assets/working_img/search.svg";
import optimization from "./../assets/working_img/optimization.svg";
import analysis from "./../assets/working_img/analysis.svg";

const Working = () => {
  return (
    <section className="container">
      <div className={styles.working_content}>
        <h3>Work Flow</h3>
        <h2>Working Process</h2>
        <p>
          Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
          suscipit non, turpis.
        </p>
      </div>

      <div className={styles.working_cards}>
        <div className={styles.working_items}>
          <img src={planning} alt="planning" />
          <div className={styles.working_content}>
            <span>Planning</span>
          </div>
          
        </div>
        <div className={styles.working_items}>
          <img src={search} alt="search" />
          <div className={styles.working_content}>
            <span>Research</span>
          </div>
          
        </div>
        <div className={styles.working_items}>
          <img src={optimization} alt="optimization" />
          <div className={styles.working_content}>
            <span>Optimizing</span>
          </div>
          
        </div>
        <div className={styles.working_items}>
          <img src={analysis} alt="analysis" />
          <div className={styles.working_content}>
            <span>Analysis</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Working;
