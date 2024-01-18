/* :::: Bike Title :::: */


export default function BikeTitle(){

    return (<div className='form_component'>
      <label>
      <p className='form_tag'>Bike Title</p>
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