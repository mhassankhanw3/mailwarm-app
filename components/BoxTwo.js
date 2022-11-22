import styles from "../styles/BoxTwo.module.css";

export default function BoxTwo() {
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.block_text}>
          <div className={styles.txt}>
            <h3>The natural flow.</h3>
            <p>
            No unatural patterns! Your mail gets to the recipients, opened, and marked read naturally.
            </p>
          </div>
          <div className={styles.flex_images}>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img4.svg"
                alt="loading"
              />
              <span>Write your email or get it already written.</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img5.svg"
                alt="loading"
              />
              <span>Simply send your email.</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img6.svg"
                alt="loading"
              />
              <span>Land into inbox and not spam.</span>
            </div>
          </div>
          <div>
            <p className={styles.start_btn}>
              START WARM-UP 
            </p>
          </div>
        </div>
        <div className={styles.box_img}>
          <img
            src="https://www.mailwarm.io/images/hiw/trusted2.png"
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
}
