<template>
  <!--这里marginTop: '-4px'的目的是干掉基础组件的空白, 否则会对不齐-->
  <a-menu
      theme="dark"
      :default-selected-keys="['index']"
      :defaultOpenKeys="['Activity', 'SystemControl']"
      mode="inline"
      :style="{ marginTop: '-4px' }"
      @click="menuClicked"
      :selectedKeys="selectedKeys">
    <a-menu-item key="index" @click="$router.push('/')">
      <a-icon type="desktop"/>
      <span>{{ label["index"] }}</span>
    </a-menu-item>
    <a-sub-menu key="Activity">
      <span slot="title"><a-icon type="bank"/><span>{{ label["Activity"] }}</span></span>
      <a-menu-item key="ActivityCreate" @click="$router.push('/Activity/ActivityCreate')">
        <a-icon type="cloud"/>
        {{ label["ActivityCreate"] }}
      </a-menu-item>
      <a-menu-item key="StateControl" @click="$router.push('/Activity/StateControl')">
        <a-icon type="fire"/>
        {{ label["StateControl"] }}
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="SystemControl">
      <span slot="title"><a-icon type="setting"/><span>{{ label["SystemControl"] }}</span></span>
      <a-menu-item key="PersonalCenter" @click="$router.push('/SystemControl/PersonalCenter')">
        <a-icon type="api"/>
        {{ label["PersonalCenter"] }}
      </a-menu-item>
      <a-menu-item key="AuthorityControl" @click="$router.push('/SystemControl/AuthorityControl')">
        <a-icon type="branches"/>
        {{ label["AuthorityControl"] }}
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
        "Activity": "活动管理",
        "ActivityCreate": "创建活动",
        "StateControl": "状态管理",
        "SystemControl": "系统管理",
        "PersonalCenter": "个人中心",
        "AuthorityControl": "权限管理",
      },
      selectedKeys: ["index"],
    }
  },
  mounted() {
    let labelLoaded = ["index"];
    let path = this.$route.path;

    if (path !== "/") {
      labelLoaded = [];
      if (path.substr(path.length - 1) !== "/") {
        path = path + '/';
      }

      let patternPath = "";
      for (let i = 1; i < path.length; i++) {
        if (path[i] === "/") {
          labelLoaded.push(patternPath);
          patternPath = "";
        } else {
          patternPath = patternPath + path[i];
        }
      }
    }

    this.selectedKeys = [labelLoaded[labelLoaded.length - 1]];

    for (let i = 0; i < labelLoaded.length; i++) {
      labelLoaded[i] = this.label[labelLoaded[i]];
    }
    this.$store.commit('setMenuLabelPathSelected', labelLoaded);
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    menuClicked({item, key, keyPath}) {
      this.selectedKeys = [key];

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
