// 代码生成时间: 2025-08-19 20:11:28
import { ref, onMounted } from 'vue';

export default {
  name: 'PerformanceMonitor',
  setup() {
    const cpuUsage = ref(0);
    const memoryUsage = ref(0);
    const diskUsage = ref(0);
    const isLoading = ref(true);

    // Function to fetch system performance data
    const fetchSystemPerformance = async () => {
      // Simulate fetching data from an API or server
      // For demonstration, we'll just assign some dummy values
      cpuUsage.value = 45;
      memoryUsage.value = 70;
      diskUsage.value = 60;
      isLoading.value = false;
    };

    // Use lifecycle hook to fetch data when the component is mounted
    onMounted(fetchSystemPerformance);

    return {
      cpuUsage,
      memoryUsage,
      diskUsage,
      isLoading,
    };
  },
};
</script>

<style scoped>
.performance-monitor {
  text-align: center;
}
</style>
