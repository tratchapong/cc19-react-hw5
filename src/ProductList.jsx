import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
  const {products} = props
  return (
    <ul className='border flex flex-col gap-2 '>
      { products.map(el=> (
        <ProductItem key={el.id} product={el}/>
      ))}
    </ul>
  )
}

export default ProductList