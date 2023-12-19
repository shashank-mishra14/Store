import React from 'react'
import '../styles/ProductReviews.css'
import ProductReviewCard from './ProductReviewCard.jsx'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
        {productReviews.map((item, index)=>(
            <ProductReviewCard price={item.price} name={item.name} review= {item.review} index= {index} key={item.imagewfegw} />
        ))}
    </div>
  )
}

export default ProductReviews