<template>
  <a-layout-content style="padding: 0; height: 100%" ref="inner">
    <a-layout style="padding: 18px 0; background: #fff; min-height: 100%">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            mode="inline"
            :default-selected-keys="['basic']"
            style="height: 100%">
          <a-menu-item key="basic">
            基本设置
          </a-menu-item>
          <a-menu-item key="security">
            安全设置
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content :style="{ padding: '0 24px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<script>
export default {
  name: "PersonalCenter"
}
</script>

<style scoped>

</style>
