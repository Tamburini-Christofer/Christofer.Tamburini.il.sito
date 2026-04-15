import { useState, useEffect } from "react";
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

function ImageGallery({ images, technologies }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const current = images[activeIdx] ?? images[0];

  useEffect(() => {
    if (!fullscreen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") setActiveIdx((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveIdx((p) => (p - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [fullscreen, images.length]);

  return (
    <>
      <div className="ghCarouselGallery">
        <div
          className="ghCarouselHeroImage"
          onClick={() => setFullscreen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setFullscreen(true)}
          aria-label="Ingrandisci immagine"
        >
          <div className="projectHighlightsTechRow ghProjectsTechOverlayBottomLeft">
            {(technologies ?? []).map((technology) => (
              <span
                key={technology}
                className={`projectHighlightsTechChip tech-${getTechnologyClassName(technology)}`}
              >
                {technology}
              </span>
            ))}
          </div>

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

      {fullscreen && (
        <div
          className="ghFullscreenOverlay"
          onClick={() => setFullscreen(false)}
        >
          <button
            className="ghFullscreenClose"
            onClick={() => setFullscreen(false)}
            aria-label="Chiudi fullscreen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                className="ghFullscreenNav ghFullscreenPrev"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
                }}
                aria-label="Immagine precedente"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                className="ghFullscreenNav ghFullscreenNext"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) => (prev + 1) % images.length);
                }}
                aria-label="Immagine successiva"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </>
          )}

          <img
            className="ghFullscreenImage"
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <span className="ghFullscreenCounter">
              {activeIdx + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default function GitHubProjectsGrid({ accentStyle }) {
  const { repos, loading, error } = useGitHubRepos();
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Abbina ogni config al repo corrispondente (mantiene l'ordine di githubProjects)
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
    <div className="ghProjectsCarousel" style={accentStyle}>
      <article className="ghProjectsLayout" aria-label="Carosello progetti GitHub">
        {/* Colonna principale: galleria + info */}
        <div className="ghProjectsMain">
          <div className="ghProjectsMediaColumn">
            <ImageGallery
              images={active.images}
              technologies={active.technologies}
              key={active.title}
            />
          </div>

          <div className="ghProjectsInfo">
            <div className="ghProjectsInfoHeader">
              <h3>{active.title}</h3>
              {active.description && (
                <p className="ghProjectsDesc">{active.description}</p>
              )}
            </div>

            <div className="ghProjectsBottom">
              <div className="ghCarouselActions">
                <a
                  href={active.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectHighlightsOpenButton"
                >
                  <i className="fa-brands fa-github"></i> Vedi su GitHub
                </a>
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ghCarouselLiveLink"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Colonna laterale: lista progetti */}
        <div className="ghProjectsSidebar">
          <h4 className="projectHighlightsSelectorTitle">Progetti</h4>
          <div className="ghProjectsSelectorList" role="listbox" aria-label="Seleziona progetto">
            {projects.map((project, index) => (
              <button
                key={`${project.title}-${index}`}
                type="button"
                className={`projectHighlightsSelectorItem${index === activeIndex ? " isActive" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <span className="projectHighlightsSelectorCategory">{project.label}</span>
                <span className="projectHighlightsSelectorName">{project.title}</span>
              </button>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
