import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="homepage-container">
      <Navbar />  {/* Should render as a full-width block */}
      <div className="centered-container">
        {children}
      </div>
    </div>
  );
}
