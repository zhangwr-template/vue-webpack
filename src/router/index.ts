import * as VueRouter from 'vue-router'

// vue-router原理 https://www.jianshu.com/p/d59971198082
// vue中router与route区别 https://www.jianshu.com/p/758bde4d9c2e
const routes = [
  {
    path: '/ts-part',
    component: ()=>import('./../pages/ts-part.vue'),
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router
