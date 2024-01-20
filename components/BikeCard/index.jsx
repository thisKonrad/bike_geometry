/* :::: BikeCard :::: */
import Link from 'next/link';
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';


export default function BikeCard({data}){


return (<section className={BikeCardStyle.card_wrap}>
    <ul>
    {data && data.map((bike) => (
    <li
    key={bike._id}
    className={BikeCardStyle.bikecard}
    >
    <Link href={`./details/[slug].js`}>
    <button className={BikeCardStyle.detail_button}>&#187;</button>
    </Link>
    <div className={BikeCardStyle.bikecard_fragment}>
        <p>Bike Title: {bike.bikeTitle}</p>
        <p>Bike Type: {bike.bikeType}</p>
        <p>User Name: {bike.userName}</p>
    </div> 
</li>)
)} 
</ul>
</section>)
}