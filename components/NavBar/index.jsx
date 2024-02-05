/* :::: NAVBAR :::: */
'use client'
import Link from 'next/link';
import styles from '@/styles/NavBarStyle.module.css';


export default function NavBar () {


return (
    <nav className={styles.navbar_wrap}>
    <div className={styles.nav_links_wrap}>
        <div className={styles.nav_link}>
        <Link href="/">
            <button
            >Home</button>
        </Link>
        </div>
        <div className={styles.nav_link}>
        <Link href="/info">
            <button
            >Information</button>
        </Link>
        </div>
        <div className={styles.nav_link}>
        <Link href="/calculator_ergo">
            <button
            >Calculator</button>
        </Link>
        </div>
        <div className={styles.nav_link}>
        <Link href="/collection">
            <button
            >Collection</button>
        </Link>
        </div>
      </div>   
    </nav>)
};