/* :::: DELETE MODAL :::: */
import { useState } from 'react';
import DeleteModalStyle from '../../styles/DeleteModalStyle.module.css';


export default function DeleteModal({onDelete}){

    const [closeModal, setCloseModal] = useState(false);

    function handleClose () {
        setCloseModal(!closeModal);
    };


return (<section className={ 
    closeModal ? DeleteModalStyle.modal_active : 
    DeleteModalStyle.modal_wrap}
    >
    <div className={DeleteModalStyle.modal_content}>
        <header className={DeleteModalStyle.header}>
        <div>
            <button
            className={DeleteModalStyle.close_button}
            onClick={handleClose}
            >X</button>
        </div>
        </header>
        <article  className={DeleteModalStyle.article}>
            <p>Are you really sure
            you want to delete this bike?</p>
            <p>Changes can not be undone anymore!</p>
        </article>
        <footer className={DeleteModalStyle.footer}>
        <div>
            <button
            className={DeleteModalStyle.delete_button}
            onClick={onDelete}
            >delete</button>
        </div>
        <div>
            <button
            className={DeleteModalStyle.cancel_button}
            onClick={handleClose}
            >cancel</button>
        </div>
    </footer>
    </div>
</section>)
}
