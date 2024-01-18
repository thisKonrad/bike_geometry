/* :::: Body Position :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

/*Oberrohrlänge / Top Tube Length:
* measures: (body measures, vorbaulänge)
* body measures: brustbeinhöhe(sternum): from floor till sternum,
*                arm-length: straight arm from shoulder till wrist,
* info: Long person choose a longer Vorbaulänge:
* Vorbaulänge: choose a range between 6 till 20;
* formular: (rumpflänge + armlänge) * Haltung - Vorbaulänge  //O = ( R + A ) x H – V;
*/

export default function BodyPosition(){

  return (<div className={CalcStyle.form_component}>
    <label>
      body position:
      <select 
      name="bikePosition" 
      defaultValue='0.53'
      >
       <option value=''>first choose a body position</option>
        <option value='0.52'>tour position</option>
        <option value='0.53'>sport position</option>
        <option value='0.54'>race position</option>
      </select>
    </label>
  </div>
)
}