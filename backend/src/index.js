//import
import express from "express";
import "dotenv/config";
import connectDb from "./admin/app.example";
import product from "../src/api/product/content-types/product/schema.js"

//  base url
app.get("/",(req,res)=>{
res.json("hey backend")
});

//listenner

app.listen(port, ()=>{
  console.log(`server listing at ${port}`);
  connectdb();


});



'use strict';

module.exports = {

  register(/*{ strapi }*/) {},



  bootstrap(/*{ strapi }*/) {},
};

