/* :::: FRAME SIZE :::: */
import styles from '../../styles/CalcStyle.module.css';


export default function FrameSize(){

  
return (<>
<div className={styles.inside_leg}>
  <label>
      <p className={styles.form_tag}>Inside Leg:</p>
      <input 
      type='number'
      name='insideLeg'
      defaultValue='40'
      min='40'
      max='140'
      step='1'
      required
      />
  </label>
  </div>
  <div className={styles.bike_type}>
  <label>
      <p className={styles.form_tag}>Bike Type</p>
    <select 
    name='bikeType' 
    defaultValue=''
    required
    >
     <option value=''>choose a bike type</option>
      <option value='MTB'>MTB</option>
      <option value='Road'>Road Bike</option>
      <option value='City'>City Bike</option>
      <option value='Trekking'>Trekking Bike</option>
    </select>
  </label>
</div>
</>)
}