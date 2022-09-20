<template>
  <div class="hamburger-menu">
    <div
      class="hamburger"
      :class="hamburgerClass"
      @click="$store.commit('nav/toggleHamburger')"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hamburgerClass() {
      return { open: this.$store.getters['nav/isHamburgerOpen'] };
    },
  },
};
</script>

<style lang="css">
.hamburger-menu {
  display: flex;
  z-index: 50;
  align-items: center;
  height: 100%;
}

.hamburger {
  width: 36px;
  height: 36px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 2px;
  width: 35px;
  background: #eee;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.15s ease-in-out;
  -moz-transition: 0.15s ease-in-out;
  -o-transition: 0.15s ease-in-out;
  transition: 0.15s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 3px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger span:nth-child(2) {
  top: 15px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger span:nth-child(3) {
  top: 27px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger.open span:nth-child(1) {
  width: 38px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 2px;
  left: 5px;
}

.hamburger.open span:nth-child(2) {
  width: 0;
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  width: 38px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 5px;
  top: 29px;
}

@media (min-width: 63.75em) {
  .hamburger-menu.header__box {
    display: none;
  }
}
</style>
