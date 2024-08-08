<template>
    <section class="section section-destination">
        <div class="container">
            <div class="banner">
                <div class="search">
                    <h1>腳步起舞：即刻啟程，精心規劃</h1>
                    <span>發現無盡的驚喜，揭開神秘的面紗</span>
                    <div class="searchBar">
                        <input type="search">
                        <RouterLink>搜尋</RouterLink>
                    </div>
                </div>
                <div class="history">
                    <button v-for="(item, index) in btns" :key="index">{{ item }}</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const btns = ref(['太魯閣國家公園', '九份老街', '日月潭', '清境農場', '阿里山', '墾丁', '台中逢甲夜市'])
</script>