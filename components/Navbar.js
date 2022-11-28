import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Resnavbar from "../components/Resnavbar"
import { useMainContext } from "../context/Main";
import moment from "moment/moment";



export default function Navbar() {
  const [toggle, setToggle ] = useState(false);
  let darkImg = "https://www.mailwarm.io/images/mailwarm_black.png";
  let lightImg  = "https://www.mailwarm.io/images/mailwarm_white.png"
  const [themeImg, setThemeImg] = useState(darkImg);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle, "toggle");
  };

  const { theme, setTheme, cardTheme, setCardTheme, testTheme , setTestTheme, switchbtn, setSwitchbtn, heroTheme, setHeroTheme} = useMainContext();
  // const { } = useMainContext();

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setThemeImg(theme === "light" ? lightImg : darkImg)
    setCardTheme(cardTheme === 'lightCard' ? 'darkCard' : 'lightCard')
    setTestTheme(testTheme === 'lightTest' ? 'lightTest' : 'lightTest')
    setSwitchbtn(switchbtn === 'lightSwitch' ? 'darkSwitch' : 'lightSwitch')
    setHeroTheme(heroTheme === 'lightHero' ? 'darkHero' : 'lightHero')
  };
  // setDate(theme === date ? 'theme' : date)
  
  useEffect(() => {
    const time =  moment().format('A');
    if(time === 'PM'){
    setThemeImg(lightImg)
    }else{
    setThemeImg(darkImg)

    }
  }, [themeImg])
  
  return (
    <nav className={`${styles.nav} ${theme}`}>
      <div className={styles.mainNav}>
        <div className={styles.img}>
          <img
          width={140}
          src={themeImg}
          alt="loading"
        />
        </div>
        <ul className={`${styles.ul} ${theme}`}>
          <Link href="/" legacyBehavior>
            <li>
              <a href="/">PRICING</a>
            </li>
          </Link>
          <Link href="/" legacyBehavior>
            <li>
              <a href="/" className={styles.resources}>
                RESOURCES <FiChevronDown className={styles.downarrow} />
              </a>
            </li>
          </Link>
        </ul>
        <div className={styles.buttons}>
          <div onClick={toggleMode} className={`${styles.halfCircle} ${switchbtn}`}>
            <p className={styles.radius}></p >
          </div>
        {/* <button onClick={toggleMode} className={theme}>toggle</button> */}
          <button className={`${styles.firstBtn} ${theme}`}>LOGIN</button>
          <button className={styles.secondBtn}>GET STARTED</button>
          <GiHamburgerMenu className={styles.hamburger} onClick={handleToggle} />
        </div>
      {toggle ? (
        <Resnavbar toggle={toggle} settoggle={setToggle}/>
      ) : (
        ""
      )}
      </div>
    </nav>
  );
}
