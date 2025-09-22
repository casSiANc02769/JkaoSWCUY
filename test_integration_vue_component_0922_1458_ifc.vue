// 代码生成时间: 2025-09-22 14:58:30
import { ref, onMounted } from 'vue';

// 响应式数据
const message = ref('Hello, Vue 3!');

// 生命周期钩子
onMounted(() => {
  console.log('Component is mounted.');
});

// 方法
function handleClick() {
  message.value = 'Button was clicked!';
}

</script>

<style scoped>
h1 {
  color: blue;
}
button {
  margin-top: 20px;
}
</style>
