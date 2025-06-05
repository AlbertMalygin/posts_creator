import React from "react";
import classes from "./MySelect.module.css";

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
}
