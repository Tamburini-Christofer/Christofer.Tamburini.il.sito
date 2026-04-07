import { Link } from "react-router-dom";

export default function WebDeveloper() {
  return (
    <>
      <div className="contenitoreHomepage contenitoreWeb">
        <div className="titleHome">
          <h5>CODICE & DESIGN</h5>
          <h1>
            <strong>WebDelopment</strong>
          </h1>
        </div>
      </div>

      <section>
        <div className="contenitoreSezionePresentazione WebPre">
          <div>
            <p>
              <span>
                Progetto e sviluppo applicazioni web moderne, responsive e
                performanti. Dall'architettura frontend con React e TypeScript
                al backend con Node.js, creo esperienze digitali che combinano
                estetica e funzionalità.
              </span>{" "}
              <br />
              <br />
              Ogni progetto parte da un'analisi approfondita delle esigenze del
              cliente. Utilizzo un approccio component-based che garantisce
              scalabilità, manutenibilità e performance ottimali. Dal prototipo
              interattivo al deploy in produzione, curo ogni fase del ciclo di
              sviluppo.
            </p>
            <p>
              <Link to="/" className="backToHome">
                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
              </Link>
            </p>
          </div>
          <div className="labelPresentazione WebLabel">
            <div>
              <p>JavaScript</p>
            </div>
            <div>
              <p>TypeScript</p>
            </div>
            <div>
              <p>React</p>
            </div>
            <div>
              <p>Rest API</p>
            </div>
            <div>
              <p>Node.js</p>
            </div>
            <div>
              <p>Graphic Design</p>
            </div>
            <div>
              <p>Figma</p>
            </div>
            <div>
              <p>Canva</p>
            </div>
            <div>
              <p>AI Prompt</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sectionProcesso sectionProcessoWeb">
          <h5>IL PROCESSO</h5>
          <h1>
            <strong>Come lavoro</strong>
          </h1>
          <div className="comeLavoroLabel">
            <div>
                <span>01</span>
                <h5>Analisi & UX</h5>
                <p>Studio delle esigenze, user research e wireframing per definire l'architettura dell'esperienza utente.</p>
            </div>
            <div>
                <span>02</span>
                <h5>Design System</h5>
                <p>Creazione di un sistema di design coerente con componenti riutilizzabili, tipografia e palette colori.</p>
            </div>
            <div>
                <span>03</span>
                <h5>Sviluppo</h5>
                <p>Implementazione frontend e backend con codice pulito, test automatizzati e ottimizzazione delle performance.</p>
            </div>
            <div>
                <span>04</span>
                <h5>Deploy & Supporto</h5>
                <p>Pubblicazione su infrastruttura cloud, monitoraggio delle metriche e supporto tecnico continuo.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contenitoreContattami contattamiWeb">
            <h2>Interessato a collaborare?</h2>
            <p>Ogni progetto inizia con una conversazione. Raccontami la tua idea e troviamo insieme la soluzione migliore.</p>
            <button>Contattami</button>
        </div>
      </section>
    </>
  );
}
