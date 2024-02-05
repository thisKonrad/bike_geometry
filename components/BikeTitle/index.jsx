/* :::: Bike Title :::: */
import styles from '../../styles/CalcStyle.module.css';


export default function BikeTitle(){

    return (<div className={styles.bike_title}>
    <label>
      <p className={styles.form_tag}>Bike Title</p>
      <input
        name='bikeTitle'
        type='text'
        placeholder='your bike title'
        defaultValue=''
        autocomplete='off'
        required
      >
      </input>
    </label>
  </div>)
}