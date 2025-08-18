// 代码生成时间: 2025-08-18 18:00:11
import { ref, onMounted } from 'vue';

// Reactivity reference for numbers array
const numbers = ref([5, 3, 8, 4, 2, 7, 1, 6]);

// Bubble Sort algorithm
function bubbleSort() {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < numbers.value.length - 1; i++) {
      if (numbers.value[i] > numbers.value[i + 1]) {
        // Swap the elements
        let temp = numbers.value[i];
        numbers.value[i] = numbers.value[i + 1];
        numbers.value[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// Quick Sort algorithm
function quickSort() {
  // Helper function to swap elements
  function swap(i, j) {
    let temp = numbers.value[i];
    numbers.value[i] = numbers.value[j];
    numbers.value[j] = temp;
  }
  // Helper function to partition the array
  function partition(low, high) {
    let pivot = numbers.value[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (numbers.value[j] < pivot) {
        i++;
        swap(i, j);
      }
    }
    swap(i + 1, high);
    return i + 1;
  }
  // Main quick sort function
  function quickSortRecursive(low, high) {
    if (low < high) {
      let pi = partition(low, high);
      quickSortRecursive(low, pi - 1);
      quickSortRecursive(pi + 1, high);
    }
  }
  quickSortRecursive(0, numbers.value.length - 1);
}

// Lifecycle hook to initialize the component
onMounted(() => {
  console.log('Component is mounted.');
});

// Expose the data and methods to the template
defineExpose({ numbers, bubbleSort, quickSort });
</script>

<style scoped>
/* Add your styles here */
</style>