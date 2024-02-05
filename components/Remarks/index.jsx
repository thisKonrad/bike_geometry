/* :::: REMARKS :::: */
'use client'
import { BiCommentAdd } from "react-icons/bi";
import styles from '../../styles/DetailCardStyle.module.css';


export default function Remarks({data, updateRemark, deleteRemark}) {

    
   return (<div className={styles.remark_wrap}>
    <form 
    onSubmit={updateRemark}
    method='post' 
    action='./api'
    >
    <label htmlFor='remark'>
        <p className={styles.remark_label}>Leave a remark:</p>
        <input
        id='remark'
        name='comment'
        type="text"
        placeholder='add a remark'
        className={styles.remark_input}
        maxLength='200'
        minLength='3'
        autocomplete='off'
        />
        </label>
      <button 
      className={styles.add_remark_button}
      type='submit'
      >
      <BiCommentAdd />
      </button>
    </form>
    {data.remarks && (
        <ul className={styles.remark_ul}>
          {data.remarks.map((remark) => {
            return (<li key={remark._id}
              className={styles.remark_list_item}
              onClick={()=> deleteRemark(remark._id)}
              >
            <p>{remark.comment}</p>
            </li>);
          })}
        </ul>
      )}  
    </div>);
};
