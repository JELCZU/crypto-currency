<template>
  <div class="box">
    <div class="box-heading">
      <H2>Current Balance</H2>
      <button>
        <img
          src="../assets/img/dots-horizontal.svg"
          alt="Current ballance more info"
        />
      </button>
    </div>
    <div>
      <div class="cash">
        <H1 id="currency">$</H1
        ><H1 id="currency-value">{{
          numberWithSpaces(this.CurrentBalance)
        }}</H1>
      </div>
      <div
        class="diference-status"
        :class="{ rise: change > 0, fall: change < 0 }"
      >
        <img :src="this.setGraphic(change)" alt="" />
        <H2>{{ change }}% vs last month</H2>
      </div>
    </div>

    <div class="btns">
      <button id="quick-invest">Quick Invest</button>
      <button id="show-report">Show Report</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentBalance",
  props: [],
  data() {
    return {
      CurrentBalance: 21432.23,
      change: 12,
    };
  },
  methods: {
    numberWithSpaces(x) {
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    },

    setGraphic(change) {
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
  },
  mounted() {},
};
</script>

<style scoped>
.box {
  background-color: #f7f7f9;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.box-heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.box-heading button {
  height: auto;
  width: auto;
  padding: 0;
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
.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
#show-report {
  border-color: #ebebf3;
  background-color: white;
  color: #7445fb;
  border-style: solid;
}
#quick-invest,
#show-report {
  border-radius: 4px;
}
button:hover {
  cursor: pointer;
}
#show-report:hover,
.box-heading button:hover {
  background-color: #ebebf3;
}
H1 {
  font-weight: 300;
  font-size: 56px;
  display: inline-block;
  margin: 40px 0 16px 0px;
  padding: 0;
}

H2 {
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
}
#currency {
  color: #9896a1;
}
.diference-status {
  color: #9896a1;
  display: flex;
  padding-bottom: 72px;
}
.diference-status H2 {
  padding-left: 5px;
}
#quick-invest {
  border-style: none;
  background-color: #7445fb;
  color: #ffffff;
}

.rise {
  color: #2dc78f;
}
.fall {
  color: #ea4d4d;
}
@media (max-width: 576px) {
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
  .btns {
    display: flex;
    flex-wrap: wrap;

    /* width: 100%; */
    gap: 8px;
  }

  .box {
    padding: 20px;
  }
}
/*

















@media (max-width: 576px) {
  H1 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 36px;
    display: inline-block;
  }

  H2 {
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-size: 22px;
  }
  #quick-invest,
  #show-report {
    flex-grow: 1;
  }
} */
</style>
