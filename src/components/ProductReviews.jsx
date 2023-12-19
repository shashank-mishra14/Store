import React from 'react'
import '../styles/ProductReviews.css'
import ProductReviewCard from './components/ProductReviewCard.jsx'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
        {productReviews.map((item, index)=>(
            <ProductReviewCard price={item.price} name={item.name} review= {item.review} index= {index} key={item.image} />
        ))}
    </div>
  )
}

export default ProductReviews