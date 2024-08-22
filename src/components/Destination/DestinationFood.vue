<template>
    <section class="section section-food">
        <div class="container">
            <h2>味覺饗宴</h2>
            <div class="foodList">
                <ul>
                    <li v-for="(item, index) in location" :key="index" @click="selectLocation.value = item"
                        :class="{ active: selectLocation.value === item }">
                        {{ index }}</li>
                </ul>
            </div>
            <div class="foodDetail">
                <div class="food" v-for="item in filterLocationFood" :key="item.id">
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
                            <span>詳細資訊</span>
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
import { ref, reactive, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const location = {
    '北部': 1,
    '中部': 2,
    '南部': 3,
    '東部': 4,
    '離島': 5,
}

//選擇地區，default為北部
const selectLocation = reactive({ value: 1 })
const foodList = ref([]);

//fetch JSON檔
onMounted(async () => {
    try {
        const response = await fetch('/JSON/Destination/DestinationFood.json');
        if (!response.ok) {
            throw new Error('未取得資訊，請重新嘗試');
        }
        foodList.value = await response.json();
    } catch (error) {
        console.log('錯誤', error);
    }
});

const filterLocationFood = computed(() => {
    return foodList.value.filter((e) => e.area === selectLocation.value)
})


</script>