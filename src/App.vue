<template>
  <div id="app">
    <Header />
    <vue-page-transition name="overlay-down-full">
    <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "App",
  components: {
    Header
  }
}
</script>
<style>

</style>
