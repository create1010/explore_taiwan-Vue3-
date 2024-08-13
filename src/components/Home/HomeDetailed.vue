<template>
    <section class="section section-detailed">
        <div class="container">
            <div class="detailedWrap">
                <div class="leftbar">
                    <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="location">
                        台灣,九份<br>
                        Taiwan,Jiufen
                    </div>
                </div>
                <div class="rightbar" v-for="item in AttractionsList" :key="item.id">
                    <div class="pic">
                        <img :src="item.image" :alt="item.alt">
                    </div>
                    <div class="text">
                        <span>{{ item.location }}</span>
                        <h3>{{ item.name }}</h3>
                        <button>詳情資訊</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'

const AttractionsList = reactive([
    {
        id: 1,
        location: '新北市',
        name: '九份老街',
        image: '/img/home/22.png',
        alt: '九份老街'
    },
    {
        id: 2,
        location: '台北市',
        name: '象山',
        image: '/img/home/23.png',
        alt: '象山'
    }
])
</script>
