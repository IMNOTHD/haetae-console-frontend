<template>
  <!--这里marginTop: '-4px'的目的是干掉基础组件的空白, 否则留个空白会对不齐-->
  <a-menu theme="dark" :default-selected-keys="['1']" mode="inline" :style="{ marginTop: '-4px' }" @click="menuClicked">
    <a-menu-item key="1">
      <a-icon type="pie-chart"/>
      <span>{{ label["1"] }}</span>
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="desktop"/>
      <span>{{ label["2"] }}</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="user"/><span>{{ label["sub1"] }}</span></span>
      <a-menu-item key="3">
        {{ label["3"] }}
      </a-menu-item>
      <a-menu-item key="4">
        {{ label["4"] }}
      </a-menu-item>
      <a-menu-item key="5">
        {{ label["5"] }}
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="team"/><span>{{ label["sub2"] }}</span></span>
      <a-menu-item key="6">
        {{ label["6"] }}
      </a-menu-item>
      <a-menu-item key="8">
        {{ label["8"] }}
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="9">
      <a-icon type="file"/>
      <span>{{ label["9"] }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      label: {
        "1": "Option 1",
        "2": "Option 2",
        "3": "Tom",
        "4": "Bill",
        "5": "Alex",
        "6": "Team 1",
        "8": "Team 2",
        "9": "File",
        "sub1": "User",
        "sub2": "Team",
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
