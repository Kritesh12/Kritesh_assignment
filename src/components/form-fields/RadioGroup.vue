<template>
    <div class="mb-0">
    
      <label v-if="label" :for="name" class="block font-semibold mb-1">{{ label }}</label>
      <div class="form-check px-1">
        <label v-for="option in options" :key="option" class="form-check-label w-100">
          <input
  class="form-check-input"
  type="radio"
  :id="`${name}-${option}`"
  :name="name"
  :value="option"
  v-model="modelValue"
/>

          {{ option }}
        </label>
      </div>
      <div v-if="error" class="error_validation d-none">{{ error }}</div>
    </div>

   
  </template>
  
  <script setup>
  defineProps({ name: String, label: String, options: Array });
  const modelValue = defineModel();
  </script>
  