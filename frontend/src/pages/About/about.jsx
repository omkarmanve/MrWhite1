import React from "react";

import heroBackground from "../../assets/About.jpg"; 

import mrWhiteImage from "../../assets/abut1.png"; 
import "./about.css";
import About1  from "./about1";

export default function About() {
  return (
    <div className="about-page">
      
    
      <div className="about-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-text-overlay">
          <h1 className="hero-title">About Mr White</h1>
          <p className="hero-subtitle">A Master of the Dog World Just for You</p>
        </div>
      </div>
  

     
      <div className="mr-white-section">
        <div className="mr-white-container">
          
   
          <div className="mr-white-image-col">
            <img 
              src={mrWhiteImage} 
              alt="Mr. White, the best service dog" 
              className="mr-white-dog-image" 
            />
          </div>
          
         
          <div className="mr-white-text-col">
            <h2 className="introduction-heading">
              Introduction
            </h2>
            <p className="body-text">
              When I thought about doing the about page for and with **Mr. White** I
              considered our lives together over the many 16 and a half years. I
              realized that me telling the story is just not enough so I'm going to invite
              **Mr. White** to share the story of his own lifetime and throughout it due to
              his and my sharing over the years he will share what was important to
              me as well I am certain for he was the best service dog in the history of
              service dogs.
            </p>
            <p className="closing-text">
              Welcome to **Mr. White** he may have the effect on your life and your
              dog's life as he has on mine.
            </p>
          </div>
        </div>
      </div>
     
   <About1/>

    
     
      </div>
   
  );
}