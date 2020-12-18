<template>
  <a-layout class="background-img full-page">
    <a-layout-content>
      <a-card class="center" style="width: 500px" title="登录">
        <a-form-model :model="loginForm" @submit="blockLogin" @submit.native.prevent>
          <a-form-model-item>
            <a-input v-model="loginForm.username" placeholder="用户名" ref="username">
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-input v-model="loginForm.password" type="password" placeholder="密码">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-button
                style="float: right"
                :loading="loading"
                type="primary"
                html-type="submit"
                :disabled="loginForm.user === '' || loginForm.password === ''">
              Log in
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </a-layout-content>
  </a-layout>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      loginForm: {
        username: "",
        password: "",
      },
      errorMsg: "",
      loginBlock: false,
    }
  },
  beforeCreate() {
    document.title = "登录 - 第二课堂管理系统";
  },
  mounted() {
    // 销毁全部antd对话框
    this.$destroyAll();

    // cookie中已有token, 前往主页面
    if (this.$cookies.isKey("user_token")) {
      this.$router.push("/");
    }

    // 自动聚焦
    this.$refs.username.focus();
  },
  methods: {
    // 锁住login函数, 防止一大堆提交
    async blockLogin() {
      if (this.loginBlock) {
        return;
      }
      this.loginBlock = true;
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

      this.loading = true;
      await sleep(500);

      await this.onLogin();

      this.loading = false;
      this.loginBlock = false;
    },
    async onLogin() {
      let result = await api.login({
        username: this.loginForm.username,
        password: this.loginForm.password,
      });

      if (result.data.errorCode !== "200") {
        this.errorMsg = result.data.errorMsg;
        return;
      }

      //todo 2020-11-22 22:07:08 线上能正常使用set-cookie header, 请移除下面的$cookies.set
      this.$cookies.set("user_token", result.data.data.token);
      //this.$store.commit('setAvatarUrl', result.data.data.avatarUrl);
      //this.$store.commit('setUserInfo', result.data.data["userInfo"]);

      await this.$router.push('/');
    },
  },
}
</script>

<style scoped>
.background-img {
  background: url('../assets/material.jpg') no-repeat;
  background-size: cover;
}

.full-page {
  width: 100%;
  height: 100%;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

>>> .ant-card-head {
  background-color: rgb(236, 236, 236) !important;
}

>>> .ant-card-body {
  padding-bottom: 0 !important;
}
</style>
