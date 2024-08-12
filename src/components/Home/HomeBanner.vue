<template>
    <section class="section section-bannerWrap">
        <video class="videoBg" autoplay muted loop src="../../../public/video/index-video.mp4"></video>
        <div class="container">
            <div class="banner">
                <div class="content">
                    <div class="title">
                        <img src="../../../public/logo-white.png" width="200" alt="Explorem Taiwan" @focus="showResult">
                        <h1>Explore Taiwan</h1>
                    </div>
                    <h2>讓台灣的美景成為你旅行的背景！</h2>
                    <div class="search">
                        <input type="search" placeholder="搜尋" v-model="searchInput" @input="isShowResult"
                            @blur="hiddenlog">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <ul class="logBar" v-if="showResult">
                        <li v-for="item in filterSearch" :key="item.id">{{ item.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const keypointList = ref([
    {
        id: 1,
        name: '太魯閣國家公園'
    },
    {
        id: 2,
        name: '九份老街'
    },
    {
        id: 3,
        name: '日月潭'
    },
    {
        id: 4,
        name: '清境農場'
    },
    {
        id: 5,
        name: '阿里山'
    },
    {
        id: 6,
        name: '墾丁'
    },
    {
        id: 7,
        name: '台中逢甲夜市'
    },
])
const searchInput = ref('');
const showResult = ref(false)

//模糊搜尋
const filterSearch = computed(() => {
    const filterValue = searchInput.value.toLowerCase();
    return keypointList.value.filter(item => item.name.toLowerCase().includes(filterValue))
})

//判斷輸入框是否有值來控制模糊搜尋的開關
const isShowResult = () => {
    showResult.value = searchInput.value.length > 0;
}

//
const hiddenlog = () => {
    setTimeout(() => {
        if (searchInput.value.length === 0) {
            showResult.value = false;
        }
    })
}
</script>
