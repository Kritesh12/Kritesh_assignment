<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="form-container">

  <!-- <form @submit.prevent="submitHandler" class="form-container"> -->
    
      <div class="mb-3">
          <label for="productId" class="form-label">Product ID</label>
          <input type="text" id="productId" class="form-control" :value="productId" readonly />
      </div>
      <div class="mb-3">
        <label for="productName">Product Name</label>
        <TextInput
        name="productName"
        label="Product Name"
        v-model="values.productName"
      />

        
      </div>

      <div class="mb-3">
          <label for="productCategory" class="form-label">Product Category</label>
          <SelectInput name="productCategory" :options="categories" v-model="values.productCategory" @change="onCategoryChange" class="form-control" />
      </div>
      <div class="mb-3 d-none" id="customCategoryDiv">
          <label for="customCategory" class="form-label">Custom Category</label>
          <TextInput name="customCategory" id="customCategory" v-model="values.customCategory"  class="form-control" />
      </div>

     <div class="mb-3">
          <label for="subCategory" class="form-label">Sub-Category</label>
          <SelectInput name="subCategory" :options="subCategories[values.productCategory]"
              v-model="values.subCategory" class="form-control" />
      </div>

      <div v-if="values.subCategory" class="mb-3">
          <label class="form-label">Product Type</label>
          <RadioGroup :options="productTypes" v-model="values.productType"
              class="form-control" />
      </div>

      <div class="mb-3">
          <label for="brandName" class="form-label">Brand Name</label>
          <TextInput name="brandName" v-model="values.brandName" class="form-control" />
      </div>

      <div class="mb-3 d-none" id="modelNumberDiv">
          <label for="modelNumber" class="form-label">Model Number</label>
          <TextInput name="modelNumber" label="Model Number" v-model="values.modelNumber"
              class="form-control" />
      </div>

      <div class="mb-3">
      
      <ErrorMessage :name="name" class="error-message" />
          <label for="productDescription" class="form-label">Product Description</label>
          <TextInput
  name="productDescription"
   id=" productDescription" 
   v-model="values.productDescription"
  class="form-control"
  as="textarea"
  rows="4"
/>

          <!-- <TextInput name="productDescription" id=" productDescription" v-model="values.productDescription"
             class="form-control" />
             <ErrorMessage :name="name" class="error-message" /> -->
      </div>

      <div class="mb-3">
          <label for="shortDescription" class="form-label">Short Description</label>
          <TextInput  as="textarea"
          rows="4" name="shortDescription" v-model="values.shortDescription"
              maxlength="150" class="form-control" />
      </div>

      <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <TextInput type="number" min="0" name="price" label="Price" v-model="values.price" class="form-control" />
      </div>

      <div class="mb-3">
          <label for="currency" class="form-label">Currency</label>
          <SelectInput name="currency" :options="currencies" v-model="values.currency"
              class="form-control" />
      </div>

      <div class="mb-3">
          <label class="form-label">Discount Type</label>
          <RadioGroup name="discountTypes" :options="discountTypes" v-model="values.discountType"
             @change="onDiscountTypeChange" class="form-control" />
      </div>

      <div v-if="values.discountType !== 'No Discount'" class="mb-3 d-none" id="discount_value">
          <label for="discountValue" class="form-label">Discount Value</label>
          <TextInput min="0" max="100"  name="discountValue" label="Discount Value" v-model="values.discountValue"
             class="form-control" @keyup="discountValue" />
      </div>

      <div class="mb-3">
          <label for="taxCategory" class="form-label">Tax Category</label>
          <SelectInput name="taxCategory" :options="taxCategories" v-model="values.taxCategory"
             class="form-control" />
      </div>

      <div class="mb-3">
          <label for="stockQuantity" class="form-label">Stock Quantity</label>
          <TextInput min="0" name="stockQuantity" type="number" label="Stock Quantity" v-model="values.stockQuantity"
             class="form-control" />
      </div>

      <div class="mb-3">
          <label for="productWeight" class="form-label">Product Weight</label>
          <TextInput name="productWeight" type="number" @keyup="getProductWeight" label="Weight"
              v-model.number="values.productWeight" class="form-control" />

          <SelectInput name="weightUnit" :options="weightUnits" v-model="values.weightUnit" class="form-control" />
      </div>

      <div class="mb-3">
          <label for="productDimensions" class="form-label">Product Dimensions</label>
          <div class="dimensions">
              <TextInput min="0" name="length" label="Length" v-model="values.length"
                  class="form-control" />
              <TextInput min="0" name="width" label="Width" v-model="values.width"
                  class="form-control" />
              <TextInput min="0" name="height" label="Height" v-model="values.height"
                  class="form-control" />
              <SelectInput name="dimensionUnit" :options="dimensionUnits" v-model="values.dimensionUnit"
                  class="form-control" />
          </div>
      </div>
      <div class="mb-3 d-none" id="availableColors">
          <label class="form-label">Available Colors</label>
          <CheckboxGroup :options="colorOptions" v-model="values.selectedColors" class="form-control" />
      </div>

      <div class="mb-3 d-none" id="availableSize">
          <label class="form-label">Available Sizes</label>
          <CheckboxGroup :options="sizeOptions" v-model="values.selectedSizes" class="form-control" />
      </div>

      <div class="mb-3 d-none" id="materialDiv">
          <label for="material" class="form-label">Material</label>
          <input type="text" id="material" v-model="values.material" class="form-control" />
      </div>

      <div class="mb-3">
          <label for="productFeatures" class="form-label">Product Features</label>
          <DynamicListInput v-model="values.productFeatures"  class="form-control" />
      </div>

      <div class="mb-3">
          <label class="form-label">Shipping Options</label>
          <CheckboxGroup :options="shippingOptions" name="shippingOptions" v-model="values.selectedShipping"
              class="form-control" />
      </div>

      <div class="mb-3">
          <label for="returnPolicy" class="form-label">Return Policy</label>
          <SelectInput name="returnPolicy" :options="returnPolicies" v-model="values.returnPolicy"
              class="form-control" />
      </div>

      <div class="mb-3 d-none" id="warrantyPeriod">
          <label for="warrantyPeriod" class="form-label">Warranty Period</label>
          <TextInput min="0" name="warrantyPeriod" v-model="values.warrantyPeriod"
              class="form-control" />
          <SelectInput name="warrantyUnit" :options="warrantyUnits" v-model="values.warrantyUnit"
              class="form-control" />
      </div>

      <div class="mb-3">
          <label for="productImages" class="form-label">Product Images</label>
          <FileUpload  v-model="values.productImages" class="form-control" />
      </div>

      <div class="mb-3">
          <label for="productTags" class="form-label">Product Tags</label>
          <TagInput  v-model="values.productTags" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="seoKeyWords" class="form-label">SEO</label>
          <TextInput  as="textarea"
          rows="4" name="seoKeyWords" v-model="values.seoKeyWords"
              maxlength="150" class="form-control" />
      </div>

      <div class="mb-3">
          <label class="form-label">Publication Status</label>
          <RadioGroup name="publicationStatus" :options="publicationStatusOptions"  v-model="values.publicationStatus"
              class="form-control" @change="onPublicationStatusChange" />
      </div>

      <div class="mb-3 d-none" id="publicationDate">
          <label for="publicationDate" class="form-label">Publication Date</label>
          <DatePicker  v-model="values.publicationDate" class="form-control" />
      </div>  

    <div class="form-actions">
        <button type="submit" class="submit-button">
            Submit Product
        </button>
    </div>
  </Form>
</template>

<script setup>

import { Form, Field, ErrorMessage, useForm} from 'vee-validate';
import * as yup from 'yup';
import { useStore } from 'vuex';
import NumberInput from './components/form-fields/NumberInput.vue';
import TextareaInput from './components/form-fields/TextareaInput.vue';
import SelectInput from './components/form-fields/SelectInput.vue';
import TextInput from './components/form-fields/TextInput.vue';
import RadioGroup from './components/form-fields/RadioGroup.vue';
import CheckboxGroup from './components/form-fields/CheckboxGroup.vue';
import FileUpload from './components/form-fields/FileUpload.vue';
import TagInput from './components/form-fields/TagInput.vue';
import DatePicker from './components/form-fields/DatePicker.vue';
import DynamicListInput from './components/form-fields/DynamicListInput.vue';

import { ref, onMounted } from 'vue';
const values = ref({
  productName: '',
  customCategory : ""
});
const store = useStore();

const categories = ['Electronics', 'Clothing', 'Food & Beverages', 'Home & Garden', 'Beauty & Personal Care', 'Other'];
const subCategories = {
Electronics: ['Mobiles', 'Laptops', 'Cameras'],
Clothing: ['Tops', 'Bottoms', 'Footwear'],
'Home & Garden': ['Furniture', 'Kitchen', 'Decor'],
};
const productTypes = ['New', 'Refurbished'];
const discountTypes = ['No Discount', 'Percentage', 'Fixed Amount'];
const weightUnits = ['kg', 'lbs'];
const dimensionUnits = ['cm', 'inches'];
const colorOptions = ['Red', 'Blue', 'Green', 'Black', 'White'];
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const shippingOptions = ['Standard', 'Express', 'Next Day', 'International'];
const returnPolicies = ['30 Days', '60 Days', 'No Return'];
const warrantyUnits = ['Months', 'Years'];
const publicationStatusOptions = ['Draft', 'Published', 'Scheduled'];

const schema = yup.object({
  productName: yup.string().required(),
  brandName: yup.string().required(),
  modelNumber: yup.string().required(),
  price: yup.string().required(),
  length: yup.string().required(),
  height: yup.string().required(),
  width: yup.string().required(),
  stockQuantity: yup.string().required(),
  productWeight: yup.string().required(),
  shortDescription: yup.string().required(),
  seoKeyWords: yup.string().required(),
  
  productDescription: yup.string().required(),
  productDescription: yup
    .string()
    .required('Description is required')
    .min(10, 'Must be at least 10 characters')
    .max(200, 'Must be less than 200 characters'),

 
  // productName: yup.string().required().email(),
  // password: yup.string().required().min(8),
});

function onSubmit(values) {
  // Submit values to API...
  alert(JSON.stringify(values, null, 2));
}


function onCategoryChange() {
const categorySelect = document.getElementById('productCategory');
const subcategorySelect = document.getElementById('subCategory');
subcategorySelect.innerHTML = '<option value="">Select</option>';
document.getElementById('customCategoryDiv').classList.add('d-none');
document.getElementById('modelNumberDiv').classList.add('d-none');
document.getElementById('availableSize').classList.add('d-none');
document.getElementById('availableColors').classList.add('d-none');
document.getElementById('warrantyPeriod').classList.add('d-none');
document.getElementById('materialDiv').classList.add('d-none');
if (categorySelect.value) {
    if (categorySelect.value === "Electronics" || categorySelect.value === "Home & Garden") {
        document.getElementById('warrantyPeriod').classList.remove('d-none');
        document.getElementById('materialDiv').classList.remove('d-none');
    }
    if (categorySelect.value === "Electronics" || categorySelect.value === "Clothing") {
        if (categorySelect.value === "Electronics") {
            document.getElementById('modelNumberDiv').classList.remove('d-none');
        }
        if (categorySelect.value === "Clothing") {
            document.getElementById('availableSize').classList.remove('d-none');
        }
        document.getElementById('availableColors').classList.remove('d-none');
    }
    if (categorySelect.value === "Other") {
        document.getElementById('customCategoryDiv').classList.remove('d-none');
    } else {
        const selectedCategory = categorySelect.value;
        const subcategories = subCategories[selectedCategory] || [];
        subcategories.forEach(subcategory => {
            const option = document.createElement('option');
            option.value = subcategory;
            option.textContent = subcategory;
            subcategorySelect.appendChild(option);
        });
    }
}
}

const productId = ref('');
function generateProductId() {
const timestamp = Date.now().toString(36);
const random = Math.random().toString(36).substring(2, 8);
return `PROD-${timestamp}-${random}`.toUpperCase();
}

function onDiscountTypeChange(value) {
const element = document.getElementById("discount_value");
element.classList.remove('d-none');
console.log(value.target._value);
if (value.target._value === 'No Discount') {
    element.classList.add('d-none');
} else if (value.target._value === "Percentage") {
    document.getElementById("discountValue").max = 100;
} else {
    document.getElementById("discountValue").removeAttribute("max");
}
}
function onPublicationStatusChange(value) {
const element = document.getElementById("publicationDate");
element.classList.add('d-none');
console.log(value.target._value)
if (value.target._value === 'Scheduled') {
    element.classList.remove('d-none');
}
}

function getProductWeight(value) {
const nextDayCheckbox = document.querySelector('input[type="checkbox"][value="Next Day"]');
console.log(nextDayCheckbox)
if (document.getElementById("productWeight").value > 5) {
    nextDayCheckbox.disabled = false;
} else {
    nextDayCheckbox.checked = false;
    nextDayCheckbox.disabled = true;
}
}
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'CAD', 'AUD'];
const taxCategories = ['GST', 'VAT', 'Sales Tax', 'None'];


function discountValue() {
if (document.querySelector('input[name="discountTypes"]:checked')?.value === "Percentage" && document.getElementById("discountValue").value > 100) {
    document.getElementById("discountValue").value = 100;
    alert(`Discount percentage must be between 0 and 100`);
}
}

onMounted(() => {
productId.value = generateProductId();
});

</script>

<style scoped>
.form-container {
max-width: 1000px;
margin: 0 auto;
padding: 30px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.form-control {
width: 100%;
padding: 12px;
border-radius: 8px;
border: 1px solid #ccc;
font-size: 16px;
margin-bottom: 16px;
transition: border-color 0.3s ease;
}

.form-control:focus {
border-color: #007BFF;
outline: none;
}

label {
font-size: 14px;
font-weight: bold;
color: #333;
margin-bottom: 6px;
display: inline-block;
}

.error-message {
color: #e74c3c;
font-size: 12px;
margin-top: 4px;
}

.submit-button {
padding: 14px 24px;
background-color: #007BFF;
color: #fff;
border: none;
border-radius: 8px;
font-size: 15px;
font-weight: 500;
cursor: pointer;
transition: background-color 0.3s ease;
}

.submit-button:hover {
background-color: #0056b3;
}

.submit-button:focus {
outline: none;
}

.form-actions {
display: flex;
justify-content: flex-end;
margin-top: 20px;
}
</style>