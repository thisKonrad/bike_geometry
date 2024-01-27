/* :::: HEADER :::: */
'use client'
import CollectionSearchBar from '../CollectionSearchBar';
import NavBar from '../NavBar';
import Logo from '../Logo';
import DarkModeToggle from '../DarkModeToggle';
import MobileMenue from '../MobileMenue/index.jsx';
import { useState, useEffect } from 'react';
import {useOpen} from '../Zustand';
import { Squeeze as Hamburger } from 'hamburger-react';
import HeaderStyle from '../../styles/HeaderStyle.module.css';


export default function Header ({currentPageTitle}) {

    const [screenWidth, setScreenWidth] = useState(0);
    //const [isOpen, setOpen] = useState(false);

    const isOpen = useOpen(state => state.isOpen);
    const setOpen = useOpen(state => state.setOpen);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
        window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);  


return (<>
 <header className={ 
        screenWidth >= 1190 ? 
        HeaderStyle.header :
        HeaderStyle.mobile_header }
    >
    <section 
        className={ 
        screenWidth >= 1190 ? 
        HeaderStyle.header_content_wrap :
        HeaderStyle.mobile_header_content_wrap }
    >
    { screenWidth >= 1190 ? <Logo/> : null}
    <div>
    <h1 className={ screenWidth >= 1190 ?
        HeaderStyle.title :
        HeaderStyle.mobile_title}
    >{currentPageTitle}</h1>
    </div>
    <div>
    { screenWidth >= 1190 ? <NavBar/> : null}
    </div>
    <div>
    <CollectionSearchBar
    show={ currentPageTitle === 'Collection'}
    />
    </div>
    <DarkModeToggle
    width={screenWidth}
    />
    { screenWidth <= 1190 ?
    <div className={HeaderStyle.mobile_burger_wrap}>
    <Hamburger 
    size={25}
    toggled={isOpen} 
    toggle={setOpen} 
    duration={0.6}
    easing='ease-in'
    />
    </div>
    : null}

    { isOpen ? <MobileMenue/> : null}
    </section>
</header>
</>)
};

