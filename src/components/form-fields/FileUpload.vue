<template>
    <div class="mb-4">
      <label class="block font-semibold mb-1">{{ label }}</label>
      <input type="file" multiple accept="image/*" @change="onFileChange" ref="fileInput" />
      <div class="mt-2 overflow-x-auto" style="display: flex; gap: 8px; max-width: 260px;">
  <img
    v-for="(src, i) in previews"
    :key="i"
    :src="src"
    class="w-20 h-20 object-cover border rounded shrink-0"
    style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; border: 1px solid #ccc;"
  />
  <div v-if="error" class="error_validation d-none">{{ error }}</div>
</div>


    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const previews = ref([]);
  const modelValue = defineModel();
  defineProps({ label: String });
  
  const fileInput = ref(null);

    function onFileChange(e) {
      const files = Array.from(e.target.files);
      const allowedTypes = ['image/jpeg', 'image/png'];
      const maxSize = 2 * 1024 * 1024; 
      const validFiles = [];

      previews.value = [];

      files.forEach((file) => {
        if (!allowedTypes.includes(file.type)) {
          alert(`File "${file.name}" is not a valid image. Only JPG and PNG are allowed.`);
          resetFileInput();
          return;
        }
        if (file.size > maxSize) {
          alert(`File "${file.name}" exceeds the 2MB size limit.`);
           resetFileInput();
          return;
        }
        validFiles.push(file);
        previews.value.push(URL.createObjectURL(file));
      });

      modelValue.value = validFiles;
    }
    function resetFileInput() {

      if (fileInput.value) {
        fileInput.value.value = '';
      }
    }
  </script>
  