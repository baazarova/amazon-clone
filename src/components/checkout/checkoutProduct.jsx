import React from 'react';
import { useStateValue } from '../../stateProvider';
import './checkoutProduct.css';

export const CheckoutProduct = ({image, price, title, id}) => {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="product image" />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}
