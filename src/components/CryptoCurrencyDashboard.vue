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
      this.cryptoCurrencyData.data.forEach((element, index) => {
        this.getCrypto(
          `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?&CMC_PRO_API_KEY=7db9b81c-111c-4a42-afc8-9471d4995e77&id=${element.id}`
        ).then((cryptoInfo) => {
          try {
            this.cryptoCurrencyData.data[index].logo =
              cryptoInfo.data[element.id].logo;
          } catch (error) {
            window.console.log(error);
          }
        });
      });

      this.isDataFetched = true;
    });
  },
};
</script>

<style scoped>
.container {
  min-width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 68px;
  margin: 0;
  gap: 32px;
}
.current-balance,
.summary-view {
  flex: 1 1 0px;
  height: 500px;
}
.detail-view {
  width: 100%;
}
.container .detail-view {
  width: 100%;
}
@media (max-width: 576px) {
  .container {
    font-size: 14px;
    padding: 0 10px 10px 10px;
    gap: 8px;
  }
  .current-balance {
    order: 1;
  }
  .summary-view {
    order: 3;
  }
  .detail-view {
    order: 2;
  }
  .current-balance,
  .summary-view {
    flex: 1 1 0px;
    height: 300px;
    width: 100%;
  }
  .summary-view {
    height: 100px;
  }
}
@media (max-height: 476px) {
  .current-balance {
    order: 1;
  }
  .summary-view {
    order: 3;
  }
  .detail-view {
    order: 2;
  }
  .current-balance,
  .summary-view {
    flex: 1 1 0px;
    height: 400px;
    width: 100%;
  }
  .summary-view {
    height: 100px;
  }
}
/*

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
} ; */
</style>
