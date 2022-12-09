<template>
  <div class="container">
    <div class="current-balance"><CurrentBalance /></div>
    <div class="summary-view"><SummaryView /></div>
    <div class="detail-view"><DetailView /></div>
  </div>
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

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
}
.container > div {
  width: 100%;
  /* flex: 2; */
}
.detail-view {
  /* flex: 1 0 100%; */
}
/* .current-balance .summary-view {
  :auto ;
} */
@media (max-width: 576px) {
  .current-balance {
    order: 1;
  }
  .summary-view {
    order: 3;
  }
  .detail-view {
    order: 2;
  }
}
@media (max-height: 576px) and (max-width: 992px) and (orientation: landscape) {
  .current-balance {
    order: 1;
  }
  .summary-view {
    order: 3;
  }
  .detail-view {
    order: 2;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
} ;
</style>
