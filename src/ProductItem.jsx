import React from 'react'

function ProductItem(props) {
  const {product} = props
  return (
    <li>{product.id}, {product.title}, {product.price}</li>
  )
}

export default ProductItem