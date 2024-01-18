/* :::: ERGONOMIC CALCULATOR :::: */
'use client'
import Header from '@/components/Header'
import BikeTitle from '@/components/BikeTitle';
import UserName from '@/components/UserName';
import FrameSize from '@/components/FrameSize';
import StrQuotient from '@/components/StrQuotient';
import SeatTubeAngle from '@/components/SeatTubeAngle';
import WheelSize from '@/components/Wheelsize';
import useSWR from "swr";
import {useState} from 'react';
import styles from '../../styles/Home.module.css';
import CalcStyle from '../../styles/CalcStyle.module.css';


/** Framesize:
* Race: inside leg x 0.66 
* MTB:  inside leg x 0.57 
* City-, Cross- or Trekking: inside leg x 0.67
*
*
Oberrohrlänge / Top Tube Length:
* measures: (body measures, vorbaulänge)
* body measures: brustbeinhöhe(sternum): from floor till sternum,
*                arm-length: straight arm from shoulder till wrist,
* info: Long person choose a longer Vorbaulänge:
* Vorbaulänge: choose a range between 6 till 20;
* formular: (rumpflänge + armlänge) * Haltung - Vorbaulänge  //O = ( R + A ) x H – V;
*
Seattube Angle:
* Choose range between 72 and 90 degree
* recommended: race 90 degree, MTB 73.5 degree, city 72.5, optimal by average 73.6, in degree Step Range 0.5!
*
Sattelhöhe:
* formular: Inside Leg * 1.09
*
Stack:
* formular: Inside Leg * 0.62
*
#
Reach:
* STRQuotienten = Info: comfort: over 1.55, sport: 1.45 till 1.55, race: under 1.45;
* Range Input between 1.3 till 1.6;
* formular: Stack/STRQuotient
*
Crank Length: (20% of inside legs)
* formular: Inside Leg / 100 * 20;
*
Wheelsize:
* Select by Range 26, 27, 27.5, 28, 29
*/ 


export default function Calculator() {

  const { mutate } = useSWR("/api/index.js");

  const[seatTubeAngelState, setSeatTubeAngelState]= useState(0);
  const[strRange,setStrRangeValue]= useState(0);
  const[strCheck, setStrChecked]=useState(0)
  const [strLimit, setStrLimit] = useState({
    min: 125,
    max: 175,
  }); 

  function handleSeatTubeRange (event) {
    setSeatTubeAngelState(event.target.value);
  };

  function handleStrRange(event){
    setStrRangeValue(event.target.value)
  }

  function handleStrRadio(event){
    setStrChecked(event.target.value)
  }
  

  async function handleSubmit (event){

     event.preventDefault();

     const formData = new FormData(event.target);
     const data = Object.fromEntries(formData);

     const response = await fetch("/api/index.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response)
      mutate();
    }


    /* :::: USER NAME :::: */
    const userName = data.userName;

    /* :::: BikeTitle :::: */
    const bikeTitle = data.bikeTitle;

     /* :::: calculate FRAMESIZE :::: */
      switch (data.bikeType) {
      case 'race':
        const raceFrameSize = Math.round(data.insideLeg * 0.66)
        console.log('FrameSize: ',raceFrameSize)
        break;
      case 'mtb':
        const mtbFrameSize = Math.round(data.insideLeg * 0.57)
        console.log('FrameSize: ',mtbFrameSize)
        break;
      case 'city':
        const cityFrameSize = Math.round(data.insideLeg * 0.67)
        console.log('FrameSize: ',cityFrameSize)
        break;
      default:
        console.log(''); 
        return null;
    } 

    /*:::: calculate TOPTUBE :::::*/
    const topTubeBase = data.insideLeg * 0.66;
    if(data.bikeType === 'race'){
        const raceTopTube = Math.round(topTubeBase - 8)
        console.log('TopTubeLength: ',raceTopTube)}
    if(data.bikeType === 'mtb'){
      const mtbTopTube = Math.round(topTubeBase - 10)
        console.log('TopTubeLength: ',mtbTopTube);
      }
    else if(data.bikeType === 'city'){
      const cityTopTube = Math.round(topTubeBase - 5)
        console.log('TopTubeLength: ',cityTopTube);
    };

    /* :::: calculate SADDLE HEIGHT :::: */
    const saddleHeight = Math.floor(data.insideLeg * 1.09);
  
    /* :::: calculate STACK :::: */
    const stack = data.insideLeg * 0.62;
    const stackResult = Math.ceil(stack);
      
    /* :::: calculate REACH :::: */
    switch (data.strQuotient) {
      case 'strComfort':
        setStrLimit({min: 155, max: 175})
        const comfortReach = Math.round(stackResult) / (strRange / 100);
        const comfortReachResult = Math.ceil(comfortReach);
        console.log('Reach: ', comfortReachResult)
        break;
      case 'strSport':
        setStrLimit({min: 145, max: 155})
        const sportReach = Math.round(stackResult) / (strRange / 100);
        const sportReachResult = Math.ceil(sportReach);
        console.log('Reach: ',sportReachResult)
        break;
      case 'strRace':
        setStrLimit({min: 125, max: 145})
        const raceReach = Math.round(stackResult) / (strRange / 100);
        const raceReachResult = Math.ceil(raceReach);
        console.log('Reach: ', raceReachResult)
        break;
      default:
        console.log('No Str Selected'); 
    }

    /* :::: calculate CRANK :::: */
    const crank = (data.insideLeg / 100) *20;
    const crankLength = crank.toFixed(2)*1;

    /* :::: WHEELSIZE :::: */
    const wheelsizeValue = data.wheelsize * 1;

    /* :::: SEATTUBEANGLE :::: */
    const seatTubeAngle = seatTubeAngelState *1;

    /* :::: Control Values :::: */
    const insideLegLength = data.insideLeg;
    const strRangeSelect = strRange*1;


      console.log('BikeTitle: ', bikeTitle)
      console.log('UserName: ', userName)
      console.log('SaddleHeight: ', saddleHeight)
      console.log('Stack: ', stackResult)
      console.log('CrankLength: ', crankLength)
      console.log('Wheelsize: ', wheelsizeValue)
      console.log("SeatTubeAngleFromState: ", seatTubeAngle)
      console.log("STR RANGE :", strRangeSelect)
      console.log('insideLeg: ', insideLegLength)
  };
 

  return (<>
  <Header
    currentPageTitle={'Ergonomic Calculator'}>
    </Header>
    <main className={styles.main}>
      <section className={CalcStyle.frame_size_wrap}>
      <section >
      <h1>Calculate your Bike !</h1>
      <article>
        <p>you just need your </p>
        <p>inside Leg measurement</p>
      </article>
    </section>
     <form 
     onSubmit={handleSubmit} 
     method='post' 
     action='./api/geometry/index.js'>
      <BikeTitle/>
      <UserName/>
      <FrameSize/>
      <StrQuotient
      onCheck={handleStrRadio}
      check={strCheck}
      strRangeValue={strRange}
      onRangeChange={handleStrRange}
      />
      <SeatTubeAngle
      onChange={handleSeatTubeRange}
      angel={seatTubeAngelState}
      />
      <WheelSize/>
       <button type='submit'>Calculate</button>
     </form>
     <section>
    <div>
    </div>
  </section>  
  </section>
  </main>
  </>);
}
