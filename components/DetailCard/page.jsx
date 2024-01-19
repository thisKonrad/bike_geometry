/* :::: DETAIL CARD :::: */
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';


export default function BikeCard({data}){


return (<section>
    <ul>
    {data && data.map((bike) => (
    <li
    key={bike._id}
    className={BikeCardStyle.bikecard}
    >
    <button className={BikeCardStyle.delete_button}>X</button>
    <div className={BikeCardStyle.bikecard_fragment}>
        <p>Bike Title: {bike.bikeTitle}</p>
        <p>Bike Type: {bike.bikeType}</p>
        <p>User Name: {bike.userName}</p>
        <p>Inside Leg: {bike.insideLeg}</p>
        <p>Frame size: {bike.frameSize}</p>
        <p>Top tube length: {bike.topTubeLength}</p>
        <p>Stack: {bike.stack}</p>
        <p>Reach: {bike.reach}</p>
        <p>Seattube angle: {bike.seatTubeangle}</p>
        <p>Saddle height:{bike.saddleHeight}</p>
        <p>Wheelsize: {bike.wheelsize}</p>
        <p>Crank length: {bike.crankLength}</p>
        <p>STR Quotient: {bike.strQuotient}</p>
        <p>Preffered STR value: {bike.comfortRange}</p>
    </div> 
</li>)
)} 
</ul>
</section>)
}