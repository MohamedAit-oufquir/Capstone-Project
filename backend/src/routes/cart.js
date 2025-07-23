import express from 'express';
import Cart from '../models/Cart';
import jwt from 'jsonwebtoken';


const router = express.Router();

// Middleware to verify token
const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });
  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Add to cart
// router.post('/', auth, async (req, res) => {
//   try {
//     let cart = await Cart.findOne({ userId: req.user._id });
//     if (!cart) {
//       cart = new Cart({ userId: req.user._id, items: [] });
//     }
//     const itemIndex = cart.items.findIndex(item => item.productId == req.body.productId);
//     if (itemIndex > -1) {
//       cart.items[itemIndex].quantity += req.body.quantity;
//     } else {
//       cart.items.push({ productId: req.body.productId, quantity: req.body.quantity });
//     }
//     await cart.save();
//     res.json(cart);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Get cart
router.get('/', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;








