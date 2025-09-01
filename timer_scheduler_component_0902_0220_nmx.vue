// 代码生成时间: 2025-09-02 02:20:41
    <div>Interval: {{ interval }} ms</div>
    <button @click="startInterval">Start</button>
    <button @click="stopInterval">Stop</button>
    <div v-if="lastExecutionTime">Last Execution Time: {{ lastExecutionTime }}</div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'TimerScheduler',

  // 响应式数据
  setup() {
    const interval = ref(1000);
    const lastExecutionTime = ref(null);
    let timer = null;

    const startTimer = () => {
      timer = setInterval(() => {
        lastExecutionTime.value = new Date().toLocaleTimeString();
      }, interval.value);
    };

    const stopTimer = () => {
      clearInterval(timer);
      timer = null;
    };

    // 生命周期钩子
    onMounted(() => {
      // 组件被挂载后执行的操作
    });

    onUnmounted(() => {
      stopTimer();
      // 组件卸载前执行的操作
    });

    return {
      interval,
      lastExecutionTime,
      startInterval: startTimer,
      stopInterval: stopTimer
    };
  }
};
</script>
