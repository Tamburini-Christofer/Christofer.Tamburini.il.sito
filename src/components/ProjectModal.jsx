import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function getProjectImages(project) {
  if (project?.images?.length) {
    return project.images;
  }

  if (project?.image) {
    return [{
      src: project.image,
      alt: `Anteprima progetto ${project.title}`,
    }];
  }

  return [];
}

export default function ProjectModal({ project, isOpen, onClose, accentStyle }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
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

  if (!isOpen || !project) {
    return null;
  }

  const images = getProjectImages(project);
  const normalizedActiveIndex = Math.min(activeImageIndex, Math.max(images.length - 1, 0));
  const activeImage = images[normalizedActiveIndex] ?? images[0];
  const hasLinks = Boolean(project.liveUrl || project.githubUrl || project.downloadUrl || project.stlUrl);
  const shouldShowLinks = !project.hideLinks && hasLinks;

  const modalContent = (
    <>
      <div className="projectModalOverlay" onClick={onClose} />
      <div
        className="projectModalContainer"
        style={accentStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="projectModalClose"
          onClick={onClose}
          aria-label="Chiudi modale progetto"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="projectModalContent">
          <div className="projectModalGallery">
            {activeImage && (
              <div className="projectModalHeroImage">
                <img src={activeImage.src} alt={activeImage.alt} />
              </div>
            )}

            {images.length > 1 && (
              <div className="projectModalThumbs" role="tablist" aria-label="Screenshot progetto">
                {images.map((image, index) => {
                  const isActive = index === activeImageIndex;

                  return (
                    <button
                      key={`${project.title}-thumb-${index}`}
                      type="button"
                      className={isActive ? "projectModalThumb isActive" : "projectModalThumb"}
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`Mostra screenshot ${index + 1}`}
                      aria-pressed={isActive}
                    >
                      <img src={image.src} alt={image.alt} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="projectModalInfo">
            <div className="projectModalHeader">
              {project.category && <span className="projectModalEyebrow">{project.category}</span>}
              <h2 id="project-modal-title">{project.title}</h2>
              <p>{project.description}</p>
            </div>

            {project.goal && (
              <div className="projectModalField">
                <h5>Obiettivo del progetto</h5>
                <p>{project.goal}</p>
              </div>
            )}

            {project.modelSceneTitle && (
              <div className="projectModalField">
                <h5>Titolo modello / scena</h5>
                <p>{project.modelSceneTitle}</p>
              </div>
            )}

            {project.renderType && (
              <div className="projectModalField">
                <h5>Render</h5>
                <p>{project.renderType}</p>
              </div>
            )}

            {project.printedObjectName && (
              <div className="projectModalField">
                <h5>Nome oggetto stampato</h5>
                <p>{project.printedObjectName}</p>
              </div>
            )}

            {project.objectPurpose && (
              <div className="projectModalField">
                <h5>Descrizione oggetto</h5>
                <p>{project.objectPurpose}</p>
              </div>
            )}

            {project.technologies?.length > 0 && (
              <div className="projectModalField">
                <h5>Tecnologie usate</h5>
                <div className="projectModalChips">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="projectModalChip">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.softwareUsed?.length > 0 && (
              <div className="projectModalField">
                <h5>Software usato</h5>
                <div className="projectModalChips">
                  {project.softwareUsed.map((software) => (
                    <span key={software} className="projectModalChip">
                      {software}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.projectType && (
              <div className="projectModalField">
                <h5>Tipo progetto</h5>
                <p>{project.projectType}</p>
              </div>
            )}

            {project.techniquesUsed?.length > 0 && (
              <div className="projectModalField">
                <h5>Tecniche usate</h5>
                <div className="projectModalChips">
                  {project.techniquesUsed.map((technique) => (
                    <span key={technique} className="projectModalChip">
                      {technique}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {shouldShowLinks && (
              <div className="projectModalField">
                <h5>Link</h5>
                <div className="projectModalActions">
                  {project.liveUrl ? (
                    <a
                      className="projectModalAction"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      className="projectModalAction"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}

                  {project.downloadUrl ? (
                    <a
                      className="projectModalAction"
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download file
                    </a>
                  ) : null}

                  {project.stlUrl ? (
                    <a
                      className="projectModalAction"
                      href={project.stlUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      STL
                    </a>
                  ) : null}
                </div>
              </div>
            )}

            {project.features?.length > 0 && (
              <div className="projectModalField">
                <h5>Funzionalita principali</h5>
                <ul className="projectModalList">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="projectModalMetaGrid">
              {project.role && (
                <div className="projectModalField compact">
                  <h5>Ruolo</h5>
                  <p>{project.role}</p>
                </div>
              )}

              {project.developmentTime && (
                <div className="projectModalField compact">
                  <h5>Tempo di sviluppo</h5>
                  <p>{project.developmentTime}</p>
                </div>
              )}

              {project.status && (
                <div className="projectModalField compact">
                  <h5>Stato progetto</h5>
                  <p>{project.status}</p>
                </div>
              )}

              {project.difficulty && (
                <div className="projectModalField compact">
                  <h5>Difficolta</h5>
                  <p>{project.difficulty}</p>
                </div>
              )}

              {project.printType && (
                <div className="projectModalField compact">
                  <h5>Tipo stampa</h5>
                  <p>{project.printType}</p>
                </div>
              )}

              {project.material && (
                <div className="projectModalField compact">
                  <h5>Materiale</h5>
                  <p>{project.material}</p>
                </div>
              )}

              {project.printer && (
                <div className="projectModalField compact">
                  <h5>Stampante usata</h5>
                  <p>{project.printer}</p>
                </div>
              )}

              {project.slicer && (
                <div className="projectModalField compact">
                  <h5>Software slicing</h5>
                  <p>{project.slicer}</p>
                </div>
              )}

              {project.printTime && (
                <div className="projectModalField compact">
                  <h5>Tempo di stampa</h5>
                  <p>{project.printTime}</p>
                </div>
              )}

              {project.dimensions && (
                <div className="projectModalField compact">
                  <h5>Dimensioni</h5>
                  <p>{project.dimensions}</p>
                </div>
              )}

              {project.layerHeight && (
                <div className="projectModalField compact">
                  <h5>Layer height / qualita</h5>
                  <p>{project.layerHeight}</p>
                </div>
              )}

              {project.supports && (
                <div className="projectModalField compact">
                  <h5>Supporti</h5>
                  <p>{project.supports}</p>
                </div>
              )}
            </div>

            {project.wireframeImage && (
              <div className="projectModalField">
                <h5>Wireframe render</h5>
                <div className="projectModalSecondaryImage">
                  <img src={project.wireframeImage.src} alt={project.wireframeImage.alt} />
                </div>
              </div>
            )}

            {project.breakdown?.length > 0 && (
              <div className="projectModalField">
                <h5>Breakdown del progetto</h5>
                <ul className="projectModalList">
                  {project.breakdown.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.processPhotos?.length > 0 && (
              <div className="projectModalField">
                <h5>Foto del processo</h5>
                <div className="projectModalMiniGallery">
                  {project.processPhotos.map((photo) => (
                    <img key={photo.src} src={photo.src} alt={photo.alt} />
                  ))}
                </div>
              </div>
            )}

            {project.versions?.length > 0 && (
              <div className="projectModalField">
                <h5>Versioni oggetto</h5>
                <ul className="projectModalList">
                  {project.versions.map((version) => (
                    <li key={version}>{version}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="projectModalField">
                <h5>Problemi risolti e sfide</h5>
                <p>{project.challenges}</p>
              </div>
            )}

            {project.printIssues && (
              <div className="projectModalField">
                <h5>Problemi riscontrati</h5>
                <p>{project.printIssues}</p>
              </div>
            )}

            {project.postProcessing && (
              <div className="projectModalField">
                <h5>Post-produzione</h5>
                <p>{project.postProcessing}</p>
              </div>
            )}

            {project.learned && (
              <div className="projectModalField">
                <h5>Cosa ho imparato</h5>
                <p>{project.learned}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
