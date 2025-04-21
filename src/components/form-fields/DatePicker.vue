<template>
    <div class="mb-4">
      <label class="block font-semibold mb-1">{{ label }}</label>
      <input type="date" v-model="modelValue" class="border px-2 py-1 rounded w-full" />
      <div v-if="error" class="error_validation d-none">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({ label: String });
  const modelValue = defineModel();
  </script>
  