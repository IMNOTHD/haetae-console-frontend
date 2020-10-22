<template>
  <!--这里marginTop: '-4px'的目的是干掉基础组件的空白, 否则留个空白会对不齐-->
  <a-menu theme="dark" :default-selected-keys="['1']" mode="inline" :style="{ marginTop: '-4px' }">
    <a-menu-item key="1">
      <a-icon type="pie-chart"/>
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="desktop"/>
      <span>Option 2</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="user"/><span>User</span></span>
      <a-menu-item key="3">
        Tom
      </a-menu-item>
      <a-menu-item key="4">
        Bill
      </a-menu-item>
      <a-menu-item key="5">
        Alex
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="team"/><span>Team</span></span>
      <a-menu-item key="6">
        Team 1
      </a-menu-item>
      <a-menu-item key="8">
        Team 2
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="9">
      <a-icon type="file"/>
      <span>File</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "MainMenu"
}
</script>

<style scoped>

</style>
