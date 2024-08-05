<script setup>
import HeaderView from './components/Layout/HeaderView.vue'
import FooterView from './components/Layout/FooterView.vue'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div>
    <HeaderView />
    <HomeView />
    <FooterView />
  </div>
</template>

<style lang="scss">
@import './assets/style.scss';
</style>
