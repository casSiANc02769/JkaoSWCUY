// 代码生成时间: 2025-09-04 16:51:53
  import { ref, onMounted } from 'vue';
  import XLSX from 'xlsx'; // 引入xlsx库

  // 响应式数据：表格数据和列信息
  const tableData = ref([]);
  const columns = ref([
    { label: 'ID', field: 'id' },
    { label: 'Name', field: 'name' },
    { label: 'Email', field: 'email' },
  ]);

  // 生成模拟数据的函数
  function generateData() {
    const data = [];
    for (let i = 1; i <= 100; i++) {
      data.push({
        id: i,
        name: `Name ${i}`,
        email: `email${i}@example.com`,
      });
    }
    tableData.value = data;
  }

  // 组件挂载完成后生成数据
  onMounted(generateData);

  // 导出Excel的方法
  function exportToExcel() {
    const ws = XLSX.utils.aoa_to_sheet([
      // 表头
      ['ID', 'Name', 'Email'],
      ...tableData.value.map(row => [
        row.id,
        row.name,
        row.email,
      ]),
    ]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'tableData.xlsx');
  }
</script>

<style scoped>
  /* 组件样式 */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  button {
    margin-top: 20px;
  }
</style>
>