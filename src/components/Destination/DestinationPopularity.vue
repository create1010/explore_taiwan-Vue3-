<template>
    <section class="section section-Popularity">
        <div class="container">
            <h2>人氣景點</h2>
            <div class="cardList">
                <div class="card" v-for="(card, index) in limitCardData" :key="index">
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
            <div class="pageControl">
                <i class="fa-solid fa-left-long" @click="prevPage" :class="{ disable: firstPage }"></i>
                <i class="fa-solid fa-right-long" @click="nextPage" :class="{ disable: lastPage }"></i>
            </div>
            <div class="more">
                <RouterLink to="#"><i class="fa-solid fa-angles-right"></i>more</RouterLink>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router';

const cardData = ref([]);
const limitShow = ref(4);   //限制顯示筆數
const currentIndex = ref(1)   //當前頁

const limitCardData = computed(() => {
    const start = (currentIndex.value - 1) * limitShow.value;
    const end = start + limitShow.value;
    return cardData.value.slice(start, end)
})
//計算總頁數
const totalPage = computed(() => {
    return cardData.value.length / limitShow.value
});
//限制禁用功能
const firstPage = computed(() => {
    return currentIndex.value === 1;
});
const lastPage = computed(() => {
    return currentIndex.value === totalPage.value;
});
const prevPage = () => {
    if (currentIndex.value > 1) {
        currentIndex.value--;
    }
};
const nextPage = () => {
    if (currentIndex.value < totalPage.value) {
        currentIndex.value++;
    }
};


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