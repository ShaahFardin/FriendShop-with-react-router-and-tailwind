import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <p className="text-4xl">Card Summary</p>
      <p>Number of added product : {cart.length}</p>
      <div className=" m-7 p-5 text-start shadow-xl">
        {cart.map((shirt) => (
          <div className="flex justify-between p-2">
            <p>{shirt.name}</p>
            <button
              onClick={() => handleRemoveItem(shirt)}
              className="border rounded-sm bg-red-300 cursor-pointer"
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;