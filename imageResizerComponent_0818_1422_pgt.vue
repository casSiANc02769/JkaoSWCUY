// 代码生成时间: 2025-08-18 14:22:34
import { ref, onMounted } from 'vue';

// 响应式数据
const images = ref([]);
const newWidth = ref(0);
const newHeight = ref(0);

// 组件加载完成后，初始化图片列表
onMounted(() => {
  fetch('api/images')
    .then(response => response.json())
    .then(data => {
      images.value = data.images;
    })
    .catch(error => console.error('Error fetching images:', error));
});

// 图片尺寸调整函数
function resizeImages() {
  images.value = images.value.map(image => {
    return {
      ...image,
      width: newWidth.value,
      height: newHeight.value,
    };
  });
}
</script>

<template>
  <div>
    <h1>Image Resizer</h1>
    <input type="number" v-model="newWidth" placeholder="Width" />
    <input type="number" v-model="newHeight" placeholder="Height" />
    <button @click="resizeImages">Resize Images</button>

    <div v-if="images.length > 0">
      <div v-for="image in images" :key="image.id" class="image-container">
        <img :src="image.url" :alt="image.name" />
        <p>{{ image.name }} ({{ image.width }}px x {{ image.height }}px)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  margin-bottom: 1rem;
}
</style>
