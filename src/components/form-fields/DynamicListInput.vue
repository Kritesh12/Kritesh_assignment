<template>
  <div>
   
    <div v-for="(feature, index) in features" :key="index">
      <input v-model="features[index]" class="form-control mt-2" placeholder="Enter feature" />
      <div v-if="error" class="error_validation d-none">{{ error }}</div>
      <button @click="removeFeature(index)" class="text-blue-600 btn btn-danger btn-sm mt-3">Remove</button>
    </div>
    <button @click="addFeature" class="text-blue-600 btn btn-primary btn-sm mt-2">Add Feature</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = ref(['']);

function addFeature() {
  features.value.push('');
}

function removeFeature(index) {
  features.value.splice(index, 1);
}
removeFeature(0);
</script>