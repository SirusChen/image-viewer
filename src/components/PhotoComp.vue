<script setup lang="ts">
import { SizeKey, SizeArea } from '@/utils/const'
import { computed } from 'vue'

const { photo, onClick } = defineProps(['photo', 'onClick'])
const sizeStyle = computed(() => {
  const size = photo.sizes[SizeKey.Small]
  if (size.w > SizeArea[0][1]) {
    size.h = Math.floor((SizeArea[0][1] / size.w) * size.h)
    size.w = SizeArea[0][1]
  }
  if (size.w < SizeArea[0][0]) {
    size.h = Math.floor((SizeArea[0][0] / size.w) * size.h)
    size.w = SizeArea[0][0]
  }
  // 直接裁切
  if (size.h > 500) {
    size.h = 500
  }
  return {
    width: `${size.w}px`,
    height: `${size.h}px`,
  }
})
const src = computed(() => {
  return `${photo.media_url_https}?name=${SizeKey.Small}`
})
</script>

<template>
  <img class="img" :src="src" :style="sizeStyle" @click="onClick" />
</template>

<style lang="less" scoped>
.img {
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
}
</style>
