/* :::: GoogleSearchCrank :::: */
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function GoogleSearchCrank({data}){

    const[googleUrl, setGoogleUrl]=useState('');
    

    function googleCrank(){
        if(data.bikeType === 'City'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=601398990&sxsrf=ACQVn09hNMFg2cyBZVmqdS
            7et_GRynL-zA:1706187995531&q=City+Bike+Crank+Arm+Length+${data.crankLength}cm&tbm=isch&source=
            lnms&sa=X&ved=2ahUKEwi105LLzfiDAxXBXvEDHbVhDl0Q0pQJegQIDhAB&biw=1920&bih=966&dpr=1
            `));
        }
        if(data.bikeType === 'MTB'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?q=Mountain+Bike+Crank++Arm+Length+${data.crankLength}cm
            &tbm=isch&ved=2ahUKEwjji7T1y_iDAxVq5gIHHUYCBbYQ2-cCegQIABAA&oq=
            Mountain+Bike+Crank++Arm+Length+13.2cm&gs_lcp=CgNpbWcQA1CDDFiBHWDGHmg
            AcAB4AIABsQKIAYAHkgEHMC4zLjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient
            =img&ei=G1uyZaOSEerMi-gPxoSUsAs&bih=966&biw=1920
            `));
        }
        if(data.bikeType === 'Race'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?q=
            Road+Race+Bike+Crank+Arm+Length+${data.crankLength}cm&tbm=isch&ved=2ahUKEwjw79qAzfiDAxUi5wIH
            HamyCLUQ2-cCegQIABAA&oq=Road+Race+Bike+Crank+Arm+Length+17.5cm&gs_lcp=CgNpbWcQ
            A1ChB1iUCmCsGmgAcAB4AIABzgGIAd0CkgEFMi4wLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&s
            client=img&ei=P1yyZbDUGaLOi-gPqeWiqAs&bih=966&biw=1920
            `));
        }
        if(data.bikeType === 'Trekking'){
            setGoogleUrl(window.open(`
            https://www.google.com/search?sca_esv=601398990&sxsrf=ACQVn0_Zhz5BKCNmB8dNrGx7Tfh4ljzpJQ:
            1706187922455&q=Trekking+Touring+Bike+Crank+Arm+Length+${data.crankLength}cm&tbm=isch&source=
            lnms&sa=X&ved=2ahUKEwjMkqaozfiDAxXjbfEDHTT9C-AQ0pQJegQIDBAB&biw=1920&bih=966&dpr=1
            `));
        }

        console.log('CLICKED! ', googleUrl);
    }



    return( <div>
        <button
        className={DetailCardStyle.search_button}
        onClick={googleCrank}
        >
        <FaSearch />
        </button>
</div>)
}