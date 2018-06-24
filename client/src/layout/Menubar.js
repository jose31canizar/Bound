import React, { Component } from "react";
import "./Menubar.styl";
import BlockLink from "../block-link/BlockLink";

export default class Menubar extends Component {
  render() {
    const { panelState } = this.props;
    return (
      <div
        class="menu-bar"
        style={{
          ...this.props.style,
          transform:
            panelState === "open"
              ? "translate3d(0,0,0)"
              : "translate3d(-300px,0,0)"
        }}
      >
        <div class="block-links">
          <h3>MENU</h3>
          <BlockLink name="music" />
          <BlockLink name="podcast" />
          <BlockLink name="merch" />
          <BlockLink name="videos" />
          <BlockLink name="contact" />
          <BlockLink name="about" />
        </div>
      </div>
    );
  }
}
