import React, { Component } from "react";
import "./Board.styl";

export default class Board extends Component {
  render() {
    return <div class="board">{this.props.data}</div>;
  }
}
