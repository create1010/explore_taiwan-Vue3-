<template>
    <section class="section section-life">
        <div class="container">
            <div class="on">
                <h2>發現生活的美好</h2>
                <div class="style">
                    <div class="circle" v-for="(item, index) in styleList" :key="index">
                        <div class="image">
                            <img :src="item.img" :alt="item.alt">
                        </div>
                        <span>{{ item.text }}</span>
                    </div>
                </div>
            </div>
            <div class="under">
                <div class="logo">
                    <div class="pic">
                        <img src="/public/logo-white.png" alt="logo">
                    </div>
                    <h2>Explore Taiwan</h2>
                </div>
                <p>在 Explore Taiwan
                    的旅程中，我們將帶領您探索這片美麗而神奇的土地，體驗其獨特的文化和自然景觀。無論您是一位首次造訪的遊客還是一位對台灣已有所了解的老朋友，我們都誠摯地歡迎您加入我們的行列，一起探索台灣的奧秘和魅力。感謝您對
                    Explore Taiwan 的支持，讓我們一同展開這段精彩的旅程！祝您旅途愉快！</p>
            </div>
            <div class="topButton">
                <i class="fa-solid fa-angle-up" @click="top"></i>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useTopScrollStore } from '@/stores/topScroll';

const store = useTopScrollStore();
const { top } = store

const styleList = reactive([
    {
        img: '/public/img/brand/3.jpg',
        alt: 'life',
        text: 'Life Style'
    },
    {
        img: '/public/img/brand/4.jpg',
        alt: 'Taste',
        text: 'Taste'
    },
    {
        img: '/public/img/brand/5.jpg',
        alt: 'Enjoy',
        text: 'Enjoy'
    },

])
</script>