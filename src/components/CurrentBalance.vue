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

    <div>{{ CurrentBalance }}</div>
    <div>{{ change }}% vs last month</div>
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
    changeMethod() {
      return this.change;
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
  height: 48px;
  width: 48px;
  padding: 0;
}
H2 {
  margin: 0;
}
button {
  height: 48px;
  width: 48px;
  font-size: 14px;
  background-color: #f7f7f9;
  border-radius: 8px;
  border-style: none;
  color: #9896a1;
  font-weight: normal;
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
  gap: 8px;
}
#show-report {
  border-color: EBEBF3;
  background-color: white;
  color: #7445fb;
}
button:hover {
  background-color: #ebebf3;
}
</style>
