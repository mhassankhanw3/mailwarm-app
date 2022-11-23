import styles from "../styles/BoxOne.module.css";

export default function BoxOne() {
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.block_text}>
          <div className={styles.txt}>
        <h3>Start integrating your mail box.</h3>
            <p>
              Integrate your mail box with 10+ service providers like, google,
              outlook, or SMTP.
            </p>
          </div>
          <div className={styles.flex_images}>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img1.svg"
                alt="loading"
              />
              <span>Ready to send emails.</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img2.svg"
                alt="loading"
              />
              <span>Auto-pilot mode Available.</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img3.svg"
                alt="loading"
              />
              <span>Schedule your emails.</span>
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
            src="https://www.mailwarm.io/images/hiw/trusted1.png"
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
}
