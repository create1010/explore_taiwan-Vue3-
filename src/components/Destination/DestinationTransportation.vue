<template>
    <section class="section section-transportation">
        <div class="container">
            <h2>交通指南</h2>
            <div class="styleList">
                <div class="style" v-for="(item, index) in styles" :key="index">
                    <div class="picture">
                        <img :src="item.img">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

const styles = reactive([
    {
        img: '/public/img/destination/8.png',
        name: '飛機'
    },
    {
        img: '/public/img/destination/9.png',
        name: '台/高鐵'
    },
    {
        img: '/public/img/destination/10.png',
        name: '捷運'
    },
    {
        img: '/public/img/destination/11.png',
        name: '租車'
    },
    {
        img: '/public/img/destination/12.png',
        name: '包車旅遊'
    },
])
</script>