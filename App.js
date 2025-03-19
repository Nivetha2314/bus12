
// export default App;
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import c1 from'./images/c1.jpg';
import { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login Successful!");
      // Perform further actions like API calls
    }
  };
  return (
    <div className="hero-container container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand fw-bold text-dark" href="#">
        EDGECUT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Furnitures</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-person"></i> Login</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="row hero-content">
      <div className="col-md-6 text-section">
        <h1>FOR ALL YOUR <br /> FURNITURE NEEDS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, 
          illo maxime voluptatem a itaque suscipit.
        </p>
        <div className="btn-group">
          <button className="btn btn-warning">Contact Us</button>
          <button className="btn btn-info text-white ms-3">About Us</button>
        </div>
      </div>
      <div className="col-md-6">
        <img src={c1} alt="Furniture" className="img-fluid" />
      </div>
    </div>

    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4 rounded">
        <h2 className="text-center fw-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="text-center mt-3">
            Not a Member? <a href="#" className="text-primary text-decoration-none">Signup</a>
          </div>
        </form>
      </div>
    </div>
  </div>
);

}

export default App; 
