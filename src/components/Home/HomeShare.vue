<template>
    <section class="section section-share">
        <div class="container">
            <div class="shareList">
                <div class="leftImg">
                    <div class="on">
                        <div class="pic">
                            <img :src="current.leftTopImage" :alt="current.leftTopLocation">
                        </div>
                        <div class="text">
                            <i class="fa-solid fa-location-dot" style="color: #ff0000;"></i>
                            <span>{{ current.leftTopLocation }}</span>
                        </div>
                    </div>
                    <div class="under">
                        <div class="pic">
                            <img :src="current.leftBottomImage" :alt="current.leftBottomLocation">
                        </div>
                        <div class="text">
                            <i class="fa-solid fa-location-dot" style="color: #ff0000;"></i>
                            <span>{{ current.leftBottomLocation }}</span>
                        </div>
                    </div>
                </div>
                <div class="shareContent">
                    <div class="theme">
                        <h3>{{ current.title }}</h3>
                        <p>{{ current.description }}</p>
                    </div>
                    <div class="comment">
                        <div class="leftArrow" @click="previousContent">
                            <i class="fa-solid fa-angle-left"></i>
                        </div>
                        <div class="start">
                            <img :src="current.rating" width="80%" alt="rating">
                        </div>
                        <div class="rightArrow" @click="nextContent">
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                    <div class="tourists">
                        <span>{{ current.date }}</span>
                        <span>{{ current.author }}</span>
                    </div>
                </div>
                <div class="rightImg">
                    <div class="on">
                        <div class="pic">
                            <img :src="current.rightTopImage" :alt="current.rightTopLocation">
                        </div>
                        <div class="text">
                            <i class="fa-solid fa-location-dot" style="color: #ff0000;"></i>
                            <span>{{ current.rightTopLocation }}</span>
                        </div>
                    </div>
                    <div class="under">
                        <div class="pic">
                            <img :src="current.rightBottomImage" :alt="current.rightBottomLocation">
                        </div>
                        <div class="text">
                            <i class="fa-solid fa-location-dot" style="color: #ff0000;"></i>
                            <span>{{ current.rightBottomLocation }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const contents = [
    {
        leftTopImage: '/img/home/12.png',
        leftTopLocation: '清水斷崖',
        leftBottomImage: '/img/home/14.png',
        leftBottomLocation: '太魯閣',
        rightTopImage: '/img/home/13.png',
        rightTopLocation: '三仙台',
        rightBottomImage: '/img/home/15.png',
        rightBottomLocation: '多良車站',
        title: '花東海岸魅力行',
        description: '作為一名旅客，我被台灣花東海岸的魅力所折服，壯麗的海景、迷人的沙灘和原生態的自然景觀讓我心曠神怡，友善的當地人和豐富多樣的海岸活動讓我流連忘返。我給予花東景觀極高評價，非常推薦喜歡自然生態景觀的旅人。',
        rating: '/img/home/16.png',
        date: '發佈於2024年3月28日星期四',
        author: '王曉明'
    },
    {
        leftTopImage: '/img/home/30.jpg',
        leftTopLocation: '清境農場',
        leftBottomImage: '/img/home/31.jpg',
        leftBottomLocation: '高美濕地',
        rightTopImage: '/img/home/32.jpg',
        rightTopLocation: '台中歌劇院',
        rightBottomImage: '/img/home/33.jpg',
        rightBottomLocation: '麗寶樂園',
        title: '台中奇幻之旅',
        description: '這次在台灣中部的旅行讓我驚艷不已。從壯麗的山脈到靜謐的湖泊，每一個景點都彷彿是一幅美麗的畫卷。當地的文化和美食更是讓人回味無窮。我會向每位喜愛自然景觀和文化探險的旅客推薦這裡。',
        rating: '/img/home/17.png',
        date: '發佈於2024年4月15日星期一',
        author: '李華'
    },
    {
        leftTopImage: '/img/home/34.jpg',
        leftTopLocation: '野柳女王頭',
        leftBottomImage: '/img/home/35.jpg',
        leftBottomLocation: '富貴角燈塔',
        rightTopImage: '/img/home/36.jpg',
        rightTopLocation: '象鼻岩',
        rightBottomImage: '/img/home/37.jpg',
        rightBottomLocation: '北石門名勝',
        title: '北海岸海景之旅',
        description: '北海岸的海景真是美不勝收。壯觀的岩石形成和蔚藍的海洋相映成趣，讓我在海邊散步時感到心曠神怡。當地的海鮮餐廳也提供了豐富的美食選擇，是海景愛好者的最佳去處。',
        rating: '/img/home/17.png',
        date: '發佈於2024年6月20日星期四',
        author: '劉志明'
    }
];

const index = ref(0);
const current = ref(contents[0]);

const nextContent = () => {
    index.value = (index.value + 1) % contents.length;
    current.value = contents[index.value];
};

const previousContent = () => {
    index.value = (index.value - 1 + contents.length) % contents.length;
    current.value = contents[index.value];
};
</script>