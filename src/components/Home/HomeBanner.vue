<template>
    <section class="section section-bannerWrap">
        <video class="videoBg" autoplay muted loop playsinline src="/video/index-video.mp4"></video>
        <div class="container">
            <div class="banner">
                <div class="content">
                    <div class="title">
                        <div class="logo">
                            <img src="/img/home/index_logo.png" alt="Explorem Taiwan" @focus="showResult">
                        </div>
                        <h1>Explore Taiwan</h1>
                    </div>
                    <h2>讓台灣的美景成為你旅行的背景！</h2>
                    <div class="searchInput">
                        <div class="search">
                            <input type="search" placeholder="搜尋" v-model="searchInput" @input="isShowResult"
                                @blur="hiddenlog">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <ul class="logBar" v-if="showResult">
                            <li v-for="item in showDeafultSearch" :key="item.id">{{ item.name }}
                            </li>
                        </ul>
                    </div>
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

const showDeafultSearch = computed(() => {
    //有搜尋紀錄，則顯示收尋紀錄名稱
    if (filterSearch.value.length > 0) {
        return filterSearch.value;
        //無搜尋紀錄則顯示user輸入文字
    } else if (searchInput.value) {
        return [{ id: 'default', name: searchInput.value }]
    }
    return [];
})

//判斷輸入框是否有值來控制模糊搜尋的開關
const isShowResult = () => {
    showResult.value = searchInput.value.length > 0;
}

//
const hiddenlog = () => {
    if (searchInput.value.length === 0) {
        showResult.value = false;
    }
}
</script>
