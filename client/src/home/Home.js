import React, { Component } from "react";
import "./Home.styl";

export default class Home extends Component {
  render() {
    const screens = ["wear", "resonance"];
    return (
      <div class="home">
        {screens.map((screen, i) => (
          <span class="section-entrance">
            <div>
              <label>{screen}</label>
              <label>{screen}</label>
            </div>
          </span>
        ))}
      </div>
    );
  }
}
