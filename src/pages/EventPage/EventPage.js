import React from "react";
import "./EventPage.css";
import BirthdayCake from "../../images/BirthdayCake.png";

// Icons
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function EventPage() {
  return (
    <div className="event-page-container">
      <div className="event-image-container">
        <img src={BirthdayCake} alt="" className="event-image" />
      </div>
      <div className="event-text-container">
        <h1 className="event-name">Birthday Bash</h1>
        <p className="hosted-by">
          Hosted by <b>Elysia</b>
        </p>
        <div className="info-container">
          <AiOutlineCalendar className="info-image" />
          <div className="info-container-text">
            <p>
              <b>18 August 6:00PM</b>
            </p>
            <p>
              to <b>19 August 1:00PM</b> UTC +10
            </p>
          </div>
        </div>
        <div className="info-container">
          <GoLocation className="info-image" />
          <div className="info-container-text">
            <p>
              <b>Street name</b>
            </p>
            <p>Suburb, State, Postcode</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
