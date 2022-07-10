<template>
  <div class="menu-wrapper">
    <ul>
      <li><a href="#">></a></li>
      <li><a href="#">PEOPLE</a></li>
      <li><a href="#">LOCALS</a></li>
      <li><a href="#">INDUSTRY</a></li>
      <li><a href="#">TRAVEL</a></li>
      <li><a href="#">STORIES</a></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.menu-wrapper {
  background: #fff;
  width: 100%;
  height: 100%;
  font-size: 18px;
  ul {
    li {
      display: block;
      line-height: 44px;
      border-bottom: @border-style;
      padding: 0 17px;
    }
  }
}
</style>
