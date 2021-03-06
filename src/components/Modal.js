import React from "react";
import "./Modal.css";
export default function Modal({ children, close, isSalesModal }) {
  return (
    <>
      <div className="modal-backdrop">
        <div
          className="modal"
          style={{
            border: "4px solid",
            borderColor: isSalesModal ? "#ff4500" : "#555",
            textAlign: "center",
          }}
        >
          {children}
          <button onClick={close} className={isSalesModal ? "sales-btn" : ""}>
            close
          </button>
        </div>
      </div>
    </>
  );
}
