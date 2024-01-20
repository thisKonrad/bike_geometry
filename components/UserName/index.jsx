/* :::: USER NAME :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

export default function UserName(){

    return (<div className={CalcStyle.user_name}>
        <label>
        <p className={CalcStyle.form_tag}>User Name</p>
        <input
        name='userName'
        type='text'
        placeholder='user name'
        defaultValue=''
        required
        >
        </input>
    </label>
    </div>)
}