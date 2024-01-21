/* :::: BikeCard :::: */
import Link from 'next/link';
import {useStore} from '../Zustand';
///import { useRouter } from 'next/router'
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';


export default function BikeCard({data}){

    const searchUser = useStore((state) => state.searchUser);
    const selectType = useStore((state) => state.selectType);
    const frameSizeSelect = useStore((state)=> state.frameSizeSelect);
    //const router = useRouter();


    const filterData = ()=> { 
        if(searchUser || selectType || frameSizeSelect){
            let filteredData = data;

            if(searchUser){
                filteredData = filteredData.filter((bike) =>
                bike.userName.toLowerCase().includes(searchUser.toLowerCase()));
            }
            if(selectType){
                filteredData = filteredData.filter((bike) =>
                bike.bikeType.includes(selectType));
            }
            if(frameSizeSelect){
                filteredData = filteredData.filter((bike) =>
                bike.frameSize === Number(frameSizeSelect));
            }
            return filteredData;
        } else {
            return data;
        }
    };

    const filteredBikes = filterData();

    console.log("Filtered Bikes: ", filteredBikes);


return (<section className={BikeCardStyle.card_wrap}>
    <ul>
    {filteredBikes.map((bike) => (
    <li
    key={bike._id}
    className={BikeCardStyle.bikecard}
    >
    <Link href={`/detailcard/${bike._id}`}
    className={BikeCardStyle.link}>
    <button className={BikeCardStyle.detail_button}
    >&#187;</button>
    </Link>
    <div className={BikeCardStyle.bikecard_fragment}>
        <p>Bike Title: {bike.bikeTitle}</p>
        <p>Bike Type: {bike.bikeType}</p>
        <p>User Name: {bike.userName}</p>
        <p>Frame Size: {bike.frameSize}</p>
    </div> 
</li>)
)} 
</ul>
</section>)
}