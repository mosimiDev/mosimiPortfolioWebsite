// src/Modal.js
import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        onClose();
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isOpen, onClose]);

  
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h1>Hello there,</h1>
        <br />
        <p>
          To load the live version of this mobile app, you need to follow the
          link and create an account with expo if you don't already have one
        </p>
        <br />
        <p>
          Scan the QR code to enable expo load the live version
          on your device. Or, you choose the Expo Go app to preview the app
          on your device. That is all!
        </p>

        {children}
        <p className="text-bold">Still having issues?</p>
        <p>
          Feel free to{" "}
          <a
            href="mailto: mosimi_akinlabi@gmail.com?subject=Feedback&body=Message"
            target="_blank"
            className="text-blue-500 underline "
          >
            contact me
          </a>{" "}
          so I can guide you through the process.
        </p>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
