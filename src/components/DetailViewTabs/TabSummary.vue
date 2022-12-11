<template>
  <div class="container">
    <!-- <CryptoCurrencyElement
      :cryptoCurrencyData="cryptoCurrencyData"
      :isDataFetched="isDataFetched"
    /> -->

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
.container {
  background-color: #f7f7f9;
  padding: 32px 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
