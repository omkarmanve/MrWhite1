import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import headerImage from '../../assets/header.png';
import API from '../../api'; // Axios instance pointing to backend

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const Icon = ({ name, className }) => (
    <span className={className} style={{ lineHeight: '1' }}>
      {name === 'paw' && '🐾'}
      {name === 'user' && '👤'}
      {name === 'lock' && '🔒'}
      {name === 'email' && '✉️'}
      {name === 'bolt' && '⚡'}
    </span>
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await API.post('/auth/signup', {
        name: formData.username,
        email: formData.email,
        password: formData.password
      });
      setMessage(res.data.message);
      setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        {/* Logo */}
        <div className="signup-logo-container">
          <img
            src={headerImage}
            alt="Mr. White Guide to All Paws"
            className="signup-header-image"
          />
        </div>

        {/* Username */}
        <div className="signup-input-group">
          <Icon name="user" className="signup-input-icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="signup-input-field"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="signup-input-group">
          <Icon name="email" className="signup-input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signup-input-field"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="signup-input-group">
          <Icon name="lock" className="signup-input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signup-input-field"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="signup-input-group">
          <Icon name="lock" className="signup-input-icon" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="signup-input-field"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {/* Links */}
        <div className="signup-links-container">
          <Link to="/login" className="signup-link">
            Already have an account?
          </Link>
          <a href="#" className="signup-link">
            Forgot Password?
          </a>
        </div>

        {/* Signup Button */}
        <button className="signup-button signup-login-button" onClick={handleSignup}>
          <Icon name="bolt" className="signup-button-icon" />
          Sign Up
        </button>

        {/* Message */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default SignupPage;
