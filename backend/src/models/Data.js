let productList = [
    {
        name: "iphone 16",
        price: 1500,
        stock: 10000,
        image: "https://media.very.co.uk/i/very/W57N3_SQ1_0000000004_BLACK_SLf?$pdp_990x1320_x2$&fmt=webp&$roundel_very$&p1_img=blank_apple"
    },

    {
        name: "iphone 16 Pro ",
        price: 1600,
        stock: 20000,
        image: "https://www.cellcom.com/sites/default/files/styles/max_650x650/public/2024-09/iPhone_16_Ultramarine_1.jpg?itok=MtJrYMPh",
    },
    {
        name: "iphone 15 Pro Max",
        price: 1300,
        stock: 10000,
        image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-15-pro-max.png",
    },

    {
        name: "iphone 14 Pro Max",
        price: 1320,
        stock: 20000,
        image: "https://i.ebayimg.com/00/s/ODQwWDExOTI=/z/NawAAOSwj4dkghOz/$_57.JPG?set_id=8800005007",
    },
    {
        name: "iphone 14",
        price: 1230,
        stock: 10000,
        image: "https://m.media-amazon.com/images/I/61aEBeER-+L._UF894,1000_QL80_.jpg",
    },

    {
        name: "iphone 13",
        price: 1600,
        stock: 20000,
        image: "https://techcrunch.com/wp-content/uploads/2022/09/Apple-iphone-14-Pro-review-1.jpeg?w=1024",
    },
    {
        name: "iPhone 14 Mini",
        price: 1400,
        stock: 9000,
        image: "https://d.scdn.gr/images/sku_main_images/038004/38004848/xlarge_20221017155136_apple_iphone_14_5g_6gb_128gb_starlight.jpeg"
    },
    {
        name: "iPhone 13 Plus",
        price: 1310,
        stock: 14000,
        image: "https://m.media-amazon.com/images/I/61VuVU94RnL.jpg"
    },
    {
        name: "iPhone 12 Plus",
        price: 850,
        stock: 13000,
        image: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._UF1000,1000_QL80_.jpg"
    },
    {
        name: "iPhone 11 Mini",
        price: 350,
        stock: 8000,
        image: "https://m.media-amazon.com/images/I/51l69jmcWcL._UF894,1000_QL80_.jpg"
    },
    {
        name: "iPhone 10 Pro",
        price: 60,
        stock: 10000,
        image: "https://i.ebayimg.com/images/g/KasAAOSwH4JhbaFq/s-l1200.jpg"
    },
    {
        name: "iPhone 10 Pro Max",
        price: 50,
        stock: 12000,
        image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111864_iphonex.png"
    },
  
    {
        name: "iPhone 8",
        price: 50,
        stock: 6000,
        image: "https://m.media-amazon.com/images/I/61aZ+koDWKL.jpg"
    },
    {
        name: "iPhone 8 Plus",
        price: 50,
        stock: 8000,
        image: "https://i.ebayimg.com/images/g/bMkAAOSwQS1aHuir/s-l1200.jpg"
    },
    {
        name: "iPhone 7",
        price: 90,
        stock: 5000,
        image: "https://i.ebayimg.com/images/g/FeoAAOSwIUFb-KMo/s-l1200.jpg"
    },
    {
        name: "iPhone 7 Plus",
        price: 95,
        stock: 7000,
        image: "https://i5.walmartimages.com/seo/iPhone-7-Plus-128GB-Jet-Black-Unlocked-A-Used_51728fba-4033-4d2c-8dbf-dfa7e3b0f3fe.17cd12a398c0e2f8216fc625b3cbd3b1.jpeg"
    },

    {
        name: "iPhone 5s Pro",
        price: 65,
        stock: 5000,
        image: "https://i.ebayimg.com/images/g/Q5QAAOSw8~ZoKnki/s-l500.jpg"
    },
    {
        name: "iPhone 5c Pro",
        price: 78,
        stock: 5000,
        image: "https://www.reusetek.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/g/r/green-iphone-5c-a1532-refurbished_1_1.jpg"
    },
    {
        name: "iPhone 4s Pro",
        price: 40,
        stock: 4000,
        image: "https://www.cellphonebeast.com/cdn/shop/products/s-l1600_841f1f35-ea2a-4016-98ae-9078aa3022ab.jpg?v=1527287933"
    },
    
    {
        name: "iPhone 16 Pro Ultra",
        price: 700,
        stock: 19000,
        image: "https://m-cdn.phonearena.com/images/article/142843-wide-two_1200/Here-is-how-iPhone-15-Ultra-may-benefit-from-iPhone-14-Pros-popularity-renders-included.jpg"
    },
   
    {
        name: "iPhone 14 Pro Ultra",
        price: 600,
        stock: 17000,
        image: "https://www.dxomark.com/wp-content/uploads/medias/post-95390/Apple-iPhone-13-Pro-Max-featured-image-packshot-review-1024x691.jpg"
    },
    {
        name: "iPhone 13 Pro Ultra",
        price: 550,
        stock: 16000,
        image: "https://www.dxomark.com/wp-content/uploads/medias/post-95390/Apple-iPhone-13-Pro-Max-featured-image-packshot-review-1024x691.jpg"
    },
    {
        name: "iPhone 12 Pro Ultra",
        price: 500,
        stock: 15000,
        image: "https://m.media-amazon.com/images/I/519std5cWiL.jpg"
    },
    {
        name: "iPhone 11 Pro Ultra",
        price: 450,
        stock: 14000,
        image: "https://www.spigen.com/cdn/shop/products/detail_web_ip11promax_uh_cc_03.jpg?v=1701733128&width=1946"
    },
    {
        name: "iPhone SE (4th Gen)",
        price: 350,
        stock: 11000,
        image: "https://photos5.appleinsider.com/gallery/62563-129719-61935-128267-iPhone-SE-4-camera-xl-xl.jpg"
    }
    ,


]
export default productList


// }
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   stock: { type: Number, required: true },
//   image: { type: String },
//   category: { type: String },
// });










