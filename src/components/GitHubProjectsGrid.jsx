import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useGitHubRepos from "../hooks/useGitHubRepos";
import githubProjects from "../data/githubProjects";

function getTechnologyClassName(technology) {
  return String(technology)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function repoToProject(repo, config) {
  const images =
    repo.readmeImages?.length > 0
      ? repo.readmeImages
      : [{ src: repo.ogImage, alt: `Anteprima ${repo.name}` }];

  return {
    title: config.name,
    label: config.label,
    description: config.description,
    images,
    technologies: config.technologies,
    githubUrl: repo.url,
    liveUrl: repo.homepage || null,
  };
}

function GitHubProjectModal({ project, isOpen, onClose, accentStyle }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = "hidden";

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, project?.title]);

  if (!isOpen || !project) return null;

  const images = project.images ?? [];
  const current = images[activeIdx] ?? images[0];

  if (!current) return null;

  return createPortal(
    <>
      <div className="ghProjectModalOverlay" onClick={onClose} />
      <div
        className="ghProjectModal"
        style={accentStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gh-project-modal-title"
      >
        <button
          type="button"
          className="ghProjectModalClose"
          onClick={onClose}
          aria-label="Chiudi progetto"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="ghProjectModalContent">
          <div className="ghProjectModalGallery">
            <div className="ghProjectModalHeroImage">
              <img src={current.src} alt={current.alt} />
            </div>

            {images.length > 1 && (
              <div className="ghProjectModalThumbs" role="tablist" aria-label="Screenshot progetto">
                {images.map((image, index) => (
                  <button
                    key={`${project.title}-modal-thumb-${index}`}
                    type="button"
                    className={`ghProjectModalThumb${index === activeIdx ? " isActive" : ""}`}
                    onClick={() => setActiveIdx(index)}
                    aria-label={`Mostra screenshot ${index + 1}`}
                    aria-pressed={index === activeIdx}
                  >
                    <img src={image.src} alt={image.alt} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="ghProjectModalInfo">
            {project.label && <span className="ghProjectModalEyebrow">{project.label}</span>}
            <h2 id="gh-project-modal-title">{project.title}</h2>
            {project.description && <p>{project.description}</p>}

            <div className="ghProjectModalActions">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="projectHighlightsOpenButton"
              >
                <i className="fa-brands fa-github" /> Vedi su GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghCarouselLiveLink"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

function ImageGallery({ project, onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = project.images ?? [];
  const current = images[activeIdx] ?? images[0];

  if (!current) return null;

  return (
    <div className="ghCarouselGallery">
      <div
        className="ghCarouselHeroImage"
        onClick={onOpenModal}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => event.key === "Enter" && onOpenModal()}
        aria-label={`Apri il progetto ${project.title}`}
      >
        {project.technologies?.length > 0 && (
          <div className="projectHighlightsTechRow ghProjectsTechOverlayBottomLeft">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className={`projectHighlightsTechChip tech-${getTechnologyClassName(technology)}`}
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        <a
          className="ghProjectsImageGithubLink"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Apri ${project.title} su GitHub`}
          onClick={(event) => event.stopPropagation()}
        >
          <i className="fa-brands fa-github" />
        </a>

        <img src={current.src} alt={current.alt} loading="lazy" />
      </div>

      {images.length > 1 && (
        <div className="ghCarouselThumbs">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              className={`ghCarouselThumb${i === activeIdx ? " isActive" : ""}`}
              onClick={() => setActiveIdx(i)}
              aria-label={`Mostra screenshot ${i + 1}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GitHubProjectsGrid({ accentStyle }) {
  const { repos, loading, error } = useGitHubRepos();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return (
      <div className="ghReposLoading">
        <div className="ghReposSpinner" />
        <p>Caricamento progetti da GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ghReposError">
        <p>Impossibile caricare i progetti: {error}</p>
      </div>
    );
  }

  if (!repos.length) return null;

  const projects = githubProjects
    .map((config) => {
      if (!config?.repo) return null;
      const repo = repos.find(
        (r) => r.name.toLowerCase() === config.repo.toLowerCase()
      );
      if (!repo) return null;
      return repoToProject(repo, config);
    })
    .filter(Boolean);

  if (!projects.length) return null;

  const active = projects[activeIndex] ?? projects[0];

  return (
    <>
      <div className="ghProjectsCarousel" style={accentStyle}>
        <article className="ghProjectsLayout" aria-label="Carosello progetti GitHub">
          <div className="ghProjectsMain">
            <div className="ghProjectsMediaColumn">
              <ImageGallery
                project={active}
                onOpenModal={() => setIsModalOpen(true)}
                key={active.title}
              />
            </div>
          </div>

          <div className="ghProjectsSidebar">
            <div className="ghProjectsSelectorList" role="listbox" aria-label="Seleziona progetto">
              {projects.map((project, index) => (
                <button
                  key={`${project.title}-${index}`}
                  type="button"
                  className={`projectHighlightsSelectorItem${index === activeIndex ? " isActive" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                  aria-selected={index === activeIndex}
                >
                  <span className="projectHighlightsSelectorCategory">{project.label}</span>
                  <span className="projectHighlightsSelectorName">{project.title}</span>
                </button>
              ))}
            </div>
          </div>
        </article>
      </div>

      <GitHubProjectModal
        key={active.title}
        project={active}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        accentStyle={accentStyle}
      />
    </>
  );
}
