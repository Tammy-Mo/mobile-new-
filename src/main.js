import Vue from 'vue'
import App from './App.vue'
import router from './js/router.js'
import "../node_modules/mint-ui/lib/style.min.css"
import './assets/css/iconfont.css'
import './assets/css/news.css'

import axios from 'axios' //引入并在vue中使用axios，全局axios
Vue.prototype.$axios=axios; //引入后，每个vue实例都有$axios属性

// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
