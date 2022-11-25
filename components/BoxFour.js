import styles from "../styles/BoxFour.module.css";

export default function BoxFour() {
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.block_text}>
          <div className={styles.txt}>
            <h4>Sit back and relax.</h4>
            <p>
            Seriously, it’s that simple. Warming up your email is only a single click away.
            </p>
          </div>
          <div className={styles.flex_images}>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img7.svg"
                alt="loading"
              />
              <span>Easy Filters</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img8.svg"
                alt="loading"
              />
              <span>Neat & clean dashboard</span>
            </div>
            <div className={styles.flex_img}>
              <img
                src="https://www.mailwarm.io/images/hiw/lists/img9.svg"
                alt="loading"
              />
              <span>One click to add inbox</span>
            </div>
          </div>
          <div>
            <a href="/" className={styles.start_btn}>
              START WARM-UP 
            </a>
          </div>
        </div>
        <div className={styles.box_img}>
          <img
            src="https://www.mailwarm.io/images/hiw/trusted4.png"
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
}