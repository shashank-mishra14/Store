import React from 'react'
import '../styles/HotItemcard.css'
const HotItemcard = ({image, index, name, price}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemcard