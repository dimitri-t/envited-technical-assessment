import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import EventPage from "./pages/EventPage/EventPage";

function App() {
  return (
    <Router>
      <div className="webpage-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateEventPage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
