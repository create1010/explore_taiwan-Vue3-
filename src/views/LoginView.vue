<template>
    <section class="section section-login">
        <div class="contianer">
            <div class="customerLogin">
                <div class="loginBar">
                    <div class="loginDiv">
                        <h2>會員登入</h2>
                        <div class="loginStyle">
                            <button>
                                Facebook登入
                                <i class="fa-brands fa-facebook-f"></i>
                            </button>
                            <button>
                                Apple ID登入
                                <i class="fa-brands fa-apple"></i>
                            </button>
                            <button>
                                Twitter登入
                                <i class="fa-brands fa-x-twitter"></i>
                            </button>
                            <button>
                                Gmail登入
                                <i class="fa-brands fa-google-plus-g"></i>
                            </button>
                        </div>
                        <form>
                            <div class="enter">
                                <input type="email" placeholder="請輸入電子郵件">
                                <input type="password" placeholder="密碼">
                            </div>
                            <div class="check">
                                <div class="remember">
                                    <input type="checkbox">
                                    <span>記住我</span>
                                    <RouterLink>忘記密碼</RouterLink>
                                </div>
                            </div>
                            <div class="logunBtn">
                                <RouterLink>登入</RouterLink>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="slogan">

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
