<template>
    <section class="section section-food">
        <div class="container">
            <h2>味覺饗宴</h2>
            <div class="foodList">
                <ul>
                    <li v-for="(item, index) in location" :key="index">{{ item }}</li>
                </ul>
            </div>
            <div class="foodDetail">
                <div class="food" v-for="(item, index) in foodList" :key="index">
                    <div class="picture">
                        <img :src="item.image">
                    </div>
                    <div class="text">
                        <h3>{{ item.title }}</h3>
                        <div class="starts">
                            <img :src="item.start">
                            <span>{{ item.count }}</span>
                        </div>
                        <p>{{ item.detail }}</p>
                        <div class="all">
                            <RouterLink to="#">詳細資訊</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">
                <RouterLink to="#"><i class="fa-solid fa-angles-right"></i>more</RouterLink>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';

const location = ref(['北部', '中部', '南部', '東部', '離島']);
const foodList = reactive([
    {
        image: '/public/img/destination/20.png',
        title: '金門-永春廣東粥',
        start: '/public/img/destination/25.png',
        count: '(2,898)',
        detail: '金門的永春廣東粥是當地知名的特色美食，以濃郁的粥底搭配各式海鮮和肉類，口感鮮美豐富，是金門人和遊客喜愛的美食之一。'
    },
    {
        image: '/public/img/destination/21.jpg',
        title: '馬祖-阿妹鼎邊糊',
        start: '/public/img/destination/25.png',
        count: '(438)',
        detail: '當地知名的美食店，提供豐富的海鮮、蔬菜和麵粉熬煮而成的糊狀料理。這道獨特的美食口感濃郁綿密，令人回味無窮。'
    },
    {
        image: '/public/img/destination/22.jpg',
        title: '澎湖-阿豹香腸攤',
        start: '/public/img/destination/24.png',
        count: '(2,127)',
        detail: '以新鮮豬肉製作的香腸香氣撲鼻，口感鮮嫩多汁，成為澎湖地區的經典美食之一提供多種口味的香腸，不僅賣烤香腸、大腸包小腸，也賣關東煮及一些小吃料理。'
    },
    {
        image: '/public/img/destination/23.jpg',
        title: '蘭嶼-蘭嶼阿東飛魚刈包',
        start: '/public/img/destination/26.png',
        count: '(492)',
        detail: '新鮮的飛魚製成，搭配軟硬適中的麵包，口感酥脆香嫩。飛魚刈包不僅是蘭嶼居民的日常飲食，也是遊客必嚐的道地美味。'
    },
])

</script>