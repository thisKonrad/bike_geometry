/* :::: GoogleSearchWheels :::: */
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function GoogleSearchWheels({data}){

    const[googleUrl, setGoogleUrl]=useState('');
    

    function googleWheels(){
        if(data.bikeType === 'City'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=601398990&sxsrf=A
            CQVn0-k4RUR17EzpP6WLOTjNIS15LxaaQ:1706188880501&q=
            City+Bike+Wheel+Size+${data.wheelsize}+inch+Rims&tbm=isch&source=lnms&sa=X&ved=2ahU
            KEwjXgZHx0PiDAxWIX_EDHbPSARAQ0pQJegQIDRAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'MTB'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=601398990&sxsrf=ACQVn0_H
            aAiSge0XeEoFNGjZI3dbwjyymw:1706188519241&q=
            MTB+Mountain+Bike+${data.wheelsize}+inch+Rims&tbm=isch&source=lnms&sa=X&ved=2
            ahUKEwjq8-7Ez_iDAxVcSPEDHY4dAd8Q0pQJegQIDBAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'Race'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=601398990&sxsrf=ACQVn0_pxQO
            kXBmFfale6PWi_FW9mDBAaA:1706188407928&q=
            Road+Race+Bike+Wheel+Size+${data.wheelsize}+inch+Rims&tbm
            =isch&source=lnms&sa=X&ved=2ahUKEwjQt-WPz_iDAxVgVfED
            HauhAYQQ0pQJegQICxAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'Trekking'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=601398990&sxsrf=ACQV
            n0-jra9ZLE4qSAqPDpOV68WiPpAqgw:1706188654205&q=
            Trekking+Tour+Bike+${data.wheelsize}+inch+Rims&tbm=isch&source=lnms&sa=X&ved=2
            ahUKEwjb_5yF0PiDAxUTQ_EDHSdmCwMQ0pQJegQIDBAB&biw=1920&bih=966&dpr=1
            `));
        }

    }



    return( <div>
        <button
        className={DetailCardStyle.search_button}
        onClick={googleWheels}
        >
        <FaSearch/>
        </button>
</div>)
}