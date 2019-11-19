import React from "react";
import Circles from "./Circles";

function Header({ circleLength }) {
  return (
    <header>
      <p>InfoImage PD</p>
      <h1>Meet Who Are Behind The Scenes</h1>
      <Circles numbers={circleLength} />
    </header>
  );
}

export default Header;
