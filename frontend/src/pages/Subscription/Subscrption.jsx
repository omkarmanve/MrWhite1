import React from "react";
import subscriptionImage from "../../assets/subscrption.png";
import "./Subscrption.css";
import Meeting from "../meeting";
const SubscriptionPage = () => {
  return (
    <div className="subscription-page">
      <img
        src={subscriptionImage}
        alt="Subscription Banner"
        className="subscription-banner"
      />

      <div className="subscription-header">
        <h1>Get Started with Mr. White in 3 Easy Steps</h1>
        <p>A short guide on how to get started with Mr White.</p>
      </div>

      <div className="subscription-bullets">
        <div className="bullet bullet-right">
          <div className="bullet-number">1</div>
          <h3>Sign up</h3>
          <p>Create your account in moments—join 
            the Companion Crew for free or the Elite Pack as a full member—to start 
            your journey with Mr. White and your companion.</p>
        </div>
        <div className="bullet bullet-center">
          <div className="bullet-number">2</div>
          <h3>Choose Your Subscription</h3>
          <p>Join the Companion Crew for free to
             get daily tips on X, or unlock all benefits with the Elite Pack membership
             for $12.50 monthly or $110 yearly (saving $40)..</p>
        </div>
        <div className="bullet bullet-left">
          <div className="bullet-number">3</div>
          <h3>Access Your Personal Portal</h3>
          <p>Step into your personal portal with Mr. White, where tailored guidance, records, and
             wisdom for you and your dog are available 24/7.</p>
        </div>

      </div>
     <div className="subscription-footer-header">
        <h2>Subscriptions, Mr. White has?</h2>
        <p>Mr. White’s available subscriptions</p>
      </div>
      <Meeting/>
    </div>
  );
};

export default SubscriptionPage;
