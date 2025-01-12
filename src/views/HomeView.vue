<script setup lang="ts">
import { ref } from 'vue'
import { data } from '../assets/data1'

const postList = ref(data.slice(0, 10))
</script>

<template>
  <main class="container">
    <article class="article" v-for="post in postList" :key="post.id">
      <header class="header">
        <p class="title">{{ post.id }}</p>
        <p v-if="post.created_at" class="time">{{ post.created_at }}</p>
      </header>
      <main class="main">
        <p v-if="post.full_text" class="text">{{ post.full_text }}</p>
        <div
          class="photos"
          :class="{
            single: post.media.length === 1,
          }"
        >
          <el-image
            class="photo"
            v-for="m in post.media"
            :key="m.media_url_https"
            :src="m.media_url_https"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="[m.media_url_https]"
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
@border-color: #888;

.container {
  margin: auto;
  width: 500px;
  border-left: 1px solid @border-color;
  border-right: 1px solid @border-color;
}

.article {
  box-sizing: border-box;
  padding: 16px;
  & + .article {
    border-top: 1px solid @border-color;
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
