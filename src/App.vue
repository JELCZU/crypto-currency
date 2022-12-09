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
@media (max-width: 576px) {
  .container {
    margin: 0 20px;
  }
}
</style>
