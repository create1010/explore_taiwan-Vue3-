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
                    <ul v-if="searchHistory.trim() !== '' && filteredResults.length > 0">
                        <li v-for="(item, index) in filteredResults" :key="index" @click="selectResult(item)">{{
                            item.title }}
                        </li>
                    </ul>
                </div>
                <div class="history">
                    <button v-for="(item, index) in btns" :key="index" @click="() => handleSearch(item)">
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
const filteredResults = ref([]);    //用來記錄搜尋相關值的陣列

onMounted(async () => {
    try {
        const response = await fetch('/public/JSON/Destination/DestinationPopularity.json');
        const searchList = await response.json();
        data.value = searchList;

    } catch (error) {
        console.log('錯誤', error);

    }
})
// 處理搜尋邏輯
const handleSearch = (searchTerm = null) => {
    const searchValue = searchTerm ? String(searchTerm) : searchHistory.value;
    // 移除空格並檢查是否有輸入
    if (searchValue.trim() !== '') {
        // 使用正則表達式模糊搜尋
        const regex = new RegExp(searchValue.trim(), 'i');
        filteredResults.value = data.value.filter(item => regex.test(item.title));
        if (filteredResults.value.length > 0) {
            searchResult.value = filteredResults.value[0];
            isLightboxOpen.value = true;
            addSearchHistory(searchValue);
            searchHistory.value = '';
        } else {
            Swal.fire({
                title: '很抱歉，尚無資訊，請重新查閱',
                icon: "error",
                confirmButtonText: '確認',
                showCancelButton: false
            })
        }
    } else {
        filteredResults.value = [];
    }
};

// 點擊顯示 lightbox
const selectResult = (item) => {
    handleSearch(item.title);
};


const addSearchHistory = (historyValue) => {
    //排除重複搜尋結果，於陣列中找尋
    if (!btns.value.includes(historyValue)) {
        //限制頁面顯示最多6筆紀錄
        if (btns.value.length >= 6) {
            btns.value.pop();
        }
        btns.value.unshift(historyValue)
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