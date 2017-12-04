import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Saved from "./components/Saved";

const App = () => 
  
  <Router>
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </Router>;

export default App;
