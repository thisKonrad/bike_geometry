/* :::: DETAIL CARD :::: */
import DeleteModal from '../DeleteModal';
//import {useStore} from '../Zustand';
import { useState, useEffect } from 'react';
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';



export default function DetailCard({data, handleDelete}){

    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
      setToggled(!isToggled);
      console.log("state Toggle: ",isToggled)
    };

        switch (data.bikeType) {
            case 'MTB':
                console.log('MTB',data.bikeType)
                break;

            case 'Race':
                console.log('race',data.bikeType)
                break;

            case 'City':
                console.log('city',data.bikeType)
                break;

            case 'Trekking':
                console.log('trekking',data.bikeType)
                break;

            default:
                console.log('no bike type')
                break;
        }  

    

return (<section className={DetailCardStyle.detailcard}>

    <button 
    className={DetailCardStyle.delete_button}
    onClick={handleToggle}
    >delete
    </button>

    {isToggled ? <DeleteModal onDelete={handleDelete}/> : null}

    <div className={DetailCardStyle.detailcard_content}>
        <h3 className={DetailCardStyle.title}>
            Bike Title: {data.bikeTitle}</h3>
        <p className={DetailCardStyle.paragraph}>
            Bike Type: {data.bikeType}</p>
        <p className={DetailCardStyle.paragraph}>
            User Name: {data.userName}</p>
        <p className={DetailCardStyle.paragraph}>
            Inside Leg: {data.insideLeg}</p>
        <p className={DetailCardStyle.paragraph}>
            Frame Size: {data.frameSize}</p>
        <p className={DetailCardStyle.paragraph}>
            Top Tube Length: {data.topTubeLength}</p>
        <p className={DetailCardStyle.paragraph}>
            Stack: {data.stack}</p>
        <p className={DetailCardStyle.paragraph}>
            Reach: {data.reach}</p>
        <p className={DetailCardStyle.paragraph}>
            Seattube Angle: {data.seatTubeAngle}</p>
        <p className={DetailCardStyle.paragraph}>
            Saddle Height:{data.saddleHeight}</p>
        <p className={DetailCardStyle.paragraph}>
            Wheelsize: {data.wheelsize}</p>
        <p className={DetailCardStyle.paragraph}>
            Crank Length: {data.crankLength}</p>
        <p className={DetailCardStyle.paragraph}>
            STR Quotient: {data.strQuotient}</p>
        <p className={DetailCardStyle.paragraph}>
            Preferred STR Value: {data.comfortRange}</p>
    </div>
</section>)
}