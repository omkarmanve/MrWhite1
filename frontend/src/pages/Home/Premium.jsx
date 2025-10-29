import React from "react";
import "./Life.css"; 
import { CiClock2 } from "react-icons/ci";
import { TbVectorSpline } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import { FaEnvelopeOpen, FaStar, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { Bone } from "lucide-react";

export default function Prime() {
  return (
    <div className="benefits-container">
      <h1 className="page-title">
        For Elite Pack Members (Premium) + everything from the Companion Crew Pack Members
      </h1>

     
      <div className="section-card">
        <div className="section-content two-column">
        
          <div className="text-side">
            <div className="text-block">
              <span className="icon-box">
                <CiClock2 color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>Exclusive Access to the Legacy of Love Dog Hub</strong><br />
               Unlock the full power of Mr. White’s AI-driven personal portal that securely stores your dog’s complete health records,
                training milestones, photos, stories, and more—available anytime, anywhere. 
                This hub simplifies care management and preserves your dog’s legacy. 
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <TbVectorSpline color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>Personalized Care Alerts and Reminders</strong><br />
                 Never miss a medication dose, vet visit, or important appointment
                with tailored, timely alerts designed specifically for your dog’s needs. 
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <FaPeopleCarry color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>Access to Trusted Local Services and Dog-Friendly Travel</strong><br />
              Discover recommended vets, groomers, and travel 
              destinations with real community reviews, making care and adventures easier to plan. 
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <FaEarthEurope color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>A Vibrant, Private Community</strong><br />
               Join an exclusive circle of committed dog lovers for deeper 
               connection, support, and shared growth.  
              </div>
            </div>
          </div>

         
          <div className="text-side">
            <div className="text-block">
              <span className="icon-box">
                <FaEnvelopeOpen color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>Create a Beautiful Keepsake Book</strong><br />
            As an Elite Pack member, you have the unique ability to transform your 
            
            dog’s story into a beautifully personalized book. Whether it’s to celebrate 
            milestones like a first birthday, commemorate a special journey, or simply 
            preserve your favorite memories, you can easily select any section of your 
            Legacy of Love Dog Hub to print as a keepsake. This tangible tribute allows
             you to hold, share, and treasure the rich life
             you and your companion have built together—making memories truly timeless.  
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <FaStar color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>BlockchainDNA NFT for Legacy Security</strong><br />
               Receive a unique digital certificate verifying your dog’s records on the blockchain, 
               securing your unbreakable bond and protecting your dog’s legacy for generations. 
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <FaHandshake color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>Exclusive Product Discounts</strong><br />
                Enjoy lifelong 5% discounts on premium,
                 carefully reviewed products that enhance your dog’s health and happiness. 
              </div>
            </div>

            <div className="text-block">
              <span className="icon-box">
                <FaShieldAlt color="#D3B86A" size={22} />
              </span>
              <div>
                <strong>Advanced Support for Professionals</strong><br />
               Pet care professionals receive expanded tools and community features to
                enhance their services and build strong relationships with dog families. 
              </div>
            </div>
          </div>
        </div>
      </div>
  
<div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <div
    className="subscription-container"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      backgroundColor: "#D3B86A",
      padding: "12px 20px",
      borderRadius: "8px",
    }}
  >
    <Bone size={24} className="fill-black text-black" />
    <button className="fill-black text-black subscribe-button">
      View Subscriptions
    </button>
  </div>
</div>

    </div>
  );
}
