import React from "react";
import classes from "./PagesNavigation.module.css";
import MyButton from "../button/MyButton";

export default function PagesNavigation({
  choosePage,
  currentPage,
  totalPages,
}) {
  let current;
  return (
    <nav className={classes.myNav}>
      {totalPages.map((n) => {
        currentPage === n ? (current = true) : (current = false);
        return (
          <MyButton current={current} key={n} onClick={() => choosePage(n)}>
            {n}
          </MyButton>
        );
      })}
    </nav>
  );
}
