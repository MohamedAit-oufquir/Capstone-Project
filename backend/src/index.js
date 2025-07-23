// import necessary modules
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectdb from '../db.js';  // ensure your db.js exports 'connectdb'
import productRouter from './api/product/routes/product.js'; // adjust the path depending on file location

// then use
app.use('/api/products', productRouter);

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRouter); // use '/api/products' route

// Base URL
app.get('/', (req, res) => {
  res.json('hey backend');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at ${port}`);
  connectdb(); // connect to database
});


