<template>
    <div>
        <label v-if="label" :for="name" class="block font-semibold mb-1">{{ label }}</label>
      <input
        type="number"
        min="0"
        :id="name"
        class="form-control"
        :value="modelValue"
        @input="$emit('update:modelValue', parseFloat($event.target.value))"
      />
      <!-- <span v-if="error" class="error-message">{{ error }}</span> -->
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    label: String,
    modelValue: [Number, String],
    error: String
  });
  
  defineEmits(['update:modelValue']);
  </script>
  