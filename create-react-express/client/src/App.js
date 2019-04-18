import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import NoMatch from "./pages/nomatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
