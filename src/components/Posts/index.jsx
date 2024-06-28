import React from "react";
import styles from "./Posts.module.css";
import left from "./../assets/posts_img/left.svg";
import right from "./../assets/posts_img/right.svg";
import avatar from "./../assets/posts_img/avatar.png";
import avatar2 from "./../assets/posts_img/avatar2.png";
import avatar3 from "./../assets/posts_img/Avatar3.png";
// import fon from "./../assets/posts_img/fon.png"

const Posts = () => {
  return (
    <div className="container">
      <div className={styles.posts}>
        <h2>Latest Posts</h2>
        <div className={styles.posts_section}>
          <img src={left} alt="left arrow" className={styles.posts_arrow} />
          <div className={styles.posts_card1}>
            <div className={styles.posts_desс}>
              <h5>15 Dec 2020 8 min read</h5>
              <h4>Any mechanical keyboard enthusiasts in design?</h4>
            </div>
            <div className={styles.posts_img}>
              <img src={avatar2} alt="img" />
              <div className={styles.posts_img}>
                <h4>Maddox Fletcher</h4>
              </div>
            </div>
          </div>
          <div className={styles.posts_card1}>
            <h5>15 Dec 2020 8 min read</h5>
            <h4>Any mechanical keyboard enthusiasts in design?</h4>
            <div className={styles.posts_img}>
              <img src={avatar3} alt="" />
              <div className={styles.posts_img}>
                <h4>Maddox Fletcher</h4>
              </div>
            </div>
          </div>
          <div className={styles.posts_card1}>
            <h5>15 Dec 2020 8 min read</h5>
            <h4>Any mechanical keyboard enthusiasts in design?</h4>
            <div className={styles.posts_img}>
              <img src={avatar} alt="" />
              <div className={styles.posts_img}>
                <h4>Maddox Fletcher</h4>
              </div>
            </div>
          </div>
          <img src={right} alt="right arrow" className={styles.posts_arrow} />
        </div>
      </div>
    </div>
  );
};

export default Posts;
