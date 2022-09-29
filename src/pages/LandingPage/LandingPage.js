import React from "react";
import "./LandingPage.css";
import LandingPageImage from "../../images/LandingPageImage.svg";

import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/create");

  return (
    <div className="landing-page-container">
      <div className="landing-page-heading">
        <p>Imagine if</p>
        <p className="purple-heading">Snapchat</p>
        <p>had events.</p>
      </div>
      <div className="landing-page-text">
        <p>
          Easily host and share events with your friends across any social media
        </p>
      </div>
      <div className="landing-page-image-container">
        <img src={LandingPageImage} alt="" className="landing-page-image" />
      </div>
      <div className="button-container">
        <button onClick={handleClick} className="button">
          <p className="button-text">🎉 Create my event</p>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
