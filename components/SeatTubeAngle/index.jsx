/* :::: SeatTubeAngle :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

export default function SeatTubeAngle({onChange, angle}) {


    return (<div className={CalcStyle.seattube_angle}>
        <label>
            <p className={CalcStyle.form_tag}>Seat Tube Angel:</p>
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
        <br></br>
        <div>
            <p className={CalcStyle.angle_info}>angle: {angle}°</p>
        </div>
        </div>)
}
