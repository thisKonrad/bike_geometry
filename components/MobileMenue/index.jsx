/* :::: MOBILE MENUE :::: */
'use client'
import Link from 'next/link';
import {useOpen} from '../Zustand';
import MobileMenueStyle from '../../styles/MobileMenueStyle.module.css'


export default function MobileMenue() {


    const isOpen = useOpen(state => state.isOpen);
    const setOpen = useOpen(state => state.setOpen);

   return (<div className={MobileMenueStyle.menue_wrap}>
        <div className={MobileMenueStyle.link}>
        <Link href="/">
            <button
            onClick={setOpen}
            >Home</button>
        </Link>
        </div>
        <div className={MobileMenueStyle.link}>
        <Link href="/info">
            <button
            onClick={setOpen}
            >Information</button>
        </Link>
        </div>
        <div className={MobileMenueStyle.link}>
        <Link href="/calculator_ergo">
            <button
            onClick={setOpen}
            >Calculator</button>
        </Link>
        </div>
        <div className={MobileMenueStyle.link}>
        <Link href="/collection">
            <button
            onClick={setOpen}
            >Collection</button>
        </Link>
        </div>
      </div>);
};