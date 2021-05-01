import React, { Children } from "react";
import './Layout.css'
import Nav from '../nav/Nav'
export default function Layout(props) {
  return (
    <div className='navbar'>
      
      <Nav />
      {props.children}
    </div>
  );
}
