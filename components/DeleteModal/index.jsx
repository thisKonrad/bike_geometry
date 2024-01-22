/* :::: DELETE MODAL :::: */
import { useState, useEffect } from 'react';
import DeleteModalStyle from '../../styles/DeleteModalStyle.module.css';


export default function DeleteModal({onDelete}){

    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
        setToggled(!isToggled);
        console.log("state Toggle: ",isToggled)
    };


return (<section className={isToggled ? DeleteModalStyle.modal_active : DeleteModalStyle.modal_wrap}>
    <div className={DeleteModalStyle.modal_content}>
        <header className={DeleteModalStyle.header}>
        <div>
            <button
            className={DeleteModalStyle.close_button}
            onClick={handleToggle}
            >X</button>
        </div>
        </header>
        <article>
            <p>Are you really sure
            You want to delete this bike?</p>
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
            onClick={handleToggle}
            >cancel</button>
        </div>
    </footer>
    </div>
</section>)
}
