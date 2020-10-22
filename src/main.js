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

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Vuex)

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
