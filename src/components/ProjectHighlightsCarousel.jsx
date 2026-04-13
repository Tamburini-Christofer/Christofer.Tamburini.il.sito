import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectHighlightsCarousel({ projects, accentStyle, ariaLabel, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects?.length) {
    return null;
  }

  const activeProject = projects[activeIndex];

  return (
    <>
      <div className={`projectHighlightsCarousel ${className}`.trim()} style={accentStyle}>
        <article className="projectHighlightsCard" aria-label={ariaLabel}>
          <div className="projectHighlightsPreviewCol">
            <div className="projectHighlightsVisual">
              <img
                src={activeProject.image}
                alt={`Anteprima progetto ${activeProject.title}`}
                loading="lazy"
              />
            </div>

            <div className="projectHighlightsBody">
              <span className="projectHighlightsCategory">{activeProject.category}</span>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>

              <div className="projectHighlightsTechRow">
                {(activeProject.technologies ?? []).slice(0, 4).map((technology) => (
                  <span key={technology} className="projectHighlightsTechChip">
                    {technology}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="projectHighlightsOpenButton"
                onClick={() => setSelectedProject(activeProject)}
              >
                Apri progetto
              </button>
            </div>
          </div>

          <div className="projectHighlightsSelectorCol">
            <h4 className="projectHighlightsSelectorTitle">Progetti</h4>
            <div className="projectHighlightsSelectorList" role="listbox" aria-label="Seleziona progetto">
              {projects.map((project, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={`${project.title}-${project.category}`}
                    type="button"
                    className={isActive ? "projectHighlightsSelectorItem isActive" : "projectHighlightsSelectorItem"}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    <span className="projectHighlightsSelectorCategory">{project.category}</span>
                    <span className="projectHighlightsSelectorName">{project.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </article>
      </div>

      <ProjectModal
        key={selectedProject?.title ?? "project-modal"}
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        accentStyle={accentStyle}
      />
    </>
  );
}
