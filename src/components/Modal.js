import React from "react";
import "./Modal.css";
export default function Modal({ children, close }) {
  return (
    <>
      <div className="modal-backdrop">
        <div className="modal">
          {children}
          <button onClick={close}> close </button>
        </div>
      </div>
    </>
  );
}
