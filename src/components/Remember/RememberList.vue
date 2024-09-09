<template>
    <section class="section section-rememberList">
        <div class="container">
            <div class="main">
                <div class="title">
                    <span>流連往返的回憶</span>
                    <h2>The best trip, the most beautiful memories</h2>
                    <span>All in this moment</span>
                </div>
                <div class="picture">
                    <div class="card" v-for="card in showList" :key="card.id">
                        <div class="image">
                            <RouterLink :to="{ name: 'Detail', params: { id: card.id } }">
                                <img :src="card.img" :alt="card.alt">
                            </RouterLink>
                        </div>
                        <span>{{ card.content }}</span>
                    </div>
                </div>
                <div class="moreBtn" v-if="showList.length < cardList.length">
                    <button class="loadMore" @click="moreDownload">
                        <i class="fa-solid fa-file-circle-plus"></i>
                        <span>載入更多</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, reactive, ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const show = ref(6);
const cardList = reactive([]);

//data
const fetchData = async () => {
    try {
        const response = await fetch('/JSON/Remember/Remember.json');
        const data = await response.json();
        cardList.push(...data);
        console.log(cardList);

    } catch (error) {
        console.log('錯誤', error);

    }
}

onMounted(() => {
    fetchData();
})

const showList = computed(() => {
    return [...cardList].slice(0, show.value);
})

const moreDownload = () => {
    if (show.value + 6 <= cardList.length) {
        show.value += 6;
    } else {
        show.value = cardList.length;
    }
}

</script>