// 代码生成时间: 2025-08-25 08:41:49
import { ref, onMounted, reactive } from 'vue';

// Define the reactive data
const numbers = reactive([5, 3, 8, 6, 7, 2, 4, 1]);
const sortedNumbers = ref([]);

// Sort function
function sortFunction(a, b) {
  return a - b;
}

// Function to sort the numbers array
function sortNumbers() {
  sortedNumbers.value = numbers.slice().sort(sortFunction);
}

// Lifecycle hook to sort numbers on component mount
onMounted(() => {
  sortNumbers();
});
</script>

<style scoped>
/* Add component specific styles here */
</style>
