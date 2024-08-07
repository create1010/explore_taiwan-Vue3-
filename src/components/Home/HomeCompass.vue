<template>
    <section class="section section-compass">
        <div class="container">
            <div class="on">
                <div class="title">
                    <h3>探索自我</h3>
                    <span>多樣選擇豐富你的靈感</span>
                </div>
                <div class="cardList">
                    <div class="card" v-for="(card, index) in cards" :key="index">
                        <div class="pic">
                            <img :src="card.image" :alt="card.alt">
                        </div>
                        <div class="text">
                            <h3>{{ card.title }}</h3>
                            <span>{{ card.content }}</span>
                        </div>
                        <div class="more">
                            <button>more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="under">
                <div class="title">
                    <h3>旅遊指南針</h3>
                    <span>留心這些，享受無憂之旅留心這些，享受無憂之旅</span>
                </div>
                <div class="content">
                    <div class="contentList">
                        <div class="card" v-for="(story, index) in storys" :key="index">
                            <div class="image">
                                <img :src="story.image" alt="旅遊指南針">
                            </div>
                            <div class="story">
                                <span>{{ story.content }}</span>
                                <div class="read">
                                    <RouterLink to="">
                                        閱讀故事
                                        <i class="fa-solid fa-angles-right"></i>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="topButton">
                <i class="fa-solid fa-angle-up" @click="top"></i>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import { useTopScrollStore } from '@/stores/topScroll';
//data
const store = useTopScrollStore();
const { top } = store
const cards = reactive([
    {
        title: '商圈景點',
        content: '充滿時尚潮流和多元文化，是品味美食、購物和娛樂的絕佳去處',
        image: '/public/img/home/24.png',
        alt: '西門町紅樓'
    },
    {
        title: '自然景觀',
        content: '雄偉的山脈、清澈的湖泊、迷人的海岸線和翠綠的森林，充滿探險與探索的樂趣。',
        image: '/public/img/home/25.png',
        alt: '奇萊山景'
    },
    {
        title: '美食小吃',
        content: '琳瑯滿目的美食小吃，從道地台灣味到國際美食，無論是街邊攤販還是高級餐廳，都能滿足味蕾。',
        image: '/public/img/home/26.png',
        alt: '夜市小吃'
    },
])

const storys = reactive([
    {
        image: '/public/img/home/27.png',
        content: '如何選擇負責任的旅行社',

    },
    {
        image: '/public/img/home/28.png',
        content: '為什麼旅遊業需要更高的透明度',
    }
])
</script>