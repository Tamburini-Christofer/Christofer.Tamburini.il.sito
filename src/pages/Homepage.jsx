import { NavLink } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

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
        <ScrollRevealBlock className="contenitoreSezioneCompetenze" variant="up">
          <div>
            <img
              src="../../public/Sfondi/Sfondo Web Developer.jpg"
              alt="Immagine di due pc"
            />
            <div className="sezWeb">
              <h4>CODICE & DESIGN</h4>
              <h3>Web Development</h3>
              <p>
                Esplora <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
          
          <div>
            <img
              src="../../public/Sfondi/Sfondo Fotografia.jpg"
              alt="Immagine di una macchina fotografica"
            />
            <div div className="sezFot">
              <h4>LUCE & COMPOSIZIONE</h4>
              <h3>Fotografia</h3>
              <p>
                Esplora <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../../public/Sfondi/Sfondo Drone.jpg"
              alt="Immagine di un drone"
            />
            <div className="sezVid">
              {" "}
              <h4>MOVIMENTO & PROSPETTIVA</h4>
              <h3>Video & Droni</h3>
              <p>
                Esplora <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
          <div>
            <img
              src="../../public/Sfondi/Sfondo 3D.jpg"
              alt="Immagine di una stampa 3D"
            />
            <div className="sezSta">
              {" "}
              <h4>PROGETTAZIONE & PRDOUZIONE</h4>
              <h3>3D & Stampa</h3>
              <p>
                Esplora <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

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
              <p>PLINGUAGGI DI PROGRAMMAZIONE</p>
            </div>
          </div>
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
