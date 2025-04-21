import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      categories: [], 
      subCategories: {},
      productTypes: [], 
      currencies: [], 
      discountTypes: [], 
      taxCategories: [],
      shippingOptions: [],  
      returnPolicies: [],  
      warrantyUnits: [],  
      publicationStatusOptions: [], 
    };
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSubCategories(state, subCategories) {
      state.subCategories = subCategories;
    },
    setProductTypes(state, productTypes) {
      state.productTypes = productTypes;
    },
    setCurrencies(state, currencies) {
      state.currencies = currencies;
    },
    setDiscountTypes(state, discountTypes) {
      state.discountTypes = discountTypes;
    },
    setTaxCategories(state, taxCategories) {
      state.taxCategories = taxCategories;
    },
    setShippingOptions(state, shippingOptions) {
      state.shippingOptions = shippingOptions;
    },
    setReturnPolicies(state, returnPolicies) {
      state.returnPolicies = returnPolicies;
    },
    setWarrantyUnits(state, warrantyUnits) {
      state.warrantyUnits = warrantyUnits;
    },
    setPublicationStatusOptions(state, publicationStatusOptions) {
      state.publicationStatusOptions = publicationStatusOptions;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      const categories = ['Electronics', 'Clothing', 'Home & Garden'];
      commit('setCategories', categories);
      const subCategories = {
        Electronics: ['Mobiles', 'Laptops', 'Cameras'],
        Clothing: ['Tops', 'Bottoms', 'Footwear'],
        'Home & Garden': ['Furniture', 'Kitchen', 'Decor'],
      };
      commit('setSubCategories', subCategories);
      commit('setProductTypes', ['New', 'Refurbished']);
      commit('setCurrencies', ['USD', 'EUR']);
      commit('setDiscountTypes', ['No Discount', 'Percentage', 'Fixed']);
      commit('setTaxCategories', ['VAT', 'GST']);
      commit('setShippingOptions', ['Free Shipping', 'Express Shipping']);
      commit('setReturnPolicies', ['30 Days', '60 Days', 'No Return']);
      commit('setWarrantyUnits', ['Months', 'Years']);
      commit('setPublicationStatusOptions', ['Published', 'Draft', 'Scheduled']);
    },
  },
  getters: {
    categories: (state) => state.categories,
    subCategories: (state) => state.subCategories,
    productTypes: (state) => state.productTypes,
    currencies: (state) => state.currencies,
    discountTypes: (state) => state.discountTypes,
    taxCategories: (state) => state.taxCategories,
    shippingOptions: (state) => state.shippingOptions,
    returnPolicies: (state) => state.returnPolicies,
    warrantyUnits: (state) => state.warrantyUnits,
    publicationStatusOptions: (state) => state.publicationStatusOptions,
  },
});

export default store;
