import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const videoSkills = [
  {
    label: "Drone FPV",
    description:
      "Riprese FPV immersive con traiettorie dinamiche per contenuti ad alto impatto visivo e forte coinvolgimento.",
  },
  {
    label: "4K Footage",
    description:
      "Produzione in 4K per massima definizione, dettaglio e versatilita nei formati di distribuzione.",
  },
  {
    label: "Color Grading",
    description:
      "Color grading cinematografico per uniformare le scene e rafforzare il tono emotivo del racconto.",
  },
  {
    label: "Premiere Pro",
    description:
      "Montaggio video fluido in Adobe Premiere Pro con timeline ottimizzate per revisioni e consegne rapide.",
  },
  {
    label: "DaVinci Resolve",
    description:
      "Workflow in DaVinci Resolve per color correction avanzata e finalizzazione professionale.",
  },
  {
    label: "Storytelling",
    description:
      "Costruzione narrativa del video con ritmo, inquadrature e transizioni pensate per comunicare con chiarezza.",
  },
  {
    label: "Aerial Mapping",
    description:
      "Acquisizione aerea per mappature e panoramiche ampie, utile per progetti territoriali e tecnici.",
  },
  {
    label: "Motion Graphics",
    description:
      "Integrazione di grafiche animate per titolazioni, callout e contenuti informativi visivamente efficaci.",
  },
  {
    label: "Sound Design",
    description:
      "Sound design e rifinitura audio per dare profondita, atmosfera e coerenza all'esperienza video.",
  },
];

export default function VideoDrone() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <div className="contenitoreHomepage contenitoreVideo">
        <div className="titleHome">
          <h5>MOVIMENTO & PROSPETTIVA</h5>
          <h1>
            <strong>Video & Drone</strong>
          </h1>
        </div>
        <HeroPageSwitchArrows prevRoute="/fotografia" nextRoute="/stampa3D" />
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
                <h3 className="videoSkillTitle">{selectedSkill.label}</h3>
              )}
              <p>
                {selectedSkill ? (
                  <span>{selectedSkill.description}</span>
                ) : (
                  <>
                    <span>
                      Produzione video professionale e riprese aeree con drone.
                      Dalle riprese cinematiche al montaggio finale, creo
                      contenuti visivi che catturano prospettive uniche e
                      raccontano storie con impatto emotivo.
                    </span>{" "}
                    <br />
                    <br />
                    Le riprese aeree aggiungono una dimensione completamente
                    nuova alla narrazione visiva. Utilizzo droni di ultima
                    generazione per catturare paesaggi mozzafiato, seguire
                    soggetti in movimento e creare sequenze cinematiche
                    impossibili da ottenere altrimenti. La post-produzione
                    include color grading cinematografico, sound design e motion
                    graphics.
                  </>
                )}
              </p>
            </div>
            <div className="videoActionsRow">
              <Link to="/" className="backToHome">
                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
              </Link>
              <button
                type="button"
                className="resetVideoDialogBtn"
                onClick={() => setSelectedSkill(null)}
              >
                Ripristina testo
              </button>
            </div>
          </div>
          <div className="labelPresentazione VideoLabel">
            {videoSkills.map((skill) => {
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
          className="sectionProcesso sectionProcessoVideo"
          variant="left"
        >
          <h5>IL PROCESSO</h5>
          <h1>
            <strong>Come lavoro</strong>
          </h1>
          <div className="comeLavoroLabelVideo">
            <div>
              <span>01</span>
              <h5>Pre-Produzione</h5>
              <p>
    Storyboard, scouting delle location, pianificazione del volo e verifica delle autorizzazioni aeree necessarie.
              </p>
            </div>
            <div>
              <span>02</span>
              <h5>Riprese</h5>
              <p>
            Cattura delle sequenze con movimenti fluidi, angolazioni cinematiche e gestione della luce naturale.
              </p>
            </div>
            <div>
              <span>03</span>
              <h5>Post-Produzione</h5>
              <p>
    Montaggio narrativo, color grading professionale, sound design e integrazione di grafiche animate.
              </p>
            </div>
            <div>
              <span>04</span>
              <h5>Export & Distribuzione</h5>
              <p>
       Rendering in formati ottimizzati per cinema, social media, broadcast e piattaforme web.
              </p>
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="contenitoreContattami contattamiVideo"
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
