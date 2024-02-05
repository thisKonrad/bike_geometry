/* :::: WHEELSIZE :::: */
import styles from '../../styles/CalcStyle.module.css';


export default function WheelSize(){


    return( <div className={styles.wheelsize}>
    <label>
        <p className={styles.form_tag}>Wheelsize:</p>
        <select 
        name='wheelsize'
        defaultValue='28'
        >
        <option 
        value='26'
        >
        26
        </option>
        <option 
        value='27'
        >
        27
        </option>
        <option 
        value='27.5'
        >
        27.5
        </option>
        <option 
        value='28'
        >
        28
        </option>
        <option 
        value='29'
        >
        29
        </option>
    </select>
    </label>
</div>)
}