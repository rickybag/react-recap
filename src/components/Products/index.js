import React, { useContext } from "react";

import Context from "../../context";

import ProductItem from "./ProductItem";

const Products = () => {
  const { products } = useContext(Context);

  return (
    <div className="products">
      {products.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
