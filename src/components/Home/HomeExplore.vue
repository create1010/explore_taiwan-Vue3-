<template>
    <section class="section section-explore">
        <div class="container">
            <div class="exploreList">
                <div class="leftBar">
                    <div class="slogan">
                        <span>探尋文化之韻</span>
                        <span>採取靈感，打造獨一無二的精彩之旅。</span>
                    </div>
                    <button @click="goToPlan">立即啟航</button>
                </div>
                <div class="rightBar">
                    <div class="locationList" v-for="item in area" :key="item.id">
                        <div class="plaeName">
                            <img :src="item.image" width="200" height="250" alt="景點">
                            <div class="text">
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const area = reactive([
    {
        id: 1,
        title: '台北一日游：城市魅影',
        content: '漫步於台北一日遊，探索龍山寺祈福，品嘗永康街美食，登頂象山眺望城市夜景，感受台北的繁華與文化底蘊。',
        image: '/img/home/9.png'
    },
    {
        id: 2,
        title: '台中三日遊：文化美食之旅',
        content: '度過三天台中之旅，品味台中美食，探訪彩虹眷村、東海大學，遊覽逢甲夜市，感受台中濃厚的文化底蘊。',
        image: '/img/home/10.png'
    },
    {
        id: 3,
        title: '高雄五日遊：海港探險家',
        content: '盡情享受五日高雄之旅，探索旗津漁人碼頭，徜徉草衙風情街，品嘗刈包、擂茶，登頂旗山石榴山，體驗高雄海港之美。',
        image: '/img/home/11.png'
    },
])

const goToPlan = () => {
    router.push('/Plan')
}
</script>