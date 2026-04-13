import { useState } from "react";
import { Link } from "react-router-dom";
import ContactEmailButton from "../components/ContactEmailButton";
import CircularGallery from "../components/CircularGallery";
import HeroNextArrow from "../components/HeroNextArrow";
import HeroPageSwitchArrows from "../components/HeroPageSwitchArrows";
import ProjectHighlightsCarousel from "../components/ProjectHighlightsCarousel";
import ProjectModal from "../components/ProjectModal";
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
    title: "Blender - Furniture Design Avanzato",
    issuer: "CG Academy",
    releasedBy: "Andrea Coppola",
    topic: "Modellazione Organica, Texturing, Rendering di Prodotto",
    date: "Novembre 2021",
    duration: "64 ore",
    image: "../../public/Certificati/CG ACADEMY - FURNITURE DESIGN CON BLENDER 2.8.jpg",
    acquiredSkills: ["Modellazione Organica", "Texturing Avanzato", "Rendering di Prodotto", "UV Mapping"],
  },
  {
    title: "Blender - Modulo 2: Texturing e Rendering",
    issuer: "Blender Italia Academy",
    releasedBy: "Andrea Coppola",
    topic: "UV Mapping, Illuminazione Avanzata, Rendering con Cycles",
    date: "Settembre 2020",
    duration: "48 ore",
    image: "../../public/Certificati/BLENDER 2.8x-2.9x-3.x PER TUTTI - MODULO 2.jpg",
    acquiredSkills: ["UV Mapping", "Illuminazione", "Rendering Cycles", "Materiali Avanzati"],
  },
  {
    title: "Blender - Modulo 1: Fondamenti di Modellazione",
    issuer: "Blender Italia Academy",
    releasedBy: "Andrea Coppola",
    topic: "Modellazione Base, Texturing Essenziale, Rendering Eevee",
    date: "Luglio 2020",
    duration: "56 ore",
    image: "../../public/Certificati/BLENDER 2.8x-2.9x-3.x PER TUTTI - MODULO 1.jpg",
    acquiredSkills: ["Modellazione 3D", "Texturing Base", "Rendering Eevee", "Primitive 3D"],
  },
];

const stampaCertificationItems = stampaCertifications.map((certification) => ({
    src: certification.image.replace("../../public", ""),
    alt: `Certificazione ${certification.title}`,
    title: certification.title,
}));

const stampaFilamentoProject = {
    title: "Supporto Parete Modulare",
    category: "Stampa a Filamento",
    modelSceneTitle: "Supporto tecnico modulare - rev B",
    renderType: "Render tecnico + prototipo assemblato",
    description:
        "Sistema a parete stampato in FDM per organizzare utensili leggeri con agganci rapidi e moduli intercambiabili.",
    objectPurpose: "Struttura modulare per tenere in ordine accessori da banco e piccola attrezzatura.",
    printedObjectName: "Supporto modulare FDM",
    image: "https://picsum.photos/seed/stampa-filamento-04/1200/800",
    images: [
        {
            src: "https://picsum.photos/seed/stampa-filamento-04/1200/800",
            alt: "Supporto parete modulare vista principale",
        },
        {
            src: "https://picsum.photos/seed/stampa-filamento-041/1200/800",
            alt: "Supporto parete modulare dettaglio agganci",
        },
        {
            src: "https://picsum.photos/seed/stampa-filamento-042/1200/800",
            alt: "Supporto parete modulare installato",
        },
    ],
    technologies: ["Blender", "FDM", "PETG", "Parametric Design", "Post-processing"],
    softwareUsed: ["Blender", "OrcaSlicer", "Fusion reference"],
    projectType: "Design funzionale + stampa a filamento",
    techniquesUsed: ["Modellazione hard-surface", "Snap-fit", "Stress check"],
    features: [
        "Binari modulari espandibili con accessori dedicati",
        "Sezioni rinforzate nei punti di carico",
        "Montaggio rapido con viti o biadesivo tecnico",
    ],
    wireframeImage: {
        src: "https://picsum.photos/seed/stampa-filamento-04-wire/1200/800",
        alt: "Wireframe supporto parete modulare",
    },
    breakdown: [
        "Definizione interassi e moduli compatibili",
        "Progettazione dei ganci e delle guide posteriori",
        "Stampa test per controllo flessione e carico",
        "Assemblaggio finale e verifica a parete",
    ],
    processPhotos: [
        {
            src: "https://picsum.photos/seed/stampa-filamento-04-process-1/800/600",
            alt: "Foto processo stampa modulo base",
        },
        {
            src: "https://picsum.photos/seed/stampa-filamento-04-process-2/800/600",
            alt: "Foto processo test aggancio a parete",
        },
    ],
    versions: ["v1 gancio corto", "v2 nervature rinforzate", "rev B installazione finale"],
    printType: "FDM",
    material: "PETG nero",
    printer: "Bambu Lab A1",
    slicer: "OrcaSlicer",
    printTime: "6h 40m",
    dimensions: "240 x 110 x 52 mm",
    layerHeight: "0.24 mm (draft rinforzato)",
    supports: "No",
    printIssues: "Leggera vibrazione sugli spigoli superiori risolta rallentando le pareti esterne.",
    postProcessing: "Sbavatura minima, inserimento boccole e prova montaggio completa.",
    role: "Design prodotto e validazione funzionale",
    challenges:
        "La parte critica era ottenere moduli rigidi ma facili da stampare senza supporti e con tolleranze coerenti tra pezzi lunghi.",
    developmentTime: "4 giorni",
    difficulty: "Media-alta",
    status: "Completato",
    goal:
        "Realizzare un sistema ordinato, replicabile e facile da aggiornare per una postazione di lavoro tecnica.",
    learned:
        "Ho affinato progettazione senza supporti, modularita reale e controllo della rigidita su pezzi FDM di medie dimensioni.",
};

const stampaResinaProject = {
    title: "Miniatura Tecnica in Resina",
    category: "Stampa in Resina",
    modelSceneTitle: "Miniatura meccanica scala 1:10",
    renderType: "Render lookdev + macro preview",
    description:
        "Modello dettagliato in resina con componenti sottili, incisioni leggere e finitura pensata per esposizione ravvicinata.",
    objectPurpose: "Miniatura da presentazione per concept industriale e shooting close-up.",
    printedObjectName: "Miniatura display SLA",
    image: "https://picsum.photos/seed/stampa-resina-05/1200/800",
    images: [
        {
            src: "https://picsum.photos/seed/stampa-resina-05/1200/800",
            alt: "Miniatura tecnica in resina vista principale",
        },
        {
            src: "https://picsum.photos/seed/stampa-resina-051/1200/800",
            alt: "Miniatura tecnica in resina dettaglio superfici",
        },
        {
            src: "https://picsum.photos/seed/stampa-resina-052/1200/800",
            alt: "Miniatura tecnica in resina confronto render e stampa",
        },
    ],
    technologies: ["Blender", "SLA", "High-detail Resin", "Lookdev", "Macro Lighting"],
    softwareUsed: ["Blender", "Lychee Slicer", "Substance Painter"],
    projectType: "Concept model + stampa resina ad alta definizione",
    techniquesUsed: ["Kitbash", "Decal detailing", "Micro support tuning"],
    features: [
        "Dettagli fini leggibili anche a distanza ravvicinata",
        "Parti separate per pulizia e verniciatura mirata",
        "Look finale pensato per esposizione e portfolio",
    ],
    wireframeImage: {
        src: "https://picsum.photos/seed/stampa-resina-05-wire/1200/800",
        alt: "Wireframe miniatura tecnica in resina",
    },
    breakdown: [
        "Definizione silhouette e pannellature principali",
        "Separazione delle parti e orientamento stampa",
        "Test micro-dettagli e pulizia supporti",
        "Primer, verniciatura e montaggio finale",
    ],
    processPhotos: [
        {
            src: "https://picsum.photos/seed/stampa-resina-05-process-1/800/600",
            alt: "Foto processo supporti miniatura resina",
        },
        {
            src: "https://picsum.photos/seed/stampa-resina-05-process-2/800/600",
            alt: "Foto processo curing e primer miniatura",
        },
    ],
    versions: ["v1 silhouette base", "v2 dettaglio pannelli", "v3 pezzo finale verniciato"],
    printType: "Resina",
    material: "Resina ABS-like grigia",
    printer: "Elegoo Saturn 3",
    slicer: "Lychee Slicer",
    printTime: "5h 10m",
    dimensions: "118 x 64 x 92 mm",
    layerHeight: "0.05 mm (alta qualita)",
    supports: "Si, micro-supporti manuali",
    printIssues: "Alcuni dettagli fini tendevano a segnarsi in rimozione supporti, risolti riposizionando i punti di contatto.",
    postProcessing: "Lavaggio IPA, curing controllato, primer sottile e dry-brush sui volumi principali.",
    role: "Concept artist, modellazione e finitura",
    challenges:
        "La sfida era mantenere una lettura molto nitida dei dettagli senza ispessire troppo il modello o compromettere la stampa.",
    developmentTime: "1 settimana",
    difficulty: "Alta",
    status: "Completato",
    goal:
        "Creare un pezzo da esposizione compatto con un livello di dettaglio adatto a portfolio e presentazione cliente.",
    learned:
        "Ho migliorato orientamento SLA, gestione dei micro-supporti e finitura finale su oggetti ad alta densita di dettaglio.",
};

const stampaFilamentoProjectTwo = {
    title: "Organizer Banco Officina",
    category: "Stampa a Filamento",
    modelSceneTitle: "Organizer tecnico multi-slot - mk II",
    renderType: "Render prodotto + test componenti",
    description:
        "Contenitore tecnico a scomparti per banco lavoro, progettato per stampa veloce, pareti robuste e uso quotidiano.",
    objectPurpose: "Organizzare utensili piccoli, inserti e minuteria in un unico modulo stampabile.",
    printedObjectName: "Organizer tecnico FDM",
    image: "https://picsum.photos/seed/stampa-filamento-06/1200/800",
    images: [
        {
            src: "https://picsum.photos/seed/stampa-filamento-06/1200/800",
            alt: "Organizer banco officina vista isometrica",
        },
        {
            src: "https://picsum.photos/seed/stampa-filamento-061/1200/800",
            alt: "Organizer banco officina dettaglio interni",
        },
        {
            src: "https://picsum.photos/seed/stampa-filamento-062/1200/800",
            alt: "Organizer banco officina in uso",
        },
    ],
    technologies: ["Blender", "FDM", "PLA+", "Functional Design", "Rapid Iteration"],
    softwareUsed: ["Blender", "Bambu Studio", "Netfabb check"],
    projectType: "Oggetto funzionale + stampa veloce",
    techniquesUsed: ["Wall thickness tuning", "Bridge optimization", "Tolerance testing"],
    features: [
        "Scomparti con misure differenziate per accessori misti",
        "Fondo irrigidito per evitare flessioni durante l'uso",
        "Stampa rapida senza supporti e con consumo ridotto",
    ],
    wireframeImage: {
        src: "https://picsum.photos/seed/stampa-filamento-06-wire/1200/800",
        alt: "Wireframe organizer banco officina",
    },
    breakdown: [
        "Analisi accessori e misure reali del banco",
        "Progettazione comparti e inclinazioni interne",
        "Test stampa draft e verifica stabilita",
        "Versione finale con ottimizzazione tempi macchina",
    ],
    processPhotos: [
        {
            src: "https://picsum.photos/seed/stampa-filamento-06-process-1/800/600",
            alt: "Foto processo stampa organizer tecnico",
        },
        {
            src: "https://picsum.photos/seed/stampa-filamento-06-process-2/800/600",
            alt: "Foto processo test oggetti inseriti",
        },
    ],
    versions: ["v1 draft rapido", "v2 rinforzi base", "mk II finale"],
    printType: "FDM",
    material: "PLA+ grigio scuro",
    printer: "Bambu Lab P1S",
    slicer: "Bambu Studio",
    printTime: "4h 50m",
    dimensions: "188 x 142 x 46 mm",
    layerHeight: "0.24 mm (bozza funzionale)",
    supports: "No",
    printIssues: "Leggero stringing nelle cavita piu strette corretto con ritrazione e temperatura inferiore.",
    postProcessing: "Pulizia rapida bordi e piedini antiscivolo applicati in base.",
    role: "Design funzionale e prototipazione rapida",
    challenges:
        "La difficolta era mantenere l'oggetto robusto ma veloce da stampare senza aumentare troppo materiale e tempo macchina.",
    developmentTime: "3 giorni",
    difficulty: "Media",
    status: "Completato",
    goal:
        "Creare un organizer concreto e facilmente replicabile per migliorare ordine e velocita operativa su banco.",
    learned:
        "Ho migliorato equilibrio tra tempi di stampa, rigidezza strutturale e utilita reale del pezzo finale.",
};

const stampaResinaProjectTwo = {
    title: "Prototype Gioiello Display",
    category: "Stampa in Resina",
    modelSceneTitle: "Anello concept display - edition A",
    renderType: "Macro render + preview esposizione",
    description:
        "Concept ad alta definizione per presentazione prodotto, con superfici pulite e dettagli minuti per shooting ravvicinati.",
    objectPurpose: "Mockup di gioiello per visualizzazione, presentazione cliente e test di resa volumetrica.",
    printedObjectName: "Prototype ring SLA",
    image: "https://picsum.photos/seed/stampa-resina-07/1200/800",
    images: [
        {
            src: "https://picsum.photos/seed/stampa-resina-07/1200/800",
            alt: "Prototype gioiello display vista frontale",
        },
        {
            src: "https://picsum.photos/seed/stampa-resina-071/1200/800",
            alt: "Prototype gioiello display dettaglio incisioni",
        },
        {
            src: "https://picsum.photos/seed/stampa-resina-072/1200/800",
            alt: "Prototype gioiello display confronto scala reale",
        },
    ],
    technologies: ["Blender", "SLA", "High-detail Resin", "Macro Render"],
    softwareUsed: ["Blender", "Lychee Slicer", "Photoshop"],
    projectType: "Prototype visuale + stampa alta definizione",
    techniquesUsed: ["Micro beveling", "Detail preservation", "Support minimization"],
    features: [
        "Volumi piccoli con dettagli incisi ben leggibili",
        "Superficie pulita per scatti close-up e mockup",
        "Supporti posizionati per ridurre segni visibili",
    ],
    wireframeImage: {
        src: "https://picsum.photos/seed/stampa-resina-07-wire/1200/800",
        alt: "Wireframe prototype gioiello display",
    },
    breakdown: [
        "Definizione silhouette e proporzioni wearable",
        "Ottimizzazione dettagli minuti e spessori",
        "Setup supporti e test miniatura",
        "Curing, rifinitura e controllo finale",
    ],
    processPhotos: [
        {
            src: "https://picsum.photos/seed/stampa-resina-07-process-1/800/600",
            alt: "Foto processo supporti prototype gioiello",
        },
        {
            src: "https://picsum.photos/seed/stampa-resina-07-process-2/800/600",
            alt: "Foto processo primer prototype gioiello",
        },
    ],
    versions: ["v1 shape study", "v2 incisioni ottimizzate", "edition A finale"],
    printType: "Resina",
    material: "Resina beige ad alta definizione",
    printer: "Anycubic Photon Mono M5s",
    slicer: "Lychee Slicer",
    printTime: "2h 35m",
    dimensions: "28 x 26 x 24 mm",
    layerHeight: "0.03 mm (ultra detail)",
    supports: "Si, micro-supporti posteriori",
    printIssues: "Segni minimi nei punti di contatto corretti spostando i supporti sul lato meno visibile.",
    postProcessing: "Lavaggio, curing, carteggiatura ultra fine e primer sottile per preview fotografica.",
    role: "Concept modeler e finitura",
    challenges:
        "La criticita principale era mantenere dettaglio leggibile su scala molto piccola senza fragilita eccessiva.",
    developmentTime: "2 giorni",
    difficulty: "Alta",
    status: "Completato",
    goal:
        "Validare in breve tempo forma, proporzioni e resa visiva di un concept destinato a presentazione premium.",
    learned:
        "Ho affinato ulteriormente il rapporto tra micro-dettaglio, orientamento stampa e finitura per shooting ravvicinati.",
};

const stampaHighlightedProjects = [
    {
        title: "Prototipo Custodia Tecnica",
        category: "Prototipazione",
        renderType: "Render statico + turntable preview",
        description:
            "Sviluppo rapido di una custodia funzionale con test iterativi su tolleranze e incastri.",
        image: "https://picsum.photos/seed/stampa-project-01/1200/800",
        images: [
            {
                src: "https://picsum.photos/seed/stampa-project-01/1200/800",
                alt: "Prototipo custodia tecnica vista frontale",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-011/1200/800",
                alt: "Prototipo custodia tecnica dettaglio incastri",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-012/1200/800",
                alt: "Prototipo custodia tecnica test assemblaggio",
            },
        ],
        technologies: ["Blender", "FDM", "PLA", "Calibrazione", "Post-processing"],
        softwareUsed: ["Blender", "PrusaSlicer", "Meshmixer"],
        goal:
            "Realizzare un prototipo funzionale pronto per essere validato prima della produzione definitiva.",
    },
    {
        title: "Complemento Arredo Parametrico",
        category: "Design 3D",
        modelSceneTitle: "Lampada parametrica da tavolo",
        renderType: "Render still + turntable 360",
        description:
            "Oggetto decorativo progettato con workflow parametrico e finitura ottimizzata per stampa.",
        objectPurpose: "Elemento d'arredo personalizzabile per ambienti living e workspace.",
        printedObjectName: "Lampada parametrica SLA",
        image: "https://picsum.photos/seed/stampa-project-02/1200/800",
        images: [
            {
                src: "https://picsum.photos/seed/stampa-project-02/1200/800",
                alt: "Complemento arredo parametrico vista principale",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-021/1200/800",
                alt: "Complemento arredo parametrico dettagli superficie",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-022/1200/800",
                alt: "Complemento arredo parametrico render e pezzo fisico",
            },
        ],
        technologies: ["Blender", "Geometry Nodes", "SLA", "Rendering"],
        softwareUsed: ["Blender", "Geometry Nodes", "Lychee Slicer"],
        projectType: "Design parametrico + stampa resina",
        techniquesUsed: ["Geometry Nodes", "Lighting studio", "Lookdev materiali"],
        liveUrl: null,
        githubUrl: null,
        downloadUrl: null,
        stlUrl: null,
        features: [
            "Forma generata proceduralmente e facilmente adattabile",
            "Render preliminari per validare proporzioni e materiali",
            "Finitura pensata per presentazione e shooting prodotto",
        ],
        wireframeImage: {
            src: "https://picsum.photos/seed/stampa-project-02-wire/1200/800",
            alt: "Wireframe modello complemento arredo parametrico",
        },
        breakdown: [
            "Sketch del concept e definizione parametri",
            "Costruzione rete Geometry Nodes",
            "Test stampa in scala ridotta",
            "Stampa finale e finitura estetica",
        ],
        processPhotos: [
            {
                src: "https://picsum.photos/seed/stampa-project-02-process-1/800/600",
                alt: "Foto processo setup stampa SLA",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-02-process-2/800/600",
                alt: "Foto processo curing resina",
            },
        ],
        versions: ["v1 pattern aperto", "v2 pattern fitto", "v3 base rinforzata"],
        printType: "Resina",
        material: "Resina standard grigia",
        printer: "Elegoo Saturn 3",
        slicer: "Lychee Slicer",
        printTime: "7h 45m",
        dimensions: "210 x 130 x 130 mm",
        layerHeight: "0.05 mm (alta qualita)",
        supports: "Si, automatici ottimizzati",
        printIssues: "Piccoli segni nelle zone sottosquadro e necessaria ottimizzazione orientamento per ridurre i supporti.",
        postProcessing: "Lavaggio IPA, curing UV, levigatura fine e primer.",
        role: "Concept, modellazione e rendering",
        challenges:
            "Ho dovuto rendere il modello espressivo sul piano estetico ma anche realmente stampabile senza fragilita strutturali.",
        developmentTime: "2 settimane",
        difficulty: "Alta",
        status: "Completato",
        goal:
            "Creare un oggetto decorativo con forte identita visiva e produzione replicabile.",
        learned:
            "Ho reso piu maturo il mio workflow tra design parametrico, validazione tecnica e resa finale.",
    },
    {
        title: "Mockup Prodotto per Presentazione",
        category: "Rendering",
        modelSceneTitle: "Mockup packaging + supporto espositivo",
        renderType: "Render fotorealistico con wireframe pass",
        description:
            "Visualizzazione fotorealistica e modello fisico per validazione estetica prima della produzione.",
        objectPurpose: "Validare estetica e proporzioni prima del lancio commerciale.",
        printedObjectName: "Mockup espositivo ibrido",
        image: "https://picsum.photos/seed/stampa-project-03/1200/800",
        images: [
            {
                src: "https://picsum.photos/seed/stampa-project-03/1200/800",
                alt: "Mockup prodotto vista hero",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-031/1200/800",
                alt: "Mockup prodotto dettaglio materiale",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-032/1200/800",
                alt: "Mockup prodotto confronto render e prototipo",
            },
        ],
        technologies: ["Blender", "Cycles", "SLA", "Material Preview"],
        softwareUsed: ["Blender", "Cycles", "Cura", "Photoshop"],
        projectType: "Rendering + stampa prototipo",
        techniquesUsed: ["UV mapping", "Material setup", "Lighting", "Compositing"],
        liveUrl: null,
        githubUrl: null,
        downloadUrl: null,
        stlUrl: null,
        features: [
            "Render fotorealistici per approvazione cliente",
            "Prototipo fisico per test ergonomici",
            "Allineamento tra resa digitale e output reale",
        ],
        wireframeImage: {
            src: "https://picsum.photos/seed/stampa-project-03-wire/1200/800",
            alt: "Wireframe mockup prodotto",
        },
        breakdown: [
            "Setup scena e materiali",
            "Produzione render per revisione",
            "Stampa prototipo e confronto con render",
            "Correzioni finali per versione definitiva",
        ],
        processPhotos: [
            {
                src: "https://picsum.photos/seed/stampa-project-03-process-1/800/600",
                alt: "Foto processo confronto render e pezzo",
            },
            {
                src: "https://picsum.photos/seed/stampa-project-03-process-2/800/600",
                alt: "Foto processo rifinitura mockup",
            },
        ],
        versions: ["v1 shape base", "v2 dettaglio materiali", "v3 presentazione cliente"],
        printType: "FDM + Resina",
        material: "PLA per base + resina standard per dettagli",
        printer: "Prusa MK4 + Elegoo Saturn 3",
        slicer: "Cura + Lychee",
        printTime: "11h 10m",
        dimensions: "245 x 180 x 95 mm",
        layerHeight: "0.16 mm (FDM) / 0.05 mm (resina)",
        supports: "Si, solo su parti critiche",
        printIssues: "Differenze di finitura tra parti FDM e resina, risolte con post-processing combinato.",
        postProcessing: "Primer unificante, levigatura selettiva e verniciatura finale.",
        role: "3D artist e prototipazione",
        challenges:
            "La difficolta maggiore e stata allineare aspetto del materiale renderizzato e comportamento reale del prototipo stampato.",
        developmentTime: "8 giorni",
        difficulty: "Media",
        status: "In corso",
        goal:
            "Ridurre gli errori prima della produzione finale con una validazione estetica e funzionale anticipata.",
        learned:
            "Ho migliorato corrispondenza tra lookdev digitale, stampa reale e aspettative del cliente.",
    },
];

const stampaMaterialGroups = [
    {
        title: "Filamento",
        items: [stampaFilamentoProject, stampaFilamentoProjectTwo],
    },
    {
        title: "Resina",
        items: [stampaResinaProject, stampaResinaProjectTwo],
    },
];

const stampaProjectTheme = {
    "--project-accent": "var(--stampa3D)",
    "--project-accent-soft": "var(--Softstampa3D)",
};

export default function Stampa3D() {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedMaterialProject, setSelectedMaterialProject] = useState(null);

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
                    className="sectionProgettiStampa"
                    variant="right"
                >
                    <h5>PROGETTI IN EVIDENZA</h5>
                    <h1>
                        <strong>Selezione lavori</strong>
                    </h1>
                    <div className="stampaProjectsLayout">
                        <ProjectHighlightsCarousel
                            projects={stampaHighlightedProjects}
                            accentStyle={stampaProjectTheme}
                            ariaLabel="Carosello progetti stampa 3D in evidenza"
                            className="projectHighlightsCarouselCompact"
                        />

                        <aside className="stampaMaterialColumn" style={stampaProjectTheme}>
                            <div className="stampaMaterialColumnHeader">
                                <h4>Stampa</h4>
                            </div>

                            <div className="stampaMaterialColumnGrid">
                                {stampaMaterialGroups.map((group) => (
                                    <section key={group.title} className="stampaMaterialGroup">
                                        <h5 className="stampaMaterialGroupTitle">{group.title}</h5>
                                        <div className="stampaMaterialSelectorList" role="listbox" aria-label={`Progetti ${group.title.toLowerCase()}`}>
                                            {group.items.map((project) => {
                                                const isActive = selectedMaterialProject?.title === project.title;

                                                return (
                                                    <button
                                                        key={project.title}
                                                        type="button"
                                                        className={isActive ? "stampaMaterialSelectorItem isActive" : "stampaMaterialSelectorItem"}
                                                        onClick={() => setSelectedMaterialProject(project)}
                                                        aria-pressed={isActive}
                                                    >
                                                        <span className="stampaMaterialCardLabel">{project.category}</span>
                                                        <h5>{project.title}</h5>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </aside>
                    </div>
                </ScrollRevealBlock>
            </section>

            <section>
                <ScrollRevealBlock
                    className="contenitoreCertificazioni certificazioniTemaStampa"
                    variant="right"
                >
                    <div className="titoliCertificazioni">
                        <h5>CERTIFICAZIONI</h5>
                        <h2>
                            Percorso <strong>formativo</strong>
                        </h2>
                        <p>
                            Percorso tecnico su modellazione Blender, rendering e
                            prototipazione per stampa 3D FDM/SLA.
                        </p>
                    </div>

                    <CircularGallery
                        items={stampaCertificationItems}
                        borderRadius={0.04}
                        scrollSpeed={1.5}
                        scrollEase={0.09}
                        bend={0}
                    />
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

            <ProjectModal
                key={selectedMaterialProject?.title ?? "stampa-material-modal"}
                project={selectedMaterialProject}
                isOpen={Boolean(selectedMaterialProject)}
                onClose={() => setSelectedMaterialProject(null)}
                accentStyle={stampaProjectTheme}
            />
        </>
    );
}