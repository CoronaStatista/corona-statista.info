import React from "react";
import covid19Fetcher from "simple-covid19-json-fetcher";
import { startOfDay } from "date-fns";
import useSwr from "swr";
import firebase from "../util/firebase";

const getStartOfToday = () => startOfDay(new Date());

function backupStats() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: countries, error } = useSwr(getStartOfToday(), covid19Fetcher);

  if (error) {
    console.log(error);
  }

  //console.log(JSON.stringify(countries, null, 2));

  if (!countries) {
    return null;
  }

  const backupData = () => {
    const backupRef = firebase.database().ref("Backup");
    const backup = {
      country,
    };

    backupRef.push(backup);
  };

  return (
    <>
      {countries
        .filter((c) => c.name === "Germany")
        .map((country) => (
          <></>
        ))}
    </>
  );
}

export default backupStats;
