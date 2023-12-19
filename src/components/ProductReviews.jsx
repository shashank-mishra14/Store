import React from 'react'
import '../styles/ProductReviews.css'
import ProductReviewCard from './components/ProductReviewCard.jsx'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
        {productReviews.map((item, index)=>(
            <ProductReviewCard/>
        ))}
    </div>
  )
}

export default ProductReviews