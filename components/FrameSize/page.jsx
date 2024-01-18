/* :::: FRAME SIZE :::: */


export default function FrameSize(){

return (<>
<div className='form_component'>
  <label>
      <p className='form_tag'>Inside Leg Measurement:</p>
      <input 
      type='number'
      name='insideLeg'
      defaultValue='40'
      min='40'
      max='140'
      step='1'
      />
  </label>
    </div>
    <div>
  <label>
      <p className='form_tag'>Bike Type</p>
    <select 
    name='bikeType' 
    defaultValue='mtb'
    >
     <option value=''>choose a bike type</option>
      <option value='mtb'>MTB</option>
      <option value='race'>Race Bike</option>
      <option value='city'>City, Cross or Trekking Bike</option>
    </select>
  </label>
</div>
</>)
}