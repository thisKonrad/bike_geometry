/* :::: HEADER :::: */
'use client'
import CollectionSearchBar from '../CollectionSearchBar'
import NavBar from '../NavBar'
import HeaderStyle from '../../styles/HeaderStyle.module.css';


export default function Header ({currentPageTitle}) {


return (<>
    <header className={HeaderStyle.header}>
    <h1 className={HeaderStyle.title}>{currentPageTitle}</h1>
    <div>
    <NavBar/>
    </div>
    <div>
    <CollectionSearchBar
    show={ currentPageTitle === 'Collection'}
    />
    </div>
    </header>
</>)
};

