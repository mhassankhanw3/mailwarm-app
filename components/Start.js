import styles from "../styles/Start.module.css"

export default function Start() {
  return (
    <div className={styles.start}>
        <div className={styles.start_dev}>
            <div className={styles.start_dev_text}>
            <h2>Get started with your free 14-day test drive!</h2>
            <p>Your emails deserve to be read & responded.</p>
            </div>
            <div className={styles.start_dev_button}>
          <button className={styles.btn}>SIGN UP</button>
            </div>
        </div>
    </div>
  )
}
