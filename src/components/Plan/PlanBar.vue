<template>
    <section class="section section-plan">
        <div class="header">
            <div v-if="isEditing">
                行稱名稱：<input type="text" v-model="tripName">
            </div>
            <div v-else>
                <h2>行稱名稱：{{ tripName }}</h2>
            </div>
            <button @click="editName"><i class="fa-solid fa-pen"></i>{{ isEditing ? '保存' : '編輯' }}</button>
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
                        <button class="new" @click="join(index)">{{ selectItem ? '修改' : '新增' }}</button>
                        <button class="cancel" @click="cancel">取消</button>
                    </div>
                </div>
                <div class="editText" v-for="item in journeyList[index]" :key="item.id">
                    <span>{{ item.time }}</span>
                    <span>{{ item.event }}</span>
                    <div class="choose">
                        <button @click="editing(item)">編輯</button>
                        <button @click="deleted(index, item.id)">刪除</button>
                    </div>
                </div>
                <button class="add" v-if="currentIndex !== index" @click="showEdit(index)"><i
                        class="fa-solid fa-plus"></i>新增行程</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, toRef } from 'vue';
import { format, differenceInDays, addDays } from 'date-fns';
import { useClickMapStore } from '../../stores/clickMap';
import Swal from 'sweetalert2';



//轉標準時間格式，使用splite切割T以後(含T本身)皆不需要
const defaultDate = ref(new Date().toISOString().split('T')[0]); //開始日
const endDate = ref(new Date().toISOString().split('T')[0]);    //結束日
const maxDays = 3; // 設置最大日期範圍為4天
const currentIndex = ref(null);
const userTime = ref('');
const userEvent = ref('');
const journeyList = ref([]);
const selectItem = ref(null);   //選擇行程
const isEditing = ref(false);
const tripName = ref('您的行程');

const mapStore = useClickMapStore();
const selectLocation = toRef(mapStore, 'selectLocation');

//天數差
const daysDifference = computed(() => {
    return differenceInDays(endDate.value, defaultDate.value);
});
// 生成日期范围内的所有日期
const dateRange = computed(() => {
    const start = new Date(defaultDate.value);
    //檢查是否超出四天(不含四本身)
    if (daysDifference.value > maxDays) {
        return [];
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
        //初始化每日行程
        newJourney.push([])
    })
    journeyList.value = newJourney;
}

const formatDate = (date) => {
    return format(date, 'M/d EEEE');
};
//新增
const join = (index) => {
    if (userTime.value && userEvent.value.trim()) {
        if (selectItem.value) {
            const itemIndex = journeyList.value[index].findIndex(item => item.id === selectItem.value.id);
            if (itemIndex !== -1) {
                journeyList.value[index][itemIndex] = { ...selectItem.value, time: userTime.value, event: userEvent.value }
            }
            selectItem.value = null;
        } else {
            const event = selectLocation.value || userEvent.value;
            journeyList.value[index].push({ id: Date.now(), time: userTime.value, event });
        }
        userTime.value = '';
        userEvent.value = '';
        currentIndex.value = null;
    } else {
        Swal.fire({
            title: '請填寫完整行程資訊!',
            text: '請確實填寫時間及行程資訊',
            icon: 'warning',
            confirmButtonText: '確認'
        }).then(() => {
            userTime.value = '';
            userEvent.value = '';
        })
    }
    //完成在排序
    if (index !== null && journeyList.value[index]) {
        journeyList.value[index].sort((a, b) => a.time.localeCompare(b.time));
    }
}

//修改
const editing = (item) => {
    selectItem.value = item;
    userTime.value = item.time;
    userEvent.value = item.event;
    currentIndex.value = journeyList.value.findIndex(day => day.includes(item));
}
//修改主題名稱
const editName = () => {
    if (isEditing.value) {
        isEditing.value = false
    } else {
        isEditing.value = true
    }
}

//取消
const cancel = () => {
    userTime.value = '';
    userEvent.value = '';
    currentIndex.value = null;
}

//刪除
const deleted = (index, id) => {
    Swal.fire({
        title: '確定要刪除這個行程嗎?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '刪除',
        cancelButtonText: '取消'
    }).then((result) => {
        if (result.isConfirmed) {
            journeyList.value[index] = journeyList.value[index].filter(item => item.id !== id);
            Swal.fire({
                icon: 'success',
                text: '已刪除!'
            })
        }
    }).catch((error) => {
        console.log('錯誤', error);

    })
}

//監聽有新值則變化
watch(selectLocation, (newLocation) => {
    console.log(currentIndex.value);
    if (newLocation || currentIndex.value !== null) {
        userEvent.value = newLocation;
    }
})
//監聽行程事件輸入框
watch(userEvent, (newEvent) => {
    selectLocation.value = newEvent;
})
//顯示輸入框
const showEdit = (index) => {
    currentIndex.value = index;
    selectItem.value = null;
    userTime.value = '';
    userEvent.value = selectLocation.value || '';

}
//監聽變化初始化journeyList內容
watch(dateRange, evertDayJourney, { immediate: true });
</script>