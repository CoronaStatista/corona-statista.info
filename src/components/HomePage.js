import React from "react";
import "./Default.css";
import GermanyStats from "./GermanyStats";
import StateStats from "./StateStats";

function HomePage() {
  return (
    <>
      <div id="page-wrapper">
        <div id="featured" className="container">
          <div
            className="country"
            class="border-double border-4 border-light-blue-500 mb-8 rounded"
          >
            <GermanyStats />
          </div>
          <div
            className="state"
            class="border-double border-4 border-light-blue-500 rounded"
          >
            <StateStats />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
