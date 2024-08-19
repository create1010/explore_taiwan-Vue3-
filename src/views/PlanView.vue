<template>
    <section class="section section-planPage">
        <div class="container">
            <div class="loading" v-if="loading">
                <div class="loadingAnimatiom"></div>
            </div>
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
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const useStore = useMemberStore()
const router = useRouter()
const loading = ref(true)
let planPage = null

onMounted(() => {
    if (useStore.loginStatus === false) {
        planPage = setTimeout(() => {
            loading.value = false
            router.push('/Login')
        }, 3000)
    } else {
        loading.value = false
    }
})

onBeforeUnmount(() => {
    if (planPage) {
        clearTimeout(planPage)
    }
})

</script>

<style lang="scss" scoped>
.section-planPage {
    height: calc(100vh - 66.47px - 232px);
    padding: 0;
    position: relative;

    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 10;

        .loadingAnimatiom {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top-color: transparent;
            border-radius: 100%;
            animation: spin 1s linear infinite;
        }
    }

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

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>