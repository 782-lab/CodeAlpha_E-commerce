const express = require('express');
const Order = require('../models/orderModel.js');
const { protect } = require('../middleware/authMiddleware.js');

const router = express.Router();

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private
router.post('/', protect, async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id, // Get user ID from the protect middleware
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

module.exports = router;