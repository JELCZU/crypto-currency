<template>
  <div class="tab-summary-box">
    <CryptoCurrencyElement
      :isDataFetched="isDataFetched"
      v-for="cryptoCurrency in cryptoCurrencyData.data"
      :key="cryptoCurrency.id"
      :cryptoCurrency="cryptoCurrency"
    />
  </div>
</template>

<script>
import CryptoCurrencyElement from "./CryptoCurrencyElement.vue";

export default {
  name: "TabSummary",
  props: ["cryptoCurrencyData", "isDataFetched"],
  data() {
    return { CryptoCurrencyElement };
  },
  methods: {},
  components: { CryptoCurrencyElement },
  mounted() {},
};
</script>

<style scoped>
.tab-summary-box {
  background-color: #f7f7f9;
  padding: 32px 0 0 0;
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
}
</style>
