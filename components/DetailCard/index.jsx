/* :::: DETAIL CARD :::: */
import DeleteModal from '../DeleteModal';
import Remarks from '../Remarks';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import GoogleSearchFrame from '../GoogleSearchFrame';
import GoogleSearchCrank from '../GoogleSearchCrank';
import GoogleSearchWheels from '../GoogleSearchWheels';
import { MdDeleteForever } from "react-icons/md";
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


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
<section className={DetailCardStyle.detailcard}>
    <Popup 
    trigger= {<button 
    className={DetailCardStyle.delete_button}>
    <MdDeleteForever />
    </button>}
    modal 
    overlayStyle={{background: 'var(--modalBackground)', 
    backdropFilter:'var(--modalBackDropFilter)'}}>
      {close => (
      <div className={DetailCardStyle.popup_wrap}>
        <button className={DetailCardStyle.popup_close_button} onClick={close}>
          &times;
        </button>
        <div className={DetailCardStyle.popup_article}>
            <p>Are you really sure you want to delete this bike?</p>
            <p>Changes can not be undone!</p>
        </div>
        <button
            className={DetailCardStyle.pop_up_cancel}
            onClick={() => {
              close();
            }}
          >
            cancel
          </button>
          <button
            className={DetailCardStyle.popup_delete_bike}
            onClick={handleDelete}
          >
            delete
          </button>
      </div>)}
    </Popup> 
      <div className={DetailCardStyle.detailcard_content}>
        <h3 className={DetailCardStyle.title}>
            Bike Title: 
        </h3>
        <h3 className={DetailCardStyle.title}> {data.bikeTitle}</h3>
        <p className={DetailCardStyle.paragraph}>
            Bike Type: {data.bikeType}</p>
        <p className={DetailCardStyle.paragraph}>
            Date: {data.date}</p>
        <p className={DetailCardStyle.paragraph}>
            Client Name: {data.userName}</p>
        <p className={DetailCardStyle.paragraph}>
            Inside Leg: {data.insideLeg} cm</p>
        <p className={DetailCardStyle.paragraph}>
            <GoogleSearchFrame
                data={data}
            />
            Frame Size: {data.frameSize} cm
        </p>
        <p className={DetailCardStyle.paragraph}>
            Top Tube Length: {data.topTubeLength} cm</p>
        <p className={DetailCardStyle.paragraph}>
            Stack: {data.stack} cm</p>
        <p className={DetailCardStyle.paragraph}>
            Reach: {data.reach} cm</p>
        <p className={DetailCardStyle.paragraph}>
            Seattube Angle: {data.seatTubeAngle}°</p>
        <p className={DetailCardStyle.paragraph}>
            Saddle Height:{data.saddleHeight} cm</p>
        <p className={DetailCardStyle.paragraph}>
            <GoogleSearchWheels
                data={data}
            />
            Wheelsize: {data.wheelsize} inch</p>
        <p className={DetailCardStyle.paragraph}>
            <GoogleSearchCrank
            data={data}
            />
            Crank Length: {data.crankLength} cm</p>
        <p className={DetailCardStyle.paragraph}>
            STR Quotient: {data.strQuotient}</p>
    </div>
    <div 
    onMouseEnter={showTooltip}
    onMouseLeave={hideTooltip}
    className={DetailCardStyle.bike_image_wrap}>
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_left_001}>
            Saddle Height: {data.saddleHeight}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_right_001}>
            Framesize: {data.frameSize}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_center_right}>
            Reach: {data.reach}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_center_001}>
            Seattube Angle: {data.seatTubeAngle}</div>}
        <Image
            src={currentImageUrl}
            width={520} 
            height={400} 
            alt='bike image' 
            className={DetailCardStyle.image}
        />
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_right_002}>
            Wheelsize: {data.wheelsize}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_left_002}>
            Crank Length: {data.crankLength}</div>}
        {isTooltipVisible && <div className={DetailCardStyle.tooltip_center_left}>
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