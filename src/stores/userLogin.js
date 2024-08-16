import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useMemberStore=defineStore('user',()=>{
    const loginStatus = ref(false);
    const username = ref('');
    const avatar = ref('');

    const login = (user,userAvatar) =>{
        loginStatus.value=true;
        username.value=user;
        avatar.value = userAvatar
    }
    const loginOut = ()=>{
        loginStatus.value = false;
        username.value = '';
        avatar.value = '';
    }
    return {loginStatus,username,avatar,login,loginOut}
})
