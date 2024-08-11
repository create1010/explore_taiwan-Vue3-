<template>
    <section class="section section-plan">
        <div class="header">
            <h2>行稱名稱：心靈之旅</h2>
            <button><i class="fa-solid fa-pen"></i>編輯</button>
        </div>
        <div class="dataInfo">
            <span>旅遊日期</span>
            <div class="download">
                <button><i class="fa-solid fa-cloud-arrow-down"></i>下載PDF檔</button>
            </div>
        </div>
        <div class="dateBar">
            <div class="date">
                <div class="start">
                    <h3>開始日期：</h3>
                    <input type="date" class="startDate" v-model="defaultDate">
                </div>
                <div class="end">
                    <h3>結束日期：</h3>
                    <input type="date" class="endDate" v-model="endDate">
                </div>
            </div>
        </div>
        <div class="journeys">
            <div v-if="daysDifference > maxDays" class="service">
                <p>行程超過四日以上，請洽客服人員協助處理。 <br>
                    不便之處敬請見諒!
                </p>
            </div>
            <div v-else class="journey" v-for="(date, index) in dateRange" :key="index">
                <div class="title">
                    <div class="date">
                        <h3>第{{ index + 1 }}天</h3>
                        <span>出發時間08:00</span>
                    </div>
                    <span class="week">{{ formatDate(date) }}</span>
                </div>
                <div class="journeyEvent"></div>
                <button class="add"><i class="fa-solid fa-plus"></i>新增景點</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format, differenceInDays, addDays } from 'date-fns';


//轉標準時間格式，使用splite切割T以後(含T本身)皆不需要
const defaultDate = ref(new Date().toISOString().split('T')[0]); //開始日
const endDate = ref(new Date().toISOString().split('T')[0]);    //結束日
const maxDays = 3; // 設置最大日期範圍為4天


//天數差
const daysDifference = computed(() => {
    return differenceInDays(endDate.value, defaultDate.value);
});
// 生成日期范围内的所有日期
const dateRange = computed(() => {
    const start = new Date(defaultDate.value);

    //檢查是否超出四天(不含四本身)
    if (daysDifference.value > maxDays) {
        return '';
    }

    let dates = [];
    for (let i = 0; i <= daysDifference.value; i++) {
        dates.push(addDays(start, i));
    }
    return dates;
});

const formatDate = (date) => {
    return format(date, 'M/d EEEE');
};
</script>