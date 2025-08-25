// 代码生成时间: 2025-08-26 04:42:37
import { ref, onMounted } from 'vue';

// Reactive data
const data = ref(null);
const loading = ref(false);
const error = ref(null);

// Fetch data function
async function fetchData() {
  loading.value = true;
  error.value = null;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error('Something went wrong');
    const result = await response.json();
    data.value = result;
  } catch (err) {
    error.value = err.message || 'Something went wrong';
  } finally {
    loading.value = false;
  }
}

// Lifecycle hook
onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* Add styles here if needed */
</style>
