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
        <h3>FRMWRK MENU</h3>
        <BlockLink name="wear" />
        <BlockLink name="frmwrk art" />
        <BlockLink name="resonance" />
        <BlockLink name="blog" />
        <BlockLink name="articles" />
        <BlockLink name="contact" />
        <BlockLink name="jobs" />
        <BlockLink name="about" />
      </div>
    );
  }
}
