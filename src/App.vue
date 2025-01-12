<script setup lang="ts">
import { RouterView } from 'vue-router'
import ImageViewer from './components/ImageViewer.vue'
import { provide, ref } from 'vue'

const imageViewer = ref()
provide('imageview', (props: unknown) => {
  imageViewer.value.show(props)
})
</script>

<template>
  <RouterView />
  <ImageViewer ref="imageViewer" />
</template>

<style scoped></style>
