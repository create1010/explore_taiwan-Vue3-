<template>
    <section class="section section-destination">
        <div class="container">
            <div class="banner">
                <div class="search">
                    <h1>腳步起舞：即刻啟程，精心規劃</h1>
                    <span>發現無盡的驚喜，揭開神秘的面紗</span>
                    <div class="searchBar">
                        <input type="search" v-model="searchHistory" @keydown.enter="handleSearch"
                            placeholder="請輸入景點名稱">
                        <button @click="handleSearch">搜尋</button>
                    </div>
                </div>
                <div class="history">
                    <button v-for="(item, index) in btns" :key="index">
                        {{ item }}
                        <i class="fa-solid fa-rectangle-xmark" @click="delHistory(item)"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- lightbox：傳遞搜尋結果 -->
        <DestinationPopularityWhole v-if="isLightboxOpen" :clickStatus="isLightboxOpen" :data="searchResult"
            @close="closeLightbox" class="lightBox" />
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import DestinationPopularityWhole from './DestinationPopularityWhole.vue';
import Swal from 'sweetalert2';

const btns = ref(['太魯閣國家公園', '九份老街', '日月潭', '清境農場', '阿里山', '墾丁', '台中逢甲夜市'])
const searchHistory = ref('');
const data = ref([]);
const searchResult = ref(null);
const isLightboxOpen = ref(false);

onMounted(async () => {
    try {
        const response = await fetch('/public/JSON/Destination/DestinationPopularity.json');
        const searchList = await response.json();
        data.value = searchList;
        // console.log(data.value);

    } catch (error) {
        console.log('錯誤', error);

    }
})
const handleSearch = (event) => {
    //防預設行為
    event.preventDefault();
    //移除空格檢查
    if (searchHistory.value.trim() !== '') {
        const result = data.value.find(item => item.title.includes(searchHistory.value));
        if (result) {
            searchResult.value = result;
            isLightboxOpen.value = true;
            addSearchHistory();
        } else {
            Swal.fire({
                title: '很抱歉，尚無資訊，請重新查閱',
                icon: "error",
                confirmButtonText: '確認',
                showCancelButton: false
            }).then(() => {
                addSearchHistory();
                searchHistory.value = '';
            })
        }
    }
}

const addSearchHistory = () => {
    //排除重複搜尋結果，於陣列中找尋
    if (!btns.value.includes(searchHistory.value)) {
        //限制頁面顯示最多6筆紀錄
        if (btns.value.length >= 6) {
            btns.value.pop();
        }
        btns.value.unshift(searchHistory.value)
    }
    searchHistory.value = ''
}
const delHistory = (removeValue) => {
    const indexValue = btns.value.indexOf(removeValue)
    if (indexValue > -1) {
        btns.value.splice(indexValue, 1)
    }
}

const closeLightbox = () => {
    isLightboxOpen.value = false;
};
</script>

<style lang="scss" scoped>
.lightBox {
    z-index: 2;
}
</style>