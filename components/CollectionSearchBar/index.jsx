/* :::: CollectionSearchBar :::: */
import SearchBar from '@/styles/SearchBar.module.css'
import {useStore} from '../Zustand';
import HeaderStyle from '../../styles/HeaderStyle.module.css';


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
    }
    function selectByType(event){
        updateSelectType(event.target.value)
        updateSearchUser('')
        updateFrameSizeSelect(0)
    }
    function selectByFrameSize(event){
        updateFrameSizeSelect(event.target.value)
        updateSearchUser('')
        updateSelectType('')
    }

    function resetSearch(){
        updateFrameSizeSelect(0)
        updateSearchUser('')
        updateSelectType('')
    }


return (<section className={HeaderStyle.searchbar_wrap}>
    <div className={HeaderStyle.list_001}>
        <button className={HeaderStyle.search_reset}
        onClick={resetSearch}>
            reset
        </button>
    </div>
    <div className={HeaderStyle.search_list_002}>
        <div>
            <label>
        search by user
            <input
            type='text'
            placeholder='user search'
            onChange={(e)=> searchByTitle(e)} 
            value={searchUser}
            >
            </input>
            </label>
        </div>
    </div>
    <div className={HeaderStyle.search_list_003}>
        <div>
            <label>
            select by Type
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
    </div>
    <div className={HeaderStyle.search_list_004}>
         <div>
            <label>
            search by frame size
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
    </div>
</section>)
}