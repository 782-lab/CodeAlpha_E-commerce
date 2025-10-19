const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

// Route files
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js'); // <-- ADD THIS LINE

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('E-commerce Backend API is running...');
});

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes); // <-- ADD THIS LINE

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});