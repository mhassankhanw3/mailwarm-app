import styles from "../styles/BoxThree.module.css";

export default function BoxThree() {
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.block_text}>
          <div className={styles.txt}>
            <h3>Real human inbox.</h3>
            <p>
            MailWarm.io makes sure that your email is seen by real recipients and not some bot.
            </p>
          </div>
          <div className={styles.flex_images}>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img7.svg"
                alt="loading"
              />
              <span>Easy to understand statistics.</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img8.svg"
                alt="loading"
              />
              <span>User-friendly monitoring.</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img9.svg"
                alt="loading"
              />
              <span>Exportable reports.</span>
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
            src="https://www.mailwarm.io/images/hiw/trusted3.png"
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
}