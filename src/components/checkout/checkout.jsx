import userEvent from "@testing-library/user-event";
import React from "react";
import { useStateValue } from "../../stateProvider";
import "./checkout.css";
import { CheckoutProduct } from "./checkoutProduct";
import { Subtotal } from "./subtotal";

export const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="picture"
        />
        <div>
          <h3>hello guest</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

         

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};
