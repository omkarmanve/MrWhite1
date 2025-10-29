import React, { useEffect, useState } from "react";
import Tree1 from "../../assets/Ancient.png";
import Tree2 from "../../assets/Storage.png";
import Tree3 from "../../assets/Family.png";
import Tree4 from "../../assets/PassFront.png";

import "./DogJourney.css";
import { Bone } from "lucide-react"; 

export default function DogJourney() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector(".dog-journey");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className={`dog-journey ${isVisible ? "visible" : ""}`}>
      <h2>Preserve, Learn, and Honor Your Dog’s Journey</h2>

      <div className="dog-journey-sections">
        {/* Section 1 */}
        <div className="dog-journey-section">
          <img src={Tree1} alt="Preserve" />
          <p className="title">Ancient Wisdom for Modern Dog Care</p>
          <p className="description">
            Mr. White holds eons of dog knowledge, from ancient canine history to modern care insights, ready for pack members to explore.
          </p>
          <p className="description">
            Use this wisdom to understand your companion’s needs, enhance training, keep track of vaccination times, and deepen your bond—whether you’re solving a behavior challenge, choosing the best activities, or simply learning more about your dog’s unique spirit.
          </p>
        </div>

   
        <div className="dog-journey-section">
          <img src={Tree2} alt="Learn" />
          <p className="title">All-in-One Secure Storage Solution</p>
          <p className="description">
            Mr. White offers a customizable storage solution for you and your dog, keeping everything you need in one secure place. Upload vet records, certifications, health history, training milestones, or cherished photos and stories—Mr. White remembers it all.
          </p>
          <p className="description">
            Access this information anytime, anywhere, whether you need a vet record for an appointment, an alert for the appointment, a certification for travel, or a special memory to share.
          </p>
        </div>

        
        <div className="dog-journey-section">
          <img src={Tree3} alt="Honor" />
          <p className="title">Building Interspecies Family Bonds</p>
          <p className="description">
            Mr. White and I, Anahata Graceland, a breeder with over 50 years of knowledge, offer pack members a rare perspective: dogs and humans belong to each other as family, not as owners.
          </p>
          <p className="description">
            Together, we guide you in building an interspecies culture that honors the true intelligence and spirit of your bond, doing right by each other with love and respect.
          </p>
        </div>
      </div>

      <div className="dog-journey-bottom-button">
        <Bone size={24} className="fill-black text-black"/>
        <button className="subscribe-button">Read More</button>
      </div>
      <div className="new-images-container">
  <div className="tree4-text-section">
  <img src={Tree4} alt="Tree4" className="tree4-image" />
 <div className="dog-journey-hero">
  <h1 className="hero-main">Legacy of Love Dog Hub</h1>
  <h2 className="hero-sub">A New Era in Caring for Your Best Friend</h2>
  <p className="hero-tagline">
    “Where your dog’s <em>health</em>, <em>story</em>, and <em>happiness</em> come together.”
  </p>
  <p className="hero-description">
    Unlock the Elite Pack and step into (Your Dog’s Name) Legacy of Love Living Dog Hub, your AI-powered
    sanctuary for celebrating and caring for your cherished companion. This one-of-a-kind living hub securely
    stores vital records, sets timely medication alerts, tracks vaccinations, and beautifully organizes stories
    and photos from your shared journey. It’s truly designed to keep every memory you cherish while helping
    life move smoothly and safely. Plus, you can effortlessly print a custom book of any section you choose,
    with Mr. White guiding you every step of the way. Inspired by <em>The Way of the Dog</em> by Anahata
    Graceland, this innovative personal assistant captures every milestone and joy you’ve shared — offering
    a connection and memory archive unmatched anywhere else.
  </p>


  </div>

  </div>
</div>
    </div>
     
  );
}
