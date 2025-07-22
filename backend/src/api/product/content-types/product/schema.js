import mongoose from "mongoose";

const shopeSchema= new mongoose.Schema({

  "kind": "collectionType",
  "collectionName": "products",
  "info": {
    "singularName": "product",
    "pluralName": "products",
    "displayName": "product",
    "description": ""
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "productImg": {
      "type": "media",
      "multiple": true,
      "required": true,
      "allowedTypes": [
        "images"
      ]
    },
    "productTitle": {
      "type": "string",
      "required": true
    },
    "productPrice": {
      "type": "decimal",
      "required": true
    },
    "productDescription": {
      "type": "text",
      "required": true
    },
    "productRating": {
      "type": "decimal",
      "required": true
    },
    "category": {
      "type": "enumeration",
      "enum": [
        "men",
        "women"
      ],
      "required": true
    }
  }
})
ShopeSchema.index({collectionName:1})
const Store = mongoose.model("store",ShopeSchema);

export default Store ;
