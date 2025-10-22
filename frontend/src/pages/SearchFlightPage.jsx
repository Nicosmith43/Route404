import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import FlightSearch from "../components/FlightSearch";

export default function SearchFlightsPage() {
  const location = useLocation();

  // Retrieve any state passed via navigate()
  const { departure = "", arrival = "" } = location.state || {};

  return (
    <Layout>
      <div className="search-page">
        <h1 className="search-title">Find Your Perfect Flight ✈️</h1>
        <FlightSearch defaultDeparture={departure} defaultArrival={arrival} />
      </div>
    </Layout>
  );
}
