import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";

export default function Stampa3D() {
    return (
        <>
            <div className="contenitoreHomepage contenitoreStampa">
                <div className="titleHome">
                    <h5>PROGETTAZIONE & PRODUZIONE</h5>
                    <h1>
                        <strong>Stampa 3D</strong>
                    </h1>
                </div>
                <HeroPageSwitchArrows prevRoute="/video-droni" />
                <HeroNextArrow />
            </div>

            <section>
                <div className="contenitoreSezionePresentazione WebPre">
                    <div>
                        <p>
                            <span>
                              Dal modello digitale all'oggetto fisico. Progettazione 3D parametrica, modellazione organica e stampa 3D FDM/SLA per prototipi, oggetti funzionali e opere creative che uniscono tecnologia e artigianato.
                            </span>{" "}
                            <br />
                            <br />
                    
La progettazione 3D rappresenta il ponte tra immaginazione e realtà. La stampa 3D permette iterazioni rapide, dalla prima bozza al prodotto finito, con materiali che spaziano dal PLA alla resina ad alta definizione.
                        </p>
                        <p>
                            <Link to="/" className="backToHome">
                                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
                            </Link>
                        </p>
                    </div>
                    <div className="labelPresentazione StampaLabel">
                        <div>
                            <p>Blender</p>
                        </div>
                        <div>
                            <p>Rendering</p>
                        </div>
                        <div>
                            <p>Geometry Node</p>
                        </div>
                        <div>
                            <p>Prototipo</p>
                        </div>
                        <div>
                            <p>Modellazione</p>
                        </div>
                        <div>
                            <p>Animazione</p>
                        </div>
                        <div>
                            <p>Texture</p>
                        </div>
                        <div>
                            <p>Stampa FDM</p>
                        </div>
                        <div>
                            <p>Stampa SLA</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="sectionProcesso sectionProcessoStampa">
                    <h5>IL PROCESSO</h5>
                    <h1>
                        <strong>Come lavoro</strong>
                    </h1>
                    <div className="comeLavoroLabelStampa">
                        <div>
                            <span>01</span>
                            <h5>Concept & Specifiche</h5>
                            <p>
                            Definizione dei requisiti funzionali, dimensioni, tolleranze e scelta del materiale più adatto al progetto.

                            </p>
                        </div>
                        <div>
                            <span>02</span>
                            <h5>Modellazione 3D</h5>
                            <p>
                              Creazione del modello digitale con precisione millimetrica, verifiche strutturali e ottimizzazione per la stampa.

                            </p>
                        </div>
                        <div>
                            <span>03</span>
                            <h5>Stampa & Test</h5>
                            <p>
                              Prototipazione rapida con tecnologia FDM o SLA, test funzionali e iterazioni di miglioramento.

                            </p>
                        </div>
                        <div>
                            <span>04</span>
                            <h5>Finitura & Consegna</h5>
                            <p>
                            Post-processing del pezzo stampato: levigatura, verniciatura e assemblaggio per il risultato finale perfetto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="contenitoreContattami contattamiStampa">
                    <h2>Interessato a collaborare?</h2>
                    <p>
                        Ogni progetto inizia con una conversazione. Raccontami la tua idea
                        e troviamo insieme la soluzione migliore.
                    </p>
                    <ContactEmailButton />
                </div>
            </section>
        </>
    );
}