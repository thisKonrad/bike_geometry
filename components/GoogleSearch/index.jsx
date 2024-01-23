/* :::: GoogleSearch :::: */
import Link from "next/link";
import { useState } from "react";


export default function GoogleSearch({data}){

    const[googleUrl, setGoogleUrl]=useState('');
    

    function googleBike(){
        if(data.bikeType === 'City'){
            setGoogleUrl(document.location.href=`https://www.google.com/search?q=
            City+Bike+frame+size+62&tbm=isch&ved=2ahUKEwjd9
            _Lu6PODAxVhwgIHHWWbBwYQ2cCegQIABAA&oq=City+Bike+frame+size+${data.frameSize}&gs
            _lcp=CgNpbWcQA1DrCViUEmD3KGgAcAB4AIABtQGIAeIDkgEDMy4ymAEAoAEBqgELZ3
            dzLXdpei1pbWfAAQE&sclient=img&ei=X9qvZZ3MIuGEi-gP5baeMA&bih=966&biw=1920`);
        }
        if(data.bikeType === 'MTB'){
            setGoogleUrl(document.location.href=``);
        }
        if(data.bikeType === 'Race'){
            setGoogleUrl(document.location.href=`https://www.google.com/search?
            sca_esv=600762144&sxsrf=ACQVn0-Mc9CdLJcem17UsdwLTNwKhr4Ofg:
            1706023448842&q=Road+Bike+frame+size+${data.frameSize}&tbm=
            isch&source=lnms&sa=X&ved=2ahUKEwj34pXN6PODAxXdSvEDHVhOBOMQ
            0pQJegQIDhAB&biw=1920&bih=966&dpr=1`);
        }
        if(data.bikeType === 'Trekking'){
            setGoogleUrl(document.location.href=`https://www.google.com/search?q=
            Trekking+Bike+frame+size+62&tbm=isch&ved=2ahUKEwjUmMCB6fODAxUMxwIHHZutBnEQ2
            -cCegQIABAA&oq=Trekking+Bike+frame+size+${data.frameSize}&gs
            _lcp=CgNpbWcQA1DkEljbH2DPKmgAcAB4AYAB3wKIAZgMkgEHMi40LjIu
            MZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=
            htqvZdS9I4yOi-gPm9uaiAc&bih=966&biw=1920
            `);
        }

        console.log('CLICKED! ', googleUrl);
    }



    return( <div>
        <button
        onClick={googleBike}
        >
        find with google
        </button>
</div>)
}