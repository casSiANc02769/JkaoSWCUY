// 代码生成时间: 2025-08-09 11:18:40
import { ref, onMounted } from 'vue';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// 响应式数据
const selectedFile = ref(null);
const isFileUploaded = ref(false);
const isDecompressed = ref(false);
const decompressedFiles = ref([]);

// 挂载生命周期钩子
onMounted(() => {
  console.log("Component is mounted");
});

// 处理文件上传
const handleFileUpload = (event) => {
  selectedFile.value = event.target.files[0];
  isFileUploaded.value = true;
};

// 解压文件
const decompressFile = async () => {
  if (!selectedFile.value) {
    return;
  }
  try {
    const zip = new JSZip();
    const zipContent = await zip.loadAsync(selectedFile.value);
    for (let entry of Object.keys(zipContent.files).sort()) {
      decompressedFiles.value.push({
        name: entry,
        content: await zipContent.files[entry].async("blob"),
      });
    }
    isDecompressed.value = true;
  } catch (error) {
    console.error("Error decompressing file", error);
  }
};
</script>

<style scoped>
.file-decompressor {
  margin: 20px;
}
.decompress-options input[type="button"] {
  margin-top: 10px;
}
.decompressed-files ul {
  list-style-type: none;
  padding: 0;
}
.decompressed-files li {
  margin-top: 5px;
}
</style>
