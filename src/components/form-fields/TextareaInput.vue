<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>

    <Field
      :as="as"
      :id="name"
      :name="name"
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
  as: {
    type: String,
    default: 'input', // or 'textarea'
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
