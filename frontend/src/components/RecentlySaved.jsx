import React from "react";

export default function RecentlySaved() {
  // mock data (pretend these are recent saved flights)
  const recentFlights = [
    { id: 1, route: "DEN → JFK", price: "$220", time: "7:45 AM" },
    { id: 2, route: "LAX → ORD", price: "$185", time: "9:10 AM" },
    { id: 3, route: "SEA → DFW", price: "$210", time: "12:30 PM" },
  ];

  return (
    <div className="recently-saved">
      <h2>Recently Saved Flights</h2>
      <div className="saved-list">
        {recentFlights.map((flight) => (
          <div key={flight.id} className="saved-card">
            <h3>{flight.route}</h3>
            <p>Departure: {flight.time}</p>
            <p>Current Price: <strong>{flight.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
