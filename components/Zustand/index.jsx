/* :::: ZUSTAND STORE :::: */
import create from 'zustand';

const useStore = create((set) => ({
 searchTtle:'',
 updateSearchTitle: (value) => set({ searchTitle: value }),
 selectType:'',
 updateSelectType: (value)=> set({selectType: value}),
}));