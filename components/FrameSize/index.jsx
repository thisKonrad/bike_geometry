/* :::: FRAME SIZE :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';


export default function FrameSize(){

return (<>
<div className={CalcStyle.form_component}>
  <label>
      <p className={CalcStyle.form_tag}>Inside Leg Measurement:</p>
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
    <div>
  <label>
      <p className='form_tag'>Bike Type</p>
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
</>)
}