import React from "react";
import Layout from "../components/Layout";
import RecentlySaved from "../components/RecentlySaved";
import QuickSearch from "../components/QuickSearch";

export default function HomePage() {
  const userName = "Zane";

  return (
    <Layout>
      <div className="home-content">
        <h1 className="welcome-title">
          Welcome Back, {userName}
          <span className="emoji">✈️</span>
        </h1>

        <RecentlySaved />
        <QuickSearch />
      </div>
    </Layout>
  );
}
