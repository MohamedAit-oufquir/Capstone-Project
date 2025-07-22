import { Delete } from "@mui/icons-material";
import express from express;
const router = express.Router();
import Store from "../content-types/product/schema.js"

//Router get

router.get('/', async (req,res)=>{
  try{
    const newProduct= await Store.find();
    res.status(200).json(Product);
  }catch{
    res.status(500).json({Output: "error"});
  }
});


// post
router.post("/create", async (req, res) => {
  try {
    const newProduct = await Store.create(req.body);
    res.status(201).json(newProduct);
  } catch {
    res.status(500).json({ Output: "error" });
  }
});

// put
router.put("/Store/:id", async (req, res) => {
  try {
    const newProduct = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(editStore);
  } catch {
    res.status(500).json({ message: "error!" });
  }
});


/// Delete:
router.delete('/Product',async (req,res)=>{
  try{
    console.log('Delete/product/:id')
    const response = await product.findByIdAndDelete(req.params.id)
    console.log(response)
    res.status(200).json(response)
  }catch(e){
    console.log(e)
    res.status(400).json(e)
  }
})

'use strict';
//product router
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product');
