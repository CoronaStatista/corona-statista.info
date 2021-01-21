import React from "react";
import "./Default.css";
import GermanyStats from "./GermanyStats";
import StateStats from "./StateStats";

function HomePage() {
  return (
    <>
      <div id="page-wrapper">
        <div id="featured" className="container">
          <div className="country">
            <GermanyStats />
          </div>
          <div className="state">
            <StateStats />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
