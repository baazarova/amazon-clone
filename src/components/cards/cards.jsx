import React from "react";
import { useStateValue } from "../../stateProvider";
import "./cards.css";

export const Cards = ({title, image, price}) => {

  const [state, dispatch] = useStateValue()

  const addToBasket = ()=>{
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        image: image,
        price: price,
      }
    })
  }

  return (
    <div className="card">
      <div className="card__info">
        <p>{title}</p>
        <p className="card__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <img className="card__img"
          src={image}
          alt="picture of book"
        />
        <button onClick={addToBasket} className="card__btn">Add to basket</button>
      </div>
    </div>
  );
};
