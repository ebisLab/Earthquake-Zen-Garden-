import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ data, usrName }) {
  return (
    <nav>

      <Link to="/" 
      className="logo_placement"
      >
        <img className="logo" src={`${data.logoImage}`} alt={`${data.title}`} />
      </Link>
      <h1>{data.title}</h1>

      <Link className="greeting_placement" to="/profile">
        Welcome {usrName.firstName}
      </Link>
    </nav>
  );
}
