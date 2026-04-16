import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ScrollRevealBlock from "../components/ScrollRevealBlock";

const fotografiaSkills = [
  {
    label: "Photoshop",
    description:
      "Adobe Photoshop è il software leader mondiale per l'elaborazione, il fotoritocco e la manipolazione di immagini digitali raster (pixel). Utilizzato da professionisti e creativi, permette di modificare foto, creare grafica complessa, disegnare e utilizzare l'intelligenza artificiale (IA) per modificare contenuti.",
  },
  {
    label: "Camera Raw",
    description:
      "Adobe Camera Raw (ACR) è un potente plug-in incluso in Photoshop, Bridge e After Effects, fondamentale per i fotografi, che permette di aprire, sviluppare e modificare le immagini in formato RAW (il \"negativo digitale\" non compresso). Consente di regolare esposizione, colore, contrasto e dettagli in modo non distruttivo, sfruttando il massimo delle informazioni catturate dal sensore prima della conversione finale. ",
  },
  {
    label: "Macro",
    description:
      "La macrofotografia è un genere fotografico che cattura soggetti molto piccoli, rendendoli grandi quanto o più delle loro dimensioni reali (rapporto di ingrandimento 1:1). Questa tecnica rivela dettagli invisibili a occhio nudo, come insetti, fiori o trame, solitamente ottenuti con obiettivi specifici a distanza ravvicinata.",
  },
  {
    label: "Astratto",
    description:
      "La fotografia astratta è una forma d'arte che crea immagini distaccate dalla realtà oggettiva, concentrandosi su forme, colori, luci e texture piuttosto che sulla rappresentazione fedele del soggetto. L'obiettivo è evocare emozioni e suggestioni, trasformando elementi quotidiani in visioni surreali e metafisiche. ",
  },
  {
    label: "Street Photo",
    description:
      "La street photography (fotografia di strada) è un genere che immortala la vita quotidiana in luoghi pubblici in modo spontaneo, sincero e non in posa. Documenta la \"commedia umana\", catturando momenti inaspettati, emozioni e interazioni sociali per raccontare storie urbane. È un'arte basata su osservazione, rapidità e tempismo.",
  },
  {
    label: "Landscapes",
    description:
      "La fotografia di paesaggio (landscape) è un genere che ritrae scenari naturali o urbani, con l'obiettivo di catturare la bellezza, la vastità e l'atmosfera di un luogo, spesso creando una connessione emotiva. Questo stile si concentra su panorami come montagne, foreste, laghi o città, enfatizzando la composizione e la luce naturale. ",
  },
  {
    label: "Ritratto",
    description:
      "Il ritratto fotografico è un genere artistico che cattura l'essenza, la personalità e l'identità di un soggetto (persona o gruppo) attraverso l'obiettivo, andando oltre la semplice rappresentazione fisica. Utilizza luce, inquadratura, posa e contesto per trasmettere emozioni e raccontare una storia, spesso creando un intimo legame tra fotografo e soggetto. ",
  },
  {
    label: "Studio",
    description:
      "Uno studio fotografico è uno spazio chiuso e controllato, appositamente attrezzato per scattare fotografie, garantendo il pieno controllo di illuminazione, sfondi e attrezzature. Offre un ambiente professionale (sala posa) con luci, modificatori e fondali per creare immagini di alta qualità, diverso da un set in esterna.",
  },
  {
    label: "Ligthroom",
    description:
      "Adobe Lightroom (spesso chiamato solo Lightroom) è un potente software di post-produzione fotografica sviluppato da Adobe, progettato per gestire, organizzare e modificare grandi quantità di immagini, ideale sia per professionisti che per appassionati. A differenza di Photoshop, Lightroom permette un editing non distruttivo e gestisce l'intero flusso di lavoro, dal trasferimento dallo scatto al catalogo fino all'esportazione",
  },
];

const fotografiaCollections = [
  {
    id: "animali",
    label: "Animali",
    title: "Istinto, attesa e presenza",
    description:
      "Una selezione dedicata alla fauna: sguardi fermi, movimento improvviso e dettagli che funzionano solo quando luce e tempismo si incastrano bene.",
    images: [
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350232/7F1A7292-1_ddusya.jpg",
        alt: "Fotografia animali 1",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350231/Ti_fisso_xscn9k.jpg",
        alt: "Fotografia animali 2",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350230/papagallo_rosso_neisyz.jpg",
        alt: "Fotografia animali 3",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350226/Surri_4_vwhvsj.jpg",
        alt: "Fotografia animali 4",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350224/apapapapap_mdhr1g.jpg",
        alt: "Fotografia animali 5",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350224/7F1A6440-1_g8o4x1.jpg",
        alt: "Fotografia animali 6",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350223/7F1A6708-1_lrooiz.jpg",
        alt: "Fotografia animali 7",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350212/7F1A6555-1_jwly1v.jpg",
        alt: "Fotografia animali 8",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350211/7F1A7346-1_wb2vfr.jpg",
        alt: "Fotografia animali 9",
      },
    ],
  },
  {
    id: "astratto",
    label: "Astratto",
    title: "Forme, riflessi e distorsioni",
    description:
      "Immagini che spostano il soggetto in secondo piano e lasciano lavorare texture, luce e ambiguita visiva.",
    images: [
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350244/7F1A9401-1_jdfbvm.jpg",
        alt: "Fotografia astratta 1",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350249/7F1A8195-1_nmmc7h.jpg",
        alt: "Fotografia astratta 2",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350250/IMG_4568-1_c9yys5.jpg",
        alt: "Fotografia astratta 3",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350255/7F1A0415-1_h8jsct.jpg",
        alt: "Fotografia astratta 4",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350256/Oltre_lo_specchio_eykdy3.jpg",
        alt: "Fotografia astratta 5",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350258/Disturbo_delirante_znrr8g.jpg",
        alt: "Fotografia astratta 6",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350260/telegiornale_uy3l6g.jpg",
        alt: "Fotografia astratta 7",
      },
    ],
  },
  {
    id: "landscapes",
    label: "Landscapes",
    title: "Spazio, atmosfera e profondita",
    description:
      "Paesaggi costruiti attorno a volume, meteo e respiro della scena, dal panorama aperto ai tagli piu essenziali.",
    images: [
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350273/7F1A2404-1_itukon.jpg",
        alt: "Fotografia paesaggio 1",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350273/7F1A2404-1_itukon.jpg",
        alt: "Fotografia paesaggio 2",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350276/Ragnarock_jppvyv.jpg",
        alt: "Fotografia paesaggio 3",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350291/7F1A3638-1_oioypj.jpg",
        alt: "Fotografia paesaggio 4",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350298/7F1A0788-1_ldc3rf.jpg",
        alt: "Fotografia paesaggio 5",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350298/7F1A3950-1_lv9cck.jpg",
        alt: "Fotografia paesaggio 6",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350303/Casa_hotel_bmd7qt.jpg",
        alt: "Fotografia paesaggio 7",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350304/paesaggio_Verona_nssy94.jpg",
        alt: "Fotografia paesaggio 8",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350304/7F1A3994-1_vbreau.jpg",
        alt: "Fotografia paesaggio 9",
      },
      {
        src: "https://res.cloudinary.com/dg4tpvtje/image/upload/v1776350306/dolomiti_s3mt9q.jpg",
        alt: "Fotografia paesaggio 10",
      },
    ],
  },
  {
    id: "macro",
    label: "Macro",
    title: "Dettaglio che diventa scena",
    description:
      "Una raccolta pensata per i particolari estremi, le texture e i micro-contrasti. In attesa delle immagini definitive.",
    images: [],
  },
  {
    id: "ritratto",
    label: "Ritratto",
    title: "Presenza, espressione e taglio",
    description:
      "Una selezione dedicata ai volti e alla relazione con la luce. La struttura e pronta per ricevere gli scatti che mi invierai.",
    images: [],
  },
  {
    id: "studio",
    label: "Studio",
    title: "Controllo totale della luce",
    description:
      "Set puliti, volumi precisi e costruzione dell'immagine in ambiente controllato. Categoria pronta per essere completata.",
    images: [],
  },
];

const initialFotografiaCollectionId =
  fotografiaCollections.find((collection) => collection.images?.length > 0)?.id ??
  fotografiaCollections[0]?.id ??
  null;

export default function Fotrografia() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedCollectionId, setSelectedCollectionId] = useState(initialFotografiaCollectionId);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const activeCollection =
    fotografiaCollections.find((collection) => collection.id === selectedCollectionId) ??
    fotografiaCollections[0];
  const activeImages = activeCollection?.images ?? [];
  const hasActiveImages = activeImages.length > 0;
  const normalizedPreviewIndex = hasActiveImages ? activePreviewIndex % activeImages.length : 0;
  const activePreviewImage = hasActiveImages ? activeImages[normalizedPreviewIndex] : null;

  const handleSelectCollection = (collectionId) => {
    setSelectedCollectionId(collectionId);
    setActivePreviewIndex(0);
  };

  const goToPreviousPreview = () => {
    if (!hasActiveImages) {
      return;
    }

    setActivePreviewIndex((currentIndex) => (currentIndex - 1 + activeImages.length) % activeImages.length);
  };

  const goToNextPreview = () => {
    if (!hasActiveImages) {
      return;
    }

    setActivePreviewIndex((currentIndex) => (currentIndex + 1) % activeImages.length);
  };

  return (
    <>
      <div className="contenitoreHomepage contenitoreFot">
        <div className="titleHome">
          <h5>LUCI & COMPOSIZIONE</h5>
          <h1>
            <strong>Fotografia</strong>
          </h1>
        </div>
        <HeroPageSwitchArrows prevRoute="/web-developer" nextRoute="/video-droni" />
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
                <h3 className="fotSkillTitle">{selectedSkill.label}</h3>
              )}
              <p>
                {selectedSkill ? (
                  <span>{selectedSkill.description}</span>
                ) : (
                  <>
                    <span>
                      Catturare l'essenza di un momento attraverso luce, colore
                      e composizione. Dalla fotografia di paesaggio ai ritratti,
                      ogni scatto racconta una storia unica con attenzione
                      maniacale ai dettagli.
                    </span>{" "}
                    <br />
                    <br />
                    La fotografia e il mio modo di osservare il mondo con occhi
                    diversi. Lavoro sia in luce naturale che in studio,
                    padroneggiando tecniche di illuminazione avanzate e
                    post-produzione professionale. Ogni progetto fotografico e
                    un racconto visivo costruito con cura.
                  </>
                )}
              </p>
            </div>
            <div className="fotActionsRow">
              <Link to="/" className="backToHome">
                <i className="fa-solid fa-arrow-left"></i> Torna alla Homepage
              </Link>
              <button
                type="button"
                className="resetFotDialogBtn"
                onClick={() => setSelectedSkill(null)}
              >
                Ripristina testo
              </button>
            </div>
          </div>
          <div className="labelPresentazione FotLabel">
            {fotografiaSkills.map((skill) => {
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
          className="sectionProcesso sectionProcessoFot"
          variant="left"
        >
          <h5>IL PROCESSO</h5>
          <h1>
            <strong>Come lavoro</strong>
          </h1>
          <div className="comeLavoroLabelFot">
            <div>
              <span>01</span>
              <h5>Briefing Creativo</h5>
              <p>
                Discussione del concept, mood board e pianificazione delle
                location e delle condizioni di luce ideali.
              </p>
            </div>
            <div>
              <span>02</span>
              <h5>Shooting</h5>
              <p>
                Sessione fotografica con attenzione alla composizione,
                illuminazione e direzione artistica del soggetto.
              </p>
            </div>
            <div>
              <span>03</span>
              <h5>Selezione & Editing</h5>
              <p>
                Cura degli scatti migliori, color grading professionale e
                ritocco avanzato mantenendo naturalezza.
              </p>
            </div>
            <div>
              <span>04</span>
              <h5>Consegna</h5>
              <p>
                File in alta risoluzione ottimizzati per stampa e web, con
                formati adatti a ogni utilizzo finale.
              </p>
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="sectionProgettiFot sectionProgettiFotGallery"
          variant="right"
        >
          <div className="fotografiaInlineGallery">
            <div className="fotografiaGenresColumn">
              <div className="fotografiaGenreList" role="tablist" aria-label="Generi fotografia">
                {fotografiaCollections.map((collection) => {
                  const isActive = collection.id === activeCollection?.id;

                  return (
                    <button
                      key={collection.id}
                      type="button"
                      className={isActive ? "fotografiaGenreButton isActive" : "fotografiaGenreButton"}
                      onClick={() => handleSelectCollection(collection.id)}
                      aria-pressed={isActive}
                    >
                      <span>{collection.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="fotografiaPreviewColumn">
              {hasActiveImages ? (
                <>
                  <div className="fotografiaPreviewFrame">
                    {activePreviewImage ? (
                      <img src={activePreviewImage.src} alt={activePreviewImage.alt} loading="lazy" />
                    ) : null}
                  </div>

                  <div className="fotografiaPreviewFooter">
                    <div className="fotografiaPreviewThumbs" role="listbox" aria-label={`Anteprime ${activeCollection.label}`}>
                      {activeImages.map((image, index) => {
                        const isActive = index === normalizedPreviewIndex;

                        return (
                          <button
                            key={`${activeCollection.id}-preview-${index}`}
                            type="button"
                            className={isActive ? "fotografiaPreviewThumb isActive" : "fotografiaPreviewThumb"}
                            onClick={() => setActivePreviewIndex(index)}
                            aria-pressed={isActive}
                          >
                            <img src={image.src} alt={image.alt} loading="lazy" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="fotografiaPreviewArrowGroup">
                      <button
                        type="button"
                        className="fotografiaPreviewArrow"
                        onClick={goToPreviousPreview}
                        aria-label={`Foto precedente ${activeCollection.label}`}
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        type="button"
                        className="fotografiaPreviewArrow"
                        onClick={goToNextPreview}
                        aria-label={`Foto successiva ${activeCollection.label}`}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="fotografiaPreviewEmpty">
                  <span>Categoria in aggiornamento</span>
                  <p>Le fotografie di questa categoria non sono ancora state aggiunte.</p>
                </div>
              )}
            </div>
          </div>
        </ScrollRevealBlock>
      </section>

      <section>
        <ScrollRevealBlock
          className="contenitoreContattami contattamiFot"
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
