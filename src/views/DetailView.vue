<template>
    <section class="section section-detail">
        <div class="container">
            <div class="detailBar">
                <div class="title">
                    <span>流連往返的回憶</span>
                    <h2>The best trip, the most beautiful memories</h2>
                    <span>All in this moment</span>
                </div>
                <div class="content">
                    <div class="picture">
                        <img :src="detail.img" :alt="detail.alt" />
                    </div>
                    <div class="text">
                        <h3>{{ detail.title }}</h3>
                        <p>{{ detail.content }}</p>
                        <span>遊客 {{ detail.tourists }} 評論於 {{ detail.date }} </span>
                    </div>
                </div>
                <div class="controlPage">
                    <div class="page">
                        <RouterLink>
                            <i class="fa-solid fa-angle-left"></i>
                            <span>上一則</span>
                        </RouterLink>
                        <RouterLink>
                            <span>下一則</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </RouterLink>
                    </div>
                    <div class="returnList">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { RouterLink } from 'vue-router';


const props = defineProps({ id: String });

const detailList = [
    {
        id: '1',
        alt: '淡水',
        title: '淡水老街',
        content: '淡水一日遊帶給我無盡的驚喜與愉悅。徜徉於老街巷弄中，濃厚的歷史氣息令人心曠神怡；品嚐當地美食，深刻體驗了淡水文化的獨特魅力。沿著淡水河岸漫步，欣賞著美麗的夕陽，頓時感受到了寧靜和美好。淡水老街，是淡水這座迷人小鎮的靈魂所在，散發著濃郁的人情味與古韻，讓我流連忘返。',
        tourists: '李先生',
        date: '2020/10/10',
    },
    {
        id: '2',
        alt: '清境農場',
        title: '清境農場',
        content: '南投清境農場帶給我一場悠閒愜意的度假體驗。清新的空氣、青翠的草原和親切的動物們讓我忘卻了城市的喧囂，重新與大自然連結。在這裡，我不僅能夠享受寧靜的時光，還可以品嚐到道地的農場美食，感受到南投的純樸鄉村風情。這趟旅程讓我充滿了愉悅和滿足，值得再度造訪。',
        tourists: '吳先生',
        date: '2020/12/1',
    },
    {
        id: '3',
        alt: '日月潭',
        title: '日月潭',
        content: '日月潭的湖光山色讓我心曠神怡。在湖邊漫步，眺望碧波蕩漾的湖面和遠山疊翠，彷彿置身於仙境般的美景中。租船湖上划船，感受湖水的清涼和風的撫慰，令人心曠神怡。品嚐當地美食，體驗異國風情，彷彿一場心靈的洗禮，讓我對這片湖光山色充滿了無盡的感激與留戀。',
        tourists: '林先生',
        date: '2021/1/3',
    },
    {
        id: '4',
        alt: '阿里山',
        title: '阿里山',
        content: '阿里山的靜謐山林深深吸引著我。站在觀景台眺望日出，雲霧繚繞，太陽漸漸升起，景色壯麗動人，令人心馳神往。漫步於茂密的森林中，聽著鳥鳴蟲鳴，清新的空氣充滿了山林的氣息。品嚐當地的茶品，感受茶香的醇厚，彷彿置身於世外桃源。阿里山的美景與神秘感讓我流連忘返，這趟旅程成為了我心中難以磨滅的回憶。',
        tourists: '陳先生',
        date: '2021/2/13',
    },
    {
        id: '5',
        alt: '太魯閣國家公園',
        title: '太魯閣',
        content: '太魯閣國家公園的壯麗景色令我讚嘆不已。走在峽谷中，巍峨的岩壁、澎湃的溪水、翠綠的樹林，處處彰顯大自然的威嚴與美麗。攀登高峰，俯瞰雄偉景致，心靈仿佛得到了淨化。而當地原住民的文化也深深吸引著我，他們的故事、歌舞，為這片大自然增添了更多色彩。太魯閣國家公園是一處充滿奇幻與魅力的寶地，讓我深深著迷。',
        tourists: '宋小姐',
        date: '2021/4/1',
    },
    {
        id: '6',
        alt: '綠島',
        title: '綠島',
        content: '綠島的自然美景與海洋風情深深吸引了我。漫步在綿延的海岸線上，清澈的海水、白色的沙灘和巍峨的岩壁讓我目不轉睛。潛入海底，探索多彩的珊瑚礁和繽紛的海洋生物，彷彿置身於另一個世界。而綠島的人文歷史也令人動容，原住民的文化傳承和島上的古蹟，為這片寶島增添了更多魅力。綠島的美麗和神秘讓我留下了難忘的回憶。',
        tourists: '賴小姐',
        date: '2021/6/6',
    },
]

//使用computed從接收id與detailList陣列中id做比對，使用find函式尋找，接著判斷如果比對到相同值
//圖片使用動態方式依id值生成相對應的資訊

const detail = computed(() => {
    const filterDetail = detailList.find(e => e.id === props.id);
    if (filterDetail) {
        return {
            ...filterDetail,    //複製屬性，保留原陣列資訊
            img: `/public/img/remember/${filterDetail.id}.png`
        };
    }
    return null;
});

</script>

<style scoped></style>