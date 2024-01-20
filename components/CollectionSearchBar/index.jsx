/* :::: CollectionSearchBar :::: */
import SearchBar from '@/styles/SearchBar.module.css'


export default function CollectionSearchBar({show}){

    if(!show){
        return null;
    }

return (<section className={SearchBar.searchbar_wrap}>
    <ul>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>Search by User</p>
                <input
                type='text'
                placeholder='user search'
                >
                </input>
                </label>
            </div>
        </li>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>Search by Date</p>
                <input
                type='text'
                placeholder='date search'
                >
                </input>
                </label>
            </div>
        </li>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>Search by Type</p>
                <input
                type='text'
                placeholder='type search'
                >
                </input>
                </label>
            </div>
        </li>
    </ul>
</section>)
}