// import necessary modules
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectdb from './db.js';  // ensure your db.js exports 'connectdb'
import productRouter from './routes/product.js'; // adjust the path depending on file location

import Product from './models/product.js'
import data from './models/Data.js'

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
  connectdb().then(() => {
    // add starter data
    addStarterData()
  }) // connect to database
  
});


async function addStarterData() {
  try {
    console.log('adding starter data...')
    await Product.deleteMany({})
    await Product.insertMany(data)
  } catch(e) {
    console.log(e)
  }
}
