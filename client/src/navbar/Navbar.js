import React, { Component } from "react";
import "./Navbar.styl";
import "../assets/InputButton.styl";

import NavbarIcon from "./NavbarIcon";
import { NavLink, Link } from "react-router-dom";

import BlockLink from "../block-link/BlockLink";

export default class Navbar extends Component {
  constructor(props) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    super(props);
    this.state = {
      width: width,
      panelState: this.props.panelState
    };
    this.humanizeSearchBar = this.humanizeSearchBar.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  humanizeSearchBar() {
    var txt = "What are you looking for?";
    var timeOut;
    var txtLen = txt.length;
    var char = 0;
    document
      .getElementById("nav-bar-search-button")
      .getAttribute("placeholder", "|");
    (function typeIt() {
      var humanize = Math.round(Math.random() * (200 - 30)) + 30;
      timeOut = setTimeout(function() {
        char++;
        var type = txt.substring(0, char);

        //if in the middle of humanizing, the user resizes to mobile
        if (document.getElementById("nav-bar-search-button") === null) {
          clearTimeout(timeOut);
        } else {
          document
            .getElementById("nav-bar-search-button")
            .setAttribute("placeholder", type + "|");
          typeIt();
        }

        if (char === txtLen) {
          document.getElementById("nav-bar-search-button").setAttribute(
            "placeholder",
            document
              .getElementById("nav-bar-search-button")
              .getAttribute("placeholder")
              .slice(0, -1)
          ); // remove the '|'
          clearTimeout(timeOut);
        }
      }, humanize);
    })();
  }
  handleResize() {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;

    this.setState({ width });
  }
  componentDidMount() {
    if (this.state.width > 800) {
      this.humanizeSearchBar();
    }

    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.width <= 800 && this.state.width > 800) {
      this.humanizeSearchBar();
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      (nextState.width > 800 && this.state.width <= 800) ||
      (nextState.width <= 800 && this.state.width > 800)
    ) {
      return true;
    } else if (nextProps.panelState !== this.props.panelState) {
      return true;
    }
    return false;
  }
  render() {
    const { width } = this.state;
    if (width > 800) {
      return (
        <div class="navbar">
          <Link to="/">
            <h2>FRMWRK</h2>
          </Link>
          <input
            placeholder="search"
            class="input-button"
            id="nav-bar-search-button"
            list="sections"
          />
          <datalist id="sections">
            <option value="wear" />
            <option value="frmwrk art" />
            <option value="resonance" />
            <option value="react" />
            <option value="graphic design" />
          </datalist>
          <BlockLink name="login" />
        </div>
      );
    } else {
      return (
        <div class="navbar-mobile">
          <Link to="/">
            <h2
              class={
                this.props.panelState === "closed" ? "" : "hide-nav-bar-title"
              }
            >
              FRMWRK
            </h2>
          </Link>
          <NavbarIcon
            togglePanel={this.props.togglePanel}
            panelState={this.props.panelState}
          />
        </div>
      );
    }
  }
}
