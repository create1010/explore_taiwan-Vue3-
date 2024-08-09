<template>
    <section class="section section-connect">
        <div class="container">
            <h2>聯絡我們</h2>
            <div class="formWrap">
                <div class="left">
                    <div class="connectStyle" v-for="(e, index) in contactUs" :key="index">
                        <div class="icon" v-html="e.icon"></div>
                        <span>{{ e.style }}</span>
                    </div>
                </div>
                <div class="right">
                    <div class="customizedFrom">
                        <h3>客製化需求表</h3>
                        <span>如果您有任何需求,歡迎留下您的資料,我們將會在收到您的需求後,儘快與您聯繫!</span>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="type">類別</label>
                            <div class="checkbox-group">
                                <input type="checkbox" id="estimate">
                                <label for="estimate">行程估價</label>
                                <input type="checkbox" id="plan">
                                <label for="plan">行程規劃</label>
                                <input type="checkbox" id="other">
                                <label for="other">其他</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="destination">旅遊地點</label>
                            <input type="text" id="destination">
                        </div>
                        <div class="form-group">
                            <label for="name">姓名</label>
                            <input type="text" id="name">
                        </div>

                        <div class="form-group">
                            <label>性別</label>
                            <div class="radio-group">
                                <input type="radio" id="male">
                                <label for="male">男生</label>
                                <input type="radio" id="female">
                                <label for="female">女生</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">連絡電話</label>
                            <input type="tel" id="phone" placeholder="手機或市內電話(請加區碼)">
                        </div>

                        <div class="form-group">
                            <label for="email">e-mail</label>
                            <input type="email" id="email" placeholder="請輸入電子郵件">
                        </div>

                        <div class="form-group full-width">
                            <label for="comments">備註/需求</label>
                            <textarea class="comments"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="captcha">驗證碼</label>
                            <div class="captcha-group">
                                <input type="text" id="captcha" placeholder="請輸入驗證碼">
                                <span class="captcha">HeLlO</span>
                                <i class="fa-solid fa-rotate"></i>
                            </div>
                        </div>

                        <div class="form-group full-width">
                            <label for="newsletter">
                                <input type="checkbox" id="newsletter">
                                我同意透過電子郵件接收不定期的旅遊訊息資訊。
                            </label>
                        </div>

                        <div class="form-group full-width">
                            <button type="submit">送出報名</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const contactUs = ref([
    {
        icon: '<i class="fa-solid fa-phone"></i>',
        style: '+02(886) 1234 5678'
    },
    {
        icon: '<i class="fa-solid fa-envelope"></i>',
        style: 'explore168@gmail.com'
    },
])

</script>