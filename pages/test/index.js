import styles from "../../styles/Resnavbar.module.css"
import { BsX } from "react-icons/bs";

export default function index() {
  return (
    <div className={styles.resnavbar}>
     <div className={styles.bg_img}>
      <div className={styles.resnavbar_mailwarm}>
        <img src="https://www.mailwarm.io/images/mailwarm_white.png" alt="" />
        <span className={styles.cross}>
        <BsX />
        </span>
      </div>
     </div>
    </div>
  )
}
