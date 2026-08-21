import editorialPortrait from '@/assets/aurea-editorial-portrait.jpg';
import naturalSkinDetail from '@/assets/aurea-natural-skin-detail.jpg';
import heroPortrait from '@/assets/hero-portrait.jpg';
import praxisPortrait from '@/assets/praxis-portrait.png';
import weissesSchlossRestored from '@/assets/Weisses_Schloss_1893_Restored.png';
import weissesSchlossHaupt169 from '@/assets/Weisses_Schloss_Haupt_16_9.png';
import doctorBarbaraPhoto from '@/assets/doctor-barbara.png';
import doctorNadinePhoto from '@/assets/doctor-nadine.png';

export const IMAGES = {
  hero: heroPortrait,
  editorialPortrait,
  naturalSkinDetail,
  praxis2: praxisPortrait,
  zurich: weissesSchlossHaupt169,
  zurich2: weissesSchlossRestored,
  interior: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/8ccbab271_hero_bild_03_darker.jpg',
  mimic: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/9147ba321_generated_image.png',
  filler: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/aa2efde7c_generated_image.png',
  bio: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/95843c29a_generated_image.png',
  skinbooster: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/178c12a52_generated_image.png',
  practice: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/a7a817d18_generated_image.png',
  experience: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/c271a0b69_generated_image.png',
  contact: 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/9db4a66c8_generated_image.png',
};

export const DEFAULT_DOCTORS = [
  {
    id: 'doc-barbara-matziris',
    name: 'Barbara Matziris',
    title: 'Ärztliche Leitung · Fachärztin · Ästhetische Medizin',
    specialty: 'Ärztliche Leitung · Fachärztin · Ästhetische Medizin',
    specialty_en: 'Medical Director · Specialist Physician · Aesthetic Medicine',
    bio_de: `Barbara Matziris verfügt über mehr als zehn Jahre Erfahrung in der minimalinvasiven ästhetischen Medizin. Bereits seit 2010 ist sie ärztlich im Bereich ästhetischer Behandlungen tätig. Ihre berufliche Laufbahn führte sie durch Deutschland, die Schweiz und Togo – von der dermatologischen Praxis über eine eigene Praxis für ästhetische Medizin bis hin zur leitenden ärztlichen Tätigkeit in einer ästhetischen Klinik in Winterthur.

Im Mittelpunkt ihres Behandlungsansatzes steht eine sorgfältige Analyse von Gesichtsanatomie, Proportionen und Mimik. Ihr Ziel ist nicht die Veränderung eines Gesichts, sondern eine individuell abgestimmte Behandlung, die Frische und Harmonie unterstützt und gleichzeitig die persönliche Ausdruckskraft bewahrt.

Ihre Expertise in der ästhetischen Medizin vertiefte Barbara Matziris unter anderem durch zertifizierte Fortbildungen der Deutschen Gesellschaft für Ästhetische Botulinum- und Fillertherapie (DGBT) in den Bereichen Botulinumtoxin und Filler.

Mit ihrer offenen und persönlichen Art legt sie besonderen Wert auf verständliche Beratung, realistische Erwartungen und Behandlungskonzepte, die medizinisch sinnvoll und ästhetisch zurückhaltend sind. Als ärztliche Leitung von Aurea Aesthetics verantwortet sie die medizinischen Standards der Klinik und begleitet Patientinnen und Patienten von der ersten Beratung bis zur Nachkontrolle.`,
    bio_en: `Barbara Matziris brings over ten years of experience in minimally invasive aesthetic medicine. Active as a physician in aesthetic treatments since 2010, her career path has taken her through Germany, Switzerland, and Togo — from dermatological practice to running her own aesthetic medicine clinic and serving as lead physician at an aesthetic clinic in Winterthur.

At the core of her treatment philosophy is a precise analysis of facial anatomy, proportions, and expression. Her goal is not to change a face, but to provide individually tailored treatments that enhance freshness and harmony while preserving natural expressiveness.

She deepened her expertise in aesthetic medicine through certified training with the German Society for Aesthetic Botulinum and Filler Therapy (DGBT) in botulinum toxin and fillers.

With her open and personal approach, she places great importance on clear consultation, realistic expectations, and treatment concepts that are medically sound and aesthetically restrained. As Medical Director of Aurea Aesthetics, she oversees the clinic's medical standards and guides patients from initial consultation to follow-up.`,
    qualifications: [
      'Fachärztin für Allgemeinmedizin, Deutschland',
      'Praktische Ärztin, Schweiz',
      'Studium der Humanmedizin · Universität zu Köln',
      'Ärztliche Approbation · Deutschland',
      'Mehr als zehn Jahre Erfahrung in der ästhetischen Medizin',
      'Eigene Praxis für ästhetische Medizin · 2018–2026',
      'Leitende Ärztin einer ästhetischen Klinik in Winterthur · 2025–2026',
      'Zertifizierte DGBT-Fortbildungen · Botulinumtoxin & Filler',
    ],
    qualifications_en: [
      'Specialist in General Medicine, Germany',
      'Practicing Physician, Switzerland',
      'Medical Studies · University of Cologne',
      'Medical Licensure · Germany',
      'Over ten years of experience in aesthetic medicine',
      'Private Practice for Aesthetic Medicine · 2018–2026',
      'Lead Physician at an Aesthetic Clinic in Winterthur · 2025–2026',
      'Certified DGBT Training · Botulinum Toxin & Fillers',
    ],
    focus: [
      'Faltenbehandlung',
      'Hyaluronsäure',
      'Biostimulation',
      'Skin Quality',
      'Individuelle Behandlungskonzepte',
    ],
    focus_en: [
      'Wrinkle Treatment',
      'Hyaluronic Acid',
      'Biostimulation',
      'Skin Quality',
      'Individual Treatment Concepts',
    ],
    languages: 'Deutsch · Englisch · Französisch · Griechisch',
    languages_en: 'German · English · French · Greek',
    quote: '„Eine gute ästhetische Behandlung verändert nicht den Menschen. Sie unterstützt das, was bereits zu ihm gehört.“',
    quote_en: '"A good aesthetic treatment does not change a person. It supports what already belongs to them."',
    photo_url: doctorBarbaraPhoto,
    order: 1,
  },
  {
    id: 'doc-nadine-dovi-akue',
    name: 'Nadine Dovi-Akué',
    title: 'Fachärztin für Augenheilkunde, FEBO · Ästhetische Medizin',
    specialty: 'Fachärztin für Augenheilkunde, FEBO · Ästhetische Medizin',
    specialty_en: 'Specialist in Ophthalmology, FEBO · Aesthetic Medicine',
    bio_de: `Nadine Dovi-Akué verbindet ihre langjährige fachärztliche Erfahrung in der Augenheilkunde mit einer spezialisierten Ausbildung und praktischen Tätigkeit in der ästhetischen Medizin.

Als Fachärztin für Augenheilkunde und FEBO verfügt sie über ein besonders präzises Verständnis der komplexen anatomischen Strukturen des Gesichts und insbesondere der sensiblen Augenregion. Sie absolvierte sowohl die deutsche als auch die europäische Facharztprüfung für Augenheilkunde.

Ihre Expertise in der ästhetischen Medizin vertiefte sie durch ein Europäisches Hochschuldiplom für ästhetische und rekonstruktive Injektionen des Gesichts an der Université Paris Cité, ergänzt durch eine Weiterbildung in Mesotherapie.

Neben ihrer langjährigen Tätigkeit als Augenärztin ist Nadine Dovi-Akué auch praktisch in der ästhetischen Medizin tätig. Seit 2025 sammelt sie weitere Behandlungserfahrung als Ärztin in einer auf ästhetische Medizin spezialisierten Klinik in Deutschland.

Ihr Behandlungsansatz ist von medizinischer Präzision und ästhetischer Zurückhaltung geprägt. Sie betrachtet jedes Gesicht individuell und legt besonderen Wert auf natürliche Proportionen, feine Veränderungen und den Erhalt der persönlichen Mimik.

Ihre fachärztliche Erfahrung in der Augenheilkunde ermöglicht ihr dabei eine besonders differenzierte Betrachtung der sensiblen Augenregion und der umliegenden anatomischen Strukturen.

Ihr Ziel sind harmonische Ergebnisse, die präzise geplant sind und dennoch selbstverständlich wirken.`,
    bio_en: `Nadine Dovi-Akué combines her extensive specialist experience in ophthalmology with specialized training and practical practice in aesthetic medicine.

As a specialist in ophthalmology and FEBO, she possesses an exceptionally precise understanding of the complex anatomical structures of the face, particularly the delicate eye area. She completed both the German and European specialist board examinations in ophthalmology.

She deepened her expertise in aesthetic medicine through a European University Diploma in Aesthetic and Reconstructive Facial Injections from Université Paris Cité, supplemented by advanced training in mesotherapy.

Alongside her long-standing work as an ophthalmologist, Nadine Dovi-Akué is actively practicing aesthetic medicine. Since 2025, she has gained further clinical experience at a clinic specialized in aesthetic medicine in Germany.

Her treatment philosophy is characterized by medical precision and aesthetic restraint. She views each face individually, placing particular emphasis on natural proportions, subtle enhancements, and preserving personal expressions.

Her specialist background in ophthalmology allows for a highly nuanced assessment of the eye region and surrounding facial structures.

Her goal is harmonious, naturally elegant results that are meticulously planned and feel effortless.`,
    qualifications: [
      'Fachärztin für Augenheilkunde',
      'FEBO · Europäische Facharztprüfung für Augenheilkunde',
      'Deutsche Facharztprüfung für Augenheilkunde',
      'Studium der Humanmedizin · Universität des Saarlandes / Universität Greifswald',
      'Europäisches Hochschuldiplom für ästhetische und rekonstruktive Injektionen des Gesichts · Université Paris Cité',
      'Zusatzqualifikation Mesotherapie',
      'Praktische ärztliche Erfahrung in der ästhetischen Medizin · Deutschland',
    ],
    qualifications_en: [
      'Specialist in Ophthalmology',
      'FEBO · European Board Examination in Ophthalmology',
      'German Specialist Examination in Ophthalmology',
      'Medical Studies · Saarland University / University of Greifswald',
      'European University Diploma for Aesthetic & Reconstructive Facial Injections · Université Paris Cité',
      'Additional Qualification in Mesotherapy',
      'Practical Clinical Experience in Aesthetic Medicine · Germany',
    ],
    focus: [
      'Faltenbehandlung',
      'Hyaluronsäure',
      'Ästhetik der Augenregion',
      'Mesotherapie',
      'Individuelle Gesichtsanalyse',
    ],
    focus_en: [
      'Wrinkle Treatment',
      'Hyaluronic Acid',
      'Aesthetic Eye Region',
      'Mesotherapy',
      'Individual Facial Analysis',
    ],
    languages: 'Deutsch · Französisch · Englisch · Griechisch',
    languages_en: 'German · French · English · Greek',
    quote: '„Präzision bedeutet für mich, genau zu erkennen, was ein Gesicht braucht – und ebenso, was nicht.“',
    quote_en: '"Precision for me means recognizing exactly what a face needs — and equally what it does not."',
    photo_url: doctorNadinePhoto,
    order: 2,
  },
];

export const LOGO = '/aurea_logo_transparent_2.png';
export const LOGO_ABSOLUTE = 'https://media.base44.com/images/public/6a6b131f6cc49b3ee60e929e/ab0e6c25c_aurea_logo_transparent_2.png';

export const DEFAULTS = {
  practice_name: 'Aurea Aesthetics AG',
  street: 'Tödistrasse 1',
  postal_code: '8002',
  city: 'Zürich',
  district: 'Zürich Enge',
};

export const GEO_AREAS = [
  'Zürich Enge', 'Zürich City', 'Wollishofen', 'Kilchberg', 'Rüschlikon',
  'Thalwil', 'Zollikon', 'Küsnacht', 'Erlenbach', 'Adliswil',
  'Zumikon', 'Uitikon', 'Birmensdorf', 'Wädenswil', 'Horgen',
];

export const PROCESS = {
  de: [
    { n: '01', title: 'Terminanfrage', text: 'Sie senden Ihre Anfrage. Wir melden uns diskret und persönlich zurück, um einen passenden Termin zu finden.' },
    { n: '02', title: 'Persönliche Beratung', text: 'Ausführliche Analyse Ihrer Anatomie, Ihrer Wünsche und Ihrer Erwartungen — ohne Zeitdruck, ohne Verkaufsdruck.' },
    { n: '03', title: 'Behandlungsplanung', text: 'Wir entwickeln einen individuellen Plan mit klarer Aufklärung über Möglichkeiten, Grenzen und Kosten.' },
    { n: '04', title: 'Behandlung & Nachsorge', text: 'Präzise Durchführung und strukturierte Nachkontrolle. Persönliche Kontinuität von der ersten bis zur letzten Begegnung.' },
  ],
  en: [
    { n: '01', title: 'Appointment request', text: 'You send your request. We respond discreetly and personally to find a suitable appointment.' },
    { n: '02', title: 'Personal consultation', text: 'A thorough analysis of your anatomy, your wishes, and your expectations — without time pressure, without sales pressure.' },
    { n: '03', title: 'Treatment planning', text: 'We develop an individual plan with clear explanation of possibilities, limits, and costs.' },
    { n: '04', title: 'Treatment & aftercare', text: 'Precise execution and structured follow-up. Personal continuity from the first to the last encounter.' },
  ],
};

export const PILLARS = {
  de: [
    { title: 'Privatsphäre & Diskretion', text: 'Ein diskretes Refugium im Weissen Schloss direkt am Zürichsee. Keine Wartezimmer, sondern private Suiten für vollkommene Ruhe.' },
    { title: 'Bespoke Longevity', text: 'Jedes Gesicht ist einzigartig. Wir kuratieren individuelle Behandlungspläne und moderne Biostimulations-Konzepte.' },
    { title: '1:1 VIP-Betreuung', text: 'Grosszügige Zeitkontingente für jeden Patienten — höchste ärztliche Sorgfalt und entspanntes Spa-Ambiente ohne Hektik.' },
    { title: 'Ärztliche Kontinuität', text: 'Ihre persönliche Fachärztin begleitet Sie durchgehend — von der ersten Analyse bis zur massgeschneiderten Nachsorge.' },
  ],
  en: [
    { title: 'Privacy & Discretion', text: 'A private sanctuary at the historic Weisses Schloss on Lake Zurich. Private suites ensuring complete peace and confidentiality.' },
    { title: 'Bespoke Longevity', text: 'Every face is unique. We curate tailored treatment rituals and cutting-edge biostimulation and skin longevity concepts.' },
    { title: '1:1 Concierge Care', text: 'Generous, unhurried appointments for each patient — combining top-tier medical precision with serene luxury.' },
    { title: 'Physician Continuity', text: 'Your personal specialist physician accompanies you exclusively from initial analysis to refined follow-up care.' },
  ],
};

export const GENERAL_FAQS = {
  de: [
    { q: 'Wie läuft die erste Beratung ab?', a: 'Die Erstberatung dauert in der Regel 45 bis 60 Minuten in privater Suite-Atmosphäre. Wir analysieren Ihre Gesichtsanatomie, hören Ihre Wünsche und entwickeln ein massgeschneidertes, natürliches Behandlungskonzept.' },
    { q: 'Sind die Behandlungen schmerzhaft?', a: 'Minimalinvasive Verfahren werden dank feinsten Instrumenten, sanften Techniken und wirksamen lokalen Betäubungen als sehr schonend und angenehm empfunden.' },
    { q: 'Wann sehe ich Ergebnisse?', a: 'Hyaluron-Filler zeigen sofortige Konturierung, mimische Entspannung setzt nach 3 bis 10 Tagen ein, und regenerative Biostimulatoren entfalten ihre Wirkung kontinuierlich über mehrere Wochen.' },
    { q: 'Werden Kosten von der Krankenkasse übernommen?', a: 'Ästhetisch-medizinische Behandlungen sind in der Schweiz exklusive Selbstzahlerleistungen. Bei medizinischer Indikation prüfen wir die Situation individuell.' },
    { q: 'Wie diskret ist die Praxis gestaltet?', a: 'Höchste Diskretion ist unser Leitprinzip. Wir empfangen Sie ausschliesslich nach vorheriger Terminvereinbarung in privaten Räumlichkeiten im Weissen Schloss — ohne Wartezeiten oder Begegnungen mit anderen Patienten.' },
    { q: 'Was zeichnet Aurea Aesthetics als VIP-Praxis aus?', a: 'Die seltene Verbindung aus fundierter Facharzt-Expertise, modernster regenerativer Longevity-Medizin und einem privaten, luxuriösen Wohlfühlambiente direkt am Zürichsee.' },
  ],
  en: [
    { q: 'How does the first consultation work?', a: 'The initial consultation lasts 45 to 60 minutes in a private suite setting. We analyze your facial anatomy, discuss your personal goals, and curate a bespoke, natural aesthetic plan.' },
    { q: 'Are the treatments painful?', a: 'With ultra-fine instruments, gentle techniques, and effective topical anesthesia, treatments are very gentle and comfortable.' },
    { q: 'When will I see results?', a: 'Hyaluronic fillers show immediate refinement, expression softening develops within 3 to 10 days, and regenerative biostimulators unfold their rejuvenating effect over several weeks.' },
    { q: 'Are costs covered by health insurance?', a: 'Aesthetic medicine treatments are private self-pay services in Switzerland. In cases of specific medical indication, we assess the situation individually.' },
    { q: 'How discreet is the clinic setting?', a: 'Absolute privacy is paramount. We welcome guests exclusively by prior appointment in private suites at the Weisses Schloss — ensuring no waiting rooms or encounters with other clients.' },
    { q: 'What defines Aurea Aesthetics as a premier aesthetic destination?', a: 'The harmonious union of specialist physician expertise, cutting-edge longevity and biostimulation medicine, and an exclusive, tranquil sanctuary overlooking Lake Zurich.' },
  ],
};

export const TREATMENT_GROUPS = {
  de: [
    { key: 'haut', label: 'Hautqualität & Longevity', text: 'Innovative Skinbooster, Polynukleotide & Biostimulatoren für tiefenwirksame Zellregeneration und jugendliche Strahlkraft.' },
    { key: 'injektion', label: 'Feine Konturierung & Hyaluron', text: 'Präzise Lippen-, Jawline- und Gesichtsharmonisierung mit natürlichen Hyaluron-Fillern & Hylase-Korrekturen.' },
    { key: 'biostimulation', label: 'Mimik-Balance & Botulinum', text: 'Gezielte Entspannung mimischer Fältchen, Brow Lift und Masseter-Behandlung für einen ausgeruhten Ausdruck.' },
  ],
  en: [
    { key: 'haut', label: 'Skin Quality & Longevity', text: 'Advanced skin boosters, polynucleotides & biostimulators for cellular regeneration and luminous radiance.' },
    { key: 'injektion', label: 'Refined Contouring & Hyaluron', text: 'Precise lip, jawline, and facial harmonisation with natural hyaluronic fillers & Hylase corrections.' },
    { key: 'biostimulation', label: 'Mimic Balance & Botulinum', text: 'Targeted relaxation of expression lines, brow lift, and masseter treatment for a refreshed, rested look.' },
  ],
};

export const VALUES = {
  de: [
    { title: 'Medizinische Exzellenz', text: 'Fundierte Facharzt-Expertise, präzise Anatomie-Kenntnisse und höchste Sicherheitsstandards bilden das Fundament jeder Behandlung.' },
    { title: 'Natürliche Eleganz', text: 'Vollendete Ästhetik durch bewusste Zurückhaltung — Ihr Aussehen wirkt erholt, frisch und unverwechselbar authentisch.' },
    { title: 'Diskretes Refugium', text: 'Exklusive Privatsphäre und private Suiten im Weissen Schloss direkt am Zürichsee ohne Wartezimmeratmosphäre.' },
    { title: 'Bespoke Longevity', text: 'Ganzheitliche Hautverjüngung und Zellerneuerung mit modernen Biostimulatoren wie Polynukleotiden, HArmonyCa und Profhilo.' },
  ],
  en: [
    { title: 'Medical Excellence', text: 'Rigorous specialist physician expertise, in-depth anatomical mastery, and uncompromised safety standards at every step.' },
    { title: 'Natural Elegance', text: 'Refined beauty through understated precision — results that appear rested, radiant, and unmistakably authentic.' },
    { title: 'Discreet Sanctuary', text: 'Exclusive privacy and dedicated suites at the historic Weisses Schloss on Lake Zurich with zero waiting room exposure.' },
    { title: 'Bespoke Longevity', text: 'Holistic skin rejuvenation and cellular renewal using cutting-edge biostimulators such as polynucleotides, HArmonyCa, and Profhilo.' },
  ],
};

export const ARRIVAL = {
  de: [
    { label: 'S-Bahn & Zug', text: 'Bahnhof Zürich Enge (S2, S8, S24) in 3 Gehminuten. Schnelle Direktverbindungen zum Zürich Hauptbahnhof (HB) und Bahnhof Stadelhofen.' },
    { label: 'Tram, Bus & Schiff', text: 'Haltestelle Rentenanstalt (Tram 5, Bus) in 2 Gehminuten. Bürkliplatz (Tram, Bus, Zürichsee-Schifffahrt) in ca. 5–7 Gehminuten. Haltestellen Seestrasse und Bahnhof Enge direkt vor Ort.' },
    { label: 'Auto & Parken', text: 'Zufahrt über Seestrasse oder General-Wille-Strasse. Parkhaus Park Hyatt, Parkhaus Enge sowie öffentliche Parkplätze in unmittelbarer Umgebung.' },
    { label: 'Vom Flughafen', text: 'Ab Zürich Flughafen rund 20–25 Minuten mit der S-Bahn über den Hauptbahnhof direkt zum Bahnhof Enge.' },
  ],
  en: [
    { label: 'Train & S-Bahn', text: 'Zurich Enge station (S2, S8, S24) within 3 minutes walk. Fast direct connections to Zurich Main Station (HB) and Stadelhofen station.' },
    { label: 'Tram, Bus & Boat', text: 'Rentenanstalt stop (Tram 5, Bus) 2 minutes walk. Bürkliplatz (Tram, Bus, Lake Zurich ferry) 5–7 minutes walk. Stops along Seestrasse and at Enge station nearby.' },
    { label: 'Car & Parking', text: 'Access via Seestrasse or General-Wille-Strasse. Park Hyatt parking, Enge car park, and public parking in the immediate vicinity.' },
    { label: 'From the airport', text: 'About 20–25 minutes from Zurich Airport by S-Bahn via the main station directly to Enge station.' },
  ],
};
