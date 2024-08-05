<template>
    <header :class="{ 'transparent': scrollStore.isTransparent }" ref="navScroll">
        <div class="container">
            <nav class="navigation">
                <RouterLink to="/" class="logoIndex">
                    <div class="navLogo">
                        <img src="../../../public/logo-white.png" width="120" alt="explorem taiwan 探索台灣">
                    </div>
                </RouterLink>
                <ul class="navbar">
                    <li>
                        <RouterLink to="/brand">品牌理念</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Destination">目的地</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Plan">啟動計畫</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Remember">美好回憶</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/Connection">聯絡我們</RouterLink>
                    </li>
                </ul>
                <div class="loginbar">
                    <RouterLink to="/Login">會員登入</RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useScrollStore } from '../../stores/homeScroll'

const navScroll = ref(null);
const scrollStore = useScrollStore();

onMounted(() => {
    scrollStore.setNavRef(navScroll.value);
});

</script>

<style lang="scss" scoped>
.transparent {
    transition: background-color 0.3s, color 0.3s;
    background-color: rgba(117, 149, 172, 0.7);

    .navbar a,
    .loginbar a {
        color: #fff;
    }
}
</style>
