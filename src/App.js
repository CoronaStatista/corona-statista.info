import React, { useState } from "react";
import covid19Fetcher from "simple-covid19-json-fetcher";
import { startOfDay } from "date-fns";
import useSwr from "swr";

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
    <div>
      {countries
        .filter((c) => c.name === "Germany")
        .map((country) => (
          <div key={country.name}>
            <h1>{country.name}</h1>
            <div>
              <span>Active: </span>
              <span>{country.active}</span>
              <br />
              <span>Confirmed: </span>
              <span>{country.confirmed}</span>
              <br />
              <span>Deaths: </span>
              <span>{country.deaths}</span>
              <br />
              <span>Recovered: </span>
              <span>{country.recovered}</span>
            </div>

            <br />
            <br />
            <hr />

            {country.states.length !== 0 ? (
              <select id="states" onChange={handleChange}>
                {country.states.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            ) : null}
            <div>
              <br />
              {stats ? (
                <>
                  <ul>
                    <li>Active: {stats.active}</li>
                    <li>Confirmed: {stats.confirmed}</li>
                    <li>Deaths: {stats.deaths}</li>
                    <li>Recovered: {stats.recovered}</li>
                  </ul>
                </>
              ) : null}
              <br />
              <br />
              <br />
              <br />
              <hr />
            </div>
            <hr />
            <div>
              {country.states.map((state) => (
                <div key={state.name}>
                  <p>
                    <b>{state.name}</b>
                  </p>
                  <div>
                    <span>Active: </span>
                    <span>{state.active}</span>
                    <br />
                    <span>Confirmed: </span>
                    <span>{state.confirmed}</span>
                    <br />
                    <span>Deaths: </span>
                    <span>{state.deaths}</span>
                    <br />
                    <span>Recovered: </span>
                    <span>{state.recovered}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
