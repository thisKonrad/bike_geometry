/* :::: USER NAME :::: */


export default function UserName(){

    return (<div className='form_component'>
        <label>
        <p className='form_tag'>User Name</p>
        <input
        name='userName'
        type='text'
        placeholder='user name'
        defaultValue=''
        required
        >
        </input>
    </label>
    </div>
  )
}