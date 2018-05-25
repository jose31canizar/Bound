import React from "react";
import { Route } from "react-router";

export default function({ children, ...props }) {
  return (
    <Route exact={props.exact} path={props.path}>
      {React.cloneElement(props.render(), {
        // style: {
        //   transition: "0.5s ease",
        //   transform:
        //     props.panelState === "open"
        //       ? "translate3d(300px, 0,0)"
        //       : "translate3d(0px, 0,0)"
        // },
        ...props
      })}
    </Route>
  );
}
