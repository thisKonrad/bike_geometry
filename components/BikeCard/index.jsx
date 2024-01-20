/* :::: BikeCard :::: */
import Link from 'next/link';
import {useStore} from '../Zustand';
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';


export default function BikeCard({data}){

    const searchUser = useStore((state) => state.searchUser);
    const selectType = useStore((state) => state.selectType);
    const frameSizeSelect = useStore((state)=> state.frameSizeSelect);

    function getStates() { 
        if(searchTitle){
      /*   data.filter((bike) =>
        bike.bikeTitle.toLowerCase().includes(searchTitle.toLowerCase())) */
        console.log('Bike Card title search: ', searchUser);
        }
        if(selectType){
        /* data.filter((bike) =>
        bike.bikeType.includes(selectType)) */
        console.log('Bike Card select Type: ', selectType);
        }
        if(frameSizeSelect){
      /*   data.filter((bike) =>
        bike.frameSize.includes(frameSizeSelect)) */
        console.log('Bike Card: ', frameSizeSelect);
        }
    }getStates()

    

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