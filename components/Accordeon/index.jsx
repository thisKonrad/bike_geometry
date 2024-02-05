/* :::: Accordeon :::: */
'use client'
//import Image from 'next/image';
import {useStore} from '../Zustand';
import styles from '@/styles/InfoStyle.module.css'


export default function Accordeon({items}) {
    
    const expanded = useStore((state) => state.expanded);
    const updateExpanded = useStore((state) => state.updateExpanded);
  
    const handleClick = (index) => {
      updateExpanded(index === expanded ? null : index);
    };
  
   return (
      <div className={styles.accordeon_wrap}>
        {items.map((item, index) => (
          <div key={index} className={styles.accordeon_body}>
            <header 
            onClick={() => handleClick(index)}
            className={styles.accordeon_header}
            >
            {index === expanded ? 
            <p className={styles.accordeon_icon}>
                &#215;
            </p> :
            <p className={styles.accordeon_icon}>
                &#43;
            </p>}
            {item.title}
            </header>
            <div className={styles.accordeon_content}>
                <article>
              {index === expanded ? 
                <div className={styles.content_wrap}>
                <p>{item.content.text}</p>
                {item.content.image}</div>: ''}
                </article>
            </div>
          </div>
        ))}
      </div>
   );
};
