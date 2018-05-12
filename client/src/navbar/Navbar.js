import React, { Component } from "react";
import "./Navbar.styl";

export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <label>FRMWRK</label>
        <span>Search</span>
        <span>Login</span>
      </div>
    );
  }
}
