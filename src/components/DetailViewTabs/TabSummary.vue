<template>
  <div class="container">
    <CryptoCurrencyElement />
    <!-- <CryptoCurrencyElement /> -->
    <!-- <CryptoCurrencyElement /> -->
    <!-- <CryptoCurrencyElement
      v-for="CryptoCurrencyElement in CryptoCurrencyElements"
      :key="id"
    /> -->
  </div>
</template>

<script>
import CryptoCurrencyElement from "./CryptoCurrencyElement.vue";

export default {
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
