import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div id='navbar'>
      <NavLink className="logo" to="/">
        Sommsips
      </NavLink>

      <NavLink className="wine-links" to="/wines">
        View all Wines
      </NavLink>

      <NavLink className="wine-links" to="/wines/add">
        Add a Wine
      </NavLink>
    </div>
  );
}
