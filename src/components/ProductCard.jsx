import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₹{product.price}</p>
          <div>
            <button className="btn btn-primary " onClick={()=>{addToCart(product)}}>Add to Cart</button>
            <Link to={`/product/${product.id}`} className="btn btn-info ms-2 text-dark">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
