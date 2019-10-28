import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div>
      <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
