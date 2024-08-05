<script setup>
import HeaderView from './components/Layout/HeaderView.vue'
import FooterView from './components/Layout/FooterView.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <HeaderView />
    <RouterView />
    <FooterView />
  </div>
</template>

<style lang="scss">
@import './assets/style.scss';
</style>
