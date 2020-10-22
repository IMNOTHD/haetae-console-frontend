import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {
    },
    // 需要从state中的数据计算应写getter
    getters: {
    },
    // 提交mutation是更改状态的唯一方法，并且这个过程是同步的
    mutations: {
    },
    // 异步逻辑都应该封装到 action 里面
    actions: {
    }
})