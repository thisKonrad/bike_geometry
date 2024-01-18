/* :::: HEADER :::: */
'use client'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'


export default function Header ({currentPageTitle}) {

return (<>
    <header className={styles.header}>
    <h1>{currentPageTitle}</h1>
        <nav>
        <div>
            <Link href="/">
                <button>Home</button>
            </Link>
            </div>
            <div>
            <Link href="/info">
                <button>Information</button>
            </Link>
            </div> 
            <div>
            <Link href="/calculator_ergo">
                <button>Ergonomic Calculator</button>
            </Link>
            </div>
            <div>
            <Link href="/collection">
                <button>Collection</button>
            </Link>
            </div>
          </nav>
      </header>
      </>)
};