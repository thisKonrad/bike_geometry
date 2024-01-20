/* :::: CollectionSearchBar :::: */
import SearchBar from '@/styles/SearchBar.module.css'
import {useStore} from '../Zustand';


export default function CollectionSearchBar({show}){

    const searchUser = useStore((state) => state.searchUser);
    const updateSearchUser = useStore((state) => state.updateSearchUser);

    const selectType = useStore((state) => state.selectType);
    const updateSelectType = useStore((state) => state.updateSelectType);

    const frameSizeSelect = useStore((state)=> state.frameSizeSelect)
    const updateFrameSizeSelect = useStore((state)=> state.updateFrameSizeSelect)

    if(!show){
        return null;
    }

    console.log('searchUser: ', searchUser)
    console.log('selectType: ', selectType)
    console.log('frameSize: ', frameSizeSelect)

    function searchByTitle(event){
        updateSearchUser(event.target.value)
        updateSelectType('')
        updateFrameSizeSelect(0)
        console.log('searchUser: ', searchUser)
        console.log('selectType: ', selectType)
        console.log('frameSize: ', frameSizeSelect)
    }
    function selectByType(event){
        updateSelectType(event.target.value)
        updateSearchUser('')
        updateFrameSizeSelect(0)
        console.log('searchUser: ', searchUser)
        console.log('selectType: ', selectType)
        console.log('frameSize: ', frameSizeSelect)
    }
    function selectByFrameSize(event){
        updateFrameSizeSelect(event.target.value)
        updateSearchUser('')
        updateSelectType('')
        console.log('searchTitle: ', searchUser)
        console.log('selectType: ', selectType)
        console.log('frameSize: ', frameSizeSelect)
    }

    function resetSearch(){
        updateFrameSizeSelect(0)
        updateSearchUser('')
        updateSelectType('')
    }

return (<section className={SearchBar.searchbar_wrap}>
    <ul>
        <li className={SearchBar.list}>
            <button className={SearchBar.search_reset}
            onClick={resetSearch}>
            reset
            </button>
        </li>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>search by user</p>
                <input
                type='text'
                placeholder='user search'
                onChange={(e)=> searchByTitle(e)} 
                value={searchUser}
                >
                </input>
                </label>
            </div>
        </li>
        <li className={SearchBar.list}>
            <div>
                <label>
                <p>select by Type</p>
                <select
                value={selectType}
                onChange={(e)=> selectByType(e)} 
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
                value={frameSizeSelect}
                onChange={(e)=>{selectByFrameSize(e)}}
                >
                </input>
                </label>
            </div>
        </li>
    </ul>
</section>)
}