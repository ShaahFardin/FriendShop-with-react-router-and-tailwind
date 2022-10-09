import React from 'react';

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {name, picture, price} = tshirt;
    return (
      <div className="border-2 bg-white shadow-xl">
        <img className="w-full h-96 p-5" src={picture} alt="" />
        <h1 className="text-2xl">{name}</h1>
        <p>Price : {price}</p>
        <button onClick={()=> handleAddToCart(tshirt)} className="border px-5 py-1 bg-slate-800 text-white my-4">
          Buy Now
        </button>
      </div>
    );
};

export default Tshirt;