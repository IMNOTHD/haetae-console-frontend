<template>
  <div id="app" style="height: 100%">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
