import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const {name} = useParams()

  return (
    <div>
        <div>Hello , I AM A SINGLE PRODUCT AND MY ID IS {name}</div>
    </div>
  )
}

export default ProductDetails