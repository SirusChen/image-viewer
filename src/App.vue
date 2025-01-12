<script setup lang="ts">
import { RouterView } from 'vue-router'
import ImageViewer from './components/ImageViewer.vue'
import { provide, ref } from 'vue'
import axios from 'axios'

const imageViewer = ref()
provide('imageview', (props: unknown) => {
  imageViewer.value.show(props)
})

const data = axios.get('/data/v1/get')
console.log(data)
</script>

<template>
  <RouterView />
  <ImageViewer ref="imageViewer" />
</template>

<style scoped></style>
