/* :::: ZUSTAND STORE :::: */
import {create} from 'zustand';


export const useStore = create((set) => ({

    searchUser:'',
    updateSearchUser: (value) => set({ searchUser: value }),

    selectType:'',
    updateSelectType: (value)=> set({selectType: value}),

    frameSizeSelect:0,
    updateFrameSizeSelect: (value)=> set({frameSizeSelect: value}),

    expanded: null,
    updateExpanded:(value)=> set({expanded: value}),

}));