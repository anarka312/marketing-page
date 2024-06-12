import React from "react";
import styles from "./Pricing.module.css";
import turn from "./../assets/pricing_img/turn.svg";
import icon1 from "./../assets/pricing_img/icon1.svg"
import icon2 from "./../assets/pricing_img/icon2.svg"
import icon3 from "./../assets/pricing_img/icon3.svg"

const Pricing = () => {
  return (
    <div className="container">
      <div className={styles.pricing_section}>
        <div className={styles.pricing_left}>
          <h4>Pricing</h4>
          <h2>Check Our Pricing</h2>
          <p>Choose the perfect plan for your needs. Always flexible to grow</p>
        </div>
        <div className={styles.pricing_right}>
          <span>Monthly</span>
          <img src={turn} alt="icon" />
          <span>Yearly (save 10%)</span>
        </div>
      </div>

      <div className={styles.pricing_section2}>
        <div className={styles.pricing_card1}>
            <h3>Basic</h3>
            <img src={icon1} alt="icon" />
            <span>29$/mo</span>
            <p>Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien</p>
            <ul>
                <li>Auto update mode</li>
                <li>Online operator 24/7</li>
                <li>International posting</li>
            </ul>
            <button>Get started</button>
        </div>
        <div className={styles.pricing_card2}>
            <h3>Standard</h3>
            <img src={icon2} alt="icon" />
            <span>59$/mo</span>
            <p>Maecenas nec odio et ante tincidunt tempus.</p>
            <ul>
                <li>Auto update mode</li>
                <li>Online operator 24/7</li>
                <li>International posting</li>
                <li>Unique newsletters</li>
            </ul>
            <button>Get started</button>
        </div>
        <div className={styles.pricing_card3}>
            <h3>Prenium</h3>
            <img src={icon3} alt="icon" />
            <span>99$/mo</span>
            <p>Sed lectus. Sed consequat, leo eget bibendum sodales</p>
            <ul>
                <li>Auto update mode</li>
                <li>Online operator 24/7</li>
                <li>International posting</li>
                <li>Unique newsletters</li>
                <li>20 Design templates</li>
            </ul>
            <button>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
