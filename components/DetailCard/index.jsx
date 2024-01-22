/* :::: DETAIL CARD :::: */
import DeleteModal from '../DeleteModal';
import {useStore} from '../Zustand';
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function DetailCard({data, handleDelete}){

    const modalState = useStore((state) => state.modalOpen);

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

        function showModal(){
            updateModal(true)
            console.log(modalOpen)
        }
        


return (<section className={DetailCardStyle.detailcard}>
  
    <DeleteModal
        onDelete={deleteBike}
    />
    <button 
    className={DetailCardStyle.delete_button}
    onClick={showModal}
    >X
    </button>
    <div className={DetailCardStyle.detailcard_content}>
        <h3 className={DetailCardStyle.title}>
            Bike Title:{data.bikeTitle}</h3>
        <p className={DetailCardStyle.paragraph}>
            Bike Type: {data.bikeType}</p>
        <p className={DetailCardStyle.paragraph}>
            User Name: {data.userName}</p>
        <p className={DetailCardStyle.paragraph}>
            Inside Leg: {data.insideLeg}</p>
        <p className={DetailCardStyle.paragraph}>
            Frame size: {data.frameSize}</p>
        <p className={DetailCardStyle.paragraph}>
            Top tube length: {data.topTubeLength}</p>
        <p className={DetailCardStyle.paragraph}>
            Stack: {data.stack}</p>
        <p className={DetailCardStyle.paragraph}>
            Reach: {data.reach}</p>
        <p className={DetailCardStyle.paragraph}>
            Seattube angle: {data.seatTubeangle}</p>
        <p className={DetailCardStyle.paragraph}>
            Saddle height:{data.saddleHeight}</p>
        <p className={DetailCardStyle.paragraph}>
            Wheelsize: {data.wheelsize}</p>
        <p className={DetailCardStyle.paragraph}>
            Crank length: {data.crankLength}</p>
        <p className={DetailCardStyle.paragraph}>
            STR Quotient: {data.strQuotient}</p>
        <p className={DetailCardStyle.paragraph}>
            Preffered STR value: {data.comfortRange}</p>
    </div>
</section>)
}