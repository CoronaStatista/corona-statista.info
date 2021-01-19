import React, { useState } from "react";
import covid19Fetcher from "simple-covid19-json-fetcher";
import { startOfDay } from "date-fns";
import useSwr from "swr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import ContactForm from "./components/pages/ContactForm";

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
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactForm} />
      </Switch>
    </Router>
  );
};

export default App;
