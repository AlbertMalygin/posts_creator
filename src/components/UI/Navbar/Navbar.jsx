import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <NavLink to="/about">О сайте</NavLink>
        <NavLink to="/posts">Форум</NavLink>
      </div>
    </div>
  );
}
