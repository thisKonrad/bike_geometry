/* :::: Accordeon :::: */
'use client'
import {useStore} from '../Zustand';
//import styles from '@/styles/Home.module.css'
import InfoStyle from '@/styles/InfoStyle.module.css'


export default function Accordeon({items}) {
    
    const expanded = useStore((state) => state.expanded);
    const updateExpanded = useStore((state) => state.updateExpanded);
  
    const handleClick = (index) => {
      updateExpanded(index === expanded ? null : index);
    };
  
   return (
      <div>
        {items.map((item, index) => (
          <div key={index} className={InfoStyle.accordeon_body}>
            <header onClick={() => handleClick(index)}>{item.title}</header>
            <div className={InfoStyle.accordeon_content}>{index === expanded ? item.content : ''}</div>
          </div>
        ))}
      </div>
   );
};
