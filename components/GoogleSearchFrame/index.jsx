/* :::: GoogleSearchFrame :::: */
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import styles from '../../styles/DetailCardStyle.module.css';


export default function GoogleSearchFrame({data}){

    const[googleUrl, setGoogleUrl]=useState('');
    

    function googleBike(){
        if(data.bikeType === 'City'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=
            600789614&sxsrf=ACQVn09r5GDchzziyPlVBtBRrN1vI6IdYw:1706029046189&q=
            City+Bike+Frame+Size+${data.frameSize}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjXy5i
            6_fODAxUpR_EDHR_gBAoQ0pQJegQICxAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'MTB'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=
            600789614&sxsrf=ACQVn0-hfqeyYGBfxYXtoXCur0kT0ROJzg:
            1706029278756&q=Mountain+Bike+Frame+Size+${data.frameSize}&tbm=isch&source=
            lnms&sa=X&ved=2ahUKEwiWyYup_vODAxX2RPEDHdbIBTQQ0pQJeg
            QICxAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'Road'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=
            600789614&sxsrf=ACQVn0_p1l8gRl4L_igSc0KIDQ9T_UzJZg:1706029183121&q=
            Road+Bike+Frame+Size+${data.frameSize}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiUu77
            7_fODAxUKSvEDHS5RDB8Q0pQJegQIChAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'Trekking'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=
            600789614&sxsrf=ACQVn09uFalq715tgGx6fVvROqvXKlaGtw:1706029350961&q=
            Trekking+Bike+Frame+Size+${data.frameSize}&tbm=isch&source=lnms&sa=X&ved=
            2ahUKEwjEw8LL_vODAxWC9bsIHSSgA1kQ0pQJegQIDBAB&biw=1920&bih=966&dpr=1
            `));
        }

        console.log('CLICKED! ', googleUrl);
    }



    return( <div>
        <button
        className={styles.search_button}
        onClick={googleBike}
        >
        <FaSearch />
        </button>
</div>)
}