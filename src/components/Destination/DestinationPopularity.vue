<template>
    <section class="section section-Popularity">
        <div class="container">
            <h2>人氣景點</h2>
            <div class="cardList">
                <div class="card" v-for="(card, index) in cardData" :key="index">
                    <div class="image">
                        <img :src="card.picture">
                    </div>
                    <div class="text">
                        <h3>{{ card.title }}</h3>
                        <div class="satr">
                            <img :src="card.image">
                            <span>{{ card.count }}</span>
                        </div>
                    </div>
                    <div class="subtitle">
                        <span>{{ card.smailetitle }}</span>
                    </div>
                    <p class="content">
                        {{ card.text }}
                        <RouterLink>查看完整資訊</RouterLink>
                    </p>
                </div>
            </div>
            <div class="more">
                <RouterLink to="#"><i class="fa-solid fa-angles-right"></i>more</RouterLink>

            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const cardData = reactive([
    {
        picture: '/img/destination/4.png',
        title: '1.平溪老街',
        image: '/img/destination/2.png',
        count: '1,530',
        smailetitle: '景點和地標',
        text: '位於新北市平溪區，是一條保存完整的傳統石板街道，充滿懷舊風情。在這條古老街道上，可以欣賞到日治時期的日式建築，以及豐富的地方特色小吃和手工藝品店。漫步其中，彷彿穿越時光隧道，感受悠久的歷史氛圍。此外，平溪老街'
    },
    {
        picture: '/img/destination/5.png',
        title: '2.高美濕地',
        image: '/img/destination/3.png',
        count: '1,196',
        smailetitle: '自然野生動物區',
        text: '地位於台中市，是一處自然生態豐富的濕地保護區。這片濕地擁有廣闊的湖泊、蘆葦草原和多樣的水生植物，是許多候鳥的重要棲息地，也是國際級的濕地生態保護區。遊客可以在這裡觀察到各種野生動物，如水鳥、蝴蝶等，並且可以沿'
    },
    {
        picture: '/img/destination/6.png',
        title: '3.象山自然步道',
        image: '/img/destination/3.png',
        count: '3,326',
        smailetitle: '景點和地標',
        text: '位於台北市信義區，是一條受歡迎的登山步道。沿著步道漫步，可以欣賞到台北市區壯麗的城市景觀，以及大自然的美景。步道中有多處觀景台，遊客可以在此停下腳步，欣賞台北市的全景。由於步道相對平緩，因此非常適合各個年齡層的'
    },
    {
        picture: '/img/destination/7.png',
        title: '4.愛河',
        image: '/img/destination/1.png',
        count: '1,130',
        smailetitle: '景點和地標',
        text: '為高雄市的著名景點，位於市中心，是高雄市的代表性河流之一。愛河沿岸有美麗的步道，供遊客散步、騎單車或搭乘遊船欣賞河景。尤其在夜晚，沿岸的燈光倒映在水面上，為愛河帶來浪漫的氛圍。此外，每年的元宵節，愛河還會舉辦'
    },
])
</script>