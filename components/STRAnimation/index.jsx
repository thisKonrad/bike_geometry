/*:::: STR ANIMATION :::: */
'use client'
import Image from 'next/image';
import { IoIosFastforward } from "react-icons/io";
import InfoStyle from '@/styles/InfoStyle.module.css';

export default function STRAnimation({items}) {

    function strSkip(event){
        console.log('str button click',event)
    }
    
   return (
      <div className={InfoStyle.str_animation_wrap}>
        <Image 
        src='/str_comfort.png'
        width={480}
        height={420}
        alt='reach'
        className={InfoStyle.str_animation_image}
        />
        <div>
            <button
            onClick={strSkip}
            className={InfoStyle.str_button}
            ><IoIosFastforward size={35}/></button>
        </div>
      </div>
   );
};

