import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";

export default function VideoDrone() {
  return (
    <>
      <div className="contenitoreHomepage contenitoreVideo">
        <div className="titleHome">
          <h5>MOVIMENTO & PROSPETTIVA</h5>
          <h1>
            <strong>Video & Drone</strong>
          </h1>
        </div>
      </div>

      <section>
        <div className="contenitoreSezionePresentazione WebPre">
          <div>
            <p>
              <span>
                Produzione video professionale e riprese aeree con drone. Dalle riprese cinematiche al montaggio finale, creo contenuti visivi che catturano prospettive uniche e raccontano storie con impatto emotivo.
              </span>{" "}
              <br />
              <br />
              Le riprese aeree aggiungono una dimensione completamente nuova alla narrazione visiva. Utilizzo droni di ultima generazione per catturare paesaggi mozzafiato, seguire soggetti in movimento e creare sequenze cinematiche impossibili da ottenere altrimenti. La post-produzione include color grading cinematografico, sound design e motion graphics.
            </p>
            <p>
              <Link to="/" className="backToHome">
                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
              </Link>
            </p>
          </div>
          <div className="labelPresentazione VideoLabel">
            <div>
              <p>Drone FPV</p>
            </div>
            <div>
              <p>4K Footage</p>
            </div>
            <div>
              <p>Color Grading</p>
            </div>
            <div>
              <p>Premiere Pro</p>
            </div>
            <div>
              <p>DaVinci Resolve</p>
            </div>
            <div>
              <p>Storytelling</p>
            </div>
            <div>
              <p>Aerial Mapping</p>
            </div>
            <div>
              <p>Motion Graphics</p>
            </div>
            <div>
              <p>Sound Design</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sectionProcesso sectionProcessoVideo">
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
        </div>
      </section>

      <section>
        <div className="contenitoreContattami contattamiVideo">
          <h2>Interessato a collaborare?</h2>
          <p>
            Ogni progetto inizia con una conversazione. Raccontami la tua idea e
            troviamo insieme la soluzione migliore.
          </p>
          <ContactEmailButton />
        </div>
      </section>
    </>
  );
}
