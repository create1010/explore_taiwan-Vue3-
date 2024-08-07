import { defineStore } from 'pinia';

export const useTopScrollStore = defineStore('topScroll',()=> {
      const top=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      }
      return{top}
  });