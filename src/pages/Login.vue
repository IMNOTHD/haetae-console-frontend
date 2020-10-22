<template>
  <v-app>
    <v-main class="backgroud-img">
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
                    label="用户名"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"/>
                <v-text-field
                    label="密码"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"/>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">登 录</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    document.title = "登录 - 第二课堂管理系统";
  },
  methods: {
  }
}
</script>

<style scoped>
.backgroud-img {
  background: url('https://cdn.vuetifyjs.com/images/parallax/material.jpg') no-repeat;
  background-size: cover;
}
</style>
