// 代码生成时间: 2025-09-09 15:43:17
import { ref, onMounted } from 'vue';

// 响应式数据
const numberOne = ref(0);
const numberTwo = ref(0);
const result = ref(0);

// 计算方法
function calculate(operation) {
  switch (operation) {
    case 'add':
      result.value = numberOne.value + numberTwo.value;
      break;
    case 'subtract':
      result.value = numberOne.value - numberTwo.value;
      break;
    case 'multiply':
      result.value = numberOne.value * numberTwo.value;
      break;
    case 'divide':
      result.value = numberOne.value / numberTwo.value;
      break;
    default:
      console.error('Unsupported operation');
  }
}

// 生命周期钩子
onMounted(() => {
  console.log('Math Tool component is mounted.');
});
</script>

<template>
  <div>
    <h1>Math Tool</h1>
    <input type="number" v-model="numberOne" placeholder="Enter first number" />
    <input type="number" v-model="numberTwo" placeholder="Enter second number" />
    <button @click="calculate('add')">Add</button>
    <button @click="calculate('subtract')">Subtract</button>
    <button @click="calculate('multiply')">Multiply</button>
    <button @click="calculate('divide')">Divide</button>
    <p>Result: {{ result }}</p>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>