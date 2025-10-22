import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchFlightsPage from "./pages/SearchFlightPage";

// Placeholder pages
function SavedFlightsPage() { return <h2>Saved Flights</h2>; }
function ProfilePage() { return <h2>Profile</h2>; }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchFlightsPage />} />
        <Route path="/saved" element={<SavedFlightsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
