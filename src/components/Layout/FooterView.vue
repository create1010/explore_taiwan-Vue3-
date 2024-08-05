<template>
    <footer>
        <div class="container">
            <div class="footerWrap">
                <div class="lastPage">
                    <h3>目的地</h3>
                    <ul v-for="(area, index) in location" :key="index" class="place">
                        <RouterLink to="#">
                            <li>{{ area }}</li>
                        </RouterLink>
                    </ul>
                    <span class="webName">Explore Taiwan</span>
                </div>
                <div class="material">
                    <div class="on">
                        <h3>聯絡我們</h3>
                        <span>+02(886) 1234 5678</span>
                    </div>
                    <div class="under">
                        <h3>電子郵件</h3>
                        <span>explore168@gmail.com</span>
                    </div>
                    <span class="tibame">本網站為緯育TibaMe前端工程師班第__期學員專題作品，本平台僅供學習、展示之用。</span>
                </div>
                <div class="sub">
                    <span class="subscription">立即獲得用戶限定優惠及私房景點資訊!</span>
                    <form>
                        <input type="email" placeholder="請輸入email">
                        <button class="edm">訂閱電子報</button>
                    </form>
                    <div class="icon">
                        <RouterLink to="#"><i class="fa-brands fa-facebook-f"></i></RouterLink>
                        <RouterLink to="#"><i class="fa-brands fa-instagram"></i></RouterLink>
                        <RouterLink to="#"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                        <RouterLink to="#"><i class="fa-brands fa-tiktok"></i></RouterLink>
                    </div>
                    <span class="copy">CopyRight ©2024 By me All Right Resverd.</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router';

//數據
const location = reactive(['新北', '台北', '桃園', '台中', '高雄'])

</script>
