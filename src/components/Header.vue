<template>
  <div class="container-nav pad">
    <div id="logo" class="brand-header menuUp">
      <p>Something</p>
    </div>

    <div @click="menuToggle" v-bind:class="{ open: menuOpen }" id="nav-toggle">
      <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="cross">
        <span></span>
        <span></span>
      </div>
    </div>
    <nav v-bind:class="{ 'nav-open': menuOpen }" class="nav" id="nav-menu">
      <ul class="nav-ul">
        <li>
          <router-link to="/" @click.native="menuToggle()">Home</router-link>
        </li>
        <li>
          <router-link to="/about" @click.native="menuToggle()">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style lang="scss">
@import "header.scss";
</style>
