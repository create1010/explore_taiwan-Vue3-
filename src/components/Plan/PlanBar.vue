<template>
    <section class="section section-plan">
        <div class="container">
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
                <div class="journey" v-for="(date, index) in dateRange" :key="index">
                    <div class="title">
                        <div class="date">
                            <h3></h3>
                            <span></span>
                        </div>
                        <span>{{ start }}</span>
                    </div>
                    <button class="add"><i class="fa-solid fa-plus"></i>新增景點</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format, differenceInDays, addDays } from 'date-fns';


//轉標準時間格式，使用splite切割T以後(含T本身)皆不需要
const defaultDate = ref(new Date().toISOString().split('T')[0]);
const endDate = ref(new Date().toISOString().split('T')[0]);

const start = format(defaultDate.value, 'M/d EEEE');    //起始日
// const end = format(endDate.value, 'M/d EEEE');  //結束日

//天數差
const daysDifference = computed(() => {
    return differenceInDays(endDate.value, defaultDate.value);
});
// 生成日期范围内的所有日期
const dateRange = computed(() => {
    const start = new Date(defaultDate.value);
    let dates = [];

    for (let i = 0; i <= daysDifference.value; i++) {
        dates.push(addDays(start, i));
    }
    return dates;
});
</script>