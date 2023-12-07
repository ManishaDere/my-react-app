import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={items} />
      </div>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {items.length === 0 && (
        <h2>Your Cart is empty ..Please add some items</h2>
      )}
    </div>
  );
};

export default Cart;
