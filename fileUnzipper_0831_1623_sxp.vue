// 代码生成时间: 2025-08-31 16:23:22
import { ref, onMounted } from 'vue';

export default {
  name: 'FileUnzipper',
  components: {},
  props: {},
  setup() {
    const file = ref(null);
    const unzippedFiles = ref([]);
    
    const handleFileChange = (event) => {
      file.value = event.target.files[0];
    };
    
    const unzipFile = () => {
      if (file.value) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const zip = new JSZip();
          zip.loadAsync(e.target.result)
            .then((zip) => {
              unzippedFiles.value = [];
              return zip.forEach((relativePath, zipEntry) => {
                zipEntry.async('string').then((content) => {
                  unzippedFiles.value.push({ name: zipEntry.name, content });
                });
              });
            }).catch((error) => {
              console.error('Error unzipping file:', error);
            });
        };
        reader.readAsArrayBuffer(file.value);
      }
    };
    
    onMounted(() => {
      // Perform any setup needed after component mount
    });
    
    return {
      file,
      unzippedFiles,
      handleFileChange,
      unzipFile,
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
