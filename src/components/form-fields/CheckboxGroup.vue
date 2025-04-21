<template>
    <div class="mb-0">
      <div class="form-check">
        <label v-for="option in options" :key="option" class="form-check-label w-100">
          <input
           class="form-check-input"
            type="checkbox"
            :value="option"
            :checked="modelValue?.includes(option)"
            @change="onChange(option, $event.target.checked)"
          />
          {{ option }}
          <div v-if="error" class="error_validation d-none">{{ error }}</div>
        </label>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ label: String, options: Array });
  const modelValue = defineModel();
  
  function onChange(option, checked) {
    const current = new Set(modelValue ?? []);
    checked ? current.add(option) : current.delete(option);
    modelValue.value = Array.from(current);
  }
  </script>
  