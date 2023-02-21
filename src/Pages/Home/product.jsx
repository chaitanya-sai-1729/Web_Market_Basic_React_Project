import React, { useContext } from 'react';
import { HomeContext } from '../../ContextProvider/HomeContext';




export const Product = (props) => {
  const {id,productName,price,productImage} = props.data;
  const {addToCart,cartItems} = useContext(HomeContext);
  const noOfItems=cartItems[id];
  return (
    <div className='product'>
      <img src={productImage}/>
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
      </div>
      <button className='addToCartBtn' onClick={()=>addToCart(id)}>Add To Cart {noOfItems >0 && <>({noOfItems})</>}</button>
    </div>
  )
}
