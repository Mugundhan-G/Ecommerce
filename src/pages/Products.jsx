import React from "react";
import products from "../data/product.js";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  return (
    <div className="container">
      <h2 className="my-4 text-center">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
