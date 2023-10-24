import { popularProducts } from "../data"
import Product from "./Product"

const Products = ({cat, sort}) => {
  console.log(cat, sort)
  return (
    <div className="Container p-5 grid grid-cols-4">
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products