import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center">Checkout</h2>
      {cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty</h4>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <h4>Billing Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" required onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" required onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" name="address" className="form-control" required onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" name="city" className="form-control" required onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">ZIP Code</label>
                <input type="text" name="zip" className="form-control" required onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Place Order
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h4>Order Summary</h4>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                  {item.name} (x{item.quantity}) <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <h5>Total Amount: ₹{totalAmount}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
