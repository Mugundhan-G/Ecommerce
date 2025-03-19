import React from "react";
import { Link } from "react-router-dom";
import headphoneImage from '../assets/headphone.jpg';
import watchImage from '../assets/watch.jpg';
import mouseImage from '../assets/mouse.jpg';

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="display-4 fw-bold">Welcome to ShopEasy</h1>
        <p className="lead">
          Discover the best products at unbeatable prices. Shop now and enjoy fast delivery!
        </p>
        <Link to="/products" className="btn btn-primary btn-lg mt-3">
          Shop Now
        </Link>
      </div>

      {/* Featured Products Section */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={headphoneImage} className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Wireless Headphones</h5>
                <p className="card-text">Experience crystal-clear sound with these top-rated headphones.</p>
                <Link to="/products" className="btn btn-outline-primary">View More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={watchImage} className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Smartwatch</h5>
                <p className="card-text">Stay connected and track your fitness goals with this stylish smartwatch.</p>
                <Link to="/products" className="btn btn-outline-primary">View More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={mouseImage} className="card-img-top" alt="Product 3" />
              <div className="card-body">
                <h5 className="card-title">Gaming mouse</h5>
                <p className="card-text">Powerful gaming performance with high-end specs for smooth gameplay.</p>
                <Link to="/products" className="btn btn-outline-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
