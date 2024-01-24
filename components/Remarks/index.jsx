/* :::: REMARKS :::: */
'use client'
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function Remarks({data, updateRemark, deleteRemarks}) {

    console.log('Remarks-DATA:', data);

    
   return (<div className={DetailCardStyle.remark_wrap}>
    <form 
    onSubmit={updateRemark}
    method='post' 
    action='./api'
    >
    <label htmlFor='remark'>
        <p className={DetailCardStyle.remark_label}>Leave a remark:</p>
        <input
        id='remark'
        name='comment'
        type="text"
        placeholder='add a remark'
        className={DetailCardStyle.remark_input}
        maxlength='200'
        minlength='3'
        />
        </label>
      <button 
      type='submit'
      >Add</button>
    </form>
    {data.remarks && (
        <ul className={DetailCardStyle.remark_ul}>
          {data.remarks.map(({comment }, _id) => {
            return (<li key={_id}
              className={DetailCardStyle.remark_list_item}
              >
            <p>{comment}</p>
            <button
            className={DetailCardStyle.remark_delete_list_item}
            onClick={deleteRemarks}
            >X</button>
            </li>);
          })}
        </ul>
      )}  
    </div>);
};
