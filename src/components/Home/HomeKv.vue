<template>
    <section class="section section-kv" ref="sectionKv">
        <div class="container">
            <div class="kvWrap">
                <div class="leftFood">
                    <img src="../../../public/img/home/1.png" alt="珍珠奶茶">
                    <img src="../../../public/img/home/2.png" alt="牛肉麵">
                </div>
                <h2>一口醉人，千般滋味</h2>
                <div class="rightFood">
                    <img src="../../../public/img/home/3.png" alt="雞肉飯">
                    <img src="../../../public/img/home/4.png" alt="小籠包">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useScrollStore } from '../../stores/homeScroll'

const scrollStore = useScrollStore();
const sectionKv = ref(null);


//methods
const handleScroll = () => {
    //判斷位置是否與導覽列重疊
    if (!sectionKv.value || !scrollStore.navRef) return;
    const kvRect = sectionKv.value.getBoundingClientRect();
    const navRect = scrollStore.navRef.getBoundingClientRect();
    //套用pinia中方法
    scrollStore.setTransparent(kvRect.top <= navRect.bottom);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
