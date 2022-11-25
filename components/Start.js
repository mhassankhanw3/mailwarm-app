import styles from "../styles/Start.module.css"
import { useMainContext } from "../context/Main";


export default function Start() {
  const {testTheme , setTestTheme, theme, cardTheme, setCardTheme} = useMainContext();

  return (
    <div className={styles.start} >
        <div className={`${styles.start_dev} ${cardTheme}`}>
            <div className={styles.start_dev_text}>
              <div className={styles.start_dev_text_head}>
            <h2>Get started with your free 14-day test drive!</h2>
            <p>Your emails deserve to be read & responded.</p>
            </div>
            <div className={styles.start_dev_button}>
          <button className={styles.btn}>SIGN UP</button>
            </div>
            </div>
        </div>
    </div>
  )
}
