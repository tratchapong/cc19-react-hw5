import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {
  return (
    <ul className='border flex flex-col gap-2 '>
      <ProductItem />
    </ul>
  )
}

export default ProductList