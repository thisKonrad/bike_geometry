/* :::: FRAME SIZE :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';


export default function FrameSize(){

  
return (<>
<div className={CalcStyle.framesize}>
<div className={CalcStyle.inside_leg}>
  <label>
      <p className={CalcStyle.form_tag}>Inside Leg:</p>
      <input 
      type='number'
      name='insideLeg'
      defaultValue='40'
      min='40'
      max='140'
      step='1'
      />
  </label>
    </div>
    <div className={CalcStyle.bike_type}>
  <label>
      <p className={CalcStyle.form_tag}>Bike Type:</p>
    <select 
    name='bikeType' 
    defaultValue=''
    >
     <option value=''>choose a bike type</option>
      <option value='MTB'>MTB</option>
      <option value='Race'>Race Bike</option>
      <option value='City'>City Bike</option>
      <option value='Trekking'>Trekking Bike</option>
    </select>
  </label>
</div>
</div>
</>)
}