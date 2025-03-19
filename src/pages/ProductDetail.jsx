import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/product";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product

  if (!product) {
    return <h2 className="text-center mt-4">Product not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">₹{product.price}</h4>
          <p>{product.detail}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
