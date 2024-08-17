<template>
    <section class="section section-login">
        <div class="contianer">
            <div class="customerLogin">
                <div class="loginBar">
                    <div class="loginDiv">
                        <h2>會員登入</h2>
                        <div class="loginStyle">
                            <button>
                                <i class="fa-brands fa-facebook-f"></i>
                                Facebook登入
                            </button>
                            <button>
                                <i class="fa-brands fa-apple"></i>
                                Apple ID登入
                            </button>
                            <button>
                                <i class="fa-brands fa-x-twitter"></i>
                                Twitter登入
                            </button>
                            <button>
                                <GoogleLogin :clientId="clientID" :checkLogin="checkLogin">
                                    <i class="fa-brands fa-google-plus-g"></i>
                                    Gmail登入
                                </GoogleLogin>
                            </button>
                        </div>
                        <form @submit.prevent="checkInput">
                            <div class="enter">
                                <input v-model="user" type="email" placeholder="請輸入電子郵件" required>
                                <input v-model="password" type="password" placeholder="密碼" required>
                            </div>
                            <div class="memberOperate">
                                <RouterLink to="#" class="add">加入會員</RouterLink>
                                <RouterLink to="#" class="forget">忘記密碼</RouterLink>
                            </div>
                            <div class="logunBtn">
                                <button type="submit">登入</button>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="slogan">
                    <div class="text">
                        <span>Travel with Heart,</span>
                        <span>Discover Life's Beauty</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { useMemberStore } from '@/stores/userLogin';
import { GoogleLogin } from 'vue3-google-login'
import { ref } from 'vue';


const user = ref('')
const password = ref('')
const router = useRouter()
const userStore = useMemberStore()
//google OAuth
const clientID = '964772444387-120m7lhr7vc98i00t0jf9skcjubhe4q5.apps.googleusercontent.com';
//測試用帳號、密碼

const testname = 'John Chen'
const testuser = 'demo@gmail.com'
const testpassword = 'demo123'
const testAvater = '/img/login/userAvater.png'

//methodes
const checkInput = () => {
    if (user.value === testuser && password.value === testpassword) {
        Swal.fire({
            title: '登入成功',
            icon: 'success'
        }).then(() => {
            userStore.login(testname, testAvater);
            router.push({ name: 'Home' })   //登入成功跳轉回首頁
        });
    } else {
        Swal.fire({
            title: '帳號密碼錯誤，請重新登入',
            icon: 'error'
        })
        user.value = '';
        password.value = '';
    }

}
const checkLogin = (response) => {
    console.log("Google login response:", response);
}

</script>