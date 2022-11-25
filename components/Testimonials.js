import styles from "../styles/Testimonial.module.css";
import { useState } from "react";
import { useMainContext } from "../context/Main";



export default function Testimonials() {
  const {testTheme , setTestTheme, theme, cardTheme, setCardTheme} = useMainContext();
  return (
    <div className={`${styles.testimonials}  ${cardTheme}`}>
      <div className={styles.monials_head} >
        <h1>Testimonials</h1>
        <h6>MailWarm.io helped them to increase their email deliverability</h6>
      </div>
      <div className={styles.testimonials_body}>
        <div className={styles.testimonials_block_body}>
        <div className={styles.testimonials_cards}>
          <div className={styles.testimonials_txt}>
            <h3>Very promising</h3>
            <p>
              "Looks pretty promising. I have a couple of domains to be warmed
              up. Of course, the process of warming up takes quite some time, so
              we will see how it works out."
            </p>
          </div>
          <div className={styles.testimonials_flex_txt}>
            <img src="https://www.mailwarm.io/images/avatar.svg" alt="" />
            <div className={styles.testimonials_block_txt}>
                <h4>Amgalanbat B.</h4>
                <p>Marketer</p>
            </div>
          </div>
        </div>
        <div className={styles.testimonials_cards}>
          <div className={styles.testimonials_txt}>
            <h3>Love it</h3>
            <p>
              "It is a really good email warming tool for people who send cold emails. Even if you're not into cold email marketing, if your email spam score is less, this will bring it up. My emails which were earlier going in spam are now coming in inbox after a few weeks of warming."
            </p>
          </div>
          <div className={styles.testimonials_flex_txt}>
            <img src="https://www.mailwarm.io/images/avatar2.svg" alt="" />
            <div className={styles.testimonials_block_txt}>
                <h4>Aniket B.</h4>
                <p>Founder</p>
            </div>
          </div>
        </div>
        </div>
        <div className={styles.testimonials_block_body}>
        <div className={styles.testimonials_cards}>
          <div className={styles.testimonials_txt}>
            <h3>Easy domain and email reputation build.</h3>
            <p>
              "MailWarm does exactly what it claims to do. It makes your email address active and gradually increases it's sending and response rate to build trust. No fuss, No effort. Just a warmed-up email."
            </p>
          </div>
          <div className={styles.testimonials_flex_txt}>
            <img src="https://www.mailwarm.io/images/avatar3.svg" alt="" />
            <div className={styles.testimonials_block_txt}>
                <h4>Chaz B..</h4>
                <p>Founder</p>
            </div>
          </div>
        </div>
        <div className={styles.testimonials_cards}>
          <div className={styles.testimonials_txt}>
            <h3>Interesting and Legit Product.</h3>
            <p>
              "I have purchased almost 3-4 email warmer tools but this tool looks promising to me. I hope they will continue the momentum of keep building this tool to its great potential."
            </p>
          </div>
          <div className={styles.testimonials_flex_txt}>
            <img src="https://www.mailwarm.io/images/avatar4.svg" alt="" />
            <div className={styles.testimonials_block_txt}>
                <h4>Utsav C</h4>
                <p>Marketing Manager</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
