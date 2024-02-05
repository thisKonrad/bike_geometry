/* :::: SeatTubeAngle :::: */
import styles from '../../styles/CalcStyle.module.css';

export default function SeatTubeAngle({onChange, angle}) {


    return (<div className={styles.seat_tubeangle}>
        <label>
            <p className={styles.form_tag}>Seat Tube Angle:</p>
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
            <p>angle: {angle}°</p>
        </div>
        </div>)
}
