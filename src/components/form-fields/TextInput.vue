<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>

    <!-- Generic Field Rendering -->
    <Field
      :as="as"
      :id="name"
      :name="name"
      v-model="fieldValue"
      class="form-control"
      v-bind="$attrs"
      v-slot="{ field }"
    >
      <!-- If it's a select, render options -->
      <template v-if="as === 'select'">
        <select v-bind="field" class="form-control">
          <option disabled value="">Please select</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </template>

      <!-- For other types (input, textarea) -->
      <template v-else>
        <component
          :is="as"
          v-bind="field"
          class="form-control"
        />
      </template>
    </Field>

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
    default: 'input', // can be 'input', 'textarea', 'select'
  },
  modelValue: [String, Number],
  options: {
    type: Array,
    default: () => []
  }
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
