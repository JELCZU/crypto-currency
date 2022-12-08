<template>
  <div>
    <AppHeader />
    <CryptoCurrencyDashboard />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import CryptoCurrencyDashboard from "./components/CryptoCurrencyDashboard.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    CryptoCurrencyDashboard,
  },
};
</script>

<style>
#app {
  font-family: SF Pro Display, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
.container {
  margin: 0 68px;
}
</style>
