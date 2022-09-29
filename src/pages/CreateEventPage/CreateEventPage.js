import React from "react";
import { useState } from "react";
import "./CreateEventPage.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { useNavigate } from "react-router-dom";

// Event name, Host name, Start and End time/date, Location and Event photo

function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [startTimeDate, setStartTimeDate] = useState();
  const [endTimeDate, setEndTimeDate] = useState();
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(eventName, hostName, startTimeDate, endTimeDate, location);
    navigate("/event");
  };

  return (
    <div className="form-container">
      <h1 className="purple-heading form-title">Create an event</h1>
      <div className="form-input-field">
        <TextField
          value={eventName}
          label="Event name"
          onInput={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="form-input-field">
        <TextField
          className="form-input-field"
          value={hostName}
          label="Host name"
          onInput={(e) => setHostName(e.target.value)}
        />
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="form-input-field">
          <DateTimePicker
            label="Start Time and Date"
            value={startTimeDate}
            onChange={(e) => setStartTimeDate(new Date(e.target.value))}
            renderInput={(params) => (
              <TextField
              // {...params}
              />
            )}
          />
        </div>
        <div className="form-input-field">
          <DateTimePicker
            label="End Time and Date"
            value={endTimeDate}
            onChange={(e) => setEndTimeDate(e.target.value)}
            renderInput={(params) => (
              <TextField
              // {...params}
              />
            )}
          />
        </div>
      </LocalizationProvider>

      <div className="form-input-field">
        <TextField
          value={location}
          label="Location"
          onInput={(e) => setLocation(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} className="button">
        <p className="button-text">🎉 Create event</p>
      </button>
    </div>
  );
}

export default CreateEventPage;
