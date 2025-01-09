<script setup lang="ts">
import { ref } from 'vue'
import data from './data.json'

const list = Object.values(data)
const postList = ref(list.slice(0, 10))
</script>

<template>
  <main class="container">
    <article class="article" v-for="post in postList" :key="post.id">
      <header class="header">
        <p class="title">{{ post.id }}</p>
        <p v-if="post.createTime" class="time">{{ post.createTime }}</p>
      </header>
      <main class="main">
        <p v-if="post.text" class="text">{{ post.text }}</p>
        <div
          class="photos"
          :class="{
            single: post.photoList.length === 1,
          }"
        >
          <el-image
            class="photo"
            v-for="url in post.photoList"
            :key="url"
            :src="url"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[url]"
            :initial-index="4"
            fit="cover"
          />
          <!-- <div
            :style="{ backgroundImage: `url(${url})` }"
          >
            <img :src="url" :style="{ opacity: 0 }" />
          </div> -->
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
      height: 150px;
      background-color: #fff;
      background-position: center;
      background-size: cover;
      cursor: pointer;
    }

    &.single {
      grid-template-columns: 1fr;
      .photo {
        height: 400px;
      }
    }
  }
}
</style>
