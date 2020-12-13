<template>
  <!--这个页面的前端框架是vuetify. 为什么用这个呢, 我也不知道.jpg-->
  <v-app>
    <v-main class="background-img">
      <v-container
          class="fill-height"
          fluid>
        <v-row
            align="center"
            justify="center">
          <v-card class="elevation-12" style="min-width: 600px">
            <v-toolbar
                color="primary"
                dark
                flat>
              <v-toolbar-title>登录</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    :autofocus="true"
                    label="用户名"
                    name="login"
                    prepend-icon="mdi-account"
                    :error-messages="errorMsg"
                    type="text"
                    v-model="username"
                    @keyup.enter="blockLogin"/>
                <v-text-field
                    label="密码"
                    name="password"
                    prepend-icon="mdi-lock"
                    :error-messages="errorMsg"
                    type="password"
                    v-model="password"
                    @keyup.enter="blockLogin"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  :loading="loading"
                  :disabled="loading"
                  @click="blockLogin">
                登 录
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Login",
  data () {
    return {
      loader: null,
      loading: false,
      username: "",
      password: "",
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
  },
  methods: {
    // 锁住login函数, 防止一大堆提交
    async blockLogin() {
      if (this.loginBlock) {
        return;
      }
      this.loginBlock = true;
      const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

      this.loader = 'loading';
      this.loading = true;
      await sleep(500);

      await this.onLogin();

      this.loader = null;
      this.loading = false;
      this.loginBlock = false;
    },
    async onLogin() {
      let result = await api.login({
        username: this.username,
        password: this.password,
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
</style>
