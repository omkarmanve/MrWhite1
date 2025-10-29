import React from "react";
import "./Navbar.css";
import logo from "../assets/Group.png"; 
import logo2 from "../assets/Frame.png"; 
import { IoChatbubbleSharp } from "react-icons/io5"; 
import { useNavigate } from "react-router-dom";  

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login"); // Redirect to /Login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="Logo 1" />
        </div>
        <div className="logo">
          <img src={logo2} alt="Logo 2" />
        </div>
        <ul className="nav-links-left">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/Subscrption" className="nav-link">Subscriptions</a></li>
          <li><a href="/LLhub" className="nav-link">HUB</a></li>
          <li><a href="/Product" className="nav-link">Product</a></li>
          <li><a href="/Addto" className="nav-link">Cart</a></li>
        </ul>
      </div>

      <ul className="nav-links-right">
        <li>
          <button
            onClick={handleLoginClick}
            className="login-button"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="login-icon"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M21 12h-13l3 -3"></path>
              <path d="M11 15l-3 -3"></path>
            </svg>
            Login
          </button>
        </li>
        <li>
          <a href="/Contact" className="contact-link">
            <IoChatbubbleSharp className="contact-icon" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
