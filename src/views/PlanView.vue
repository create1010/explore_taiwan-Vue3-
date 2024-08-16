<template>
    <section class="section section-planPage">
        <div class="container">
            <div class="controlFlex" v-if="useStore.loginStatus === true">
                <PlanBar class="planBar" />
                <PlanTest />
            </div>
            <div class="nomember" v-else>
                <span>加入會員，享受完整旅遊規劃功能</span>
            </div>
        </div>
    </section>
</template>

<script setup>
import PlanBar from '@/components/Plan/PlanBar.vue';
import PlanTest from '@/components/Plan/PlanTest.vue';
import { useMemberStore } from '@/stores/userLogin';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const useStore = useMemberStore()
const router = useRouter()

onMounted(() => {
    if (useStore.loginStatus === false) {
        setTimeout(() => {
            router.push('/Login')
        }, 5000)
    }
})

</script>

<style lang="scss" scoped>
.section-planPage {
    height: calc(100vh - 66.47px - 232px);
    padding: 0;
    position: relative;

    .controlFlex {
        display: flex;
    }

    .nomember {
        width: 100%;
        height: calc(100vh - 66.47px - 232px);
        background: linear-gradient(270deg, rgb(39, 115, 230), #7393bd);
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-size: 24px;
            font-weight: bold;
            color: #fff;

        }
    }
}
</style>