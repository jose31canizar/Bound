import React, { Component } from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "./layout/Layout";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="*" render={() => <Home />} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
