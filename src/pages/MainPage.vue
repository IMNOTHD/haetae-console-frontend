<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo"></div>
      <MainMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-button
            type="link"
            @click="$notification['error']({
                        message: '未实现的功能',
                        description: '因为是懒狗，搜索还没做',
            })">
          <a-icon type="search" class="header-search-icon"/>
        </a-button>
        <AvatarDropdown/>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="(item, index) in $store.state.menuLabelPathSelected" v-bind:key="index">
            {{ item }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px', height: '100%' }">
          Bill is a cat.<br>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        第二课堂 ©2020 Created by <i>β-House</i>
      </a-layout-footer>
    </a-layout>
    <a-back-top>
      <div class="ant-back-top-inner">
        UP
      </div>
    </a-back-top>
  </a-layout>
</template>

<script>
import api from "@/api/api"
import MainMenu from "@/components/MainMenu";
import AvatarDropdown from "@/components/AvatarDropdown";

export default {
  name: "MainPage",
  data() {
    return {
      collapsed: false,
      x: "https://thirdwx.qlogo.cn/mmopen/vi_32/Sx8r4ibpk1BZFQOPZda4f8yyI6mg4Wq1iaibhET6RIBk4grTkBD5awUXS4efyO8Y9RnuwnjUOLmq6skMQIibH2hcCA/132"
    };
  },
  beforeCreate() {
    document.title = "控制台 - 第二课堂管理系统";
  },
  async mounted() {
    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const h = this.$createElement;
    // cookie中无token, 返回登录页面
    if (!this.$cookies.isKey("user_token")) {
      await this.$router.push("/login");
      return;
    }

    // 处理用户信息
    const token = this.$cookies.get("user_token");
    let result = await api.getUserInfo(token);
    if (result.data.errorCode !== "200") {
      this.$cookies.remove("user_token");
      this.$error({
        title: '错误',
        content: h('div', {}, [
          h('p', `调用接口发生严重错误：${result.data.errorMsg}`),
          h('p', '将在3秒后返回登录页面...'),
        ]),
        keyboard: false,
        maskClosable: false,
        okText: '确认',
        okType: 'danger',
        onOk() {
          this.$router.push("/login");
        },
      });

      // 3秒后返回主页面
      await sleep(3000);
      await this.$router.push("/login");
    }
    this.$store.commit('setAvatarUrl', result.data.data.avatarUrl);
    this.$store.commit('setUserInfo', result.data.data["userInfo"]);
  },
  methods: {},
  components: {
    "MainMenu": MainMenu,
    "AvatarDropdown": AvatarDropdown,
  }
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #e6f7ff;
  color: rgb(24, 144, 255);
  text-align: center;
  font-size: 20px;
  border-top: 3px solid #1890ff;
}

.header {
  background: #001529;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-search-icon {
  color: #e6f7ff;
  font-size: 18px;
  margin-right: 10px;
}
</style>
