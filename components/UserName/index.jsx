/* :::: USER NAME :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

export default function UserName(){

    return (<div className={CalcStyle.user_name}>
        <label>
        <p className={CalcStyle.form_tag}>Client Name</p>
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