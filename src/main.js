import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueRouter from 'vue-router'
import routers from "@/router"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import store from '@/store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueCookies)

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

const vuetify = new Vuetify({})

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')
