/* :::: DELETE MODAL :::: */
import DeleteModalStyle from '../../styles/DeleteModalStyle.module.css';



export default function DeleteModal(){


return (<section className={DeleteModalStyle.modal_wrap}>
    <div className={DeleteModalStyle.modal_content}>
        <header className={DeleteModalStyle.header}>
        <div>
            <p>Cancel</p>
            <button
            className={DeleteModalStyle.close_button}
            onClick={handleCloseModal}
            ></button>
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
            onClick={handleDelete}
            ></button>
        </div>
    </footer>
    </div>
</section>)
}