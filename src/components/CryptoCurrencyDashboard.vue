<template>
  <div class="container">
    <div class="current-balance"><CurrentBalance /></div>
    <div class="summary-view"><SummaryView /></div>
    <div class="detail-view">
      <DetailView
        :cryptoCurrencyData="cryptoCurrencyData"
        :isDataFetched="isDataFetched"
      />
    </div>
  </div>
</template>
<!-- v-for="meal in meals"
:key="meal.id"
:meal="meal" -->
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
  data() {
    return {
      cryptoCurrencyData: [],
      isDataFetched: false,
    };
  },
  methods: {
    async getCrypto(fetchEndpoint) {
      const res = await fetch(fetchEndpoint);
      return res.json();
    },
  },
  mounted() {
    this.getCrypto(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?&CMC_PRO_API_KEY=7db9b81c-111c-4a42-afc8-9471d4995e77&limit=10`
    ).then((result) => {
      this.cryptoCurrencyData = result;
      this.isDataFetched = true;
      // this.cryptoCurrencyData.data.forEach((element) => {
      //   window.console.log(element.id);
      //   this.getCrypto(
      //     `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?&CMC_PRO_API_KEY=7db9b81c-111c-4a42-afc8-9471d4995e77&id=${1}`
      //   ).then((cryptoInfo) => {
      //     window.console.log(cryptoInfo.data[element.id].logo);

      //     element.logo = cryptoInfo.data[element.id].logo;

      //     window.console.log(element.logo);
      //   });
      // });
    });
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
/* .current-balance {
  height: 336px;
} */

/* .summary-view {
  height: 336px;
} */
.container > div {
  width: 100%;
  /* flex: 2; */
}
/* .detail-view {
  flex: 1 0 100%;
} */
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
