import Vue from 'vue'
import App from './App.vue'
import echarts from "echarts"
import "../js/china.js"
import "../js/index.js"
import "../css/index.css"







Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
