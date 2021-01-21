import React, { useState } from "react";
import covid19Fetcher from "simple-covid19-json-fetcher";
import { startOfDay } from "date-fns";
import useSwr from "swr";
import "./Default.css";

const getStartOfToday = () => startOfDay(new Date());

const StateStats = () => {
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
    <>
      {countries
        .filter((c) => c.name === "Germany")
        .map((country) => (
          <div class="flex flex-col">
            <div class="flex flex-row border-2 border-black">
              <div>Select a state</div>
              <div class="ml-64">State</div>
            </div>

            <div class="flex flex-row border-2 border-black">
              <div>
                {country.states.length !== 0 ? (
                  <select onChange={handleChange}>
                    {country.states.map((state) => (
                      <option key={state.name} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
              <div class="ml-32">
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
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default StateStats;
