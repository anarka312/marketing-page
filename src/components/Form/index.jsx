import React from "react";
import styles from "./Form.module.css";
import bg from "./../assets/form_img/bg.png";
import email from "./../assets/form_img/email.svg";
import pin from "./../assets/form_img/pin.svg";

const Form = () => {
  return (
    <div className={styles.form_container}>
      {/* <img src={bg} alt="pic" /> */}
      <div className="container">
        <div className={styles.form_content}>
          <div className={styles.form_desc}>
            <h1>Get Free SEO Analysis</h1>
            <p>Hello@agency.com</p>
            <p>508 Bridle Avenue Newnan, GA 30263</p>
          </div>
          <div className={styles.form_input}>
           <form>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="phone" placeholder="phone" />
            <input type="text" placeholder="Website URL" />
            <button type="submit">Send Request</button>
           </form>
                    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
