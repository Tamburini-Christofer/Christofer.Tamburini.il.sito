import { NavLink } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import CircularGallery from "../components/CircularGallery";
import HeroNextArrow from "../components/HeroNextArrow";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const certificazioni = [
  {
    src: "/Certificati/BLENDER%202.8x-2.9x-3.x%20PER%20TUTTI%20-%20MODULO%201.jpg",
    alt: "Certificazione Blender - Modulo 1",
    title: "Blender - Modulo 1: Basi di Modellazione 3D",
    issuer: "Udemy",
    releasedBy: "Creatività Digitale Academy",
    topic: "Modellazione 3D, Interfaccia Blender, Primitive 3D",
    date: "Marzo 2024",
    duration: "24 ore",
    acquiredSkills: ["Blender", "Modellazione 3D", "UV Mapping"],
  },
  {
    src: "/Certificati/BLENDER%202.8x-2.9x-3.x%20PER%20TUTTI%20-%20MODULO%202.jpg",
    alt: "Certificazione Blender - Modulo 2",
    title: "Blender - Modulo 2: Animazione e Rendering",
    issuer: "Udemy",
    releasedBy: "Creatività Digitale Academy",
    topic: "Animazione, Rendering, Materiali Avanzati",
    date: "Aprile 2024",
    duration: "28 ore",
    acquiredSkills: ["Blender", "Animazione", "Rendering", "Materials"],
  },
  {
    src: "/Certificati/BOOLEAN%20-%20Web%20Development%20Fundamentals%20Camp.jpeg",
    alt: "Certificazione Boolean Web Development",
    title: "Boolean - Web Development Fundamentals Camp",
    issuer: "Boolean Careers",
    releasedBy: "Boolean Srl",
    topic: "Fondamenti Web Development, HTML, CSS, JavaScript",
    date: "Febbraio 2024",
    duration: "120 ore",
    acquiredSkills: ["HTML", "CSS", "JavaScript", "Web Design"],
  },
  {
    src: "/Certificati/Canva%20dalla%20A%20alla%20Z.jpg",
    alt: "Certificazione Canva",
    title: "Canva dalla A alla Z",
    issuer: "Udemy",
    releasedBy: "Giuseppe Scalzo",
    topic: "Graphic Design con Canva, Social Media Content",
    date: "Gennaio 2025",
    duration: "18 ore",
    acquiredSkills: ["Canva", "Graphic Design", "Content Creation", "Branding"],
  },
  {
    src: "/Certificati/Corso%20professionale%20UI-UX%20con%20Figma%20da%20zero%20a%20esperto.jpg",
    alt: "Certificazione Figma UI-UX",
    title: "UI-UX con Figma da Zero a Esperto",
    issuer: "Udemy",
    releasedBy: "Riccardo Conti",
    topic: "Design di Interfacce, Prototipazione, Design System",
    date: "Giugno 2024",
    duration: "42 ore",
    acquiredSkills: ["Figma", "UI Design", "UX Design", "Prototipazione"],
  },
  {
    src: "/Certificati/Figma.png",
    alt: "Certificazione Figma Avanzato",
    title: "Figma Advanced - Design Systems & Components",
    issuer: "Figma Academy",
    releasedBy: "Figma Inc.",
    topic: "Design Systems, Componenti Riutilizzabili, Collaborazione",
    date: "Luglio 2024",
    duration: "16 ore",
    acquiredSkills: ["Figma", "Design System", "Components", "Collaboration"],
  },
  {
    src: "/Certificati/Javascript%20-%20La%20guida%20completa.jpg",
    alt: "Certificazione JavaScript Completa",
    title: "JavaScript - La Guida Completa",
    issuer: "Udemy",
    releasedBy: "Jonas Schmedtmann",
    topic: "JavaScript Moderno, ES6+, Programmazione Orientata agli Oggetti",
    date: "Maggio 2024",
    duration: "69 ore",
    acquiredSkills: ["JavaScript", "ES6", "OOP", "DOM Manipulation"],
  },
  {
    src: "/Certificati/DaVinci%20Resolve.jpg",
    alt: "Certificazione DaVinci Resolve",
    title: "DaVinci Resolve - Montaggio Video Professionale",
    issuer: "Blackmagic Academy",
    releasedBy: "Blackmagic Design",
    topic: "Montaggio Video, Color Grading, Effetti Speciali",
    date: "Agosto 2024",
    duration: "56 ore",
    acquiredSkills: ["DaVinci Resolve", "Video Editing", "Color Grading", "VFX"],
  },
  {
    src: "/Certificati/Docker%20Per%20Comuni%20Mortali.jpg",
    alt: "Certificazione Docker",
    title: "Docker Per Comuni Mortali",
    issuer: "Udemy",
    releasedBy: "Alessandro Segala",
    topic: "Containerizzazione, Docker, Microservizi",
    date: "Luglio 2024",
    duration: "12 ore",
    acquiredSkills: ["Docker", "Containerization", "DevOps", "Microservices"],
  },
  {
    src: "/Certificati/Prompt%20Power.jpg",
    alt: "Certificazione Prompt Engineering",
    title: "Prompt Power - AI Prompt Engineering",
    issuer: "Skill Academy",
    releasedBy: "Andrea Boscolo",
    topic: "Prompt Engineering, Generative AI, ChatGPT Avanzato",
    date: "Dicembre 2024",
    duration: "14 ore",
    acquiredSkills: ["AI Prompts", "ChatGPT", "Prompt Engineering", "Generative AI"],
  },
];

export default function Homepage() {
  return (
    <>
      <div className="contenitoreHomepage">
        <div className="titleHome">
          <h5>PORTFOLIO PERSONALE</h5>
          <h1>
            Creo esperienze <br />
            <strong>digitali e fisiche</strong>
          </h1>
          <p>
            Web development, fotografia, video aereo e progettazione 3D quattro
            discipline, un'unica visione creativa.
          </p>
        </div>
        <HeroNextArrow />
      </div>

      <section>
        <ScrollRevealBlock className="contenitoreSezionePresentazione" variant="up">
          <div>
            {" "}
            <h5>CHI SONO</h5>
            <h2>
              Un approccio <br />
              <strong>multidisciplinare</strong>
            </h2>
            <p>
              La mia passione per la tecnologia e la creatività mi ha portato a
              sviluppare competenze trasversali che spaziano dal codice alla
              produzione visiva. Ogni disciplina alimenta le altre, creando un
              ecosistema creativo unico. <br />
              <br />
              Credo che il miglior risultato nasca dall'intersezione tra
              competenze diverse. Un sito web beneficia della sensibilità
              fotografica, un video aereo della precisione tecnica del 3D, e la
              stampa 3D dell'estetica del design digitale.
            </p>
          </div>
          <div className="labelPresentazione">
            <div>
              <p>50+</p>
              <p>PROGETTI COMPLETATI</p>
            </div>
            <div>
              <p>6+</p>
              <p>LINGUAGGI DI PROGRAMMAZIONE</p>
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock className="contenitoreCertificazioni" variant="up">
          <div className="titoliCertificazioni">
            <h5>CERTIFICAZIONI</h5>
            <h2>
              Formazione continua, <br />
              <strong>competenze verificate</strong>
            </h2>
            <p>
              Una galleria circolare che raccoglie i percorsi formativi in web
              development, design, video, strumenti AI e modellazione 3D.
              
            </p>
          </div>

          <CircularGallery
            items={certificazioni}
            borderRadius={0.04}
            scrollSpeed={1.5}
            scrollEase={0.09}
            bend={0}
          />
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock className="contenitoreServizi" variant="up">
          <div className="contenitoreTitoliServizi">
            <h5>COSA FACCIO</h5>
            <h2>Servizi & Competenze</h2>
          </div>

          <div className="servizi">
            <NavLink to="/web-developer" className="servizioLink">
            <div className="servizioCard">
              <i
                className="fa-solid fa-code"
                style={{ color: "rgb(42, 148, 255)" }}
              ></i>
              <h4>Web Development</h4>
              <p>
                Siti web moderni, applicazioni SPA e piattaforme e-commerce
                costruite con le tecnologie più avanzate. Ogni progetto è
                ottimizzato per performance, accessibilità e SEO.
              </p>
            </div>
            </NavLink>

            <NavLink to="/fotografia" className="servizioLink">
            <div className="servizioCard">
              <i
                className="fa-solid fa-camera"
                style={{ color: "rgb(245, 159, 40)" }}
              ></i>
              <h4>Photography</h4>

              <p>Servizi fotografici professionali per prodotti, architettura e paesaggio. Post-produzione curata nei minimi dettagli per immagini che comunicano.</p>
            </div>
            </NavLink>

            <NavLink to="/video-droni" className="servizioLink">
            <div className="servizioCard">
              <i
                className="fa-solid fa-paper-plane"
                style={{ color: "rgb(32, 191, 180)" }}
              ></i>
              <h4>Video & Drone</h4>
              <p>Produzione video cinematografica e riprese aeree con drone per spot pubblicitari, documentari e contenuti social di alto impatto visivo.</p>
            </div>
            </NavLink>

            <NavLink to="/stampa3D" className="servizioLink">
            <div className="servizioCard">
              <i
                className="fa-solid fa-print"
                style={{ color: "rgb(240, 89, 48)" }}
              ></i>
              <h4>Stampa 3D</h4>
              <p>Modellazione 3D parametrica e organica, prototipazione rapida e stampa 3D FDM/SLA. Dal concept al prodotto finito con precisione millimetrica.</p>
            </div>
            </NavLink>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock className="contenitoreContattami" variant="up">
            <h2>Hai un progetto in mente?</h2>
            <p>Che si tratti di un sito web, un servizio fotografico, un video con drone o un prototipo 3D parliamone insieme.</p>
            <ContactEmailButton />
        </ScrollRevealBlock>
      </section>
    </>
  );
}
