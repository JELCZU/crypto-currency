<template>
  <div class="container">
    <form class="nosubmit">
      <input id="search" type="search" placeholder="Search..." />
    </form>
    <div class="btns">
      <button>
        <img
          src="../assets/img/interface-alert-alarm-bell-1--notification-vibrate-ring-sound-alarm-alert-bell-noise.svg"
          alt="notification"
        />
      </button>
      <button>
        <img
          src="../assets/img/interface-setting-menu-1--button-parallel-horizontal-lines-menu-navigation-three-hamburger.svg"
          alt="interface settings menu"
        />
      </button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  margin-top: 49px;
  display: flex;
  justify-content: space-between;
}
.btns {
  display: flex;
}
#search {
  padding: 0px 42px;
  background: transparent url("../assets/img/search-lg.svg") no-repeat 20px
    center;
  height: 48px;
  font-size: 14px;
  color: #9896a1;
  border-style: none;
  background-color: #f7f7f9;
  border-radius: 8px;
}
button {
  height: 48px;
  width: 48px;
  font-size: 14px;
  background-color: #f7f7f9;
  border-radius: 8px;
  border-style: none;
  color: #9896a1;
}
button:hover {
  cursor: pointer;
  stroke: red;
}
</style>
