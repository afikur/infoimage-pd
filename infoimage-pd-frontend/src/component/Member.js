import React from "react";

function Member({ name, imageUrl, designation }) {
  return (
    <div className="member">
      <img className="photo" src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <h4>{designation}</h4>
    </div>
  );
}

export default Member;
