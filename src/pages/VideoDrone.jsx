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
      "I droni FPV (First Person View) sono velivoli pilotati in prima persona tramite visori che trasmettono in tempo reale le immagini della telecamera di bordo, offrendo un'esperienza immersiva. A differenza dei droni tradizionali, non hanno stabilizzazione automatica, permettendo manovre acrobatiche, alte velocità e riprese dinamiche. ",
  },
  {
    label: "4K Footage",
    description:
      "Il 4K footage si riferisce a riprese video registrate con una risoluzione Ultra HD (solitamente 3840x2160 pixel), offrendo una nitidezza quattro volte superiore al Full HD (1920x1080 pixel). È lo standard attuale per alta qualità su TV e schermi, ideale per dettagli elevati, post-produzione flessibile (crop) e maggiore realismo. pixel), offrendo una nitidezza quattro volte superiore al Full HD È lo standard attuale per alta qualità su TV e schermi, ideale per dettagli elevati, post-produzione flessibile (crop) e maggiore realismo.",
  },
  {
    label: "Color Grading",
    description:
      "Il color grading è il processo creativo e tecnico di post-produzione (video o fotografia) che manipola i colori per definire l'estetica, l'atmosfera o il \"mood\" di un'immagine. A differenza della color correction (che corregge e neutralizza i colori), il grading applica uno stile artistico specifico, come i toni caldi per un'atmosfera nostalgica o contrasti netti per scene drammatiche.",
  },
  {
    label: "Premiere Pro",
    description:
      "Adobe Premiere Pro è il software leader nel settore per il montaggio video professionale basato su timeline, parte della suite Adobe Creative Cloud. Permette di editare, tagliare, color-correre, manipolare l'audio e aggiungere effetti speciali a video, dai contenuti social ai film. È ampiamente utilizzato da creatori di contenuti e videomaker professionisti. ",
  },
  {
    label: "DaVinci Resolve",
    description:
      "DaVinci Resolve è un software professionale di video editing e post-produzione tutto-in-uno, sviluppato da Blackmagic Design, standard nell'industria cinematografica. Combina in un'unica applicazione montaggio, correzione colore avanzata, effetti visivi (VFX), grafica in movimento (Motion Graphics) e post-produzione audio (Fairlight).",
  },
  {
    label: "Storytelling",
    description:
      "Lo storytelling è l'arte e la tecnica di raccontare storie (affabulazione) per comunicare messaggi in modo coinvolgente, emozionante e memorabile. Utilizza principi di retorica e narrazione per creare connessioni, fidelizzare il pubblico e trasmettere valori, venendo ampiamente utilizzato nel marketing, nella politica, nel branding e nella didattica.",
  },
  {
    label: "Esportazione social",
    description:
      "L'esportazione per i social media è il processo di salvataggio e ottimizzazione di foto o video (di solito in formato MP4 H.264) con risoluzione, aspect ratio (es. 9:16 verticale) e compressione adatti alle piattaforme come Instagram, TikTok, Facebook e YouTube, garantendo una qualità ottimale e un caricamento rapido. ",
  },
  {
    label: "Motion Graphics",
    description:
      "Il \"Graphic video\", più comunemente noto come Motion Graphics (grafica in movimento), è una tecnica che combina grafica, illustrazioni, testi e suoni, mettendoli in movimento per comunicare messaggi in modo accattivante, dinamico e chiaro. È un'evoluzione digitale del design statico, ideale per video esplicativi, pubblicità, social media e sigle. ",
  },
  {
    label: "Sound Design",
    description:
      "Il sound design (progettazione del suono) è l'arte e la tecnica di creare, manipolare e organizzare elementi sonori per produzioni audiovisive, musicali o interattive. È il processo che modella l'esperienza uditiva per emozionare, narrare o comunicare, definendo l'atmosfera di film, videogiochi, pubblicità e podcast.",
  },
];

const videoCertifications = [
  {
    year: "2026",
    title: "DaVinci Resolve per tutti con DaVinciResolve",
    issuer: "Corso completo di DaVinci Resolve, dalla post-produzione al color grading cinematografico",
    image: "../../public/Certificati/DaVinci Alberto.jpg",
    acquiredSkills: ["DaVinci Resolve", "Montaggio Video", "Color Grading Cinematografico"],
  },
  {
    year: "2026",
    title: "Color Grading for Video",
    issuer: "Corso avanzato di color grading per video, focalizzato su tecniche di correzione colore, look cinematografico e workflow professionale.",
    image: "../../public/Certificati/DaVinci Resolve.jpg",
    acquiredSkills: ["Color Grading", "Correzione Colore", "Look Cinematografico"],
  },
];

export default function VideoDrone() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCertificationIndex, setActiveCertificationIndex] = useState(0);

  const activeCertification = videoCertifications[activeCertificationIndex];

  const showPrevCertification = () => {
    setActiveCertificationIndex((prev) =>
      prev === 0 ? videoCertifications.length - 1 : prev - 1,
    );
  };

  const showNextCertification = () => {
    setActiveCertificationIndex((prev) =>
      prev === videoCertifications.length - 1 ? 0 : prev + 1,
    );
  };

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
          className="sectionProcesso sectionCertificazioniVideo"
          variant="right"
        >
          <div className="certificazioniLayoutVideo">
            <div className="certificazioniTitoloVideo">
              <h5>CERTIFICAZIONI</h5>
              <h1>
                <strong>Percorso formativo</strong>
              </h1>
            </div>

            <div className="certificazioniCaroselloWrapVideo">
              <div
                className="caroselloCertificazioniVideo"
                aria-label="Carosello certificazioni video"
              >
                <button
                  type="button"
                  className="caroselloNavBtnVideo"
                  aria-label="Certificazione precedente"
                  onClick={showPrevCertification}
                >
                  <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                </button>

                <article
                  key={`${activeCertification.title}-${activeCertificationIndex}`}
                  className="caroselloCardCertVideo"
                >
                  <img
                    src={activeCertification.image}
                    alt={`Anteprima certificazione ${activeCertification.title}`}
                    loading="lazy"
                  />
                  <span>{activeCertification.year}</span>
                  <h5>{activeCertification.title}</h5>
                  <p>{activeCertification.issuer}</p>
                  <h6 className="certificazioneSkillsLabelVideo">Competenze acquisite</h6>
                  <div className="certificazioneSkillsChipsVideo">
                    {activeCertification.acquiredSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>

                <button
                  type="button"
                  className="caroselloNavBtnVideo"
                  aria-label="Certificazione successiva"
                  onClick={showNextCertification}
                >
                  <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>

              <div className="caroselloDotsVideo" aria-label="Indicatori certificazioni">
                {videoCertifications.map((certification, index) => (
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
