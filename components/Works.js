import styles from "../styles/Works.module.css"
import BoxFour from "./BoxFour"
import BoxOne from "./BoxOne"
import BoxThree from "./BoxThree"
import BoxTwo from "./BoxTwo"

export default function Works() {
  return (
    <div className={styles.mainTxt}>
        <div className={styles.txt}>
            <h1>How Mail Warm works?</h1>
            <p>Give your emails the perfect burn by using MailWarmer. It's genius because it's Anti-Spam technology.</p>
        </div>
        <div className={styles.AllBoxes}>
          <BoxOne />
          <BoxTwo />
          <BoxThree />
          <BoxFour />
        </div>
    </div>
  )
}
