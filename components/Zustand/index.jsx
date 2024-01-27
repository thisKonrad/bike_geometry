/* :::: ZUSTAND STORE :::: */
import {create} from 'zustand';
import {persist} from 'zustand/middleware';


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


export const useToggleStore = create(
    persist(
      (set) => ({
        isToggled: false,
        toggle: () => set((state) => ({ isToggled: !state.isToggled })),
      }),
      {
        name: 'toggle-storage', /* :: name of the item in the storage (must be unique)*/
       /* :: storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used */
      }
    )
);
   

export const useScreenWidth = create((set) => ({
    screenWidth: 0,
    setScreenWidth: () => set((state) => ({ screenWidth: state.screenWidth })),
}));

export const useOpen = create(
    (set) => ({
      isOpen: false,
      setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  }));