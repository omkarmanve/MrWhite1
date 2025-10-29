import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for redirect
import './Login.css';
import headerImage from '../../assets/header.png';
import API from '../../api'; // Axios instance

const LoginPage = () => {
  const navigate = useNavigate(); // for redirect after login
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  // Icon component
  const Icon = ({ name, className }) => (
    <span className={className} style={{ lineHeight: '1' }}>
      {name === 'paw' && '🐾'}
      {name === 'user' && '👤'}
      {name === 'lock' && '🔒'}
      {name === 'bolt' && '⚡'}
      {name === 'connect' && '✉️'}
    </span>
  );

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = async () => {
    try {
      const res = await API.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token); // store JWT
      setMessage('Login successful!');
      setFormData({ email: '', password: '' });
      navigate('/dashboard'); // redirect to dashboard or protected page
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="container">
      <div className="card">
        {/* Logo Section */}
        <div className="logo-container">
          <img
            src={headerImage}
            alt="Mr. White Guide to All Paws"
            className="header-image"
          />
        </div>

        {/* Email Input */}
        <div className="input-group">
          <Icon name="user" className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <Icon name="lock" className="input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Links Section */}
        <div className="links-container">
          <Link to="/signup" className="link">
            Sign-up
          </Link>
          <a href="#" className="link">
            Lost your password?
          </a>
        </div>

        {/* Login Button */}
        <button className="button login-button" onClick={handleLogin}>
          <Icon name="bolt" className="button-icon" />
          Login
        </button>

        {/* Message Display */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
