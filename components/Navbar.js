import styles from "../styles/Navbar.module.css"
import React from 'react'
import Link from "next/link"
import {FiChevronDown} from "react-icons/fi"

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.mainNav}>
        <div className={styles.img}>
            <img width={140} src="https://www.mailwarm.io/images/mailwarm_black.png" alt="mailwarn" />
        </div>
        <ul>
            <Link href="/" legacyBehavior>
            <li><a href="/">PRICING</a></li>
            </Link>
            <Link href="/" legacyBehavior>
            <li><a href="/" className={styles.resources} >RESOURCES <FiChevronDown className={styles.downarrow} /></a></li>
            </Link>
        </ul>
        <div className={styles.buttons}>
            <button className={styles.firstBtn}>LOGIN</button>
            <button className={styles.secondBtn}>GET STARTED</button>
        </div>
        </div>
    </nav>
  )
}
