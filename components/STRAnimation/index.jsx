/*:::: STR ANIMATION :::: */
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { IoIosFastforward } from "react-icons/io";
import InfoStyle from '@/styles/InfoStyle.module.css';

export default function STRAnimation() {

    const[skipImage, setSkipImage]= useState(0);
    const[strInfoText, setStrInfoText]= useState('Comfort: > 155');

    const strImages=['/str_comfort.png', 
                    '/str_sport.png',
                    '/str_race.png'];

    function strSkip(){

        setSkipImage((skipImage +1) % strImages.length);

        console.log('str button click',skipImage)
        if(skipImage === 2){
        setStrInfoText('Comfort: > 155')
        }
        if(skipImage === 0){
        setStrInfoText('Sport: 145 - 155')
        }
        if(skipImage === 1){
        setStrInfoText('Race: < 145')
        }
    }

 
    
   return (
      <div className={InfoStyle.str_animation_wrap}>
        <Image 
        src={strImages[skipImage]}
        width={480}
        height={420}
        alt={`str range ${strImages[skipImage]}}`}
        className={InfoStyle.str_animation_image}
        />
        <div>
            <button
            onClick={strSkip}
            className={InfoStyle.str_button}
            ><IoIosFastforward size={35}/></button>
        </div>
        <p>STR Range: {strInfoText}</p>
      </div>
   );
};

