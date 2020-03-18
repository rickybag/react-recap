import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Context from "./context";

import settings from "./config/settings";

// Import header
import Header from "./components/Header";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <Context.Provider
    value={{
      products: settings.products
    }}
  >
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </Context.Provider>
);

export default App;
