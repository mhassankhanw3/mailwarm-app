import styles from "../styles/Cards.module.css";

export default function Cards() {
  return (
    <div className={styles.cardSection}>
      <div className={styles.mainCards}>
        <div className={styles.head}>
          <h1>Everything that you need to power your emails</h1>
        </div>
        <div className={styles.flexCards}>
          <div className={styles.card}>
            <div className={styles.textCards}>
              <img
                src="https://www.mailwarm.io/images/features-email/features1.png"
                alt="loading"
              />
              <h3>Get your emails land in inbox</h3>
              <p>
                MailWarm.io helps you to increase the chance of landing your
                emails at inbox by monitoring and warming up your emails.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.textCards}>
              <img
                src="https://www.mailwarm.io/images/features-email/features2.png"
                alt="loading"
              />
              <h3>Build up your email reputation</h3>
              <p>
              MailWarm.io will help you get your email reputation and deliverability up, maintain a better relationship with email servers.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.textCards}>
              <img
                src="https://www.mailwarm.io/images/features-email/features3.png"
                alt="loading"
              />
              <h3>Increase email deliverability</h3>
              <p>
              You can stay warm and connected. By keeping your messages out of spam folders and in the inboxes of your recipients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
