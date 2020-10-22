<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo"></div>
      <MainMenu/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #001529; padding: 0"/>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px', height: '100%' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        第二课堂 ©2020 Created by <i>β-House</i>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import MainMenu from "@/components/MainMenu";

export default {
  name: "MainPage",
  data() {
    return {
      collapsed: false,
    };
  },
  mounted() {
    document.title = "控制台 - 第二课堂管理系统";
  },
  methods: {},
  components: {
    'MainMenu': MainMenu
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

</style>
