import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import CircularGallery from "../components/CircularGallery";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ProjectHighlightsCarousel from "../components/ProjectHighlightsCarousel";
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
    title: "DaVinci Resolve - Montaggio Professionale",
    issuer: "Blackmagic Academy",
    releasedBy: "Alberto Rossi",
    topic: "Post-produzione, Montaggio Video, Color Grading Base",
    date: "Agosto 2024",
    duration: "56 ore",
    image: "../../public/Certificati/DaVinci Alberto.jpg",
    acquiredSkills: ["DaVinci Resolve", "Montaggio", "Color Grading", "Audio Design"],
  },
  {
    title: "Color Grading Cinematografico",
    issuer: "CinematicArts Academy",
    releasedBy: "Marco Valenti",
    topic: "Grading Avanzato, Look Narrativo, Workflow Professionale",
    date: "Settembre 2024",
    duration: "48 ore",
    image: "../../public/Certificati/DaVinci Resolve.jpg",
    acquiredSkills: ["Color Grading", "Look LUT", "Cinematography", "Post-production"],
  },
];

const videoCertificationItems = videoCertifications.map((certification) => ({
  src: certification.image.replace("../../public", ""),
  alt: `Certificazione ${certification.title}`,
  title: certification.title,
}));

const videoHighlightedProjects = [
  {
    title: "Spot Drone per Resort",
    category: "Aerial Video",
    description:
      "Produzione video con riprese aeree cinematiche, transizioni fluide e montaggio orientato alla promozione turistica.",
    image: "https://picsum.photos/seed/video-project-01/1200/800",
    images: [
      {
        src: "https://picsum.photos/seed/video-project-01/1200/800",
        alt: "Spot drone panoramica resort",
      },
      {
        src: "https://picsum.photos/seed/video-project-011/1200/800",
        alt: "Spot drone inquadratura piscina e strutture",
      },
      {
        src: "https://picsum.photos/seed/video-project-012/1200/800",
        alt: "Spot drone dettaglio tramonto resort",
      },
    ],
    technologies: ["Drone 4K", "DaVinci Resolve", "Premiere Pro", "Color Grading"],
    goal:
      "Valorizzare spazi, servizi e atmosfera della struttura con un video emozionale ad alta percezione qualitativa.",
    hideLinks: true,
  },
  {
    title: "Reel Evento Outdoor",
    category: "Social Video",
    description:
      "Reel verticale pensato per social media con montaggio rapido, sound design e hook immediato.",
    image: "https://picsum.photos/seed/video-project-02/1200/800",
    images: [
      {
        src: "https://picsum.photos/seed/video-project-02/1200/800",
        alt: "Reel evento outdoor scena principale",
      },
      {
        src: "https://picsum.photos/seed/video-project-021/1200/800",
        alt: "Reel evento outdoor pubblico e palco",
      },
      {
        src: "https://picsum.photos/seed/video-project-022/1200/800",
        alt: "Reel evento outdoor transizione finale",
      },
    ],
    technologies: ["Premiere Pro", "After Effects", "Sound Design", "Vertical Export"],
    goal:
      "Creare un contenuto breve ad alto impatto capace di trasmettere energia e atmosfera dell'evento.",
    hideLinks: true,
  },
  {
    title: "Video Immobiliare Cinematico",
    category: "Commercial",
    description:
      "Video per presentazione immobili con mix di inquadrature interne, drone esterno e post-produzione pulita.",
    image: "https://picsum.photos/seed/video-project-03/1200/800",
    images: [
      {
        src: "https://picsum.photos/seed/video-project-03/1200/800",
        alt: "Video immobiliare ingresso principale",
      },
      {
        src: "https://picsum.photos/seed/video-project-031/1200/800",
        alt: "Video immobiliare ambienti interni",
      },
      {
        src: "https://picsum.photos/seed/video-project-032/1200/800",
        alt: "Video immobiliare overview esterna drone",
      },
    ],
    technologies: ["Drone", "Gimbal", "DaVinci Resolve", "LUT Workflow"],
    goal:
      "Presentare l'immobile in modo piu emozionale rispetto al classico tour descrittivo.",
    hideLinks: true,
  },
];

const videoProjectTheme = {
  "--project-accent": "var(--videoDrone)",
  "--project-accent-soft": "var(--SoftvideoDrone)",
};

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
        <ScrollRevealBlock className="sectionProgettiVideo" variant="right">
          <h5>PROGETTI IN EVIDENZA</h5>
          <h1>
            <strong>Selezione lavori</strong>
          </h1>
          <ProjectHighlightsCarousel
            projects={videoHighlightedProjects}
            accentStyle={videoProjectTheme}
            ariaLabel="Carosello progetti video in evidenza"
          />
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="contenitoreCertificazioni certificazioniTemaVideo"
          variant="right"
        >
          <div className="titoliCertificazioni">
            <h5>CERTIFICAZIONI</h5>
            <h2>
              Percorso <strong>formativo</strong>
            </h2>
            <p>
              Specializzazione in montaggio, color grading e workflow video per
              produzioni social, advertising e contenuti cinematici.
            </p>
          </div>

          <CircularGallery
            items={videoCertificationItems}
            borderRadius={0.04}
            scrollSpeed={1.5}
            scrollEase={0.09}
            bend={0}
          />
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
