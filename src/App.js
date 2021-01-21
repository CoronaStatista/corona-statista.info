import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
	      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={ContactForm} />
        </Switch>
		<Footer />
      </Router>
    </div>
  );
}

export default App;
