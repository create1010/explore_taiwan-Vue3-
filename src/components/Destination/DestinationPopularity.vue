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
                    </p>
                    <RouterLink>查看完整資訊</RouterLink>
                </div>
            </div>
            <div class="more">
                <RouterLink to="#"><i class="fa-solid fa-angles-right"></i>more</RouterLink>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const cardData = ref([]);

onMounted(async () => {
    try {
        const response = await fetch('/JSON/Destination/DestinationPopularity.json');
        if (!response.ok) {
            throw new Error('未取得資訊，請重新嘗試');
        }
        cardData.value = await response.json();
    } catch (error) {
        console.log('錯誤', error);
    }
});
</script>