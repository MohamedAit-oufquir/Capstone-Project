import { useEffect, useState } from 'react'
import "./Electronics.css"

export default function Electronics() {
  const [electronics, setElectronics] = useState([])
  const [cart, setCart] = useState([])

  async function getData() {
    try {
      const response = await fetch(import.meta.env.VITE_BASE_URL + '/api/products')
      const data = await response.json()
      setElectronics(data)
    } catch (e) {
      console.log(e)
    }
  }

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
    alert(`${item.name} added to cart!`) // Simple feedback
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Electronics</h1>

      <div className = "products-container">
        {electronics.map((item) => (
          <div key={item.id || item.name} className="product">
            <img src={item.image} alt={item.name} />
            <div>
              {item.name}
              <br />
              Price: ${item.price}
            </div>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}













// import { useEffect, useState } from 'react'
// import "./Electronics.css"


// export default function Electronics() {
//   const [electronics, setElectronics] = useState([])
//   const [cart, setCart] = useState([])

//   async function getData() {
//     try {
//       const response = await fetch('http://localhost:3000/api/products')
//       const data = await response.json()
//       setElectronics(data)
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   const addToCart = (item) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
//       if (existingItem) {
//         return prevCart.map(cartItem =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         )
//       } else {
//         return [...prevCart, { ...item, quantity: 1 }]
//       }
//     })
//     alert(`${item.name} added to cart!`) // Simple feedback
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   return (
//     <div>
//       <h1>Electronics</h1>

//       <div className="products-container">
//         {electronics.map((item) => (
//           <div key={item.id || item.name} className="product">
//             <img src={item.image} alt={item.name} />
//             <div>  

//               {item.name}
//               <br />
//               Price: ${item.price}
              
//             </div>
//             <button onClick={() => addToCart(item)}>Add To Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



