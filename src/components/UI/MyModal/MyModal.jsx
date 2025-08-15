import React from "react";
import cl from "./MyModal.module.css";

export default function MyModal({ children, setVisible }) {
  return (
    <div className={cl.modal} onClick={() => setVisible(false)}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
