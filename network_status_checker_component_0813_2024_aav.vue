// 代码生成时间: 2025-08-13 20:24:25
import { ref, onMounted, onUnmounted } from 'vue';

// 响应式数据
const online = ref(window.navigator.onLine);

// 监听网络状态变化的事件
const updateOnlineStatus = () => {
  online.value = window.navigator.onLine;
};

onMounted(() => {
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});

onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus);
  window.removeEventListener('offline', updateOnlineStatus);
});
</script>

<style scoped>
/* 组件样式 */
</style>
