import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const stampaSkills = [
    {
        label: "Blender",
        description:
            "Utilizzo Blender per modellazione 3D, ottimizzazione delle mesh e preparazione di file pronti per la produzione.",
    },
    {
        label: "Rendering",
        description:
            "Rendering realistici per presentare concept, materiali e dettagli del prodotto prima della fase di stampa.",
    },
    {
        label: "Geometry Node",
        description:
            "Workflow procedurali con Geometry Nodes per velocizzare varianti, pattern complessi e iterazioni rapide.",
    },
    {
        label: "Prototipo",
        description:
            "Prototipazione funzionale per validare forma, ergonomia e incastri prima della produzione finale.",
    },
    {
        label: "Modellazione",
        description:
            "Modellazione tecnica e organica orientata alla stampa 3D con attenzione a tolleranze e robustezza.",
    },
    {
        label: "Animazione",
        description:
            "Animazioni di prodotto per mostrare assemblaggio, funzionamento e caratteristiche in modo chiaro.",
    },
    {
        label: "Texture",
        description:
            "Studio di texture e superfici per anteprime visive accurate e coerenti con il risultato finale.",
    },
    {
        label: "Stampa FDM",
        description:
            "Stampa FDM per prototipi rapidi e parti funzionali, con tarature mirate a resistenza e precisione.",
    },
    {
        label: "Stampa SLA",
        description:
            "Stampa SLA ad alta definizione per dettagli fini, superfici pulite e componenti di precisione.",
    },
];

export default function Stampa3D() {
    const [selectedSkill, setSelectedSkill] = useState(null);

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
                                <h3 className="stampaSkillTitle">{selectedSkill.label}</h3>
                            )}
                            <p>
                                {selectedSkill ? (
                                    <span>{selectedSkill.description}</span>
                                ) : (
                                    <>
                                        <span>
                                            Dal modello digitale all'oggetto fisico. Progettazione
                                            3D parametrica, modellazione organica e stampa 3D
                                            FDM/SLA per prototipi, oggetti funzionali e opere
                                            creative che uniscono tecnologia e artigianato.
                                        </span>{" "}
                                        <br />
                                        <br />
                                        La progettazione 3D rappresenta il ponte tra
                                        immaginazione e realta. La stampa 3D permette
                                        iterazioni rapide, dalla prima bozza al prodotto
                                        finito, con materiali che spaziano dal PLA alla
                                        resina ad alta definizione.
                                    </>
                                )}
                            </p>
                        </div>
                        <div className="stampaActionsRow">
                            <Link to="/" className="backToHome">
                                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
                            </Link>
                            <button
                                type="button"
                                className="resetStampaDialogBtn"
                                onClick={() => setSelectedSkill(null)}
                            >
                                Ripristina testo
                            </button>
                        </div>
                    </div>
                    <div className="labelPresentazione StampaLabel">
                        {stampaSkills.map((skill) => {
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
                    className="sectionProcesso sectionProcessoStampa"
                    variant="left"
                >
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
                </ScrollRevealBlock>
            </section>

            <section>
                <ScrollRevealBlock
                    className="contenitoreContattami contattamiStampa"
                    variant="zoom"
                >
                    <h2>Interessato a collaborare?</h2>
                    <p>
                        Ogni progetto inizia con una conversazione. Raccontami la tua idea
                        e troviamo insieme la soluzione migliore.
                    </p>
                    <ContactEmailButton />
                </ScrollRevealBlock>
            </section>
        </>
    );
}