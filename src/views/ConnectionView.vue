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
                            <label>類別</label>
                            <div class="checkbox-group">
                                <input type="radio" id="estimate" name="travel" v-model="form.journey">
                                <label for="estimate">行程估價</label>
                                <input type="radio" id="plan" name="travel" v-model="form.journey">
                                <label for="plan">行程規劃</label>
                                <input type="radio" id="other" name="travel" v-model="form.journey">
                                <label for="other">其他</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="destination">旅遊地點</label>
                            <input type="text" id="destination" v-model="form.location">
                        </div>
                        <div class="form-group">
                            <label for="name">姓名</label>
                            <input type="text" id="name" v-model="form.name">
                        </div>

                        <div class="form-group">
                            <label>性別</label>
                            <div class="radio-group">
                                <input type="radio" id="male" name="male" v-model="form.gender">
                                <label for="male">男生</label>
                                <input type="radio" id="female" name="male" v-model="form.gender">
                                <label for="female">女生</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">連絡電話</label>
                            <input type="tel" id="phone" placeholder="手機或市內電話(請加區碼)" v-model="form.tel">
                        </div>

                        <div class="form-group">
                            <label for="email">e-mail</label>
                            <input type="email" id="email" placeholder="請輸入電子郵件" v-model="form.email">
                        </div>

                        <div class="form-group full-width">
                            <label for="comments">備註/需求</label>
                            <textarea v-model="form.comments" class="comments"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="captcha">驗證碼</label>
                            <div class="captcha-group">
                                <input type="text" id="captcha" placeholder="請輸入驗證碼" v-model="form.captcha">
                                <span class="captcha">{{ defaultCode }}</span>
                                <i class="fa-solid fa-rotate" @click="refresh"></i>
                            </div>
                        </div>

                        <div class="form-group full-width">
                            <label for="newsletter">
                                <input type="checkbox" id="newsletter" v-model="form.newsletter">
                                我同意透過電子郵件接收不定期的旅遊訊息資訊。
                            </label>
                        </div>

                        <div class="form-group full-width">
                            <button type="submit" @click="sendForm">送出報名</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Swal from 'sweetalert2';
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
const form = ref({
    journey: '',
    location: '',
    name: '',
    gender: '',
    tel: '',
    email: '',
    comments: '',
    captcha: '',
    newsletter: true
})

//生成隨機驗證碼
const verifyCode = () => {
    const scope = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * scope.length);
        //將字串轉數字，並從scope陣列中找對應值
        result += scope.charAt(randomIndex)
    }
    return result
}

const defaultCode = ref(verifyCode());

//刷新驗證碼
const refresh = () => {
    defaultCode.value = verifyCode();
}

//表單送出檢查確認
const sendForm = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    const allfinish = form.value.journey !== '' && form.value.location.trim() !== '' &&
        form.value.name.trim() !== '' && form.value.gender !== '' &&
        form.value.tel.trim() !== '' && form.value.email.trim() !== '' &&
        form.value.comments.trim() !== '' && form.value.captcha.trim() !== '' &&
        form.value.newsletter === true;
    if (allfinish && form.value.captcha === defaultCode.value) {
        Swal.fire({
            text: '我們已收到您的需求，將有專人為您服務',
            icon: 'success',
            showCloseButton: true
        })
    } else {
        Swal.fire({
            text: '請完整填寫欄位',
            icon: 'error',
            showCloseButton: true,
            showConfirmButton: '確認'
        });
    }
}
</script>