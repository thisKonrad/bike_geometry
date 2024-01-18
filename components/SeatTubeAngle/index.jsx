/* :::: SeatTubeAngle :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

export default function SeatTubeAngle({onChange, angel}) {


    return (<div className={CalcStyle.form_component}>
        <label>
            <p className='form_tag'>Seat Tube Angel:</p>
            <input
            type='range'
            name='seatTubeAngel' 
            defaultValue='90'
            min='60'
            max='90'
            step='0.5'
            onChange={onChange} 
            ></input>
        </label>
        <div>
            <p>angle: {angel}°</p>
        </div>
        </div>)
}
