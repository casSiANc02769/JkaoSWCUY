// 代码生成时间: 2025-08-15 21:23:01
import { ref, onMounted } from 'vue';

// 定义响应式数据
const numbers = ref([5, 3, 8, 4, 2, 9, 1, 6, 7]);
const sortedNumbers = ref([]);

// 排序算法（冒泡排序）
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 使用生命周期钩子，在组件挂载时进行排序
onMounted(() => {
  sortedNumbers.value = bubbleSort([...numbers.value]);
});

</script>

<template>
  <div>
    <!-- 显示原始数组 -->
    <h2>Original Array:</h2>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>

    <!-- 显示排序后的数组 -->
    <h2>Sorted Array:</h2>
    <ul>
      <li v-for="number in sortedNumbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>