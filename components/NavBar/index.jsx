/* :::: NAVBAR :::: */
'use client'
import Link from 'next/link';
import HeaderStyle from '@/styles/HeaderStyle.module.css';


export default function NavBar () {


return (
    <nav className={HeaderStyle.navbar_wrap}>
        <div className={HeaderStyle.nav_link_001}>
        <Link href="/">
            <button
            >Home</button>
        </Link>
        </div>
        <div className={HeaderStyle.nav_link_002}>
        <Link href="/info">
            <button
            >Information</button>
        </Link>
        </div>
        <div className={HeaderStyle.nav_link_003}>
        <Link href="/calculator_ergo">
            <button
            >Calculator</button>
        </Link>
        </div>
        <div className={HeaderStyle.nav_link_004}>
        <Link href="/collection">
            <button
            >Collection</button>
        </Link>
        </div>
    </nav>)
};

