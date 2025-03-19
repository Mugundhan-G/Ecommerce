import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity,0);


  return (
    <div className="container">
      <h2 className="my-4 text-center">Shopping Cart</h2>
      {cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty</h4>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price} x {item.quantity}</p>
                  <p><strong>Total: ₹{item.price * item.quantity}</strong></p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <h4>Total Amount: ₹{totalAmount}</h4>
          <Link to="/checkout" className="btn btn-success btn-lg">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
