// 代码生成时间: 2025-08-17 04:25:52
import { ref, onMounted } from 'vue';

// 响应式数据
const images = ref([]);

// 处理文件变化
function handleFileChange(event) {
  const files = event.target.files;
  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        images.value.push({
          src: e.target.result,
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
      img.src = e.target.result;
      reader.readAsDataURL(file);
    };
  });
}

// 生命周期钩子
onMounted(() => {
  console.log('Component mounted.');
});
</script>

<style scoped>
.image-container {
  margin: 10px;
}
</style>