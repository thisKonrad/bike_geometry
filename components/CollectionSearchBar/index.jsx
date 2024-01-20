/* :::: CollectionSearchBar :::: */
import SearchBar from '@/styles/SearchBar.module.css'


export default function CollectionSearchBar({show, onHandleChange, onHandleSelect}){

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
                onChange={(e)=>onHandleChange(e)} 
                value={input.titleSearch}
                >
                </input>
                </label>
            </div>
        </li>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>Search by Type</p>
                <select
                defaultValue=''
                onChange={(e)=> onHandleChange(e)} 
                onInput={(e)=> onHandleSelect(e)}
                >
                    <option value=''>search by type</option>
                    <option value='City'>City</option>
                    <option value='Trekking'>Trekking</option>
                    <option value='MTB'>MTB</option>
                    <option value='Race'>Race</option>
                </select>
                </label>
            </div>
        </li>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>Search by Frame Size</p>
                <input
                type='number'
                placeholder='frame size search'
                min='25'
                max='70'
                >
                </input>
                </label>
            </div>
        </li>
    </ul>
</section>)
}