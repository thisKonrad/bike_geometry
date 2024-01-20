/* :::: CollectionSearchBar :::: */
import SearchBar from '@/styles/SearchBar.module.css'
import useStore from './store';


export default function CollectionSearchBar({show}){

    const searchTitle = useStore((state) => state.searchTitle);
    const updateSearchTitle = useStore((state) => state.updateSearchTitle);
    const selectType = useStore((state) => state.selectedType);
    const updateSelectType = useStore((state) => state.updateSelectType);


    if(!show){
        return null;
    }

    console.log('selectTaype:',selectType)
    console.log('SearchTitle: ', searchTitle)

return (<section className={SearchBar.searchbar_wrap}>
    <ul>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>Search by User</p>
                <input
                type='text'
                placeholder='user search'
                onChange={(e)=> updateSearchTitle(e.target.value)} 
                value={searchTitle}
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
                value={selectType}
                onChange={(e)=>updateSelectType(e.target.value)} 
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