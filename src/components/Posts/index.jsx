import React from "react";
import styles from "./Posts.module.css";
import left from "./../assets/posts_img/left.svg"

const Posts = () => {
  return (
    <div className="container">
      <div className={styles.posts}>
        <h2>Latest Posts</h2>
        <div className={styles.posts_section}>
          <div className={styles.posts_card1}>
        <img src={left} alt="left arrow" className={styles.posts_arrow} />
            <h5>15 Dec 2020 8 min read</h5>
            <h4>Any mechanical keyboard enthusiasts in design?</h4>
            <div className={styles.posts_img}>
                <img src="" alt="" />
                <div className={styles.posts_img}>
                    <h4>Maddox Fletcher</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
