<template>
    <section class="section section-destination">
        <div class="container">
            <div class="banner">
                <div class="search">
                    <h1>腳步起舞：即刻啟程，精心規劃</h1>
                    <span>發現無盡的驚喜，揭開神秘的面紗</span>
                    <div class="searchBar">
                        <input type="search" v-model="searchHistory" @keydown.enter="addSearchHistory">
                        <button @click="addSearchHistory">搜尋</button>
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
    </section>
</template>

<script setup>
import { ref } from 'vue';

const btns = ref(['太魯閣國家公園', '九份老街', '日月潭', '清境農場', '阿里山', '墾丁', '台中逢甲夜市'])
const searchHistory = ref('')

const addSearchHistory = () => {
    //移除空格檢查
    if (searchHistory.value.trim() !== '') {
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
}
const delHistory = (removeValue) => {
    const indexValue = btns.value.indexOf(removeValue)
    if (indexValue > -1) {
        btns.value.splice(indexValue, 1)
    }
}

</script>