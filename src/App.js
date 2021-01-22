import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUsForm from "./components/ContactUsForm";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={ContactUsForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
