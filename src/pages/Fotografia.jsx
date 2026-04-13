import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ProjectHighlightsCarousel from "../components/ProjectHighlightsCarousel";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const fotografiaSkills = [
  {
    label: "Photoshop",
    description:
      "Adobe Photoshop è il software leader mondiale per l'elaborazione, il fotoritocco e la manipolazione di immagini digitali raster (pixel). Utilizzato da professionisti e creativi, permette di modificare foto, creare grafica complessa, disegnare e utilizzare l'intelligenza artificiale (IA) per modificare contenuti.",
  },
  {
    label: "Camera Raw",
    description:
      "Adobe Camera Raw (ACR) è un potente plug-in incluso in Photoshop, Bridge e After Effects, fondamentale per i fotografi, che permette di aprire, sviluppare e modificare le immagini in formato RAW (il \"negativo digitale\" non compresso). Consente di regolare esposizione, colore, contrasto e dettagli in modo non distruttivo, sfruttando il massimo delle informazioni catturate dal sensore prima della conversione finale. ",
  },
  {
    label: "Macro",
    description:
      "La macrofotografia è un genere fotografico che cattura soggetti molto piccoli, rendendoli grandi quanto o più delle loro dimensioni reali (rapporto di ingrandimento 1:1). Questa tecnica rivela dettagli invisibili a occhio nudo, come insetti, fiori o trame, solitamente ottenuti con obiettivi specifici a distanza ravvicinata.",
  },
  {
    label: "Astratto",
    description:
      "La fotografia astratta è una forma d'arte che crea immagini distaccate dalla realtà oggettiva, concentrandosi su forme, colori, luci e texture piuttosto che sulla rappresentazione fedele del soggetto. L'obiettivo è evocare emozioni e suggestioni, trasformando elementi quotidiani in visioni surreali e metafisiche. ",
  },
  {
    label: "Street Photo",
    description:
      "La street photography (fotografia di strada) è un genere che immortala la vita quotidiana in luoghi pubblici in modo spontaneo, sincero e non in posa. Documenta la \"commedia umana\", catturando momenti inaspettati, emozioni e interazioni sociali per raccontare storie urbane. È un'arte basata su osservazione, rapidità e tempismo.",
  },
  {
    label: "Landscapes",
    description:
      "La fotografia di paesaggio (landscape) è un genere che ritrae scenari naturali o urbani, con l'obiettivo di catturare la bellezza, la vastità e l'atmosfera di un luogo, spesso creando una connessione emotiva. Questo stile si concentra su panorami come montagne, foreste, laghi o città, enfatizzando la composizione e la luce naturale. ",
  },
  {
    label: "Ritratto",
    description:
      "Il ritratto fotografico è un genere artistico che cattura l'essenza, la personalità e l'identità di un soggetto (persona o gruppo) attraverso l'obiettivo, andando oltre la semplice rappresentazione fisica. Utilizza luce, inquadratura, posa e contesto per trasmettere emozioni e raccontare una storia, spesso creando un intimo legame tra fotografo e soggetto. ",
  },
  {
    label: "Studio",
    description:
      "Uno studio fotografico è uno spazio chiuso e controllato, appositamente attrezzato per scattare fotografie, garantendo il pieno controllo di illuminazione, sfondi e attrezzature. Offre un ambiente professionale (sala posa) con luci, modificatori e fondali per creare immagini di alta qualità, diverso da un set in esterna.",
  },
  {
    label: "Ligthroom",
    description:
      "Adobe Lightroom (spesso chiamato solo Lightroom) è un potente software di post-produzione fotografica sviluppato da Adobe, progettato per gestire, organizzare e modificare grandi quantità di immagini, ideale sia per professionisti che per appassionati. A differenza di Photoshop, Lightroom permette un editing non distruttivo e gestisce l'intero flusso di lavoro, dal trasferimento dallo scatto al catalogo fino all'esportazione",
  },
];

const fotografiaHighlights = [
  {
    title: "Ritratto in Luce Naturale",
    category: "Portrait",
    description: "Sessione ritratto con luce morbida, palette cinematica e direzione espressiva del soggetto.",
    image: "https://picsum.photos/seed/fotografia-highlight-01/1200/800",
    images: [
      {
        src: "https://picsum.photos/seed/fotografia-highlight-01/1200/800",
        alt: "Ritratto in luce naturale piano americano",
      },
      {
        src: "https://picsum.photos/seed/fotografia-highlight-011/1200/800",
        alt: "Ritratto in luce naturale close-up",
      },
      {
        src: "https://picsum.photos/seed/fotografia-highlight-012/1200/800",
        alt: "Ritratto in luce naturale backstage",
      },
    ],
    technologies: ["Sony A7", "85mm", "Lightroom", "Photoshop", "Camera Raw"],
    goal:
      "Costruire una serie portrait dal mood editoriale, pulita e adatta sia a portfolio che a personal branding.",
    hideLinks: true,
  },
  {
    title: "Street Frame Urbano",
    category: "Street",
    description: "Scatto spontaneo con composizione a livelli, timing narrativo e lettura rapida dello spazio urbano.",
    image: "https://picsum.photos/seed/fotografia-highlight-02/1200/800",
    images: [
      {
        src: "https://picsum.photos/seed/fotografia-highlight-02/1200/800",
        alt: "Street photography con soggetto in movimento",
      },
      {
        src: "https://picsum.photos/seed/fotografia-highlight-021/1200/800",
        alt: "Street photography con riflessi urbani",
      },
      {
        src: "https://picsum.photos/seed/fotografia-highlight-022/1200/800",
        alt: "Street photography con layering prospettico",
      },
    ],
    technologies: ["Sony A7", "35mm", "Lightroom", "Color Grading"],
    goal:
      "Raccontare il ritmo della citta con immagini piu narrative che descrittive.",
    hideLinks: true,
  },
  {
    title: "Macro Texture",
    category: "Macro",
    description: "Dettaglio ravvicinato ad alto contrasto per esaltare materia, pattern e profondita tattile.",
    image: "https://picsum.photos/seed/fotografia-highlight-03/1200/800",
    images: [
      {
        src: "https://picsum.photos/seed/fotografia-highlight-03/1200/800",
        alt: "Macro texture soggetto principale",
      },
      {
        src: "https://picsum.photos/seed/fotografia-highlight-031/1200/800",
        alt: "Macro texture dettaglio laterale",
      },
      {
        src: "https://picsum.photos/seed/fotografia-highlight-032/1200/800",
        alt: "Macro texture con luce radente",
      },
    ],
    technologies: ["Macro Lens", "Tripod", "Lightroom", "Photoshop Focus Stack"],
    goal:
      "Trasformare un dettaglio minimo in un'immagine forte, quasi astratta, ma ancora leggibile.",
    hideLinks: true,
  },
];

const fotografiaProjectTheme = {
  "--project-accent": "var(--fotografia)",
  "--project-accent-soft": "var(--Softfotografia)",
};

export default function Fotrografia() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <div className="contenitoreHomepage contenitoreFot">
        <div className="titleHome">
          <h5>LUCI & COMPOSIZIONE</h5>
          <h1>
            <strong>Fotografia</strong>
          </h1>
        </div>
        <HeroPageSwitchArrows prevRoute="/web-developer" nextRoute="/video-droni" />
        <HeroNextArrow />
      </div>

      <section>
        <ScrollRevealBlock
          className="contenitoreSezionePresentazione WebPre"
          variant="up"
        >
          <div className="descrPre">
            <div
              key={selectedSkill?.label ?? "default"}
              className="presentationAnimated"
            >
              {selectedSkill && (
                <h3 className="fotSkillTitle">{selectedSkill.label}</h3>
              )}
              <p>
                {selectedSkill ? (
                  <span>{selectedSkill.description}</span>
                ) : (
                  <>
                    <span>
                      Catturare l'essenza di un momento attraverso luce, colore
                      e composizione. Dalla fotografia di paesaggio ai ritratti,
                      ogni scatto racconta una storia unica con attenzione
                      maniacale ai dettagli.
                    </span>{" "}
                    <br />
                    <br />
                    La fotografia e il mio modo di osservare il mondo con occhi
                    diversi. Lavoro sia in luce naturale che in studio,
                    padroneggiando tecniche di illuminazione avanzate e
                    post-produzione professionale. Ogni progetto fotografico e
                    un racconto visivo costruito con cura.
                  </>
                )}
              </p>
            </div>
            <div className="fotActionsRow">
              <Link to="/" className="backToHome">
                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
              </Link>
              <button
                type="button"
                className="resetFotDialogBtn"
                onClick={() => setSelectedSkill(null)}
              >
                Ripristina testo
              </button>
            </div>
          </div>
          <div className="labelPresentazione FotLabel">
            {fotografiaSkills.map((skill) => {
              const isActive = selectedSkill?.label === skill.label;

              return (
                <button
                  key={skill.label}
                  type="button"
                  className={isActive ? "isActive" : ""}
                  onClick={() => setSelectedSkill(skill)}
                  aria-pressed={isActive}
                >
                  <span>{skill.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="sectionProcesso sectionProcessoFot"
          variant="left"
        >
          <h5>IL PROCESSO</h5>
          <h1>
            <strong>Come lavoro</strong>
          </h1>
          <div className="comeLavoroLabelFot">
            <div>
              <span>01</span>
              <h5>Briefing Creativo</h5>
              <p>
                Discussione del concept, mood board e pianificazione delle
                location e delle condizioni di luce ideali.
              </p>
            </div>
            <div>
              <span>02</span>
              <h5>Shooting</h5>
              <p>
                Sessione fotografica con attenzione alla composizione,
                illuminazione e direzione artistica del soggetto.
              </p>
            </div>
            <div>
              <span>03</span>
              <h5>Selezione & Editing</h5>
              <p>
                Cura degli scatti migliori, color grading professionale e
                ritocco avanzato mantenendo naturalezza.
              </p>
            </div>
            <div>
              <span>04</span>
              <h5>Consegna</h5>
              <p>
                File in alta risoluzione ottimizzati per stampa e web, con
                formati adatti a ogni utilizzo finale.
              </p>
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="sectionProgettiFot"
          variant="right"
        >
          <h5>SCATTI IN EVIDENZA</h5>
          <h1>
            <strong>Galleria selezionata</strong>
          </h1>
          <ProjectHighlightsCarousel
            projects={fotografiaHighlights}
            accentStyle={fotografiaProjectTheme}
            ariaLabel="Carosello scatti in evidenza"
          />
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="contenitoreContattami contattamiFot"
          variant="zoom"
        >
          <h2>Interessato a collaborare?</h2>
          <p>
            Ogni progetto inizia con una conversazione. Raccontami la tua idea e
            troviamo insieme la soluzione migliore.
          </p>
          <ContactEmailButton />
        </ScrollRevealBlock>
      </section>
    </>
  );
}
