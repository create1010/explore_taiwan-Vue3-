<template>
    <footer v-if="footerToggle">
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
                    <span class="tibame">本作品為自身創作非營利所用，若有侵權相關問題請來信plae56782@gmail.com</span>
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
import { reactive, computed } from 'vue'
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router'

//數據
const location = reactive(['新北', '台北', '桃園', '台中', '高雄'])
const route = useRoute()
const footerToggle = computed(() => {
    const hiddenFooter = ['Detail'];
    return !hiddenFooter.includes(route.name)
})
</script>

<style lang="scss" scoped></style>
