import React from "react";
import cl from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={cl.loader}>
      <div className={cl.wrapper}>
        <div className={cl.circle}></div>
        <div className={cl.circle}></div>
        <div className={cl.circle}></div>
        <div className={cl.shadow}></div>
        <div className={cl.shadow}></div>
        <div className={cl.shadow}></div>
      </div>
    </div>
  );
}
