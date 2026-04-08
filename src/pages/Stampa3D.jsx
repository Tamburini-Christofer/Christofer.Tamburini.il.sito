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
            "Blender è un software di grafica 3D open-source e gratuito, leader nel settore per la creazione di modelli, animazioni, rendering, simulazioni fisiche, montaggio video e sviluppo di videogiochi. Utilizzato sia da professionisti che da amatori, è estremamente versatile e supporta l'intero processo produttivo in ambito 3D",
    },
    {
        label: "Rendering",
        description:
            "Il rendering è il processo di generazione di immagini fotorealistiche o stilizzate a partire da modelli 3D, materiali, luci e telecamere. Permette di visualizzare concept, materiali e dettagli del prodotto prima della fase di stampa, facilitando decisioni progettuali e comunicazione con clienti e team.",
    },
    {
        label: "Geometry Node",
        description:
            "I Geometry Nodes in Blender sono un sistema di modellazione procedurale basato su nodi, che permette di creare e modificare geometrie 3D in modo non distruttivo collegando blocchi logici. Funzionano come modificatori avanzati, consentendo di automatizzare attività complesse, generare istanze (scattering) e creare effetti parametrici facilmente modificabili.",
    },
    {
        label: "Prototipo",
        description:
            "Un prototipo è il primo esemplare, modello o simulazione preliminare di un prodotto, realizzato per testarne funzionalità, design e usabilità prima della produzione finale. Serve a individuare criticità, ridurre rischi e ottenere feedback, trovando applicazione in settori come ingegneria, software e design.",
    },
    {
        label: "Modellazione",
        description:
            "La modellazione è il processo di creazione di una rappresentazione teorica, concettuale o fisica (un \"modello\") di un sistema, oggetto o fenomeno reale. Utilizzata in svariati ambiti, serve a studiare, simulare, progettare o visualizzare strutture, come nella modellazione 3D digitale o in quella dei dati. ",
    },
    {
        label: "Animazione",
        description:
            "'animazione è una tecnica di produzione d'immagini in movimento, può essere realizzata con vari metodi e strumenti, per gli scopi più vari, proprio per questo ha trovato nella versatilità del computer il suo mezzo di produzione ideale.",
    },
    {
        label: "Texture",
        description:
            "La texture è la qualità tattile o visiva della superficie di un oggetto (liscia, ruvida, morbida) o la sua struttura interna, derivante dal latino textura (tessitura, trama). Indica la consistenza percepita al tatto o alla vista, aggiungendo dettaglio e realismo, molto usata nel design, nell'arte e nella grafica 3D. ",
    },
    {
        label: "Stampa FDM",
        description:
            "La stampa FDM (Fused Deposition Modeling), o modellazione a deposizione fusa, è una tecnologia di produzione additiva che crea oggetti tridimensionali depositando strati successivi di filamento termoplastico fuso (come PLA, ABS, PETG). Il materiale viene fuso in un estrusore e depositato attraverso un ugello per costruire il pezzo dal basso verso l'alto. ",
    },
    {
        label: "Stampa SLA",
        description:
            "La stampa 3D SLA (Stereolitografia) è una tecnica di produzione additiva che utilizza un raggio laser UV per indurire resine fotosensibili liquide, trasformandole in oggetti solidi strato dopo strato. Rinomata per alta precisione, tolleranze ridotte (<0,05 mm) e finiture superficiali lisce, è ideale per prototipi dettagliati, stampi e modelli complessi.",
    },
];

const stampaCertifications = [
       {
        year: "2021",
        title: "CG ACADEMY - FURNITURE DESIGN CON BLENDER 2.8",
        issuer: "Corso avanzato di progettazione di mobili con Blender 2.8, focalizzato su modellazione organica, texturing e rendering per visualizzazione di prodotto.",
        image: "../../public/Certificati/CG ACADEMY - FURNITURE DESIGN CON BLENDER 2.8.jpg",
        acquiredSkills: ["Modellazione Organica", "Texturing Avanzato", "Rendering di Prodotto"],
    },
        {
        year: "2020",
        title: "BLENDER 2.8x-2.9x-3.x PER TUTTI - MODULO 2",
        issuer: "Corso avanzato di Blender per approfondire tecniche di texturing, illuminazione e rendering, con focus su UV Mapping, setup luci e Cycles.",
        image: "../../public/Certificati/BLENDER 2.8x-2.9x-3.x PER TUTTI - MODULO 2.jpg",
        acquiredSkills: ["UV Mapping", "Illuminazione Avanzata", "Rendering con Cycles"],
    },
    {
        year: "2020",
        title: "BLENDER 2.8x-2.9x-3.x PER TUTTI - MODULO 1",
        issuer: "Ideato, realizzato e diretto da Andrea Coppola, uno dei 6 Blender Foundation Certified Trainer italiani (BFCT) e uno dei 3 Blender Italia Association Certified Trainer (BIACT).",
        image: "../../public/Certificati/BLENDER 2.8x-2.9x-3.x PER TUTTI - MODULO 1.jpg",
        acquiredSkills: ["Modellazione Base", "Texturing Base", "Rendering con Eevee"],
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
                    className="sectionProcesso sectionCertificazioniStampa"
                    variant="right"
                >
                    <h5>CERTIFICAZIONI</h5>
                    <h1>
                        <strong>Percorso formativo</strong>
                    </h1>
                    <div className="comeLavoroLabelCertificazioniStampa">
                        {stampaCertifications.map((certification) => (
                            <article key={certification.title}>
                                <img
                                    src={certification.image}
                                    alt={`Anteprima certificazione ${certification.title}`}
                                    loading="lazy"
                                />
                                <span>{certification.year}</span>
                                <h5>{certification.title}</h5>
                                <p>{certification.issuer}</p>
                                <h6 className="certificazioneSkillsLabel">
                                    Competenze acquisite
                                </h6>
                                <div className="certificazioneSkillsChips">
                                    {certification.acquiredSkills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
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