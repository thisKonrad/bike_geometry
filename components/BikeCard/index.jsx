/* :::: BikeCard :::: */
import Link from 'next/link';
import {useStore} from '../Zustand';
import BikeCardStyle from '../../styles/BikeCardStyle.module.css';


export default function BikeCard({data}){

    const searchUser = useStore((state) => state.searchUser);
    const selectType = useStore((state) => state.selectType);
    const frameSizeSelect = useStore((state)=> state.frameSizeSelect);

/*     const filterData = ()=> { 
        if(searchUser){
        data.filter((bike) =>
        bike.bikeTitle.toLowerCase().includes(searchUser.toLowerCase())) 
       return searchUser;
        console.log('Bike Card title search: ', searchUser); 
        }
        if(selectType){
        data.filter((bike) =>
        bike.bikeType.includes(selectType)) 
        return selectType;
        console.log('Bike Card select Type: ', selectType); 
        }
        if(frameSizeSelect){
        data.filter((bike) =>
        bike.frameSize === frameSizeSelect) 
        return frameSizeSelect;
        console.log('Bike Card: ', frameSizeSelect); 
        }
    };
    console.log("Filter Data: ", filterData()); */

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
                bike.frameSize === frameSizeSelect);
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
    <Link href={`./details/[slug].js`}>
    <button className={BikeCardStyle.detail_button}>&#187;</button>
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