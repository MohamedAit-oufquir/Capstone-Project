import React from 'react'

export default function Products() {
    let productList = [
        {
            name: "iphone 15",
            price: 500
        },
        {
            name: "iphone 16",
            price: 600
        },
    ]
    return (
        <div>
            <h1>
                Products

            </h1>


            {productList.map((item) => (
                <div key = {item.name}>
                    name:{item.name}
                    price:{item.price}
                    <button>add to cart</button>
                </div>
            ))}

        </div>
    )
}
