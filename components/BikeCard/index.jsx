/* :::: BikeCard :::: */
import Link from 'next/link';
import Image from 'next/image';
import {useStore} from '../Zustand';
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';


export default function BikeCard({data}){

    const searchUser = useStore((state) => state.searchUser);
    const selectType = useStore((state) => state.selectType);
    const frameSizeSelect = useStore((state)=> state.frameSizeSelect);

    /* :: search input defines our results :: */
    const filterData = ()=> { 
        if(searchUser || selectType || frameSizeSelect){
            let filteredData = data;

            if(searchUser){
                filteredData = filteredData.filter((bike) =>
                bike.bikeTitle.toLowerCase().includes(searchUser.toLowerCase()));
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
    ><Image
    src='/ringschlüssel.png'
    width={100}
    height={100}
    alt='tool icon' 
    className={BikeCardStyle.button_icon_tool}
    /></button>
    </Link>
    <div className={BikeCardStyle.bikecard_fragment}>
        <p className={BikeCardStyle.title}>Title: {bike.bikeTitle}</p>
        <Image
            src={bike.bikeType === 'City' ? '/CITY.svg' : bike.bikeType === 'MTB' ? '/MTB.svg' :'/RACE.svg'}
            width={180} 
            height={120} 
            alt='bike image' 
            className={BikeCardStyle.image}
        />
        <p>Bike Type: {bike.bikeType}</p>
        <p>Client Name: {bike.userName}</p>
        <p>Frame Size: {bike.frameSize}</p>
    </div> 
</li>)
)} 
</ul>
</section>)
}