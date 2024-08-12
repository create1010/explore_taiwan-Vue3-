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
                    <div class="card" v-for="card in cardList" :key="card.id">
                        <div class="image">
                            <RouterLink :to="{ name: 'Detail', params: { id: card.id } }">
                                <img :src="card.img" :alt="card.alt">
                            </RouterLink>
                        </div>
                        <span>{{ card.content }}</span>
                    </div>
                </div>
                <div class="moreBtn">
                    <RouterLink to="#" class="loadMore">
                        <i class="fa-solid fa-file-circle-plus"></i>
                        <span>載入更多</span>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
//data
const cardList = reactive([
    {
        id: '1',
        img: '/public/img/remember/1.png',
        alt: '淡水',
        content: '淡水風情：造訪台灣文化之美的絕佳去處'
    },
    {
        id: '2',
        img: '/public/img/remember/2.png',
        alt: '清境農場',
        content: '清境魅力：在高山農場尋找身心靈的寧靜與和諧'
    },
    {
        id: '3',
        img: '/public/img/remember/3.png',
        alt: '日月潭',
        content: '湖光山色：台灣心湖日月潭的美麗風光'
    },
    {
        id: '4',
        img: '/public/img/remember/4.png',
        alt: ' 阿里山',
        content: '雲霧繚繞：隱身雲霧之間阿里山的神秘之美'
    },
    {
        id: '5',
        img: '/public/img/remember/5.png',
        alt: '太魯閣',
        content: '峽谷奇觀：探索自然寶庫的壯麗景色'
    },
    {
        id: '6',
        img: '/public/img/remember/6.png',
        alt: '綠島',
        content: '絕世美景：大自然的饋贈與島民的熱情'
    },
])

</script>