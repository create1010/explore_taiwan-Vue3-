<template>
    <section class="section section-detailed">
        <div class="container">
            <div class="detailedWrap">
                <div class="leftbar">
                    <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="location">
                        台灣,{{ AttractionsList[currentIndex].name }}<br>
                        Taiwan,{{ AttractionsList[currentIndex].englishName }}
                    </div>
                </div>
                <swiper :modules="[Autoplay, EffectCoverflow]" :slides-per-view="4" space-between="20"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" loop :grabCursor="true"
                    :effect="'coverflow'" :centeredSlides="true" :coverflowEffect="{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }" :pagination="true" class="rightbar" @slideChange="onSlideChange">
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
import { onMounted, reactive, ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const currentIndex = ref(0);
const AttractionsList = reactive([
    {
        id: 1,
        location: '新北',
        name: '九份老街',
        englishName: 'Jiufen',
        image: '/img/home/22.png',
        alt: '九份老街',
        bg: '/img/home/44.jpg'
    },
    {
        id: 2,
        location: '台北',
        name: '象山步道',
        englishName: 'Xiangshan Hiking Trail',
        image: '/img/home/23.png',
        alt: '象山步道',
        bg: '/img/home/45.jpg'
    },
    {
        id: 3,
        location: '桃園',
        name: '大溪老街',
        englishName: 'Daxi Old Street',
        image: '/img/home/38.png',
        alt: '大溪老街',
        bg: '/img/home/46.jpg'
    },
    {
        id: 4,
        location: '新竹',
        name: '海之聲',
        englishName: 'The Sound of The Sea',
        image: '/img/home/39.png',
        alt: '海之聲',
        bg: '/img/home/47.jpg'
    },
    {
        id: 5,
        location: '苗栗',
        name: '龍騰斷橋',
        englishName: 'Longteng bridge',
        image: '/img/home/40.png',
        alt: '龍騰斷橋',
        bg: '/img/home/48.jpg'
    },
    {
        id: 6,
        location: '台中',
        name: '高美濕地',
        englishName: 'Gaomei Wetland',
        image: '/img/home/41.png',
        alt: '高美濕地',
        bg: '/img/home/49.jpg'
    },
    {
        id: 7,
        location: '彰化',
        name: '虎山巖-金針花',
        englishName: 'daylily',
        image: '/img/home/42.png',
        alt: '虎山巖-金針花',
        bg: '/img/home/50.jpg'
    },
    {
        id: 8,
        location: '雲林',
        name: '蜜蜂故事館',
        englishName: 'Honey Museum',
        image: '/img/home/43.png',
        alt: '蜜蜂故事館',
        bg: '/img/home/51.jpg'
    }
])
//初始化背景圖，並設置預設圖片
const initialBackGround = (src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        document.querySelector('.section-detailed').style.setProperty('--bg', `url(${src})`)
    }
}

//預先加載圖片
const advanceBackGround = () => {
    AttractionsList.forEach(item => {
        const img = new Image();
        item.src = img.bg
    })
}

//滑動事件
const onSlideChange = (swiper) => {
    currentIndex.value = swiper.realIndex;
    //獲取中間索引
    // const selectSwiper = swiper.realIndex;
    // const defaultBackGround = AttractionsList[selectSwiper].bg;
    //動態更新背景
    // document.querySelector('.section-detailed').style.setProperty('--bg', `url(${defaultBackGround})`)
}
//監聽背景圖載入後動態變更
watch(currentIndex, (newIndex) => {
    const defaultBackGround = AttractionsList[newIndex]?.bg;
    if (defaultBackGround) {
        initialBackGround(defaultBackGround)
    }
})
//先將背景圖掛載
onMounted(() => {
    advanceBackGround();
    //設置為初始背景
    initialBackGround(AttractionsList[currentIndex.value].bg);
})
</script>