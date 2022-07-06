<script setup>
import MainNav from "./components/MainNav.vue";

import { mainStore } from "./stores/index.js";
import ImageList from "./components/ImageList.vue";

const store = mainStore()

</script>

<template>
  <header :class="{ opened: store.isOpen }">
    <MainNav/>
    <ImageList/>
  </header>

  <main>
    <div class="img-wrapper">
      <img src="@/assets/images/demo.jpeg" alt="" />
    </div>
  </main>
</template>

<style lang="less">
@import "./assets/css/base.less";
</style>
