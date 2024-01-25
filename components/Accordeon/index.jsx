/* :::: Accordeon :::: */
'use client'
//import Image from 'next/image';
import {useStore} from '../Zustand';
import InfoStyle from '@/styles/InfoStyle.module.css'


export default function Accordeon({items}) {
    
    const expanded = useStore((state) => state.expanded);
    const updateExpanded = useStore((state) => state.updateExpanded);
  
    const handleClick = (index) => {
      updateExpanded(index === expanded ? null : index);
    };
  
   return (
      <div className={InfoStyle.accordeon_wrap}>
        {items.map((item, index) => (
          <div key={index} className={InfoStyle.accordeon_body}>
            <header 
            onClick={() => handleClick(index)}
            className={InfoStyle.accordeon_header}
            >
            {index === expanded ? 
            <p className={InfoStyle.accordeon_icon}>
                &#215;
            </p> :
            <p className={InfoStyle.accordeon_icon}>
                &#43;
            </p>}
            {item.title}
            </header>
            <div className={InfoStyle.accordeon_content}>
                <article>
              {index === expanded ? 
                <div className={InfoStyle.content_wrap}>
                <p>{item.content.text}</p>
                {item.content.image}</div>: ''}
                </article>
            </div>
          </div>
        ))}
      </div>
   );
};
