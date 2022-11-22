import styles from "../styles/Providers.module.css";
import aws from "../public/images/aws.png"
import mail from "../public/images/mail.png"
import Aol from "../public/images/aol.png"
import Image from "next/image";

export default function Providers() {
  return (
    <div className={styles.providers}>
      <div className={styles.pro}>
        <div className={styles.mailProviders}>
          <h1>
            Integration with upto <span>10+</span> Mail providers
          </h1>
          <p>Multiple inbox integrations from any email provider</p>
        </div>
        <div className={styles.allAnimates}>
          <div className={styles.animates}>
            <div className={styles.animatesImg_one}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/outlookbusiness-1-OHpSeSKVC3hCo9f.png"
                alt=""
              />
            </div>
            <div className={styles.animatesImg_two}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/download-1-FYrOe9Ajk00Aidx.png"
                alt=""
              />
            </div>
            <div className={styles.animatesImg_three}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/gmx-1-1FvcljZiO7SGrL5.png"
                alt=""
              />
            </div>
            <div className={styles.animatesImg_four}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/sendinblue-1-JalcKGcITi5OF7g.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.animates_two}>
            <div className={styles.animates_two_Img_one}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/icloud-1-ULTYR8hKfeIjw42.png"
                alt=""
              />
            </div>
            <div className={styles.animates_two_Img_two}>
              <img
                src="https://d21b0h47110qhi.cloudfront.net/usman/roundcube-1-WQeXzpkospUqeND.png"
                alt=""
              />
            </div>
            <div className={styles.animates_two_Img_three}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2383 0.325928C20.5919 0.325928 23.8703 1.32041 26.6588 3.18362C29.4473 5.04682 31.6206 7.69507 32.904 10.7935C34.1874 13.8919 34.5232 17.3013 33.869 20.5905C33.2147 23.8797 31.5997 26.9011 29.2283 29.2725C26.8569 31.6439 23.8355 33.2589 20.5463 33.9131C17.2571 34.5674 13.8477 34.2316 10.7493 32.9482C7.65088 31.6648 5.00263 29.4915 3.13943 26.703C1.27622 23.9145 0.281738 20.6361 0.281738 17.2824C0.281738 12.7853 2.06822 8.47234 5.24819 5.29238C8.42815 2.11241 12.7411 0.325928 17.2383 0.325928V0.325928Z"
                  fill="#731BDF"
                ></path>
                <path
                  d="M25.0027 13.7111H25.0206L25.5858 13.0856H25.5585L25.6178 12.9914H17.7453L18.0486 14.0682H20.1955L16.5791 17.4077C15.8415 16.3319 14.1128 13.86 12.9051 12.0051H15.1462V11.2421L15.1773 11.0226H15.1462V10.9331H6.6416V12.007H9.30283C11.3677 14.1277 13.2656 16.4047 14.9795 18.8179C15.0992 20.0069 15.0878 21.2054 14.9456 22.3919C14.7138 22.7254 12.29 22.5455 11.8623 22.5803L11.8463 23.6345C12.6263 23.658 14.9663 23.6345 15.7557 23.6345C17.311 23.6345 20.0363 23.594 20.4197 23.6251L20.4678 22.6265L17.3365 22.5794C17.2483 21.3748 17.2244 20.1663 17.2649 18.9592C17.5607 18.0548 22.3659 14.314 22.8596 14.1737L23.3249 14.0691H24.7747L25.0027 13.7111ZM23.8327 21.173L25.193 21.2766L26.7793 15.4586C26.5146 15.4492 24.1078 15.2335 23.795 15.176L23.8327 21.173ZM23.5972 22.1056L23.6047 23.5271L24.2933 23.5845L25.0375 23.6364L25.2561 22.2459L24.4714 22.2101L23.5972 22.1056Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className={styles.animates_three}>
            <div className={styles.animates_three_Img_one}>
                <Image className={styles.aol} src={Aol} alt="loading"/>
            </div>
            <div className={styles.animates_three_Img_two}>
              <Image className={styles.mail} src={mail} alt="loading" />
            </div>
            <div className={styles.animates_three_Img_three}>
              <Image className={styles.awspng} src={aws} alt="loading"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
