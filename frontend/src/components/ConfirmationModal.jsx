import React from "react";
import "../styles/components/ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message || "Tem certeza que deseja continuar?"}</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-button">
            Sim
          </button>
          <button onClick={onClose} className="cancel-button">
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
