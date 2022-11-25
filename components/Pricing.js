import styles from "../styles/Pricing.module.css";
import { useMainContext } from "../context/Main";


export default function Pricing() {
  const {testTheme , setTestTheme, theme, cardTheme, setCardTheme} = useMainContext();

  return (
    <div className={`${styles.pricing} ${theme}`}>
      <div className={styles.pricing_head}>
        <h1>Pricing</h1>
        <p>Start increasing your email deliverabilty with any inbox</p>
      </div>
      <div className={styles.pricing_flex}>
        <div className={`${styles.pricing_block_txt} ${theme}`}>
          <h3>Flexible Pricing</h3>
          <div className={styles.pricing_flex_txt}>
            <img
              src="https://www.mailwarm.io/images/list-check.png"
              alt="loading"
            />
            <p>
              Scale your email warmup process at a pace you want and at a price
              you like.
            </p>
          </div>
          <div className={styles.pricing_flex_txt}>
            <img
              src="https://www.mailwarm.io/images/list-check.png"
              alt="loading"
            />
            <p>No codes wastage, buy as many as you need.</p>
          </div>
          <div className={styles.pricing_flex_txt}>
            <img
              src="https://www.mailwarm.io/images/list-check.png"
              alt="loading"
            />
            <p>Limits similar as all other pricings.</p>
          </div>
        </div>
        <div className={`${styles.pricing_compo} ${theme}`}>
          <div className={styles.pricing_compo_block_txt}>
            <h3>$15</h3>
            <p>per month</p>
          </div>
          <div className={styles.pricing_compo_text}>
            <div className={styles.pricing_compo_flex_img}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/group-2333-vziwob3iicgZAQG.png"
                alt=""
              />
              <p>upto 80 emails per day per inbox</p>
            </div>
            <div className={styles.pricing_compo_flex_img}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/group-2333-vziwob3iicgZAQG.png"
                alt=""
              />
              <p>1 mail box</p>
            </div>
            <div className={styles.pricing_compo_flex_img}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/group-2333-vziwob3iicgZAQG.png"
                alt=""
              />
              <p>P2P enabled</p>
            </div>
            <div className={styles.pricing_compo_flex_img}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/group-2333-vziwob3iicgZAQG.png"
                alt=""
              />
              <p>Human review</p>
            </div>
            <div className={styles.pricing_compo_flex_img}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/group-2333-vziwob3iicgZAQG.png"
                alt=""
              />
              <p>Fully automated</p>
            </div>
            <div className={styles.pricing_compo_flex_img}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/group-2333-vziwob3iicgZAQG.png"
                alt=""
              />
              <p>Premium support</p>
            </div>
          </div>
          <div className={styles.button}>
            <button className={styles.btn}>GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
}
