🛍️ Product Submission Form (Vue 3 + VeeValidate)
A fully-featured product submission form built with Vue 3, VeeValidate, and Composition API. This form supports dynamic field rendering based on user input and includes validation, state management (Vuex), and reusable custom components.

🚀 Features
Built with Vue 3 + Composition API

VeeValidate + Yup for robust validation

Dynamic form fields with conditional rendering

Modular and reusable components

Auto-generated Product ID

Responsive and modern design with scoped CSS

Integration with Vuex store for product submission

Over 20 fields with complex logic

🧩 Technologies Used
Vue 3

Vite (optional if not mentioned)

VeeValidate & Yup

Vuex

Custom Vue components (TextInput, SelectInput, FileUpload, etc.)

🛠️ Setup & Development
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/product-submission-form.git
cd product-submission-form
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Locally
bash
Copy
Edit
npm run dev
4. Build for Production
bash
Copy
Edit
npm run build
🧪 Validation Schema
The form uses Yup for schema-based validation. Required fields include:

Product Name

Product Category

Brand Name

Product Description

Price

Currency

Stock Quantity

Shipping Options

Return Policy

Publication Status

🔄 Conditional Field Logic
Form fields appear/disappear dynamically:

Custom Category appears if Other category is selected.

Model Number for Electronics only.

Available Sizes for Clothing → Tops, Bottoms, Footwear.

Colors appear for Clothing & Electronics.

Warranty & Material for Electronics or Home & Garden.

Discount Value appears for % / fixed discount types.

Next Day Shipping enabled only if weight > 5 kg.

Publication Date appears for scheduled publication.