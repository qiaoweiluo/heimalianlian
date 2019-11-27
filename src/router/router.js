// 导入路由
import Vuerouter from 'vue-router'
// 导入vue 用就要导入
import Vue from 'vue'

// 使用 use
Vue.use(Vuerouter)

// 导入 登录页面组件
import login from '../views/login/login.vue'

// 路由规则
const routes = [
    // 登录组件规则
    {
        path:"/login",
        component: login
    }
]

// 创建路由实例
const router = new Vuerouter({
    routes
})

// 挂载到Vue实例上 暴露出去
export default router;