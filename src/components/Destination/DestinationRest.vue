<template>
    <section class="section section-rest">
        <div class="container">
            <h2>身心休憩的最佳選擇</h2>
            <div class="areaList">
                <div class="area" v-for="(area, index) in areaImgList" :key="index" :data-location="area.location">
                    <img :src="area.img">
                </div>
            </div>
            <div class="more">
                <RouterLink to="#"><i class="fa-solid fa-angles-right"></i>more</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const areaImgList = ref([
    {
        img: '/public/img/destination/15.png',
        location: '台北 Taipei'
    },
    {
        img: '/public/img/destination/16.png',
        location: '桃園 Taoyuan '
    },
    {
        img: '/public/img/destination/17.png',
        location: '台中 Taichung '
    },
    {
        img: '/public/img/destination/18.png',
        location: '台南 Tainan'
    },
    {
        img: '/public/img/destination/19.png',
        location: '高雄 Kaohsiung '
    },
])
</script>