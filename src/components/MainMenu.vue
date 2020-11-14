<template>
  <!--这里marginTop: '-4px'的目的是干掉基础组件的空白, 否则会对不齐-->
  <a-menu
      theme="dark"
      :default-selected-keys="['index']"
      :defaultOpenKeys="['activitySub', 'systemControlSub']"
      mode="inline"
      :style="{ marginTop: '-4px' }"
      @click="menuClicked">
    <a-menu-item key="index">
      <a-icon type="desktop"/>
      <span>{{ label["index"] }}</span>
    </a-menu-item>
    <a-sub-menu key="activitySub">
      <span slot="title"><a-icon type="bank"/><span>{{ label["activitySub"] }}</span></span>
      <a-menu-item key="activityInsert">
        <a-icon type="cloud"/>
        {{ label["activityInsert"] }}
      </a-menu-item>
      <a-menu-item key="activityStateControl">
        <a-icon type="fire"/>
        {{ label["activityStateControl"] }}
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="systemControlSub">
      <span slot="title"><a-icon type="setting"/><span>{{ label["systemControlSub"] }}</span></span>
      <a-menu-item key="personalCenter">
        <a-icon type="api"/>
        {{ label["personalCenter"] }}
      </a-menu-item>
      <a-menu-item key="accessControl">
        <a-icon type="branches"/>
        {{ label["accessControl"] }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      label: {
        "index": "首页",
        "activitySub": "活动管理",
        "activityInsert": "创建活动",
        "activityStateControl": "状态管理",
        "tableControl": "业务报表",
        "systemControlSub": "系统管理",
        "personalCenter": "个人中心",
        "accessControl": "权限管理",
      }
    }
  },
  mounted() {
    this.$store.commit('setMenuLabelPathSelected', [this.label["1"]])
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    menuClicked({item, key, keyPath}) {
      // 注意: 这里的keyPath, 越小项排在越前面
      let realLabel = [];
      for (const keyPathKey of keyPath) {
        realLabel.push(this.label[keyPathKey]);
      }
      this.$store.commit('setMenuLabelPathSelected', realLabel.reverse())
    }
  }
}
</script>

<style scoped>

</style>
