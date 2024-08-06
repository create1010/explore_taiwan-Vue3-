//scroll-event
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScrollStore = defineStore('scroll', () => {
  const isTransparent = ref(false);
  const navRef = ref(null);

  const setTransparent = (value) => {
    isTransparent.value = value;
    
  };
  const setNavRef = (ref) => {
    navRef.value = ref;
  };



  return { isTransparent, setTransparent,navRef,setNavRef };
});
