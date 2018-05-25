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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelState: "closed"
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel() {
    this.setState((prevState, props) => ({
      panelState: prevState.panelState === "closed" ? "open" : "closed"
    }));
  }
  render() {
    const classNames = `transition`;
    return (
      <Router history={history}>
        <Layout
          panelState={this.state.panelState}
          togglePanel={this.togglePanel}
        >
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  timeout={700}
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
