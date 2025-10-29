import React from "react";
import "./meeting.css";
import { CiClock2 } from "react-icons/ci";
import { TbVectorSpline } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { Bone } from "lucide-react";

export default function TwoColumnPage() {
 
  const leftBenefits = [
    {
      icon: <CiClock2 color="#D3B86A" size={22} />,
      title: "Access Your Personal Portal Anytime",
      description:
        "Step into your personal portal with Mr. White, where tailored guidance and wisdom for you and your companion are available 24/7. It also includes an ongoing history of your queries about your dog.",
    },
    {
      icon: <TbVectorSpline color="#D3B86A" size={22} />,
      title: "Unlock Expert Canine Knowledge",
      description:
        "Gain insight into your dog’s history, needs, and bond with humans through Mr. White’s vast data and real-world experience. Get tailored input on training, activity, and care recommendations.",
    },
    {
      icon: <FaPeopleCarry color="#D3B86A" size={22} />,
      title: "Top Product Recommendations with Care",
      description:
        "Mr. White reviews products using Anahata Graceland’s 50+ years of expertise—focusing on quality, safety, and dog approval, ensuring the best trusted choices.",
    },
    {
      icon: <FaEarthEurope color="#D3B86A" size={22} />,
      title: "A Unique Dog Lover’s Community",
      description:
        "Join Mr. White’s community to share knowledge, meet friends, create meet-ups, and access a resource that lasts a lifetime.",
    },
    {
      icon: <FaEnvelopeOpen color="#D3B86A" size={22} />,
      title: "Network for Dog Welfare Professionals",
      description:
        "Supports veterinarians, groomers, trainers, and wellness practitioners with reduced-rate membership, access to dog family records, and networking opportunities.",
    },
  ];
  const rightBenefits = [
    {
      icon: <CiClock2 color="#D3B86A" size={22} />,
      title: "Comprehensive Health History",
      description:
        "Access your dog’s complete medical and care history at any time. Track vaccinations, vet visits, and wellness records for seamless care.",
    },
    {
      icon: <TbVectorSpline color="#D3B86A" size={22} />,
      title: "Tailored Training & Activity Plans",
      description:
        "Receive personalized training routines, exercise plans, and mental stimulation activities based on your dog’s age, breed, and preferences.",
    },
    {
      icon: <FaPeopleCarry color="#D3B86A" size={22} />,
      title: "Exclusive Product Recommendations",
      description:
        "Get expert-vetted product suggestions for toys, nutrition, and grooming that match your dog’s unique needs.",
    },
    {
      icon: <FaEarthEurope color="#D3B86A" size={22} />,
      title: "Community Access & Meetups",
      description:
        "Connect with fellow dog lovers, share experiences, and join local meetups curated by Mr. White’s team.",
    },
    {
      icon: <FaEnvelopeOpen color="#D3B86A" size={22} />,
      title: "Professional Network Support",
      description:
        "Exclusive access to veterinarians, trainers, and wellness experts for advice, discounted services, and consultation.",
    },
    {
      icon: <CiClock2 color="#D3B86A" size={22} />,
      title: "Advanced Insights & Reports",
      description:
        "Receive detailed analytics on your dog’s behavior, health trends, and activity patterns to make informed decisions.",
    },
    {
      icon: <TbVectorSpline color="#D3B86A" size={22} />,
      title: "Legacy Memories & Journals",
      description:
        "Maintain a cherished record of your dog’s milestones, adventures, and memorable moments in one secure hub.",
    },
    {
      icon: <FaPeopleCarry color="#D3B86A" size={22} />,
      title: "Priority Support & Consultation",
      description:
        "Enjoy priority customer service for questions, recommendations, and guidance from the Mr. White team.",
    },
  ];

  return (
    <div className="page-container">
      {/* Left Column */}
      <div className="column left-column">
        <h2 className="subheading">White's Companion Crew - FREE Plan</h2>
        <h3 className="sub-subheading">
          Enjoy a FREE account with Benefits of Mr. White
        </h3>
        <p className="description">
          Mr. White guides dogs and their humans toward a fulfilling life with free
          daily tips on X and other socials @MrWhiteAIBuddy and his website at
          Mr.WhiteAIBuddy.com. Discover toys, rituals, and training to deepen your
          bond, plus proven products for health and care, backed by Anahata
          Graceland’s 50+ years of expertise.
        </p>

        <h2 className="new-heading">Free!</h2>
        <h3 className="subheading-small">Lifetime free subscription</h3>

        <div className="text-side">
          {leftBenefits.map((item, index) => (
            <div key={index} className="text-block">
              <span className="icon-box">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Subscription Button */}
        <div
          className="subscription-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "588px",
            height: "47px",
            padding: "12px 64px",
            borderRadius: "8px",
            backgroundColor: "#D3B86A",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <Bone size={24} color="black" />
          <span
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            Fetch Subscription
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className="column right-column">
        <h2 className="right-column-heading">Mr. White's Elite Pack</h2>
        <h3 className="right-column-subheading">
          (Your Dog’s Name) Legacy of Love Living Hub
        </h3>

        <div className="highlight-text">
          Everything in the FREE Account Plus this Invaluable Service
        </div>

        <div className="text-side">
          {rightBenefits.map((item, index) => (
            <div key={index} className="text-block">
              <span className="icon-box">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
         <div
          className="subscription-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "588px",
            height: "47px",
            padding: "12px 64px",
            borderRadius: "8px",
            backgroundColor: "#D3B86A",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <Bone size={24} color="black" />
          <span
            style={{
              color: "black",
              fontWeight: 600,
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            Fetch Subscription
          </span>
        </div>
      
      </div>
    </div>
  );
}
