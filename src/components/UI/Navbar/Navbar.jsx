import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router";
import { AuthContext } from "../../../context";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__linksWrapper}>
        <div className={classes.navbar__links}>
          <NavLink to="/about">О сайте</NavLink>
          <NavLink to="/posts">Форум</NavLink>
        </div>
        <div className={classes.navbar__links}>
          {isAuth ? (
            <NavLink to="/user_page">Профиль</NavLink>
          ) : (
            <NavLink to="/login">Войти</NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
