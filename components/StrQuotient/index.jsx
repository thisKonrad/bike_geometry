/* :::: STRQUOTIENT :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

/**
* STRQuotienten = Info: comfort: over 1.55, sport: 1.45 till 1.55, race: under 1.45;
* Range Input between 1.3 till 1.6;
* formular: Stack/STRQuotient
*/


export default function StrQuotient({check, onCheck, strRangeValue, onRangeChange}){


    return(<div className={CalcStyle.strquotient}>
      <p className={CalcStyle.form_tag}>STR Quotient</p>
    <input
        type="radio"
        name="strQuotient"
        value="strComfort"
        checked={check === 'strComfort'}
        onChange={onCheck}
        className={CalcStyle.radio}
      />
      <label 
      htmlFor="strComfort"
      className={CalcStyle.radio_label}
      >comfort
      </label>
      <input
        type="radio"
        name="strQuotient"
        value="strSport"
        checked={check === 'strSport'}
        onChange={onCheck}
        className={CalcStyle.radio}
      />
      <label htmlFor="strSport"
        className={CalcStyle.radio_label}
      >sport
      </label>
      <input
        type="radio"
        name="strQuotient"
        value="strRace"
        checked={check === 'strRace'}
        onChange={onCheck}
        className={CalcStyle.radio}
      />
      <label htmlFor="strRace"
        className={CalcStyle.radio_label}
      >race
      </label>
    <div>
      <br></br>
     <input 
       type="range"
       name="comfortRange"
       min={check === 'strRace' ? 125 : check === 'strSport' ? 145 : 155}
       max={check === 'strRace' ? 145 : check === 'strSport' ? 155 : 175}
       step='1'
       value={strRangeValue}
       onChange={onRangeChange}
     />
     <p>str range: {strRangeValue/100}</p>
   </div>
</div>)
}