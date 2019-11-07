import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navigation">
    <Link className="GodsList-link" to="/">Gods List</Link>
    <Link className="CreateIndex-link" to="/new">Create Index</Link>
  </nav>
);

export default Nav;