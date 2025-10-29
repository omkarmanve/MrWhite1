import React from "react";
import "./EasySteps.css";
import stepImage from "../../assets/mobile.png";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineLogin } from "react-icons/hi"; 

export default function EasyStep() {
  return (
    <div className="easy-container">
   
      <div className="easy-left">
        <img src={stepImage} alt="Easy Steps" className="easy-image" />
      </div>

     
      <div className="easy-right">
        <h1 className="easy-title">Get Started with Mr. White in 3 Easy Steps</h1>
        <h2 className="easy-subtitle">A short guide on how to get started with Mr. White.</h2>

        
        <div className="easy-point">
          <h3 className="point-title">
            <span className="point-number">1</span> Sign Up
          </h3>
          <p className="point-desc">
            Create your account in moments—join the Companion Crew for free or the Elite Pack as a full member—to start your journey with Mr. White and your companion.
          </p>
        </div>

        
        <div className="easy-point">
          <h3 className="point-title">
            <span className="point-number">2</span> Choose Your Subscription
          </h3>
          <p className="point-desc">
            Discover your personal portal with two plans: the free Companion Crew and the Elite Pack Premium. The Companion Crew offers 24/7 tailored guidance, wisdom, and a history of your dog queries. Upgrade to the Elite Pack to unlock the Legacy of Love Living Hub—a unique, AI-powered space to honor your dog’s life and keep their care organized with ease.
          </p>
        </div>

    
        <div className="easy-point">
          <h3 className="point-title">
            <span className="point-number">3</span> Access Your Personal Portal
          </h3>
          <p className="point-desc">
            Step into your personal portal with Mr. White, where tailored guidance, records, and wisdom for you and your dog are available 24/7.
          </p>
        </div>

       
        <div className="button-group">
          <button className="btn-signup">
            <FaUserPlus size={20} style={{ marginRight: "8px" }} /> Sign Up
          </button>
          <button className="btn-login">
            <HiOutlineLogin size={20} style={{ marginRight: "8px" }} /> Login
          </button>
        </div>
      </div>
    </div>
  );
}
