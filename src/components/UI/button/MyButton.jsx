import React from "react";
import classes from "./MyButton.module.css";

export default function MyButton({ current, children, ...props }) {
  return (
    <button
      {...props}
      className={
        current ? [classes.myBtn, classes.current].join(" ") : classes.myBtn
      }
    >
      {children}
    </button>
  );
}
