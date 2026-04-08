import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const fotografiaSkills = [
  {
    label: "Photoshop",
    description:
      "Post-produzione avanzata con Photoshop: ritocco, gestione colore e compositing per immagini pulite e coerenti con il concept del progetto.",
  },
  {
    label: "Camera Raw",
    description:
      "Sviluppo file RAW con controllo preciso di esposizione, contrasto e tonalita per ottenere una base tecnica solida prima del ritocco.",
  },
  {
    label: "Macro",
    description:
      "Fotografia macro per valorizzare texture, dettagli e micro-composizioni con illuminazione studiata e massima nitidezza.",
  },
  {
    label: "Astratto",
    description:
      "Ricerca visiva astratta basata su forme, luci e colori per creare immagini evocative e riconoscibili.",
  },
  {
    label: "Street Photo",
    description:
      "Scatti spontanei in ambiente urbano, con attenzione al timing e alla narrazione del momento.",
  },
  {
    label: "Landscapes",
    description:
      "Fotografia paesaggistica con studio della luce naturale, composizione e profondita per immagini d'impatto.",
  },
  {
    label: "Ritratto",
    description:
      "Ritratti che mettono al centro espressivita e identita del soggetto, con direzione e luce costruite su misura.",
  },
  {
    label: "Studio",
    description:
      "Set fotografici in studio con schemi luce controllati per risultati tecnicamente consistenti e replicabili.",
  },
  {
    label: "Ligthroom",
    description:
      "Workflow Lightroom per catalogazione, color grading e consegna efficiente di set fotografici completi.",
  },
];

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
