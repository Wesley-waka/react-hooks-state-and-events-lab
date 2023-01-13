import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [cart, showCart] = useState(true)
  const clicker = cart ? "" : "in-cart"

  return (
    <li className={clicker}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => {
        showCart(!cart)
      }}>Add to Cart</button>
    </li>
  );
}

export default Item;
