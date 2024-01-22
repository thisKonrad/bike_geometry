/* :::: DETAIL CARD :::: */
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function DetailCard({data}){
   
console.log('data detailcard', data)
return (<section className={DetailCardStyle.detailcard}>
    <button className={DetailCardStyle.delete_button}>X</button>
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