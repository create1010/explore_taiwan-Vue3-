<template>
    <div>
        <header :class="{ 'transparent': scrollStore.isTransparent }" ref="navScroll">
            <div class="container">
                <nav class="navigation">
                    <RouterLink to="/" class="logoIndex">
                        <img src="/logo-white.png" width="120" alt="explorem taiwan 探索台灣">
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
                    <div class="userLogin" v-if="useStore.loginStatus === true">
                        <div class="user">
                            <img :src="useStore.avatar" alt="userAvater">
                            <span>{{ useStore.username }}</span>
                        </div>
                        <span class="loginOut" @click="singOut">登出</span>
                    </div>
                    <div class="loginbar" v-else>
                        <RouterLink to="/Login">會員登入</RouterLink>
                    </div>
                </nav>
            </div>
        </header>
        <div class="header-spacer"></div> <!-- 這是佔位元素 -->
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useScrollStore } from '../../stores/homeScroll'

const navScroll = ref(null);
const scrollStore = useScrollStore();
import { useMemberStore } from '@/stores/userLogin';

const useStore = useMemberStore();
const handleScroll = () => {
    // 判斷捲動位置是否超過 900px
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= 100) {
        // 當捲動超過 900px 時觸發效果
        scrollStore.setTransparent(true);
    } else {
        scrollStore.setTransparent(false);
    }
};
const singOut = () => {
    useStore.loginOut()
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    scrollStore.setNavRef(navScroll.value);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
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
