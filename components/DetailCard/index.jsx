/* :::: DETAIL CARD :::: */
import DeleteModal from '../DeleteModal';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';



export default function DetailCard({data, handleDelete}){

    const [isToggled, setToggled] = useState(false);
    const[currentImageUrl, setImageUrl]= useState('');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    useEffect(() => {
        getImageUrl()
      }, []);
    

    const handleToggle = () => {
      setToggled(!isToggled);
      console.log("state Toggle: ",isToggled)
    };

    const showTooltip = () => {
        setIsTooltipVisible(true);
    };
    
    const hideTooltip = () => {
        setIsTooltipVisible(false);
    };


    console.log('BIKE-TYPE: ', data.bikeType)

    function getImageUrl(){
        if(data.bikeType === 'City'){
            setImageUrl('/CITY.svg')
        }
        if(data.bikeType === 'MTB'){
            setImageUrl('/MTB.svg')
        }
        if(data.bikeType === 'Race'){
            setImageUrl('/RACE.svg')
        }
        if(data.bikeType === 'Trekking'){
            setImageUrl('/RACE.svg')
        }
    }


return (<>
<section className={DetailCardStyle.detailcard}>
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
    <div 
    onMouseEnter={showTooltip}
    onMouseLeave={hideTooltip}
    className={DetailCardStyle.bike_image_wrap}>
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_left}>Framesize: {data.frameSize}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_right}>Saddle Height: {data.saddleHeight}</div>}
        <Image
            src={currentImageUrl}
            width={450} 
            height={400} 
            alt="bike image" 
        />
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_right}>Wheelsize: {data.wheelsize}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_left}>Crank Length: {data.crankLength}</div>}
        </div>
    </section>
</>)
}