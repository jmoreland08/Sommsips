import React from "react";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavLink className="logo" to="/">
        Sommsips
      </NavLink>

      <NavLink className="wines" to="/wines">
        View all Wines
      </NavLink>

    
    </div>
  );
}
