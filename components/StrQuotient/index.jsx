/* :::: STR QUOTIENT :::: */
import CalcStyle from '../../styles/CalcStyle.module.css';

/**
* STRQuotienten = Info: comfort: over 1.55, 
* sport: 1.45 till 1.55, race: under 1.45;
* Range Input between 1.3 till 1.6;
* formular: Stack/STRQuotient
*/


export default function StrQuotient({check, onCheck, strRangeValue, onRangeChange}){


    return(<div className={CalcStyle.str_quotient}>
      <p className={CalcStyle.form_tag}>STR Quotient:</p>

      <label htmlFor='strComfort'
      className='radio_label'
      >comfort
        <input
        type="radio"
        name="strQuotient"
        value="strComfort"
        checked={check === 'strComfort'}
        onChange={onCheck}
      />
      <span className='radio_box'></span>
      </label>
     
      <label htmlFor='strSport'
         className='radio_label'
         >sport
       <input
        type="radio"
        name="strQuotient"
        value="strSport"
        checked={check === 'strSport'}
        onChange={onCheck}
      />
      <span className='radio_box'></span>   
      </label>
      
      <label htmlFor='strRace'
         className='radio_label'
      >race
      <input
        type="radio"
        name="strQuotient"
        value="strRace"
        checked={check === 'strRace'}
        onChange={onCheck}
      />
      <span className='radio_box'></span>
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
       className={CalcStyle.str_range}
     />
     <p>str range: {strRangeValue/100}</p>
   </div>
</div>)
}