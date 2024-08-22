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
                <swiper :modules="[Autoplay, EffectCoverflow]" :slides-per-view="4" space-between="20"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" loop :grabCursor="true"
                    :effect="'coverflow'" :centeredSlides="true" :coverflowEffect="{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }" :pagination="true" class="rightbar">
                    <SwiperSlide class="detailLocation" v-for="item in AttractionsList" :key="item.id">
                        <div class="pic">
                            <img :src="item.image" :alt="item.alt">
                        </div>
                        <div class="text">
                            <span>{{ item.location }}</span>
                            <h3>{{ item.name }}</h3>
                            <div class="detailBtn">
                                <button>詳情資訊</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css/bundle';


const AttractionsList = reactive([
    {
        id: 1,
        location: '新北',
        name: '九份老街',
        image: '/img/home/22.png',
        alt: '九份老街'
    },
    {
        id: 2,
        location: '台北',
        name: '象山步道',
        image: '/img/home/23.png',
        alt: '象山步道'
    },
    {
        id: 3,
        location: '桃園',
        name: '大溪老街',
        image: '/img/home/38.png',
        alt: '大溪老街'
    },
    {
        id: 4,
        location: '新竹',
        name: '海之聲',
        image: '/img/home/39.png',
        alt: '海之聲'
    },
    {
        id: 5,
        location: '苗栗',
        name: '龍騰斷橋',
        image: '/img/home/40.png',
        alt: '龍騰斷橋'
    },
    {
        id: 6,
        location: '台中',
        name: '高美濕地',
        image: '/img/home/41.png',
        alt: '高美濕地'
    },
    {
        id: 7,
        location: '彰化',
        name: '虎山巖-金針花',
        image: '/img/home/42.png',
        alt: '虎山巖-金針花'
    },
    {
        id: 8,
        location: '雲林',
        name: '蜜蜂故事館',
        image: '/img/home/43.png',
        alt: '蜜蜂故事館'
    }
])
</script>
