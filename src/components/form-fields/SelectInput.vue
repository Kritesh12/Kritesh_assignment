<template>
    <div>
        <label v-if="label" :for="name" class="block font-semibold mb-1">{{ label }}</label>
      <select
        :id="name"
        class="form-control"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option disabled value="">Select</option>
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
      <div v-if="error" class="error_validation d-none">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    label: String,
    options: Array,
    modelValue: String,
    error: String
  });
 

  defineEmits(['update:modelValue']);
  </script>
  