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
      </div>

      <section>
        <div className="contenitoreSezioneCompetenze">
          <div>
            <img
              src="../../public/Sfondi/Sfondo Web Developer.jpg"
              alt="Immagine di due pc"
            />
            <div className="sezWeb">
              <h4>CODICE & DESIGN</h4>
              <h3>Web Development</h3>
              <p>Esplora <i class="fa-solid fa-arrow-right"></i></p>
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
              <p>Esplora <i class="fa-solid fa-arrow-right"></i></p>
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
              <p>Esplora <i class="fa-solid fa-arrow-right"></i></p>
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
              <p>Esplora <i class="fa-solid fa-arrow-right"></i></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
