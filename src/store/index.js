import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        menuLabelPathSelected: [],
        avatarUrl: '',
        userInfo: {},
    },
    // 需要从state中的数据计算应写getter, 如只取数据请直接使用state
    getters: {
    },
    // 提交(commit)mutation是更改状态的唯一方法，并且这个过程是同步的
    mutations: {
        setMenuLabelPathSelected(state, realLabel) {
            state.menuLabelPathSelected = realLabel;
        },
        setAvatarUrl(state, avatarUrl) {
            state.avatarUrl = avatarUrl;
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
    },
    // 异步逻辑都应该封装到 action 里面
    actions: {
    }
})
