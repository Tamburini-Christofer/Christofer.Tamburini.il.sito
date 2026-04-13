import { useEffect } from "react";

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

  return (
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

          <div className="certificateModalInfo">
            <h2>{certificate.title}</h2>

            {certificate.issuer && (
              <div className="certificateModalField">
                <h5>Ente Rilasciante</h5>
                <p>{certificate.issuer}</p>
              </div>
            )}

            {certificate.releasedBy && (
              <div className="certificateModalField">
                <h5>Rilasciato da</h5>
                <p>{certificate.releasedBy}</p>
              </div>
            )}

            {certificate.topic && (
              <div className="certificateModalField">
                <h5>Argomento</h5>
                <p>{certificate.topic}</p>
              </div>
            )}

            {certificate.date && (
              <div className="certificateModalField">
                <h5>Data</h5>
                <p>{certificate.date}</p>
              </div>
            )}

            {certificate.duration && (
              <div className="certificateModalField">
                <h5>Ore di Corso</h5>
                <p>{certificate.duration}</p>
              </div>
            )}

            {certificate.acquiredSkills && certificate.acquiredSkills.length > 0 && (
              <div className="certificateModalField">
                <h5>Competenze Acquisite</h5>
                <div className="certificateModalSkills">
                  {certificate.acquiredSkills.map((skill) => (
                    <span key={skill} className="certificateModalSkill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
