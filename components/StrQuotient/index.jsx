/* :::: STRQUOTIENT :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

/**
* STRQuotienten = Info: comfort: over 1.55, sport: 1.45 till 1.55, race: under 1.45;
* Range Input between 1.3 till 1.6;
* formular: Stack/STRQuotient
*/

export default function StrQuotient({check, onCheck, strRangeValue, onRangeChange}){


    return(<div className={CalcStyle.form_component}>
        <h4>Define Str Values</h4>
    <input
        type="radio"
        name="strQuotient"
        value="strComfort"
        checked={check === 'strComfort'}
        onChange={onCheck}
      />
      <label htmlFor="strComfort">comfort</label>
      <input
        type="radio"
        name="strQuotient"
        value="strSport"
        checked={check === 'strSport'}
        onChange={onCheck}
      />
      <label htmlFor="strSport">sport</label>
      <input
        type="radio"
        name="strQuotient"
        value="strRace"
        checked={check === 'strRace'}
        onChange={onCheck}
      />
      <label htmlFor="strRace">race</label>
    <div>
    <p>str range: {strRangeValue/100}</p>
     <input
       type="range"
       name="comfortRange"
       min={check === 'strRace' ? 125 : check === 'strSport' ? 145 : 155}
       max={check === 'strRace' ? 145 : check === 'strSport' ? 155 : 175}
       step='1'
       value={strRangeValue}
       onChange={onRangeChange}
     />
   </div>
</div>)
}