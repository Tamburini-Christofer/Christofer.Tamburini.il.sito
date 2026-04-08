import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const webSkills = [
  {
    label: "JavaScript",
    description:
      "JavaScript (JS) è un linguaggio di programmazione leggero, interpretato e orientato agli eventi, fondamentale per il web development. Permette di creare contenuti dinamici, interattivi e animati all'interno delle pagine web, manipolando HTML e CSS direttamente nel browser dell'utente.",
  },
  {
    label: "TypeScript",
    description:
      "TypeScript è un linguaggio di programmazione open-source sviluppato da Microsoft che agisce come un superset di JavaScript, aggiungendo la tipizzazione statica opzionale e funzionalità avanzate. Progettato per applicazioni complesse, viene compilato in JavaScript puro per funzionare su qualsiasi browser o piattaforma, migliorando la manutenibilità e prevenendo errori durante lo sviluppo. ",
  },
  {
    label: "React",
    description:
      "React è una popolare libreria JavaScript open-source, sviluppata da Meta (Facebook), utilizzata per creare interfacce utente (UI) dinamiche e interattive su siti e applicazioni web. Si basa su componenti riutilizzabili e sull'uso del Virtual DOM per aggiornare in modo efficiente solo le parti di pagina che cambiano, migliorando le prestazioni.",
  },
  {
    label: "Rest API",
    description:
      "Un'API REST è un' interfaccia di programmazione delle applicazioni (API) che segue i principi di design dello stile architetturale REST. REST è l'acronimo di representational state transfer e indica una serie di regole e linee guida su come creare un'API web.",
  },
  {
    label: "Node.js",
    description:
      "Node.js è un ambiente di runtime open-source e multipiattaforma che permette di eseguire codice JavaScript al di fuori di un browser web, solitamente su un server. Basato sul motore V8 di Chrome, consente di sviluppare applicazioni backend, API e strumenti di rete, utilizzando un modello I/O event-driven e non bloccante per elevata velocità e scalabilità.",
  },
  {
    label: "Graphic Design",
    description:
      "Il graphic designer (progettista grafico) è un professionista della comunicazione visiva che traduce idee, messaggi e concetti in soluzioni visive efficaci. Utilizzando immagini, tipografia e layout, crea materiali stampati o digitali (loghi, siti web, packaging) per comunicare in modo chiaro e accattivante a un pubblico definito",
  },
  {
    label: "Figma",
    description:
      "Figma è una piattaforma di progettazione grafica basata su cloud e uno strumento di UI/UX design collaborativo, utilizzato per creare interfacce di siti web e app in tempo reale. Funziona direttamente nel browser, permettendo a team remoti di disegnare, prototipare e condividere lavori simultaneamente senza installare software. ",
  },
  {
    label: "Canva",
    description:
      'Canva è una piattaforma online di progettazione grafica e comunicazione visiva "drag-and-drop" (trascina e rilascia) che permette di creare facilmente contenuti grafici, presentazioni, video, post per social media, loghi e volantini senza competenze di design. È un servizio freemium, utilizzabile sia da browser che tramite app.',
  },
  {
    label: "AI Prompt",
    description:
      "Un AI prompt è l'input testuale, visivo o vocale (domanda, istruzione o comando) che un utente fornisce a un modello di intelligenza artificiale generativa per innescare una risposta specifica. Funge da guida per l'IA, influenzando direttamente la qualità, la pertinenza e la precisione del risultato ottenuto. ",
  },
];

export default function WebDeveloper() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <div className="contenitoreHomepage contenitoreWeb">
        <div className="titleHome">
          <h5>CODICE & DESIGN</h5>
          <h1>
            <strong>WebDelopment</strong>
          </h1>
        </div>
        <HeroPageSwitchArrows nextRoute="/fotografia" />
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
                <h3 className="webSkillTitle">{selectedSkill.label}</h3>
              )}
              <p>
                {selectedSkill ? (
                  <span>{selectedSkill.description}</span>
                ) : (
                  <>
                    <span>
                      Progetto e sviluppo applicazioni web moderne, responsive e
                      performanti. Dall'architettura frontend con React e
                      TypeScript al backend con Node.js, creo esperienze
                      digitali che combinano estetica e funzionalità.
                    </span>{" "}
                    <br />
                    <br />
                    Ogni progetto parte da un'analisi approfondita delle
                    esigenze del cliente. Utilizzo un approccio component-based
                    che garantisce scalabilità, manutenibilità e performance
                    ottimali. Dal prototipo interattivo al deploy in produzione,
                    curo ogni fase del ciclo di sviluppo.
                  </>
                )}
              </p>
            </div>
            <div className="webActionsRow">
              <Link to="/" className="backToHome">
                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
              </Link>
              <button
                type="button"
                className="resetWebDialogBtn"
                onClick={() => setSelectedSkill(null)}
              >
                Ripristina testo
              </button>
            </div>
          </div>
          <div className="labelPresentazione WebLabel">
            {webSkills.map((skill) => {
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
          className="sectionProcesso sectionProcessoWeb"
          variant="left"
        >
          <h5>IL PROCESSO</h5>
          <h1>
            <strong>Come lavoro</strong>
          </h1>
          <div className="comeLavoroLabel">
            <div>
              <span>01</span>
              <h5>Analisi & UX</h5>
              <p>
                Studio delle esigenze, user research e wireframing per definire
                l'architettura dell'esperienza utente.
              </p>
            </div>
            <div>
              <span>02</span>
              <h5>Design System</h5>
              <p>
                Creazione di un sistema di design coerente con componenti
                riutilizzabili, tipografia e palette colori.
              </p>
            </div>
            <div>
              <span>03</span>
              <h5>Sviluppo</h5>
              <p>
                Implementazione frontend e backend con codice pulito, test
                automatizzati e ottimizzazione delle performance.
              </p>
            </div>
            <div>
              <span>04</span>
              <h5>Deploy & Supporto</h5>
              <p>
                Pubblicazione su infrastruttura cloud, monitoraggio delle
                metriche e supporto tecnico continuo.
              </p>
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="contenitoreContattami contattamiWeb"
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
