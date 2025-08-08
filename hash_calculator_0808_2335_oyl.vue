// 代码生成时间: 2025-08-08 23:35:10
import { defineComponent, ref, onMounted } from 'vue';
import * as crypto from 'crypto';

export default defineComponent({
  name: 'HashCalculator',
  setup() {
    // 响应式数据
    const inputText = ref('');
    const hashValue = ref('');

    // 计算哈希值的函数
    const calculateHash = () => {
      const hash = crypto.createHash('sha256').update(inputText.value).digest('hex');
      hashValue.value = hash;
    };

    // 生命周期钩子
    onMounted(() => {
      console.log('组件已挂载');
    });

    return {
      inputText,
      hashValue,
      calculateHash
    };
  }
});
</script>

<style>
/* 样式可以在这里添加 */
</style>
