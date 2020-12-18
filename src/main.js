import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueRouter from 'vue-router'
import routers from "@/router"
import Vuex from 'vuex'
import store from '@/store'
import VueCookies from 'vue-cookies'
import ECharts from 'vue-echarts'

Vue.config.productionTip = false

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueCookies)

Vue.component('v-chart', ECharts);

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
