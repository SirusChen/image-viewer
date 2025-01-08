<script setup lang="ts">
import { ref } from 'vue'

const postList = ref(
  Array.from({
    length: 10,
  }).map((_, index) => index),
)
</script>

<template>
  <main class="container">
    <article class="article" v-for="post in postList" :key="post">
      <header class="header">
        <p class="title">title-{{ post }}</p>
        <p class="time">1111</p>
      </header>
      <main class="main">
        <p class="text">2222</p>
        <div class="photos single">
          <div class="photo"></div>
        </div>
      </main>
    </article>
  </main>
</template>

<style lang="less" scoped>
.container {
  margin: auto;
  width: 500px;
}

.article {
  box-sizing: border-box;
  padding: 16px;
  & + .article {
    border-top: 1px solid #888;
  }
}

.header {
  .title {
    color: #ddd;
    font-size: 20px;
  }
  .time {
    margin-top: 4px;
    color: #888;
    font-size: 18px;
  }
}

.main {
  margin-top: 8px;
  padding-left: 16px;
  .text {
    color: #ddd;
    font-size: 18px;
  }
  .photos {
    margin-top: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    border-radius: 8px;
    overflow: hidden;
    .photo {
      height: 50px;
      background-color: #fff;
      cursor: pointer;
    }

    &.single {
      grid-template-columns: 1fr;
    }
  }
}
</style>
