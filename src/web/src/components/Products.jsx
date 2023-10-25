import { useEffect, useState } from "react"
import { popularProducts } from "../data"
import Product from "./Product"

import axios from "axios"

const Products = ({cat, sort}) => {
  //console.log(cat, sort)

  const [products, setProducts] = useState([])
  //const [filteredProducts,SetfilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`: `http://localhost:5000/api/products`)
        
        //console.log(res)

        setProducts(res.data)

        console.log(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [cat])

  return (
    <div className="Container p-5 grid grid-cols-4">
      {products.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products