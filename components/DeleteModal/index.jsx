/* :::: DELETE MODAL :::: */
import {useStore} from '../Zustand';
import DeleteModalStyle from '../../styles/DeleteModalStyle.module.css';


export default function DeleteModal({onToggle}){


return (<section className={DeleteModalStyle.modal_wrap}>
    {/* className={ !modalState ? 
        DeleteModalStyle.modal_active : 
        DeleteModalStyle.modal_wrap} */}

    <div className={DeleteModalStyle.modal_content}>
        <header className={DeleteModalStyle.header}>
        <div>
            <p>Cancel</p>
            <button
            className={DeleteModalStyle.close_button}
         /*    onClick={} */
            >X</button>
        </div>
        </header>
        <article>
            <p>Are you really sure</p>
            <p>You want to delete this bike?</p>
            <p>Changes can not be undone anymore!</p>
        </article>
        <footer className={DeleteModalStyle.footer}>
        <div>
            <p>Delete</p>
            <button
            className={DeleteModalStyle.delete_button}
            /* onClick={onDelete} */
            >Delete</button>
        </div>
    </footer>
    </div>
</section>)
}