import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">   {/* Important: <nav> is a block element */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Route 44 Logo" />
      </div>
      <ul className="nav-links">
        <li onClick={() => navigate("/search")}>Search Flights</li>
        <li onClick={() => navigate("/saved")}>Saved Flights</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
        <li onClick={() => alert("Logging out...")}>Logout</li>
      </ul>
    </nav>
  );
}
