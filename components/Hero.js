import styles from "../styles/Hero.module.css";
import { useMainContext } from "../context/Main";


export default function Hero() {
  const { theme, setTheme } = useMainContext();
  // const toggleMode = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  return (
    <div className={styles.heroSection}>
      <div className={`${styles.herobg} ${theme}`}>
        <div className={styles.text}>
          <h1>Warmup your emails & land in Inbox</h1>
          <p>
            Mail Warm will help ensure that your messages never end up in the
            spam folder but land in Inbox.
          </p>
          <button className={styles.btn}>GET STARTED</button>
          <div className={styles.starsImg}>
            <img
              src="https://d21b0h47110qhi.cloudfront.net/usman/group-2549-jIUHYVDTl5IZWPW.png"
              alt="stars"
            />
          </div>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.textImg}>
          <img
            src="https://d21b0h47110qhi.cloudfront.net/usman/bgshash-xGtHLlT6stzIj92.png"
            alt="cover"
          />
        </div>
        <div className={styles.newsflex}>
          <div className={styles.news}>
            <img
              src="https://d21b0h47110qhi.cloudfront.net/usman/group-2199-BoQ1A1WHyJZ7Ydf.png"
              alt="100+Advertisers"
            />
            <span>100+Advertisers</span>
          </div>
          <div className={styles.news}>
            <img
              src="https://d21b0h47110qhi.cloudfront.net/usman/group-2552-pyRc1KBaDiGLpZX.png"
              alt="100+Advertisers"
            />
            <span>100+ Millions Subscribers</span>
          </div>
          <div className={styles.news}>
            <img
              src="https://d21b0h47110qhi.cloudfront.net/usman/vector-(stroke)-eMX4WGvkSPqe4hg.png"
              alt="100+Advertisers"
            />
            <span>600+ Newsletters</span>
          </div>
        </div>
      </div>
    </div>
  );
}
