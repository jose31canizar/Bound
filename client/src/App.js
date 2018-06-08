import React, { Component } from "react";
import history from "./history";
import { Router, Switch, Route } from "react-router-dom";
import PorousRoute from "./layout/PorousRoute";
import Home from "./home/Home";
import Login from "./login/Login";
import Layout from "./layout/Layout";

import Board from "./board/Board";
import Boards from "./data/boards.json";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const findTransition = route => {
  switch (route) {
    case "/":
      return {
        classNames: findTransitionName(route),
        timeout: 1000
      };
    default:
      return {
        classNames: findTransitionName(route),
        timeout: 2000
      };
  }
};

const findTransitionName = route => {
  switch (route) {
    case "/":
      return "home";
    case "/wear":
      return "transition";
    case "/travel":
      return "transition";
    case "/templates":
      return "transition";
    case "/art":
      return "transition";
    case "/login":
      return "transition";
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelState: "closed",
      currentRoute: history.location.pathname
    };
    this.togglePanel = this.togglePanel.bind(this);

    history.listen(location => {
      this.setState({ currentRoute: location.pathname });
    });
  }
  togglePanel() {
    this.setState((prevState, props) => ({
      panelState: prevState.panelState === "closed" ? "open" : "closed"
    }));
  }
  render() {
    const classNames = "transition";
    console.log(this.state.currentRoute);
    return (
      <Router history={history}>
        <Layout
          panelState={this.state.panelState}
          togglePanel={this.togglePanel}
        >
          <Route
            render={({ location }) => (
              <TransitionGroup
                childFactory={child =>
                  React.cloneElement(
                    child,
                    findTransition(this.state.currentRoute)
                  )
                }
              >
                <CSSTransition
                  timeout={2000}
                  classNames={classNames}
                  key={location.key}
                >
                  <Switch location={location}>
                    {Boards.map((board, i) => (
                      <PorousRoute
                        key={i}
                        exact
                        path={`/${board.path}`}
                        panelState={this.state.panelState}
                        render={() => <Board data={board.data} />}
                      />
                    ))}
                    <PorousRoute
                      exact
                      path="/login"
                      panelState={this.state.panelState}
                      render={() => <Login />}
                    />
                    <PorousRoute
                      path="*"
                      panelState={this.state.panelState}
                      render={() => <Home />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Layout>
      </Router>
    );
  }
}

export default App;
