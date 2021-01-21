import React from "react";
import covid19Fetcher from "simple-covid19-json-fetcher";
import { startOfDay } from "date-fns";
import useSwr from "swr";

const getStartOfToday = () => startOfDay(new Date());

const GermanyStats = () => {
  const { data: countries, error } = useSwr(getStartOfToday(), covid19Fetcher);

  if (error) {
    console.log(error);
  }

  //console.log(JSON.stringify(countries, null, 2));

  if (!countries) {
    return null;
  }

  return (
    <>
      {countries
        .filter((c) => c.name === "Germany")
        .map((country) => (
          <div key={country.name}>
            <h3 class="font-bold text-left">
              Corona virus cases in {country.name}
            </h3>
            <br />

            <div class="text-left border-2 border-green-300">
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
          </div>
        ))}
    </>
  );
};

export default GermanyStats;
