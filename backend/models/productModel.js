const mongoose = require('mongoose');

// Product ka structure (schema) define kar rahe hain
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Iska matlab 'name' field zaroori hai
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0 // Agar price nahi diya to default 0 hoga
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true // Yeh automatically 'createdAt' aur 'updatedAt' fields add kar dega
});

// Schema se model bana rahe hain
const Product = mongoose.model('Product', productSchema);

// Model ko export kar rahe hain taaki dusri files mein use kar sakein
module.exports = Product;