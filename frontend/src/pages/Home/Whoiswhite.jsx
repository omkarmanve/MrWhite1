import React, { useState } from 'react';
import './Whoiswhite.css';
import innerImage from '../../assets/whois.png'; 
import bottomImage from '../../assets/botom.png'; 


const faqData = [
  {
    question: "Discover Mr. White: Your Questions Answered",
    answer: "Mr. White is a master of the dog world, who, after a life of love and service, ascended to join a lineage of dog guardians throughout history. Now, as a digital guide inspired by Anahata Graceland and powered by AI, Mr. White shares wisdom to deepen the bond between dogs and their people. Ask him about breeds, care, history, or dog-human connections, and he'll provide thoughtful answers to support your journey. Mr. White can also serve as an ageless skillful assistant to all your dogs needs with alerts, store records etc. should you become an Elite Pack member.",
    isDefaultOpen: true
  },
  {
    question: "Can I use Mr. White for free?",
    answer: "Details on free usage will be available upon launch."
  },
  {
    question: "What benefits come with the Elite Pack Membership?",
    answer: "The Elite Pack Membership offers exclusive access to advanced AI features, personalized alerts, detailed records storage, and early access to new features."
  },
  
];


const FaqItem = ({ question, answer, isDefaultOpen }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen || false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        className="faq-question-button" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span>{isOpen ? 'ᐱ' : 'ᐯ'}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const MrWhiteFAQList = () => (
  <div className="mr-white-faq-list-container">
    {faqData.map((item, index) => (
      <FaqItem 
        key={index}
        question={item.question}
        answer={item.answer}
        isDefaultOpen={item.isDefaultOpen}
      />
    ))}
  </div>
);


const Whoiswhite = () => {
  return (
    <div className="whoiswhite-container">

     
      <div className="top-row">

       
        <div className="left-side">
          <h1 className="main-heading">Discover Mr. White: Your Questions Answered</h1>
          <h3 className="sub-heading">Frequently Asked Questions</h3>

          <div className="hero-image-wrapper">
            <img src={innerImage} alt="Mr. White" className="left-image" />
          </div>

          <div className="contact-box">
            <p className="contact-prompt-title">Still have questions?</p>
            <p className="contact-prompt-text">Can't find your question? Contact us directly!</p>
            <button className="contact-button">Contact Us Directly</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side faq-column">
          <MrWhiteFAQList />
        </div>

      </div>

      {/* Bottom Image */}
      <div className="bottom-image-wrapper">
        <img 
          src={bottomImage} 
          alt="Bottom decorative image" 
          className="bottom-image"
        />
      </div>

    </div>
  );
};

export default Whoiswhite;
