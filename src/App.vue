<template>
  <div>
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: SF Pro Display, Helvetica, Arial, sans-serif;
}
.container {
  margin: 20px;
}
</style>
