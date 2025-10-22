import React, { useState, useEffect } from "react";

export default function FlightSearch({ defaultDeparture = "", defaultArrival = "" }) {
  const [tripType, setTripType] = useState("oneway"); // 'oneway' or 'roundtrip'
  const [departure, setDeparture] = useState(defaultDeparture);
  const [arrival, setArrival] = useState(defaultArrival);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // If defaults change (like coming from QuickSearch), sync them
  useEffect(() => {
    setDeparture(defaultDeparture);
    setArrival(defaultArrival);
  }, [defaultDeparture, defaultArrival]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departure || !arrival || !departureDate) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log({
      tripType,
      departure,
      arrival,
      departureDate,
      returnDate: tripType === "roundtrip" ? returnDate : null,
    });

    alert("Search submitted! (Console shows details)");
  };

  return (
    <div className="flight-search">
      <h2>Search Flights</h2>

      <form className="flight-form" onSubmit={handleSubmit}>
        {/* Trip Type Toggle */}
        <div className="trip-type">
          <label>
            <input
              type="radio"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            />
            One Way
          </label>
          <label>
            <input
              type="radio"
              value="roundtrip"
              checked={tripType === "roundtrip"}
              onChange={() => setTripType("roundtrip")}
            />
            Round Trip
          </label>
        </div>

        {/* Airport Inputs */}
        <div className="airport-fields">
          <input
            type="text"
            placeholder="Departure Airport"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Destination Airport"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
          />
        </div>

        {/* Date Inputs */}
        <div className="date-fields">
          <div>
            <label>Departure Date</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </div>

          {tripType === "roundtrip" && (
            <div>
              <label>Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </div>
          )}
        </div>

        <button type="submit" className="search-btn">Search Flights</button>
      </form>
    </div>
  );
}
