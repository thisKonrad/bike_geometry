/* :::: REMARKS :::: */
'use client'
import { useState } from 'react';
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function Remarks() {

  /* :::: remark list :::: */
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const deleteItem = (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
  };


    
   return (<div className={DetailCardStyle.remark_wrap}>
        <label htmlFor='remark'>
            <p className={DetailCardStyle.remark_label}>Leave a remark:</p>
        <input
        id='remark'
        name='comment'
        type="text"
        placeholder='add a remark'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addItem(e);
            }
          }}
        className={DetailCardStyle.remark_input}
        maxlength='200'
        minlength='3'
        />
        </label>
      <button 
      onClick={addItem}
      >Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} 
          onClick={() => deleteItem(index)}
          className={DetailCardStyle.remark_list_item}
          >{item}</li>
        ))}
      </ul>
    </div>);
};
