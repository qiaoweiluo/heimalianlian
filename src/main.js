import Vue from 'vue'
import App from './App.vue'

// 导入抽取的路由
import router from './router/router.js';

// 导入Element - ui 
import ElementUI from 'element-ui';
// 导入Element -ui的样式
import 'element-ui/lib/theme-chalk/index.css';

// 导入自己的全局样 式
import './style/base.css'

// 使用element- ui   use一下
Vue.use(ElementUI)



// 控制台打印信息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载Vue实例
  router
}).$mount('#app')
