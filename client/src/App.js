import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./components/ClimaApresentacao";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
