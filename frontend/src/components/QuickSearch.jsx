import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuickSearch() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!departure || !arrival) {
      alert("Please enter both airports.");
      return;
    }

    // Navigate to Search page with data
    navigate("/search", { state: { departure, arrival } });
  };

  return (
    <div className="quick-search">
      <h2>Quick Flight Search</h2>
      <div className="search-form">
        <input
          type="text"
          placeholder="Departure Airport"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="text"
          placeholder="Arrival Airport"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <button onClick={handleSearch}>Search Flights</button>
      </div>
    </div>
  );
}
