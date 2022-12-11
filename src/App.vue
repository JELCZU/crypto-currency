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
* {
  box-sizing: border-box;
  font-family: SF Pro Display, Helvetica, Arial, sans-serif;
}
/* @media (max-width: 576px) {
  .container {
    margin: 0 20px;
  }
} */
</style>
