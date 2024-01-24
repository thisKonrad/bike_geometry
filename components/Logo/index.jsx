/* :::: LOGO :::: */
import Image from 'next/image';
import { useToggleStore } from '../Zustand/index.jsx';
import LogoStyle from '../../styles/LogoStyle.module.css';

export default function Logo(){

    const isToggled = useToggleStore(state => state.isToggled);

   

    return (<div className={LogoStyle.icon_wrap}>
        <Image
        src={ isToggled ? '/chainring_white.png' : '/chainring.png'}
        alt='logo icon'
        width={96}
        height={96}
        className={LogoStyle.icon}
        />
    </div>)
};
