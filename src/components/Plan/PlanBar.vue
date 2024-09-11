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
                    </div>
                    <span class="week">{{ formatDate(date) }}</span>
                </div>
                <div class="journeyItem" v-if="currentIndex === index">
                    <input type="time" v-model="userTime">
                    <input type="text" v-model="userEvent">
                    <div class="choose">
                        <button class="new" @click="join(index)">新增</button>
                        <button class="cancel" @click="cancel">取消</button>
                    </div>
                </div>
                <div class="editText" v-for="item in journeyList[index]" :key="item.id">
                    <span>{{ item.time }}</span>
                    <span>{{ item.event }}</span>
                    <button @click="editing(item)">編輯</button>
                </div>
                <button class="add" v-if="currentIndex !== index" @click="showEdit(index)"><i
                        class="fa-solid fa-plus"></i>新增行程</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { format, differenceInDays, addDays } from 'date-fns';


//轉標準時間格式，使用splite切割T以後(含T本身)皆不需要
const defaultDate = ref(new Date().toISOString().split('T')[0]); //開始日
const endDate = ref(new Date().toISOString().split('T')[0]);    //結束日
const maxDays = 3; // 設置最大日期範圍為4天
const currentIndex = ref(null);
const userTime = ref('');
const userEvent = ref('');
const journeyList = ref([]);
const selectItem = ref(null);   //選擇行程

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
//建立每日行程
const evertDayJourney = () => {
    const newJourney = [];
    dateRange.value.forEach(() => {
        newJourney.push([])
    })
    journeyList.value = newJourney;
}
//監聽變化初始化journeyList內容
watch(dateRange, evertDayJourney, { immediate: true });

const formatDate = (date) => {
    return format(date, 'M/d EEEE');
};

const showEdit = (index) => {
    currentIndex.value = index;
    selectItem.value = null;

}

//新增
const join = (index) => {
    if (selectItem.value) {
        const itemIndex = journeyList.value[index].findIndex(item => item.id === selectItem.value.id);
        if (itemIndex !== -1) {
            journeyList.value[index][itemIndex] = { ...selectItem.value, time: userTime.value, event: userEvent.value }
        }
        selectItem.value = null;
    } else {
        journeyList.value[index].push({ id: Date.now(), time: userTime.value, event: userEvent.value });
    }
    //時間排序
    journeyList.value[index].sort((a, b) => a.time.localeCompare(b.time));
    userTime.value = '';
    userEvent.value = '';
    currentIndex.value = null;
}

//修改
const editing = (item) => {
    selectItem.value = item;
    userTime.value = item.time;
    userEvent.value = item.event;
    currentIndex.value = journeyList.value.findIndex(day => day.includes(item));
}

//取消
const cancel = () => {
    userTime.value = '';
    userEvent.value = '';
    currentIndex.value = null;
}

</script>