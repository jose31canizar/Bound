import React, { Component } from "react";
import "./Home.styl";
import SVG from "../assets/svg";
import Boards from "../data/boards.json";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    super(props);
    this.state = {
      width: width
    };
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName("body")[0];
      const width = w.innerWidth || e.clientWidth || g.clientWidth;
      this.setState({ width: w });
    });
  }
  render() {
    return (
      <div class="home" style={this.props.style}>
        <SVG
          name="FrmwrkLogo"
          style={{ position: "absolute" }}
          viewBox="0 0 128.23 111.85"
        />
        {Boards.map((screen, i) => (
          <span class="section-entrance" key={i}>
            <Link to={screen.path} class="board-link">
              <label>{screen.title}</label>
              <label>{screen.title}</label>
              <img
                src={require(`../img/${screen.image}.jpg`)}
                alt={screen.image}
              />
            </Link>
          </span>
        ))}
      </div>
    );
  }
}
