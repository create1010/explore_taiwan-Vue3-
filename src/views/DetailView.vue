<template>
    <section class="section section-detail">
        <div class="container">
            <div class="detailBar">
                <div class="title">
                    <span>流連往返的回憶</span>
                    <h2>The best trip, the most beautiful memories</h2>
                    <span>All in this moment</span>
                </div>
                <div class="content" v-if="detail">
                    <div class="picture">
                        <img :src="detail.img" :alt="detail.alt" />
                    </div>
                    <div class="text">
                        <h3>{{ detail.title }}</h3>
                        <p>{{ detail.content }}</p>
                        <span>遊客 {{ detail.tourists }} 評論於 {{ detail.date }} </span>
                    </div>
                </div>
                <div class="controlPage">
                    <div class="page">
                        <RouterLink :to="{ name: 'Detail', params: { id: prevPage } }"
                            :class="{ 'smallest': !prevPage }">
                            <i class="fa-solid fa-angle-left"></i>
                            <span>上一則</span>
                        </RouterLink>
                        <RouterLink :to="{ name: 'Detail', params: { id: nextPage } }"
                            :class="{ 'maximum': !nextPage }">
                            <span>下一則</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </RouterLink>
                    </div>
                </div>
                <div class="returnList">
                    <RouterLink to="/Remember" class="icon">
                        <i class="fa-solid fa-file-lines"></i>
                        <span>返回列表</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, computed, ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps({ id: String });
const detailList = ref([])

onMounted(async () => {
    try {
        const response = await fetch('/JSON/Detail/DetailShare.json');
        const data = await response.json();
        detailList.value = data


    } catch (error) {
        console.log('錯誤', error);

    }
})

const detail = computed(() => {
    return detailList.value.find(e => e.id === props.id)
})

//當前頁面
const currentIndex = computed(() => {
    return detailList.value.findIndex(e => e.id === props.id);
});

const prevPage = computed(() => {
    const index = currentIndex.value - 1;
    return index >= 0 ? detailList.value[index].id : null;
});

const nextPage = computed(() => {
    const index = currentIndex.value + 1;
    return index < detailList.value.length ? detailList.value[index].id : null;
});
</script>

<style scoped></style>