import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function CertificateModal({ certificate, isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modalOpen");

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
        document.body.classList.remove("modalOpen");
      };
    }

    return undefined;
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return createPortal(
    <>
      <div className="certificateModalOverlay" onClick={onClose} />
      <div className="certificateModalContainer">
        <button
          className="certificateModalClose"
          onClick={onClose}
          aria-label="Chiudi modale"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="certificateModalContent">
          <div className="certificateModalImage">
            <img src={certificate.src} alt={certificate.title} />
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
