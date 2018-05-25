import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./BlockLink.styl";

export default class BlockLink extends Component {
  render() {
    return (
      <NavLink to="login" class="block-link-button" activeClassName="active">
        <label>{this.props.name}</label>
        <label>{this.props.name}</label>
      </NavLink>
    );
  }
}
