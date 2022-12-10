<template>
  <div class="box">
    <div>
      <div class="box-heading">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="chagneTab(tab)"
          v-bind:id="tab"
        >
          {{ tab }}
        </button>
      </div>
      <component :is="selected"></component>
    </div>
  </div>
</template>

<script>
import Summary from "./DetailViewTabs/TabSummary.vue";
import Table from "./DetailViewTabs/TabTable.vue";
import Charts from "./DetailViewTabs/TabCharts.vue";
import Reporting from "./DetailViewTabs/TabReporting.vue";
import Analysis from "./DetailViewTabs/TabAnalysis.vue";

export default {
  data() {
    return {
      tabs: ["Summary", "Table", "Charts", "Reporting", "Analysis"],
      selected: "Summary",
    };
  },
  methods: {
    chagneTab(tab) {
      document.getElementById(this.selected).classList.remove("button-active");
      this.selected = tab;
      document.getElementById(this.selected).classList.add("button-active");
    },
  },
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Summary,
    // eslint-disable-next-line vue/no-reserved-component-names
    Table,
    Charts,
    Reporting,
    Analysis,
  },
  mounted() {
    try {
      document.getElementById("Summary").classList.add("button-active");
    } catch (error) {
      window.console.log(error);
    }
  },
};
</script>

<style scoped>
.box {
  background-color: #f7f7f9;
  border-radius: 16px;
  padding: 32px;
}
.box-heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  border-width: 0 0 1px 0;
  border-color: #ebebf3;
  border-style: solid;
  padding-bottom: 1px;
}
.box-heading button {
  height: auto;
  width: auto;
  padding: 0;
  border-style: solid;
  border-width: 0 0 0 0;
  border-color: #7445fb;
  font-size: 16px;
  font-weight: 400;
  color: #9896a1;
  background-color: transparent;
  padding-bottom: 15px;
}
.box-heading .button-active {
  color: black;
  font-weight: 600;
  border-width: 0 0 4px 0;
  padding-bottom: 11px;
}
</style>
