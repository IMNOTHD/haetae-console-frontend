<template>
  <a-dropdown placement="bottomLeft">
    <a>
      <a-avatar
          shape="square"
          v-bind:src="$store.state.avatarUrl"
          style="margin-right: 5px"/>
      <span style="color: #e6f7ff">{{ $store.state['userInfo'].realName }}</span>
    </a>
    <a-menu slot="overlay">
      <a-menu-item class="dropdown-menu-item">
        <a-icon type="user" style="margin-right: 4px"/>
        <a @click="() => {}">个人中心</a>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item class="dropdown-menu-item">
        <a-icon type="logout" style="margin-right: 4px"/>
        <a @click="logout">登出</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "AvatarDropdown",
  methods: {
    logout() {
      this.$cookies.remove("user_token");
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>

.dropdown-menu-item {
  display: flex;
  align-items: center;
}
</style>
