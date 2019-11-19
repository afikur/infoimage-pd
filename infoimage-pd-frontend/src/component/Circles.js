import React from "react";
import "./Circles.css";

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Circles({ numbers }) {
  return (
    <ul style={{ width: numbers * 16 + numbers * 5 - 5 }}>
      {[...Array(numbers)].map((_, i) => (
        <li key={i} style={{ background: getRandomColor() }}></li>
      ))}
    </ul>
  );
}

export default Circles;
