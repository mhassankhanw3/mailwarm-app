import styles from "../styles/Resnavbar.module.css"
import { BsX } from "react-icons/bs";
import {FiExternalLink} from "react-icons/fi"

export default function index({settoggle}) {
  return (
    <div className={styles.resnavbar}>
     <div className={styles.bg_img}>
      <div className={styles.resnavbar_mailwarm}>
        <img src="https://www.mailwarm.io/images/mailwarm_white.png" alt="" />
        <span className={styles.cross}>
        <BsX onClick={() => settoggle(false)}/>
        </span>
      </div>
      <div className={styles.color}></div>

      <div className={styles.list}>
        <ul>
            <li><FiExternalLink/><a href="/">About</a></li>
            <div className={styles.color}></div>
            <li><FiExternalLink/><a href="/">Contact</a></li>
            <div className={styles.color}></div>
            <li><FiExternalLink/><a href="/">Roadmap</a></li>
            <div className={styles.color}></div>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button>Log in</button>
        <button className={styles.secondBtn}>Try for free</button>
      </div>
     </div>
    </div>
  )
}
