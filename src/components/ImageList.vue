<template>
  <div class="images-wrapper">
    <h1>PEOPLE</h1>
    <div class="images">
      <div class="images__item" v-for="item in data" :key="item.id">
        <img :src="item.url">
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import request from '@/utils/request'

const data = ref([])

function getData() {
  request.get('/photo')
  .then(res => {
    console.log(res)
    data.value = res
  })
}

onMounted(() => {
  getData()
})
</script>
<style lang="less" scoped>
  .images-wrapper {
    position: absolute;
    left: 0;
    background: #fff;
    height: 100%;
    width: 100%;
    overflow-y: auto;

    border-top: none;
    padding: 35px;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color:@color-text-hover;
      letter-spacing: 0.1rem;
    }

    .images {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      gap: 2rem;
      transition: 0.3s all ease;
      padding-bottom: 50px;

      .images__item {
        padding: 3rem 2rem;
        background: @color-background;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
        outline: 0.1rem solid @color-text;
        outline-offset: -1.5rem;
        transition: 0.3s all ease;
        &:hover {
          outline: 0.2rem solid @color-text-hover;
          outline-offset: 0;
        }

        img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }
    }
  }
</style>
