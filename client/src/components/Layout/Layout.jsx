import React, { Children } from "react";
import { NavLink } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <NavLink className="logo" to="/">
        Sommsips
      </NavLink>
      <br />
      <NavLink className="wines" to="/wines">
        View all Wines
      </NavLink>
      <br />
      <NavLink className="wines" to="/wines/add">
        Add a Wine
      </NavLink>
      <br />
      {props.children}
    </div>
  );
}
