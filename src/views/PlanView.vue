<template>
    <section class="section section-planPage">
        <div class="container">
            <div class="controlFlex">
                <PlanBar class="planBar" />
                <PlanTest />
            </div>
        </div>
    </section>
</template>

<script setup>
import PlanBar from '@/components/Plan/PlanBar.vue';
import PlanTest from '@/components/Plan/PlanTest.vue';
</script>

<style lang="scss" scoped>
.section-planPage {
    height: calc(100vh - 66.47px - 232px);
    padding: 0;

    .controlFlex {
        display: flex;
    }
}
</style>