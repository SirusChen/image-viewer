<script setup lang="ts">
import { getURL } from '@/utils'
import { SizeKey } from '@/utils/const'
import type { Media } from '@/utils/typing'
import { Close } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isShow = ref(false)
const imageUrl = ref<string | undefined>()

function close() {
  isShow.value = false
}

function show(option: { media: Media; mediaList: Media[] }) {
  isShow.value = true
  imageUrl.value = getURL(option.media, SizeKey.Large)
}

defineExpose({
  show,
  close,
})
</script>

<template>
  <section v-show="isShow" class="container" @click="close">
    <div class="close-btn">
      <Close />
    </div>
    <img :src="imageUrl" alt="" class="img" />
  </section>
</template>

<style lang="less" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  background-color: #111;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;

  > svg {
    color: #fff;
    width: 20px;
  }

  &:hover {
    background-color: #222;
  }
}

.img {
  width: 100%;
  max-height: 100vh;
  object-fit: contain;
}
</style>
