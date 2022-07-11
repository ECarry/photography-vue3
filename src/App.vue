<script setup>
import MainNav from "./components/MainNav.vue";
import ImageList from "./components/ImageList.vue";
import MobileNav from "./components/MobileNav.vue";
import { mainStore } from "./stores/index.js";
import { onMounted } from 'vue'

const store = mainStore();

onMounted(() => {
  document.title = 'ECarry丨Photography'
})
</script>

<template>
  <header :class="{ opened: store.isOpen }">
    <MainNav/>
    <ImageList/>
    <!-- MOBILE MENU -->
    <MobileNav/>
  </header>

  <main>
    <div class="img-wrapper">
      <img src="@/assets/images/demo.jpeg" />
    </div>
  </main>
</template>

<style lang="less">
@import "./assets/css/base.less";
</style>
