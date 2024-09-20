<template>
    <div v-if="clickStatus">
        <div class="lightBox">
            <div class="lightBox-content">
                <button class="closeBtn" @click="closeEvnt"><i class="fa-regular fa-circle-xmark"></i></button>
                <div class="image">
                    <img :src="data.picture">
                </div>
                <div class="text">
                    <h3>{{ data.title }}</h3>
                    <div class="satr">
                        <img :src="data.image">
                        <span>{{ data.count }}</span>
                    </div>
                </div>
                <div class="subtitle">
                    <span>{{ data.smailetitle }}</span>
                </div>
                <p class="content">
                    {{ data.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

//接收父組件
const { clickStatus, data } = defineProps({ clickStatus: Boolean, data: Object });
console.log(data);

//回傳父組件
const emit = defineEmits(['close']);

const closeEvnt = () => {
    emit('close')
}
</script>

<style lang="scss" scoped>
.lightBox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;

    .lightBox-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        max-width: 600px;
        width: 100%;
        position: relative;
        display: flex;

        .closeBtn {
            position: absolute;
            top: 5px;
            right: 5px;
            border: none;
            background: none;
            font-size: 20px;
            padding: 0;
            cursor: pointer;
        }

        .image {
            width: 100%;

            img {
                width: 100%;
                vertical-align: top;
            }
        }


        .text {
            h3 {}

            .satr {
                img {}

                span {}
            }
        }

        .subtitle {
            span {}
        }

        .content {}
    }
}
</style>