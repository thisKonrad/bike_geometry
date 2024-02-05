/* :::: DELETE MODAL :::: */
import Popup from 'reactjs-popup';
import { MdDeleteForever } from "react-icons/md";
import styles from '../../styles/DeleteModalStyle.module.css';
import DetailCardStyle from '../../styles/DetailCardStyle.module.css';


export default function DeleteModal({onDelete}){


return (<>
  <Popup 
    trigger= {<button 
    className={DetailCardStyle.delete_button}>
    <MdDeleteForever />
    </button>}
    modal 
    overlayStyle={{background: 'var(--modalBackground)', 
    backdropFilter:'var(--modalBackDropFilter)'}}>
      {close => (
      <div className={styles.popup_wrap}>
        <button className={styles.popup_close_button} onClick={close}>
          &times;
        </button>
        <div className={styles.popup_article}>
            <p>Are you really sure you want to delete this bike?</p>
            <p>Changes can not be undone!</p>
        </div>
        <button
            className={styles.pop_up_cancel}
            onClick={() => {
              close();
            }}
          >
            cancel
          </button>
          <button
            className={styles.popup_delete_bike}
            onClick={onDelete}
          >
            delete
          </button>
      </div>)}
    </Popup>
    </>)
}
