import React from "react";

const ProductItem = ({ id, name, image, price, description, quantity }) => {
  return (
    <div className="product-item" style={{ backgroundImage: `url(${image})` }}>
      <h3 className="name">{name}</h3>
      <div className="details">
        <span className="price">{price}</span>
        <span className="quantity">{quantity}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProductItem;
