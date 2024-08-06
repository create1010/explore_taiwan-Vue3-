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
                                <i class="fa-brands fa-google-plus-g"></i>
                                Gmail登入
                            </button>
                        </div>
                        <form>
                            <div class="enter">
                                <input type="email" placeholder="請輸入電子郵件">
                                <input type="password" placeholder="密碼">
                            </div>
                            <div class="check">
                                <div class="remember">
                                    <input type="checkbox" id="rememberMe">
                                    <label for="rememberMe">記住我</label>
                                </div>
                                <div class="forget">
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

</script>