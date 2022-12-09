<template>
  <div class="box">
    <div class="inner-box">
      <div class="box-heading">
        <H2>Summary</H2>
        <button>
          <img
            src="../assets/img/dots-horizontal.svg"
            alt="Current ballance more info"
          />
        </button>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "CurrentBalance",
  props: ["change", "CurrentBalance"],
  methods: {
    diferenceSymbolPath() {
      const path = "../assets/img/market-growth-big.svg";
      return path;
    },
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    const gradient = ctx.getContext("2d").createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgb(116, 69, 251,0.16)");
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
            borderColor: "#7445FB",
            fill: true,
            tension: 0.4,
            borderWidth: 2,
          },

          {
            label: "Last month",
            data: [13, 29, 13, 25, 32, 3],
            backgroundColor: "#D5D5D6",
            borderColor: "#D5D5D6",
            tension: 0.4,
            borderDash: [10, 5],
            borderWidth: 2,
          },
        ],
      },

      options: {
        scales: {
          y: {
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
            display: true,
            position: "bottom",
            align: "start",

            labels: {
              usePointStyle: true,
              pointStyle: "circle",

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
.box {
  background-color: #f7f7f9;
  border-radius: 16px;
  /* padding: 32px; */
}
.inner-box {
  /* background-color: #f7f7f9;
  border-radius: 16px; */
  padding: 32px;
}
.box-heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
}
.box-heading button {
  height: auto;
  width: auto;
  padding: 0;
}
H1 {
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 56px;
  display: inline-block;
}

H2 {
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
}
button {
  height: 48px;
  width: 48px;
  font-size: 14px;
  background-color: #f7f7f9;
  border-radius: 8px;
  border-style: none;
  color: #9896a1;
  font-weight: 600;
  font-size: 14px;
  width: auto;
  padding: 8px 16px;
}
button:hover {
  cursor: pointer;
}
.box-heading button:hover {
  background-color: #ebebf3;
}
</style>
