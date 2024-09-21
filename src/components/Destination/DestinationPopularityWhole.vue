<template>
    <div v-if="clickStatus">
        <div class="lightBox" @click="closeEvnt">
            <div class="lightBox-content" @click.stop>
                <button class="closeBtn" @click="closeEvnt"><i class="fa-regular fa-circle-xmark"></i></button>
                <div class="image">
                    <img :src="data.picture">
                </div>
                <div class="textContent">
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
    </div>
</template>

<script setup>

//接收父組件
const { clickStatus, data } = defineProps({ clickStatus: Boolean, data: Object });
// console.log(data);

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
        gap: 20px;

        .closeBtn {
            position: absolute;
            top: 5px;
            right: 5px;
            border: none;
            background: none;
            font-size: 24px;
            padding: 0;
            cursor: pointer;
            transition: .3s ease;

            &:hover {
                color: #eee;
            }
        }

        .image {
            width: 50%;
            display: flex;
            flex-grow: 1;

            img {
                width: 100%;
                vertical-align: top;
                border-radius: 5px;
            }
        }

        .textContent {
            display: flex;
            flex-direction: column;
            width: 50%;

            .text {
                h3 {
                    margin-bottom: 10px;
                    letter-spacing: .1em;
                }

                .satr {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;

                    img {
                        width: fit-content;
                        vertical-align: top;
                    }

                    span {
                        margin-left: 10px;
                    }
                }
            }

            .subtitle {
                margin-bottom: 10px;

                span {
                    display: block;
                    font-size: 14px;
                }
            }

            .content {
                letter-spacing: .1em;
                line-height: 1.2em;
            }
        }
    }
}
</style>