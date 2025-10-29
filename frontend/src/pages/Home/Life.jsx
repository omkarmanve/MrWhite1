import React from "react";
import "./Life.css"; 
import lifeImage from "../../assets/lifeim.png";
import { CiClock2 } from "react-icons/ci";
import { TbVectorSpline } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import { FaEnvelopeOpen, FaPerbyte } from "react-icons/fa"; 
export default function Life() {
  return (
    <div className="benefits-container">
      <h1 className="page-title">The Benefits of Mr. White In Your Life</h1>

      
      <div className="section-card">
        <div className="section-content">

        
          <div className="text-side">
            <h2 className="section-title">
              1. For Companion Crew Pack Members (Free)
            </h2>

            <div className="text-block">
              <span className="icon-box">
                <CiClock2 color="#D3B86A" size={22}/>
              </span>
              <div>
                <strong>Save Time and Money</strong><br />
                Mr. White helps you avoid costly vet visits with complete health histories 
                and timely care recommendations. Pack members enjoy savings on trusted products and services, 
                making quality care more affordable.
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <TbVectorSpline color="#D3B86A" size={22}/>
              </span>
              <div>
                <p><strong>Build a Deeper Bond</strong><br/>With wisdom, guidance, and a community behind you, Mr. White supports you in creating a joyful, harmonious life with your beloved companion. </p>
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                < FaPeopleCarry color="#D3B86A" size={22}/>
              </span>
              <div>
                <p><strong>Daily Wisdom</strong> <br/>Access free, expert advice from Mr. White—tips on training, health, play, and bonding that help enrich your relationship with your dog every day. Available through your personal portal and X & other social media. </p>
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <FaEarthEurope color="#D3B86A" size={22}/>
              </span>
              <div>
                <p><strong>Community Connection</strong> <br/> Join a supportive community of dog lovers to share stories, advice, meetups, and celebrations, creating friendships and shared joy. </p>
              </div>
            </div>
          </div>

        
         <div className="image-side">
  <div className="image-block">
    <img
      src={lifeImage}
      alt="Dog and Cat Duel"
      className="feature-image"
    />
  </div>

  <div className="text-block">
  <span className="icon-box">
    <FaEnvelopeOpen color="#D3B86A" size={22} />
  </span>
  <div>
    <strong>Professional Support</strong><br />
    Benefit from vetted product suggestions, focusing on quality and safety, curated from over 50 years of breeder experience. 
  </div>
</div>

<div className="text-block">
  <span className="icon-box">
    <FaPerbyte color="#D3B86A" size={22} />
  </span>
  <div>
    <strong>Exclusive Benefits</strong><br />
   Veterinarians, trainers, and groomers can join at a reduced rate, gaining access to a network for sharing insights and connecting with dog families. 
  </div>
</div>
</div>
        </div>
      </div>
    </div>
  );
}
