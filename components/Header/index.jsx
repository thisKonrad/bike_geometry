/* :::: HEADER :::: */
'use client'
import CollectionSearchBar from '../CollectionSearchBar'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { useLocation } from "react-router-dom";


export default function Header ({currentPageTitle}) {

    const location = useLocation();

    const navBarLinks = [
      { name: "Home", path: "/" },
      { name: "Info", path: "/info" },
      { name: "CalculatorErgo", path: "/calculator_ergo" },
      { name: "Collection", path: "/collection" },
    ];

    /* ::: show only the routes who are not linking to the current page */
    const filteredLinks = navBarLinks.filter((link) => link.path !== location.pathname);

return (<>
    <header className={styles.header}>
    <h1>{currentPageTitle}</h1>
    <div>
    <nav>
        <ul>
        {filteredLinks.map((link, index) => (
            <li key={index}>
             <Link to={link.path}>{link.name}</Link>
            </li>
        ))}
        </ul>
        </nav>
    </div>
        <div>
            <CollectionSearchBar
            show={ currentPageTitle === 'Collection'}
            />
        </div>
    </header>
</>)};


          {/*   <Link href="/">
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
          </nav> */}
 


{/* <div className="flex items-center gap-4">
<ul>
  {filteredLinks.map((link, index) => (
    <li key={index}>
      <Link to={link.path}>{link.name}</Link>
    </li>
  ))}
</ul>
</div> */}