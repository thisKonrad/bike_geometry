/* :::: Bike Title :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';


export default function BikeTitle(){

    return (<div className={CalcStyle.bike_title}>
    <label>
      <p className={CalcStyle.form_tag}>Bike Title</p>
      <input
        name='bikeTitle'
        type='text'
        placeholder='your bike title'
        defaultValue=''
        required
      >
      </input>
    </label>
    </div>)
}