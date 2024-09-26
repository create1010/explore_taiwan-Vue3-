<template>
    <section class="section section-destination">
        <div class="container">
            <div class="banner">
                <div class="search">
                    <h1>腳步起舞：即刻啟程，精心規劃</h1>
                    <span>發現無盡的驚喜，揭開神秘的面紗</span>
                    <div class="searchBar">
                        <input type="search" v-model="searchHistory" @keydown.enter.prevent="handleSearch"
                            @input="handleSearch" placeholder="請輸入景點名稱">
                        <button @click="submitSearch">搜尋</button>
                    </div>
                    <ul v-if="searchHistory.trim() !== '' && filteredResults.length > 0">
                        <li>
                            <ul class="historyWrap" v-for="(item, index) in filteredResults" :key="index"
                                @click="selectResult(item)">
                                <li class="historyValue" v-for="(tag, index) in item.tag" :key="index">{{ tag }}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="history">
                    <button v-for="(item, index) in btns.slice(0, 6)" :key="index" @click="() => selectResult(item)">
                        {{ item.title }}
                        <i class="fa-solid fa-rectangle-xmark" @click.stop="delHistory(item)"></i>
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

const btns = ref([]);
const searchHistory = ref('');
const data = ref([]);
const searchResult = ref(null);
const isLightboxOpen = ref(false);
const filteredResults = ref([]);    //用來記錄搜尋相關值的陣列

onMounted(async () => {
    try {
        const response = await fetch('/JSON/Destination/DestinationPopularity.json');
        const searchList = await response.json();
        data.value = searchList;
        btns.value = searchList;

    } catch (error) {
        console.log('錯誤', error);

    }
})
// 輸入的搜尋行為
const handleSearch = () => {
    const searchValue = searchHistory.value.trim().replace(/\s+/g, '');

    if (searchValue === '') {
        filteredResults.value = [];
        return;
    }

    const regex = new RegExp(searchValue, 'i');
    filteredResults.value = data.value.filter(item =>
        regex.test(item.title) || (Array.isArray(item.tag) && item.tag.some(tag => regex.test(tag)))
    );

    if (filteredResults.value.length === 0) {
        Swal.fire({
            title: '查無結果，請嘗試其他關鍵字',
            icon: 'error',
            showConfirmButton: true
        })
    }
};
//點擊歷史紀錄button
const submitSearch = () => {
    if (searchHistory.value.trim() === '') {
        Swal.fire({
            title: '請輸入景點名稱',
            icon: 'warning',
            showConfirmButton: true
        });
        return;
    }
    if (filteredResults.value.length > 0) {
        searchResult.value = filteredResults.value[0];
        isLightboxOpen.value = true;
        addSearchHistory({ title: searchHistory.value });
    }
};


// 點擊模糊搜尋列表的值
const selectResult = (item) => {
    searchResult.value = item;
    isLightboxOpen.value = true;
};




const addSearchHistory = (historyValue) => {
    const title = historyValue.title;
    //排除重複搜尋結果，於陣列中找尋
    if (!btns.value.some(item => item.title === title)) {
        //限制頁面顯示最多6筆紀錄
        if (btns.value.length >= 6) {
            btns.value.pop();
        }
        btns.value.unshift(historyValue)
    }
    searchHistory.value = ''
}
const delHistory = (removeValue) => {
    const indexValue = btns.value.findIndex(item => item.title === removeValue.title)
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