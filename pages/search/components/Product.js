import React from "react";

// Simple component that displays the product info

const Product = ({ name, price, description }) => {
  return (
    <div className="border border-white p-3 hover:bg-slate-300 hover:text-black">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;
