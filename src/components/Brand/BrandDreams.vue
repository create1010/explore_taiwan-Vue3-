<template>
    <section class="section section-dreams">
        <div class="container">
            <div class="title">
                <h2>夢想的彼方</h2>
                <h2>Beyond Dreams</h2>
            </div>
            <div class="cards">
                <div class="card" v-for="(card, index) in cardList" :key="index">
                    <div class="theme">
                        <div class="icon" v-html="card.icon">
                        </div>
                        <h3>{{ card.theme }}</h3>
                    </div>
                    <div class="content">
                        <p>{{ card.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

const cardList = reactive([
    {
        icon: '<i class="fa-solid fa-lightbulb"></i>',
        theme: '探索與發現',
        content: '在 Explore Taiwan 的旅程中，我們將引領遊客深入台灣深藏的文化寶藏。我們深知台灣擁有豐富多元的文化資產，從傳統的藝術手工藝品到現代的藝文表演，每一處都蘊含著深厚的歷史底蘊。透過探索這些文化遺產，遊客將有機會深入了解台灣的多元文化，並在旅程中不斷發現新的驚喜與體驗'
    },
    {
        icon: '<i class="fa-solid fa-user-group"></i>',
        theme: '文化交流',
        content: '我們致力於在 Explore Taiwan 的旅程中促進本地與遊客之間的文化交流。我們深知台灣文化的獨特之處，並希望能夠通過這次旅程與遊客分享這份獨特的文化魅力。我們將提供豐富多樣的文化體驗活動，讓遊客能夠親身感受台灣的傳統文化和現代風情，同時也鼓勵他們與當地居民進行交流與互動，以增進彼此的理解與友誼。'
    },
    {
        icon: '<i class="fa-solid fa-school"></i>',
        theme: '可持續發展',
        content: '我們深知台灣的自然資源和文化遺產的珍貴價值，並致力於保護和推廣這些寶貴資產。在 Explore Taiwan 的旅程中，我們將秉持著可持續發展的理念，通過推廣生態旅遊和文化保育活動，促進旅遊業的健康發展，同時也保護和維護台灣獨特的自然風景和文化景觀，以確保這片美麗的土地能夠永續發展。'
    },
    {
        icon: '<i class="fa-solid fa-headphones"></i>',
        theme: '服務至上',
        content: '在 Explore Taiwan 我們將客戶滿意度置於首位，致力於為每一位遊客提供優質的服務和全方位的支援。我們的團隊將全心全意地為遊客提供專業、周到的服務，確保他們在台灣的旅程中能夠感受到溫暖和貼心。我們將不斷努力改進和提升我們的服務品質，以滿足遊客的需求和期待，讓他們留下美好而難忘的回憶。'
    },
])
</script>