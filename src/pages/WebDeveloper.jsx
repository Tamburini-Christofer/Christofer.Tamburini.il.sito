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

const webCertifications = [
  {
    year: "2026",
    title: "Corso Canva dalla A alla Z",
    issuer: "Corso completo di Canva, dalla progettazione grafica alla creazione di contenuti per social media, con focus su branding e comunicazione visiva.",
    image: "../../public/Certificati/Canva dalla A alla Z.jpg",
    acquiredSkills: ["Graphic Design", "Canva", "Branding", "Content Creation"],
  },
  {
    year: "2026",
    title: "Corso professionale UI-UX con Figma da zero a esperto",
    issuer: "Corso completo di UI-UX design con Figma, dalla progettazione di interfacce alla prototipazione interattiva.",
    image: "../../public/Certificati/Corso professionale UI-UX con Figma da zero a esperto.jpg",
    acquiredSkills: ["UI Design", "UX Design", "Figma", "Prototipazione", "Design System"],
  },
  {
    year: "2026",
    title: "Prompt Power",
    issuer: "Corso avanzato su come creare prompt efficaci per modelli di intelligenza artificiale generativa.",
    image: "../../public/Certificati/Prompt Power.jpg",
    acquiredSkills: ["AI Prompt", "Generative AI", "Prompt Engineering"],
  },
  {
    year: "2026",
    title: "Corso completo di Javascript",
    issuer: "Corso completo di Javascript con implemento di Vue, Node, React, Angular e TypeScript",
    image: "../../public/Certificati/Javascript - La guida completa.jpg",
    acquiredSkills: ["JavaScript", "Vue", "Node.js", "React", "Angular", "TypeScript"],
  },
  {
    year: "2026",
    title: "Web Development con specializzazione in React avanzato",
    issuer: "Corso completo di Boolean per diventare sviluppatore web full stack, con focus su React avanzato, TypeScript e best practice di sviluppo.",
    image: "../../public/Certificati/Boolean corso.png",
    acquiredSkills: ["React Avanzato", "TypeScript", "Best Practice", "Testing", "Performance Optimization"],
  },
  {
    year: "2025",
    title: "UX/UI Design con Figma",
    issuer: "Utilizzo base del programma Figma per progettare interfacce utente e prototipi interattivi, con attenzione alla user experience.",
    image: "../../public/Certificati/Figma.png",
    acquiredSkills: ["Figma", "Prototipazione", "Design System"],
  },
    {
    year: "2025",
    title: "Sistemista Informatico Liv.1- Basi di Reti e Networking",
    issuer: "Nozione base per gestire una rete informatica, configurare dispositivi di rete e risolvere problemi di connettività.",
    image: "../../public/Certificati/Sistemista Informatico Liv.1- Basi di Reti e Networking.jpg",
    acquiredSkills: ["IP", "DNS", "HTTP", "modelli di rete", "Sicurezza di base", "mantenimento di sistemi informatici"],
  },
  {
    year: "2025",
    title: "Boolean Fundamentals Camp",
    issuer: "Corso base di Boolean per comprendere i linguaggi di markup HTML e CSS",
    image: "../../public/Certificati/BOOLEAN - Web Development Fundamentals Camp.jpeg",
    acquiredSkills: ["HTML", "CSS", "Bootstrap", "display flex", "responsive design"],
  },
];

const webHighlightedProjects = [
  {
    title: "Dashboard Gestionale",
    category: "Web App",
    description: "Pannello completo per gestione contenuti, utenti e report in tempo reale.",
    image: "https://picsum.photos/seed/web-project-01/900/600",
  },
  {
    title: "Landing Conversione",
    category: "UI/UX",
    description: "Pagina ottimizzata per lead generation con copy strategico e CTA modulari.",
    image: "https://picsum.photos/seed/web-project-02/900/600",
  },
  {
    title: "E-commerce Component-based",
    category: "Frontend",
    description: "Architettura React scalabile con filtri dinamici e checkout ottimizzato.",
    image: "https://picsum.photos/seed/web-project-03/900/600",
  },
  {
    title: "E-commerce Component-based",
    category: "Frontend",
    description: "Architettura React scalabile con filtri dinamici e checkout ottimizzato.",
    image: "https://picsum.photos/seed/web-project-03/900/600",
  },
  {
    title: "E-commerce Component-based",
    category: "Frontend",
    description: "Architettura React scalabile con filtri dinamici e checkout ottimizzato.",
    image: "https://picsum.photos/seed/web-project-03/900/600",
  },
];

export default function WebDeveloper() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCertificationIndex, setActiveCertificationIndex] = useState(0);

  const activeCertification = webCertifications[activeCertificationIndex];

  const showPrevCertification = () => {
    setActiveCertificationIndex((prev) =>
      prev === 0 ? webCertifications.length - 1 : prev - 1,
    );
  };

  const showNextCertification = () => {
    setActiveCertificationIndex((prev) =>
      prev === webCertifications.length - 1 ? 0 : prev + 1,
    );
  };

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
          className="sectionProcesso sectionProgettiWeb"
          variant="right"
        >
          <h5>PROGETTI IN EVIDENZA</h5>
          <h1>
            <strong>Selezione lavori</strong>
          </h1>
          <div className="grigliaProgettiWeb">
            {webHighlightedProjects.map((project, index) => (
              <article key={`${project.title}-${index}`}>
                <img
                  src={project.image}
                  alt={`Anteprima progetto ${project.title}`}
                  loading="lazy"
                />
                <span>{project.category}</span>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="sectionProcesso sectionCertificazioniWeb"
          variant="right"
        >
          <div className="certificazioniLayoutWeb">
            <div className="certificazioniTitoloWeb">
              <h5>CERTIFICAZIONI</h5>
              <h1>
                <strong>Percorso formativo</strong>
              </h1>
            </div>

            <div className="certificazioniCaroselloWrapWeb">
              <div
                className="caroselloCertificazioniWeb"
                aria-label="Carosello certificazioni web"
              >
                <button
                  type="button"
                  className="caroselloNavBtnWeb"
                  aria-label="Certificazione precedente"
                  onClick={showPrevCertification}
                >
                  <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                </button>

                <article
                  key={`${activeCertification.title}-${activeCertificationIndex}`}
                  className="caroselloCardCertWeb"
                >
                  <img
                    src={activeCertification.image}
                    alt={`Anteprima certificazione ${activeCertification.title}`}
                    loading="lazy"
                  />
                  <span>{activeCertification.year}</span>
                  <h5>{activeCertification.title}</h5>
                  <p>{activeCertification.issuer}</p>
                  <h6 className="certificazioneSkillsLabelWeb">Competenze acquisite</h6>
                  <div className="certificazioneSkillsChipsWeb">
                    {activeCertification.acquiredSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>

                <button
                  type="button"
                  className="caroselloNavBtnWeb"
                  aria-label="Certificazione successiva"
                  onClick={showNextCertification}
                >
                  <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>

              <div className="caroselloDotsWeb" aria-label="Indicatori certificazioni">
                {webCertifications.map((certification, index) => (
                  <button
                    key={`${certification.title}-${index}`}
                    type="button"
                    className={index === activeCertificationIndex ? "isActive" : ""}
                    onClick={() => setActiveCertificationIndex(index)}
                    aria-label={`Vai alla certificazione ${index + 1}`}
                    aria-pressed={index === activeCertificationIndex}
                  />
                ))}
              </div>
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
