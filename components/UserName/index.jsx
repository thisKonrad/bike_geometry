/* :::: USER NAME :::: */
import styles from '../../styles/CalcStyle.module.css';


export default function UserName(){


    return (<div className={styles.user_name}>
        <label>
        <p className={styles.form_tag}>Client Name</p>
        <input
        name='userName'
        type='text'
        placeholder='client name'
        defaultValue=''
        autocomplete='off'
        required
        >
        </input>
    </label>
    </div>)
}