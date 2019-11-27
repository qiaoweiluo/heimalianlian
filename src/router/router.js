// 导入路由
import Vuerouter from 'vue-router'
// 导入vue 用就要导入
import Vue from 'vue'

// 使用 use
Vue.use(Vuerouter)

// 路由规则
const routes = [
    {

    }
]

// 创建路由实例
const router = new Vuerouter({
    routes
})

// 挂载到Vue实例上 暴露出去
export default router;