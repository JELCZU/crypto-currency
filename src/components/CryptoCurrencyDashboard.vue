<template>
  <div class="container">This is crypto currency CryptoCurrencyDashboard</div>
  <div class="container"><CurrentBalance /> <SummaryView /></div>
  <DetailView />
</template>

<script>
import CurrentBalance from "./CurrentBalance.vue";
import SummaryView from "./SummaryView.vue";
import DetailView from "./DetailView.vue";

export default {
  name: "CryptoCurrencyDashboard",
  components: {
    CurrentBalance,
    SummaryView,
    DetailView,
  },
};
</script>

<style scoped></style>
