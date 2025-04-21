<!-- components/FormInput.vue -->
<template>
    <div class="form-group">
      <label :for="name">{{ label }}</label>
      <Field
        :id="name"
        :name="name"
        :type="type"
        v-model="fieldValue"
        class="form-control"
        v-bind="$attrs"
      />
      <ErrorMessage :name="name" class="error-message" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { Field, ErrorMessage } from 'vee-validate';
  
  const props = defineProps({
    name: String,
    label: String,
    type: {
      type: String,
      default: 'text',
    },
    modelValue: [String, Number]
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const fieldValue = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  });
  </script>
  
  <style scoped>
  .error-message {
    color: red;
    font-size: 0.875rem;
  }
  </style>
  