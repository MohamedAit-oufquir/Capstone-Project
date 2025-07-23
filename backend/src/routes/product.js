import express from 'express';
import Store from '../content-types/product/schema.js';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Store.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: 'Error fetching products', error: e });
  }
});

// CREATE new product
router.post('/create', async (req, res) => {
  try {
    const newProduct = await Store.create(req.body);
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(500).json({ message: 'Error creating product', error: e });
  }
});

// UPDATE product by ID
router.put('/Store/:id', async (req, res) => {
  try {
    const updatedProduct = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (e) {
    res.status(500).json({ message: 'Error updating product', error: e });
  }
});

// DELETE product by ID
router.delete('/Product/:id', async (req, res) => {
  try {
    const response = await Store.findByIdAndDelete(req.params.id);
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json({ message: 'Error deleting product', error: e });
  }
});

// Export the router
export default router;













