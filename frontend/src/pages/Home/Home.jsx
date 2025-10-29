import React from "react";
import Image from "../../assets/charimg.png";
import ProfilePic from "../../assets/profile.png";
import "./Home.css";
import { BadgeCheck, Bone, Star } from "lucide-react";
import DogJourney from "../Home/DogJourney";
import Life from "../Home/Life"; 
import Premium from "../Home/Premium";
import EasyStep from "../Home/EasySteps";
import DogMeeting from "../Home/DogMeeting";
import Meeting from "../Home/DogMeeting";
import White from "../Home/Whoiswhite";
import Mt from "../meeting"

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-box">
        <h1>Secrets of Paws and Humans, revealed they are.</h1>
      </div>

      <div className="sub-box">
        <h2>All the information for dogs and humans, packed into one hub.</h2>
      </div>

      <div className="points-container">
        <div className="points-left">
          <p>
            <BadgeCheck size={20} className="fill-[#D3B86A] text-black" /> 
            All-in-One Solution
          </p>
          <p>
            <BadgeCheck size={20} className="fill-[#D3B86A] text-black" /> 
            For Every Dog & their human
          </p>
        </div>
        <div className="points-right">
          <p>
            <BadgeCheck size={20} className="fill-[#D3B86A] text-black" /> 
            Knowledge to strengthen your bond
          </p>
          <p>
            <BadgeCheck size={20} className="fill-[#D3B86A] text-black" /> 
            100% Human Support
          </p>
        </div>
      </div>

      <div 
        className="subscription-container" 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "12px",
          backgroundColor: "#D3B86A",
          padding: "12px 20px",
          borderRadius: "8px",
          width: "fit-content",
          marginTop: "20px"
        }}
      >
        <Bone size={24} className="fill-black text-black"/>
        <button className="fill-black text-black subscribe-button">
          View Subscriptions
        </button>
      </div>

      <div 
        className="profile-card" 
        style={{
          marginTop: "30px",
          padding: "16px",
          borderRadius: "10px",
          maxWidth: "300px",
          backgroundColor: "transparent", 
          textAlign: "left"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img 
            src={ProfilePic} 
            alt="Profile" 
            style={{ width: "64px", height: "64px", borderRadius: "12px" }} 
          />
          <div>
            <h3 style={{ margin: "0 0 6px 0" }}>John Doe</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#555" }}>
              <span>New York</span>
              <span>|</span>
              <div style={{ display: "flex", gap: "2px", width: "88px", height: "16px" }}>
                <Star size={16} className="text-yellow-500 fill-yellow-500"/>
                <Star size={16} className="text-yellow-500 fill-yellow-500"/>
                <Star size={16} className="text-yellow-500 fill-yellow-500"/>
                <Star size={16} className="text-yellow-500 fill-yellow-500"/>
                <Star size={16} className="text-gray-300"/>
              </div>
            </div>
          </div>
        </div>

        <p
          style={{
            marginTop: "12px",
            color: "white",
            fontFamily: "'Public Sans', sans-serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "-5%",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%"
          }}
        >
          Meeting Anahata Graceland and Arturo was a great experience; 
          full of loving, expert advice and attention to our needs.
        </p>
      </div>

      <div className="decorative-image-container" style={{ marginTop: "30px", textAlign: "center" }}>
        <img src={Image} alt="Decorative" className="home-image" style={{ maxWidth: "100%", height: "auto" }} />
      </div>

      <DogJourney />
      <Life/>
      <Premium/>
      <br/>
      <EasyStep/>
      
      <DogMeeting/>

      
     <Mt/>
      <White/>
     
    </div>
  );
}
