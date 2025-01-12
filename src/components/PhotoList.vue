<script setup lang="ts">
import { inject } from 'vue'
import PhotoComp from './PhotoComp.vue'
import type { Media } from '@/utils/typing'
import { getURL } from '@/utils'

const { mediaList } = defineProps<{
  mediaList: Media[]
}>()
// const srcList = computed(() => {
//   return mediaList.map((photo: { media_url_https: string }) => {
//     return `${photo.media_url_https}?name=${SizeKey.Small}`
//   })
// })

const imageview = inject('imageview')
function onClick(media: Media) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  imageview({
    media,
    mediaList,
  })
}
</script>

<template>
  <div>
    <div v-if="mediaList.length === 1">
      <PhotoComp :photo="mediaList[0]" :onClick="() => onClick(mediaList[0])" />
    </div>
    <div v-if="mediaList.length > 1" class="photo-list">
      <img
        v-for="media in mediaList"
        :key="media.media_url_https"
        :src="getURL(media)"
        class="imgxx"
        @click="onClick(media)"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.photo-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  width: 480px;
  border-radius: 8px;
  overflow: hidden;
  // 垃圾东西，这里的 scoped 隔离没有用
  // 1. 用不同的名字
  // 2. PhotoComp 多设置一层节点
  .imgxx {
    width: 100%;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>
