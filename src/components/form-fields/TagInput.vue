<template>
    <div class="mb-4">
        <label v-if="label" :for="name" class="block font-semibold mb-1">{{ label }}</label>
      <div class="flex gap-2 flex-wrap mb-2">
        <span
          v-for="(tag, i) in modelValue"
          :key="i"
          class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
        >
          {{ tag }}
          <button type="button" @click="removeTag(i)" class="ml-1">×</button>
        </span>
      </div>
      <input
        v-model="newTag"
        @keydown.enter.prevent="addTag"
        placeholder=""
        class="border px-2 py-1 rounded form-control"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  defineProps({ label: String });
  const modelValue = defineModel();
  const newTag = ref('');
  
  function addTag() {
    const trimmed = newTag.value.trim();
    if (trimmed && !(modelValue.value || []).includes(trimmed)) {
      modelValue.value = [...(modelValue.value ?? []), trimmed];
    }
    newTag.value = '';
  }
  
  function removeTag(i) {
    modelValue.value.splice(i, 1);
  }
  </script>
  