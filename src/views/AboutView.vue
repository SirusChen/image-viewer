<script setup lang="ts">
import { ref } from 'vue'
import PhotoList from '../components/PhotoList.vue'
import axios from 'axios'

const postList = ref<any[]>([])

async function init() {
  const data = await axios.get('/data/v1/get')
  console.log(data)
  postList.value = data.data.data.slice(0, 20)
}

init()
</script>

<template>
  <article class="container">
    <section class="left-panel"></section>
    <section class="main-panel">
      <section class="post-panel" v-for="post in postList" :key="post.id">
        <header class="post-header">
          <img class="avatar" :src="post.user.profile_image_url_https" />
          <div class="left">
            <div class="line">
              <span class="user-name">{{ post.user.name }}</span>
              <span class="user-screen-name">@{{ post.user.screen_name }}</span>
            </div>
            <div class="line">
              <span class="time">{{ post.created_at }}</span>
            </div>
          </div>
        </header>
        <main class="post-main">
          <p class="full-text">{{ post.full_text }}</p>
          <PhotoList class="photo-list" :mediaList="post.media" />
        </main>
      </section>
    </section>
  </article>
</template>

<style lang="less" scoped>
@border: 1px solid #888;

.container {
  display: flex;
  width: 100%;
  height: 100%;
  .left-panel {
    width: 50px;
  }
  .main-panel {
    flex: 1;
    overflow-y: auto;
  }
}

.main-panel {
  border-left: @border;
  border-right: @border;
}

.post-panel {
  padding: 8px;
  & + & {
    border-top: @border;
  }
}

.post-header {
  display: flex;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .left {
    margin-left: 8px;
  }
  .line {
    display: flex;
    align-items: center;
    & + .line {
      margin-top: 4px;
    }
  }
  .user-name {
    color: #fff;
    font-size: 16px;
  }
  .user-screen-name {
    margin-left: 8px;
    color: #71767b;
    font-size: 16px;
  }
  .time {
    color: #71767b;
    font-size: 16px;
  }
}

.post-main {
  margin-top: 8px;
  margin-left: 48px;
  padding-right: 16px;
  .full-text {
    color: #e7e9ea;
    font-size: 16px;
  }
  .photo-list {
    margin-top: 8px;
  }
}
</style>
