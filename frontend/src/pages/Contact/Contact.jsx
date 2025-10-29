import React, { useState } from 'react';
import contactBanner from '../../assets/Contact1.png';
import sideImage from '../../assets/Message.png';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! Thank you for reaching out.');
    setTimeout(() => setStatus(''), 5000);
    e.target.reset();
  };

  const inputClass = "w-full p-4 text-white bg-[#1a1a1a] border border-[#333] rounded-md focus:border-[#b89859] focus:bg-[#262626] transition-all duration-300";

  return (
    <div className="contact-page">
      <div className="banner-container">
        <img src={contactBanner} alt="Contact Banner" className="contact-banner w-full max-w-[1440px] h-[400px] object-cover mx-auto" />
      </div>

      <div className="min-h-screen bg-black flex flex-col md:flex-row justify-center items-start pt-16 pb-16 px-4 gap-12">
        <div className="flex-1 flex flex-col items-center w-full md:max-w-[720px]">
          {status && (
            <div className="p-4 mb-6 text-sm text-[#1a1a1a] bg-[#b89859] rounded-lg w-full text-center font-semibold">
              {status}
            </div>
          )}

          <form className="contact-form w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name*" className={inputClass} required />
            <input type="email" placeholder="E-mail*" className={inputClass} required />
            <input type="tel" placeholder="Phone number" className={inputClass} />
            <select className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <textarea placeholder="Write your message here" className={`${inputClass} h-[150px] resize-y`} rows="5"></textarea>

            <button type="submit" className="mt-4 w-full flex justify-center items-center gap-2 p-4 bg-[#b89859] text-[#1a1a1a] text-lg font-bold border border-[#b89859] rounded-md cursor-pointer hover:bg-[#c9b177] hover:scale-[1.01] transition-all duration-200 active:translate-y-px">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 w-full md:max-w-[720px] flex justify-center items-center">
          <img src={sideImage} alt="Side Illustration" className="w-full h-auto rounded-md object-cover" />
        </div>
      </div>
    </div>
  );
}
