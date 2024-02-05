/* :::: DARK MODE TOGGLE :::: */
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi"
import {useToggleStore} from '../Zustand';
import styles from '../../styles/HeaderStyle.module.css';


export default function DarkModeToggle({width}){

 const isToggled = useToggleStore(state => state.isToggled);
 const toggle = useToggleStore(state => state.toggle);


 return (<div  className={ 
  width <= 1190 ?
  styles.mobile_darkmode_wrap :
  null}>
  <button 
    className={ 
      width >= 1190 ? 
      styles.dark_mode_button :
      styles.mobile_dark_mode_button}
    onClick={toggle}>
      {isToggled ? <WiMoonAltWaningCrescent4 size={25}/> : <WiDaySunny size={25}/>}
    </button>
  </div>);
};
