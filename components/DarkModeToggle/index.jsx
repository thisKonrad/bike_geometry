/* :::: DARK MODE TOGGLE :::: */
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi"
import {useToggleStore} from '../Zustand';


export default function DarkModeToggle(){

 const isToggled = useToggleStore(state => state.isToggled);
 const toggle = useToggleStore(state => state.toggle);

 console.log('ToggleState Button ', isToggled)

 
 return (<div>
  <button 
  className='darkmode_button'
    onClick={toggle}>
      {isToggled ? <WiMoonAltWaningCrescent4 size={25}/> : <WiDaySunny size={25}/>}
    </button>
  </div>);
};
