import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_black}>
        <div className={styles.footer_section}>
          <div className={styles.footer_section_one}>
            <img
              src="https://www.mailwarm.io/images/mailwarm_white.png"
              alt="loading"
            />
            <p>Warm up your mailbox and say goodbye to landing in spam.</p>
            <div className={styles.footer_section_icons}>
              <div className={styles.footer_section_icons_one}>
                <FaFacebookF className={styles.footer_section_icon_color} />
              </div>
              <div className={styles.footer_section_icons_one}>
                <FaLinkedin className={styles.footer_section_icon_color} />
              </div>
            </div>
          </div>
          <div className={styles.footer_section_two}>
            
            <ul>
            <h3>MailWarm.io</h3>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Register</a>
              </li>
              <li>
                <a href="/">Sign in</a>
              </li>
              <li>
                <a href="/">Roadmap</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer_section_two}>
            
            <ul>
            <h3>Privacy & Terms</h3>
              <li>
                <a href="/">Terms and Condition</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
          <div className={styles.footer_section_border}>
            <div className={styles.footer_section_border_color}></div>
            <p>All rights reserved . mailwarm.io . 2022</p>
          </div>
      </div>
    </div>
  );
}
