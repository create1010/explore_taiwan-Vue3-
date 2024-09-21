import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //畫面開始都在最上方
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta:{title:"探索台灣 Explorem Taiwan"}
    },
    {
      path: '/brand',
      name: 'Brand',
      component: ()=>import('../views/BrandView.vue'),
      meta:{title:"品牌理念"}
    },
    {
      path: '/Destination',
      name: 'Destination',
      component: ()=>import('../views/DestinationView.vue'),
      meta:{title:"目的地"}
    },
    {
      path: '/Plan',
      name: 'Plan',
      component: ()=>import('../views/PlanView.vue'),
      meta:{title:"啟動計畫"}
    },
    {
      path: '/Remember',
      name: 'Remember',
      component: ()=>import('../views/RememberView.vue'),
      meta:{title:"美好回憶"}
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: ()=>import('../views/DetailView.vue'),
      meta:{title:"詳情資訊"},
      props:true
    },
    {
      path: '/Connection',
      name: 'Connection',
      component: ()=>import('../views/ConnectionView.vue'),
      meta:{title:"聯絡我們"}
    },
    {
      path: '/Login',
      name: 'Login',
      component: ()=>import('../views/LoginView.vue'),
      meta:{title:"會員登入"}
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 如果路由中有 meta.title，則設置頁面title
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '默認標題'; //默認標題
  }
  next();
});


export default router
