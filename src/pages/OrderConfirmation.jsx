import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="container text-center mt-5">
      <h2>🎉 Thank You for Your Order! 🎉</h2>
      <p>Your order has been successfully placed.</p>
      <p>A confirmation email will be sent to your registered email address.</p>
      <img
        src="https://via.placeholder.com/300x200?text=Order+Confirmed"
        alt="Order Confirmed"
        className="my-3"
      />
      <div className="mt-4">
        <Link to="/products" className="btn btn-primary mx-2">
          Continue Shopping
        </Link>
        <Link to="/" className="btn btn-secondary mx-2">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
