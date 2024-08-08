<template>
    <section class="section section-serve">
        <div class="container">
            <h2>旅遊服務</h2>
            <div class="travelServe">
                <div class="service" v-for="(item, index) in serviceList" :key="index">
                    <div class="image">
                        <img :src="item.img">
                    </div>
                    <div class="content">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.detail }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const serviceList = ref([
    {
        img: '/public/img/destination/13.png',
        title: '安全保障措施',
        detail: '強調旅遊團隊或者導遊提供的安全保障措施，包括緊急應變計劃、急救措施、保險規劃等，讓旅客放心享受旅程，充分享受美好的旅行體驗。'
    },
    {
        img: '/public/img/destination/14.png',
        title: '便捷客服通道',
        detail: '介紹線上客服和電話客服的服務，讓旅客知道他們可以通過線上平台或者撥打電話與專業的客服人員聯繫，解決旅途中的疑問和問題，提供即時的支持和幫助。'
    },
])
</script>