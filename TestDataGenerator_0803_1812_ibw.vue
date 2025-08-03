// 代码生成时间: 2025-08-03 18:12:21
import { ref, onMounted } from 'vue';

// 响应式数据
const testData = ref([]);

// 生成测试数据的函数
const generateTestData = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      id: i + 1,
      name: `User${i + 1}`,
      email: `user${i + 1}@example.com`
    });
  }
  testData.value = data;
};

// 生命周期钩子
onMounted(() => {
  generateTestData();
});

export default {
  name: 'TestDataGenerator',
  components: {},
  setup() {
    return {
      testData
    };
  }
};
</script>

<template>
  <div>
    <h2>Test Data Generator</h2>
    <ul>
      <li v-for="(item, index) in testData" :key="index">
        {{ index + 1 }}. {{ item.name }} - {{ item.email }}
      </li>
    </ul>
    <button @click="generateTestData">Generate New Data</button>
  </div>
</template>

<style scoped>
/* Add component styles here */
</style>
