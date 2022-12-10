<template>
  <div class="li">
    <div class="currency-general">
      <img />
      <div>
        <div class="description">abbreviation</div>
        <div class="value">Name</div>
      </div>
    </div>
    <div class="currency-price">
      <div class="description">abbreviation</div>
      <div class="value">Name</div>
    </div>
    <div class="currency-change">
      <div class="description">Change</div>
      <div class="value">ChangeValue</div>
    </div>
    <div class="currency-trend"><canvas id="myChart1"></canvas></div>
    <div class="currency-btns">
      <button id="sell">Sell</button><button id="buy">Buy</button>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "CurrentBalance",
  data() {
    return {
      change: 12.0,
    };
  },
  methods: {
    diferenceSymbolPath() {
      const path = "../assets/img/market-growth-big.svg";
      return path;
    },
    setSymbol(change) {
      // eslint-disable-next-line global-require, import/no-unresolved
      let path = require("@/./assets/img/market-no-change-md.svg");
      if (change > 0) {
        // eslint-disable-next-line global-require, import/no-unresolved
        path = require("@/./assets/img/market-growth-md.svg");
      }
      if (change < 0) {
        // eslint-disable-next-line global-require, import/no-unresolved
        path = require("@/./assets/img/market-fall-md.svg");
      }
      return path;
    },
    setTextColor(change) {
      document.getElementById("balance-change").classList.remove("profit");
      document.getElementById("balance-change").classList.remove("lose");
      if (change > 0) {
        document.getElementById("balance-change").classList.remove("lose");
        document.getElementById("balance-change").classList.add("profit");
      }
      if (change < 0) {
        document.getElementById("balance-change").classList.remove("profit");
        document.getElementById("balance-change").classList.add("lose");
      }
    },
  },
  mounted() {
    const ctx = document.getElementById("myChart1");
    const gradientRed = ctx.getContext("2d").createLinearGradient(0, 0, 0, 200);
    gradientRed.addColorStop(0, "rgb(116, 69, 251,0.16)");
    gradientRed.addColorStop(1, "rgba(254,254,254,0)");
    const gradientGreen = ctx
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 200);
    gradientGreen.addColorStop(0, "rgb(116, 69, 251,0.16)");
    gradientGreen.addColorStop(1, "rgba(254,254,254,0)");
    const summaryChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "This month",

            data: [43, 19, 3, 5, 23, 3],
            backgroundColor: gradientGreen,
            borderColor: "#7445FB",
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
};
</script>

<style scoped>
.li {
  background-color: white;
  padding: 20px 16px;
  border-color: #ebebf3;
  border-width: 1px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.description {
  color: #9896a1;
}
.currency-general {
  display: flex;
}
canvas {
  width: 150px;
  height: 32px;
}
.currency-btns {
  display: flex;
  gap: 8px;
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
</style>
