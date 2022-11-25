import styles from "../styles/Connect.module.css"
import Yahoo from "../public/images/yahoo.png"
import Aol from "../public/images/aol.png"
import Outlook from "../public/images/outlook.png"
import {AiOutlineCaretLeft, AiOutlineCaretRight} from "react-icons/ai"
import Image from "next/image"
import { useMainContext } from "../context/Main";


export default function Connect() {
  const {testTheme , setTestTheme, theme, cardTheme, setCardTheme} = useMainContext();

  return (
    <div className={`${styles.connect} ${theme}`}>
        <div className={styles.connect_head}>
            <h1>Connect your inbox in 2 seconds</h1>
            <p>Start increasing your email deliverabilty with any inbox</p>
        </div>
        <div className={styles.connect_flex}>
            <div className={`${styles.connect_arrow} ${cardTheme}`}>
                <p>
             <AiOutlineCaretLeft />
             </p>
            </div>
            <div className={styles.connect_card}>
             <div className={styles.connect_img_flex}>
                <Image className={styles.connect_img_img} src={Yahoo}/>
                <div className={styles.connect_text_block}>
                    <h4>Yahoo</h4>
                    <p>Email Provider</p>
                </div>
             </div>
                <p className={styles.connect_para}>Do you want to reach your goals? Connect Yahoo and increase the chances of success.</p>
            </div>
            <div className={styles.connect_card}>
             <div className={styles.connect_img_flex}>
                <Image className={styles.connect_img_img_two} src={Outlook}/>
                <div className={styles.connect_text_block}>
                    <h4>Outlook</h4>
                    <p>Email Provider</p>
                </div>
             </div>
                <p className={styles.connect_para}>The chance of ending up in spamboxes is low when you connect your Outlook with Mailwarm.io</p>
            </div>
            <div className={styles.connect_card}>
             <div className={styles.connect_img_flex}>
                <Image className={styles.connect_img_img_three} src={Aol}/>
                <div className={styles.connect_text_block}>
                    <h4>AOL</h4>
                    <p>Email Provider</p>
                </div>
             </div>
                <p className={styles.connect_para}>Connect your AOL with MailWarm.io to make sure that all your emails hit the inbox.</p>
            </div>
            <div className={`${styles.connect_arrow} ${cardTheme}`}>
                <p>
             <AiOutlineCaretRight />
                </p>
            </div>
        </div>
    </div>
  )
}
