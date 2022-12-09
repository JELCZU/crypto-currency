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

    <div class="cash">
      <H1 id="currency">$</H1
      ><H1 id="currency-value">99999999.99{{ CurrentBalance }}</H1>
    </div>
    <div class="diference-status">
      <img src="../assets/img/market-growth-big.svg" alt="" />{{ change
      }}<H2>% vs last month</H2>
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
  props: ["change", "CurrentBalance"],
  methods: {
    diferenceSymbolPath() {
      const path = "../assets/img/market-growth-big.svg";
      return path;
    },
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
  justify-content: space-between;
}
.box-heading button {
  height: auto;
  width: auto;
  padding: 0;
}
.diference-status {
  color: #2dc78f;
  display: flex;
  padding-bottom: 72px;
}
.cash {
  margin: 40px 0 16px 0px;
  padding: 0;
}
#currency {
  color: #9896a1;
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
#quick-invest,
#show-report {
  border-radius: 4px;
}
#quick-invest {
  border-style: none;
  background-color: #7445fb;
  color: #ffffff;
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
#show-report:hover {
  background-color: #ebebf3;
}

.box-heading button:hover {
  background-color: #ebebf3;
}
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
}
</style>
