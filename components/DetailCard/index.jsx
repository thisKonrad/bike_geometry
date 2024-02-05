/* :::: DETAIL CARD :::: */
import DeleteModal from '../DeleteModal';
import Remarks from '../Remarks';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import GoogleSearchFrame from '../GoogleSearchFrame';
import GoogleSearchCrank from '../GoogleSearchCrank';
import GoogleSearchWheels from '../GoogleSearchWheels';
import styles from '../../styles/DetailCardStyle.module.css';


export default function DetailCard({data, handleDelete, updateRemark, deleteRemark}){

    const [isToggled, setToggled] = useState(false);
    const[currentImageUrl, setImageUrl]= useState('');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);


    /* :::: Image :::: */
    useEffect(() => {
        getImageUrl()
      }, []);
    

    function handleToggle (){
      setToggled(!isToggled);
    };  

    function showTooltip (){
        setIsTooltipVisible(true);
    };
    
    function hideTooltip() {
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
        if(data.bikeType === 'Road' || data.bikeType === 'Race'){
            setImageUrl('/RACE.svg')
        }
        if(data.bikeType === 'Trekking'){
            setImageUrl('/RACE.svg')
        }
    };


return (<>
<section className={styles.detailcard}>
    <DeleteModal onDelete={handleDelete}/>
      <div className={styles.detailcard_content}>
        <h3 className={styles.title}>
            Bike Title: 
        </h3>
        <h3 className={styles.title}> {data.bikeTitle}</h3>
        <p className={styles.paragraph}>
            Bike Type: {data.bikeType}</p>
        <p className={styles.paragraph}>
            Date: {data.date}</p>
        <p className={styles.paragraph}>
            Client Name: {data.userName}</p>
        <p className={styles.paragraph}>
            Inside Leg: {data.insideLeg} cm</p>
        <p className={styles.paragraph}>
            <GoogleSearchFrame
                data={data}
            />
            Frame Size: {data.frameSize} cm
        </p>
        <p className={styles.paragraph}>
            Top Tube Length: {data.topTubeLength} cm</p>
        <p className={styles.paragraph}>
            Stack: {data.stack} cm</p>
        <p className={styles.paragraph}>
            Reach: {data.reach} cm</p>
        <p className={styles.paragraph}>
            Seattube Angle: {data.seatTubeAngle}°</p>
        <p className={styles.paragraph}>
            Saddle Height:{data.saddleHeight} cm</p>
        <p className={styles.paragraph}>
            <GoogleSearchWheels
                data={data}
            />
            Wheelsize: {data.wheelsize} inch</p>
        <p className={styles.paragraph}>
            <GoogleSearchCrank
            data={data}
            />
            Crank Length: {data.crankLength} cm</p>
        <p className={styles.paragraph}>
            STR Quotient: {data.strQuotient}</p>
    </div>
    <div 
    onMouseEnter={showTooltip}
    onMouseLeave={hideTooltip}
    className={styles.bike_image_wrap}>
        {isTooltipVisible && <div className={styles.tooltip_left_001}>
            Saddle Height: {data.saddleHeight}</div>}
        {isTooltipVisible && <div className={styles.tooltip_right_001}>
            Framesize: {data.frameSize}</div>}
        {isTooltipVisible && <div className={styles.tooltip_center_right}>
            Reach: {data.reach}</div>}
        {isTooltipVisible && <div className={styles.tooltip_center_001}>
            Seattube Angle: {data.seatTubeAngle}</div>}
        <Image
            src={currentImageUrl}
            width={520} 
            height={400} 
            alt='bike image' 
            className={styles.image}
        />
        {isTooltipVisible && <div className={styles.tooltip_right_002}>
            Wheelsize: {data.wheelsize}</div>}
        {isTooltipVisible && <div className={styles.tooltip_left_002}>
            Crank Length: {data.crankLength}</div>}
        {isTooltipVisible && <div className={styles.tooltip_center_left}>
            Stack: {data.stack}</div>}
    </div>
    <Remarks
    data={data}
    updateRemark={updateRemark}
    deleteRemark={deleteRemark}
    />
</section>
</>)
}