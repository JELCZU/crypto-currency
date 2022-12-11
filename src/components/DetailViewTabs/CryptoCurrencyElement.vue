<template>
  <div class="li" v-if="isDataFetched">
    <div class="currency-general">
      <img :src="this.cryptoCurrency.logo" />
      <div>
        <div class="description">
          {{ this.cryptoCurrency.symbol }}
        </div>
        <div class="value">
          {{ this.cryptoCurrency.name }}
        </div>
      </div>
    </div>
    <div class="currency-price">
      <div class="description">Price</div>
      <div class="value">
        ${{
          new Intl.NumberFormat("en-IN").format(
            (
              Math.round(this.cryptoCurrency.quote.USD.price * 100) / 100
            ).toFixed(2)
          )
        }}
      </div>
    </div>
    <div class="currency-change">
      <div class="description">Change</div>
      <div
        class="value"
        :class="{
          rise: this.cryptoCurrency.quote.USD.percent_change_30d > 0,
          fall: this.cryptoCurrency.quote.USD.percent_change_30d < 0,
        }"
      >
        <div>
          <div v-if="this.cryptoCurrency.quote.USD.percent_change_30d > 0">
            +
          </div>
        </div>
        <div>
          {{
            Math.round(this.cryptoCurrency.quote.USD.percent_change_30d * 100) /
            (100).toFixed(2)
          }}%
        </div>
        <img
          :src="
            this.setGraphic(this.cryptoCurrency.quote.USD.percent_change_30d)
          "
          alt=""
        />
      </div>
    </div>
    <div class="currency-trend">
      <canvas :id="this.cryptoCurrency.id"></canvas>
    </div>
    <div class="currency-btns">
      <button id="sell">Sell</button><button id="buy">Buy</button>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "CryptoCurrencyElement",
  props: ["cryptoCurrency", "isDataFetched"],
  data() {
    return {
      change: 0,
      borderColor: "",
      trendConfig: {
        borderColor: { rise: "rgba(45, 199, 143, 1)", fall: "#ea4d4d" },
        backgroundColor: {
          rise: "rgba(45, 199, 143, 0.04)",
          fall: "rgb(234,77,77,0.04)",
        },
      },
    };
  },
  methods: {
    diferenceSymbolPath() {
      const path = "../assets/img/market-growth-sm.svg";
      return path;
    },
    setSymbol() {},
    setGraphic(change) {
      // eslint-disable-next-line global-require, import/no-unresolved
      let path = require("@/./assets/img/market-no-change-sm.svg");
      if (change > 0) {
        // eslint-disable-next-line global-require, import/no-unresolved
        path = require("@/./assets/img/market-growth-sm.svg");
      }
      if (change < 0) {
        // eslint-disable-next-line global-require, import/no-unresolved
        path = require("@/./assets/img/market-fall-sm.svg");
      }
      return path;
    },
    renderChart() {
      const ctx = document.getElementById(this.cryptoCurrency.id);
      const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 200);
      if (this.cryptoCurrency.quote.USD.percent_change_30d < 0) {
        gradient.addColorStop(0, this.trendConfig.backgroundColor.fall);
        this.borderColor = this.trendConfig.borderColor.fall;
      } else {
        gradient.addColorStop(0, this.trendConfig.backgroundColor.rise);
        this.borderColor = this.trendConfig.borderColor.rise;
      }

      gradient.addColorStop(1, "rgba(254,254,254,0)");
      const summaryChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "This month",

              data: [43, 19, 3, 5, 23, 3],
              backgroundColor: gradient,
              borderColor: this.borderColor,
              fill: true,
              tension: 0.4,
              borderWidth: 2,
            },
          ],
        },

        options: {
          layout: {
            padding: {
              left: false,
              top: -30,
              bottom: false,
            },
          },

          maintainAspectRatio: false,
          scales: {
            y: {
              display: false,
              beginAtZero: true,
              ticks: { color: "rgba(0, 0, 0, 0.48)", beginAtZero: true },
              grid: {
                drawTicks: false,

                // tickBorderDashOffset: 2,
              },
              border: {
                display: false,
                dash: [1, 4],
              },
            },
            x: {
              display: false,
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "bottom",
              align: "start",

              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                padding: 44,
                boxHeight: 4,
                color: "#9896A1",
                font: { family: "SF Pro Display", size: 12, weight: 400 },
              },
            },
          },
        },
      });

      // eslint-disable-next-line no-unused-expressions
      summaryChart;
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>

<style scoped>
.li {
  background-color: white;
  padding: 20px 16px;
  border-color: #ebebf3;
  border-width: 1px;
  height: 80px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.currency-general img {
  max-height: 64px;
  border-radius: 48px;
  border-style: solid;
  border-width: 1px;
  border-color: #ebebf3;
  margin-right: 16px;
  padding: 8px;
}
.description {
  color: #9896a1;
}
.currency-general {
  display: flex;
  align-items: center;
  width: 20%;
}
.currency-general,
.currency-price,
.currency-change {
  width: 20%;
}
canvas {
  width: 150px;
  height: 32px;
}
.currency-btns {
  display: flex;
  gap: 8px;
}
.description {
  font-size: 14px;
  font-weight: 600;
}
.value {
  font-size: 14px;
  font-weight: 600;
  color: black;
}
.currency-btns button {
  height: 40px;
  width: 56px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600px;
  border-width: 1px;
}
#sell {
  color: #7445fb;
  background-color: white;
  border-color: #ebebf3;
  border-style: solid;
}
#buy {
  color: white;
  background-color: #7445fb;
  border-style: none;
}
#sell:hover {
  background-color: #ebebf3;
}
.currency-change .value {
  display: flex;
  align-items: center;
}
.rise {
  color: #2dc78f;
}
.fall {
  color: #ea4d4d;
}
@media (max-width: 576px), (max-height: 576px) {
  .li {
    background-color: white;
    padding: 5px 5px;
    border-color: #ebebf3;
    gap: 5px;
    border-width: 1px;
    flex-wrap: wrap;
    flex-direction: column;
    height: max-content;
    width: 100%;
    border-radius: 8px;
    display: flex;
    /* justify-content: center; */
    /* align-content: center; */
    font-size: 14px;
  }
  .currency-general,
  .currency-price,
  .currency-change {
    width: auto;
  }
  .currency-btns {
    display: flex;
    gap: 40px;
  }
  H1 {
    font-weight: 300;
    font-size: 28px;
    display: inline-block;
    margin: 40px 0 16px 0px;
    padding: 0;
  }

  H2 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 22px;
  }
}
</style>
