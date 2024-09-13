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
                    <form @submit.prevent="sendForm">
                        <div class="form-group">
                            <label>類別</label>
                            <div class="checkbox-group">
                                <input type="radio" id="estimate" name="travel" value="estimate" v-model="form.journey">
                                <label for="estimate">行程估價</label>
                                <input type="radio" id="plan" name="travel" value="plan" v-model="form.journey">
                                <label for="plan">行程規劃</label>
                                <input type="radio" id="other" name="travel" value="other" v-model="form.journey">
                                <label for="other">其他</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="destination">旅遊地點</label>
                            <input type="text" id="destination" v-model="form.location" @input="clearError('location')"
                                :style="{ border: errors.location ? '2px solid #f00' : '' }">
                        </div>
                        <div class="form-group">
                            <label for="name">姓名</label>
                            <input type="text" id="name" v-model="form.name" @input="clearError('name')"
                                :style="{ border: errors.name ? '2px solid #f00' : '' }">
                        </div>

                        <div class="form-group">
                            <label>性別</label>
                            <div class="radio-group">
                                <input type="radio" id="male" name="male" value="male" v-model="form.gender">
                                <label for="male">男生</label>
                                <input type="radio" id="female" name="male" value="female" v-model="form.gender">
                                <label for="female">女生</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="phone">連絡電話</label>
                            <input type="tel" id="phone" placeholder="手機或市內電話(請加區碼)" v-model="form.tel"
                                @input="clearError('tel')" :style="{ border: errors.tel ? '2px solid #f00' : '' }">
                        </div>

                        <div class="form-group">
                            <label for="email">e-mail</label>
                            <input type="email" id="email" placeholder="請輸入電子郵件" v-model="form.email"
                                @input="clearError('email')" :style="{ border: errors.email ? '2px solid #f00' : '' }">
                        </div>

                        <div class="form-group full-width">
                            <label for="comments">備註/需求</label>
                            <textarea v-model="form.comments" class="comments"
                                placeholder="(選填)，有任何需求或備註歡迎留言告知"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="captcha">驗證碼</label>
                            <div class="captcha-group">
                                <input type="text" id="captcha" placeholder="請輸入驗證碼" v-model="form.captcha"
                                    @input="clearError('captcha')"
                                    :style="{ border: errors.captcha ? '2px solid #f00' : '' }">
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
                            <button type="submit">送出報名</button>
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
import { useRouter } from 'vue-router';

const router = useRouter();
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
    newsletter: '',
})

//定義表單狀態
const errors = ref({
    location: false,
    name: false,
    tel: false,
    email: false,
    captcha: false,
})
//清除警示
const clearError = (index) => [
    errors.value[index] = false
]


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
const sendForm = () => {
    //寬鬆檢查 Demo用
    const localcall = new RegExp('^(02|0[3-9]\\d)\\d{6,8}$');
    const mobile = new RegExp('^09\\d{2}\\d{6}$');
    //檢查欄位錯誤
    errors.value = {
        location: form.value.location.trim() === '',
        name: form.value.name.trim() === '',
        tel: form.value.tel.trim() === '' || (!localcall.test(form.value.tel) || !mobile.test(form.value.tel)),
        email: form.value.email.trim() === '',
        captcha: form.value.captcha.trim() === '' || form.value.captcha.trim() !== defaultCode.value,
    };
    //找尋error物件中是否有錯誤欄位
    const hasErrors = Object.values(errors.value).includes(true);
    const inputRadio = form.value.journey !== '' && form.value.gender !== '';
    const inputNull = Object.keys(errors.value).some(item => form.value[item].trim() === '');
    if (!inputRadio || inputNull) {
        Swal.fire({
            text: '請完整填寫欄位',
            icon: 'error',
            showCloseButton: true
        });
        return;
    }
    //錯誤提示
    if (hasErrors) {
        let errorList = '';

        if (errors.value.location) {
            errorList += '請輸入旅遊景點'
        }
        if (errors.value.name) {
            errorList += '請輸入姓名'
        }
        if (errors.value.tel) {
            errorList += '請輸入正確電話號碼格式'
        }
        if (errors.value.email) {
            errorList += '請輸入正確電子郵件格式'
        }
        if (errors.value.captcha) {
            errorList += '驗證碼錯誤'
        }


        Swal.fire({
            text: errorList.trim(),
            icon: 'error',
            showCloseButton: true
        }).then(() => {
            if (errors.value.captcha) {
                form.value.captcha = '';
                refresh();
                //框線恢復
                errors.value.captcha = true;
            }

        });
        return
    }

    //檢查是否皆填寫
    // const allfinish = !errors.value.location && !errors.value.name && !errors.value.tel &&
    //     !errors.value.email && !errors.value.captcha && form.value.journey !== '' && form.value.gender !== '';

    //單獨處理
    // if (errors.value.captcha) {
    //     Swal.fire({
    //         text: '驗證碼錯誤，請重新輸入',
    //         icon: 'error',
    //         showCloseButton: true
    //     }).then(() => {
    //         form.value.captcha = '';
    //         refresh();
    //         //框線恢復
    //         errors.value.captcha = true;
    //     });
    //     return
    // }
    Swal.fire({
        text: '我們已收到您的需求，將有專人為您服務',
        icon: 'success',
        showCloseButton: true
    }).then(() => {
        router.push({ name: 'Home' });
    });
}
</script>