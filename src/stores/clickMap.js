import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useClickMapStore = defineStore('clickMap',()=>{
    const selectLocation = ref('');

    const setSelectLocation = (location) =>{
        selectLocation.value=location;
    }
    const clearSelectLocation=()=>{
        selectLocation.value=null
    }
    return {selectLocation,setSelectLocation,clearSelectLocation}
})