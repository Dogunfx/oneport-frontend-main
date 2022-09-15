import React from "react";

import "./Modal.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import closeIcon from "../../assests/close-icon.png";

const Modal = ({ show, closeModal }) => {
  if (!show) {
    return <></>;
  }

  return (
    <div className="docs-Modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <img
          src={closeIcon}
          alt=""
          onClick={closeModal}
          className="closeIcon"
        />
        <div className="modal-heading">
          <h2>Documents Upload</h2>
          <p>Rhoncus dui convallis lorem egestas molestie vitae nibh.</p>
        </div>
        <div className="select-docs">
          <h3>Select Document type to Upload</h3>
          <div className="types-select">
            <p>Select document type</p>
            <HiOutlineChevronDown />
          </div>
        </div>
        <div className="upload-file">
          <HiOutlineDocumentAdd className="iconAdd" />
          <h6>
            <span>Click to upload a file</span> or drag and drop
          </h6>
          <p>PNG, JPG, , GIF upto 5MB</p>
        </div>
        <div className="footer-modal">
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
