import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Shop = () => {
  const tshirts = useLoaderData();


  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exist = cart.find(ts => ts._id === tshirt._id );
    if(exist){
        alert('tshirt already added')
    }
    else{

        const newCart = [...cart, tshirt];
        setCart(newCart)
    }
  };


  const handleRemoveItem = shirt =>{
    const remaining = cart.filter(ts => ts._id !== shirt._id);
    setCart(remaining)
  }

  return (
    <div className="bg-gray-100">
      <h1 className="text-5xl p-10 underline text-sky-800">
        All kind of T-shirt at out shop: {tshirts.length}{" "}
      </h1>

      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3 grid grid-cols-3 gap-10 ml-20">
          {tshirts.map((tshirt) => (
            <Tshirt
              handleAddToCart={handleAddToCart}
              key={tshirt._id}
              tshirt={tshirt}
            ></Tshirt>
          ))}
        </div>
        <div className=" border bg-white">
          <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
          <p className="">
            {cart.length === 0 ? (
              "PLEASE BUY SOMETHING"
            ) : (
              "THANK YOU FOR BUYING SOMETHING"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
