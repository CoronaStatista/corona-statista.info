import React, { useState } from "react";
import covid19Fetcher from "simple-covid19-json-fetcher";
import { startOfDay } from "date-fns";
import useSwr from "swr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./main.css";

const getStartOfToday = () => startOfDay(new Date());

const App = () => {
  const { data: countries, error } = useSwr(getStartOfToday(), covid19Fetcher);
  const [stats, setStats] = useState(null);

  const [selectedState, setSelectedState] = useState("");

  if (error) {
    console.log(error);
  }

  //console.log(JSON.stringify(countries, null, 2));

  if (!countries) {
    return null;
  }

  function handleChange(e) {
    setSelectedState(e.target.value);
    //fetch stats by state
    //assign stats to setStats
    setStats(
      countries
        .find((c) => c.name === "Germany")
        .states.find((s) => s.name === e.target.value)
    );
  }

  return (
    <div class="grid bg-yellow-100">
      <Router>
        <Header />
        <div className="Banner"></div>
        {countries
          .filter((c) => c.name === "Germany")
          .map((country) => (
            <div key={country.name}>
              <h3 class="font-bold">{country.name}</h3>
              <br />

              <div>
                <span class="font-bold">Active: </span>
                <span>{country.active}</span>
                <br />
                <span class="font-bold">Confirmed: </span>
                <span>{country.confirmed}</span>
                <br />
                <span class="font-bold">Deaths: </span>
                <span>{country.deaths}</span>
                <br />
                <span class="font-bold">Recovered: </span>
                <span>{country.recovered}</span>
              </div>

              <br />
              <br />
              <hr />
              <div class="flex flex-row">
                <div>
                  {country.states.length !== 0 ? (
                    <select id="states" onChange={handleChange}>
                      {country.states.map((state) => (
                        <option key={state.name} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  ) : null}
                </div>
                <div class="ml-20">
                  {stats ? (
                    <>
                      <ul>
                        <li>
                          <span class="font-bold">Active:</span> {stats.active}
                        </li>
                        <li>
                          <span class="font-bold">Confirmed:</span>{" "}
                          {stats.confirmed}
                        </li>
                        <li>
                          <span class="font-bold">Deaths:</span> {stats.deaths}
                        </li>
                        <li>
                          <span class="font-bold">Recovered:</span>
                          {stats.recovered}
                        </li>
                      </ul>
                    </>
                  ) : null}
                  <br />
                  <br />
                  <hr />
                </div>
              </div>
              <hr />
            </div>
          ))}
      </Router>
    </div>
  );
};

export default App;
