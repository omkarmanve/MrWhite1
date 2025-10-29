import React from "react";
import "./DogMeeting.css";
import dogMeetingImage from "../../assets/Dogmeeting.png"; 

export default function DogMeeting() {
  return (
    <div className="dog-meeting-container">
      <img src={dogMeetingImage} alt="Dog Meeting" className="dog-meeting-image" />
      <div className="dog-meeting-content">
       
      </div>
    </div>
  );
}
