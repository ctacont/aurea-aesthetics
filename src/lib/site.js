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
      'Botulinumtoxin',
      'Hyaluronsäure',
      'Biostimulation',
      'Skin Quality',
      'Individuelle Behandlungskonzepte',
    ],
    focus_en: [
      'Botulinum Toxin',
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
      'Botulinumtoxin',
      'Hyaluronsäure',
      'Ästhetik der Augenregion',
      'Mesotherapie',
      'Individuelle Gesichtsanalyse',
    ],
    focus_en: [
      'Botulinum Toxin',
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
    { title: 'Diskretion', text: 'Ruhige Räume in Zürich. Eine Umgebung, in der Ruhe und persönliche Betreuung den Takt vorgeben.' },
    { title: 'Individuelle Planung', text: 'Jedes Gesicht ist einmalig. Wir arbeiten nicht mit Standardprotokollen.' },
    { title: 'Persönliche Betreuung', text: 'Wir nehmen uns für jeden Patienten ausreichend Zeit, um Ruhe und höchste medizinische Sorgfalt zu gewährleisten.' },
    { title: 'Persönliche Kontinuität', text: 'Dieselbe Ärztin — von der ersten Beratung bis zur Nachkontrolle.' },
  ],
  en: [
    { title: 'Discretion', text: 'Calm rooms in Zurich. An environment where calm and personal care set the pace.' },
    { title: 'Individual planning', text: 'Every face is unique. We do not work with standard protocols.' },
    { title: 'Personal Care', text: 'We dedicate ample time to every patient to ensure calm and the highest medical standard.' },
    { title: 'Personal continuity', text: 'The same physician — from consultation to follow-up.' },
  ],
};

export const GENERAL_FAQS = {
  de: [
    { q: 'Wie läuft die erste Beratung ab?', a: 'Die Erstberatung dauert in der Regel 45 bis 60 Minuten. Wir analysieren Ihre Gesichtsanatomie, hören Ihre Wünsche und erklären offen, was medizinisch sinnvoll ist — und was nicht. Sie erhalten eine schriftliche Übersicht mit Empfehlung und Kosten.' },
    { q: 'Sind die Behandlungen schmerzhaft?', a: 'Die meisten minimalinvasiven Behandlungen werden als gut erträglich beschrieben. Wir verwenden je nach Verfahren betäubende Cremes oder Lokalanästhesie und arbeiten mit feinsten Instrumenten.' },
    { q: 'Wann sehe ich Ergebnisse?', a: 'Das hängt vom Verfahren ab. Hyaluron-Filler zeigen sofort ein Ergebnis, die Behandlung mimischer Falten nach drei bis zehn Tagen, Biostimulatoren nach mehreren Wochen. Auf jeder Behandlungsseite finden Sie konkrete Angaben.' },
    { q: 'Werden Kosten von der Krankenkasse übernommen?', a: 'Ästhetisch-medizinische Behandlungen sind in der Schweiz grundsätzlich Selbstzahlerleistungen und werden nicht von der Grundversicherung übernommen. Bei medizinischer Indikation prüfen wir die Situation individuell.' },
    { q: 'Wie diskret ist die Praxis?', a: 'Diskretion ist ein Grundpfeiler unserer Arbeit. Wir arbeiten ausschliesslich mit Terminvereinbarung, sodass Sie sich nie in einem vollen Wartebereich befinden.' },
    { q: 'Was unterscheidet Aurea Aesthetics von anderen Anbietern?', a: 'Wir behandeln ästhetische Medizin als Medizin — nicht als Kosmetikdienstleistung. Individuelle Anatomie, sorgfältige Aufklärung, natürliche Ergebnisse und persönliche Kontinuität stehen über schnellen Terminen und Aktionspreisen.' },
  ],
  en: [
    { q: 'How does the first consultation work?', a: 'The initial consultation usually lasts 45 to 60 minutes. We analyse your facial anatomy, listen to your wishes, and explain openly what is medically sensible — and what is not. You receive a written summary with recommendations and costs.' },
    { q: 'Are the treatments painful?', a: 'Most minimally invasive treatments are described as well tolerated. Depending on the procedure, we use numbing creams or local anaesthesia and work with the finest instruments.' },
    { q: 'When will I see results?', a: 'This depends on the procedure. Hyaluronic fillers show an immediate result, treatment of mimic wrinkles after three to ten days, biostimulators after several weeks. You will find specific details on each treatment page.' },
    { q: 'Are costs covered by health insurance?', a: 'Aesthetic-medical treatments are self-pay services in Switzerland and are not covered by basic insurance. If there is a medical indication, we review the situation individually.' },
    { q: 'How discreet is the practice?', a: 'Discretion is a cornerstone of our work. We work exclusively by appointment so you never find yourself in a crowded waiting area.' },
    { q: 'What sets Aurea Aesthetics apart from other providers?', a: 'We treat aesthetic medicine as medicine — not as a cosmetic service. Individual anatomy, careful explanation, natural results, and personal continuity take priority over quick appointments and promotional prices.' },
  ],
};

export const TREATMENT_GROUPS = {
  de: [
    { key: 'injektion', label: 'Injektionsbehandlungen', text: 'Präzise Verfahren zur Harmonisierung von Mimik, Volumen und Kontur.' },
    { key: 'biostimulation', label: 'Biostimulation', text: 'Verfahren, die körpereigene Regenerationsprozesse anregen — mit Wirkung über Monate.' },
    { key: 'haut', label: 'Hautqualität', text: 'Behandlungen für Feuchtigkeit, Elastizität und Erscheinungsbild der Haut.' },
  ],
  en: [
    { key: 'injektion', label: 'Injection treatments', text: 'Precise procedures to harmonise expression, volume, and contour.' },
    { key: 'biostimulation', label: 'Biostimulation', text: 'Procedures that stimulate the body’s own regeneration — with effects over months.' },
    { key: 'haut', label: 'Skin quality', text: 'Treatments for moisture, elasticity, and the appearance of the skin.' },
  ],
};

export const VALUES = {
  de: [
    { title: 'Medizin zuerst', text: 'Anamnese, Indikationsstellung, Aufklärung und Nachkontrolle gehören für uns zu jeder ästhetischen Behandlung — ohne Ausnahme.' },
    { title: 'Natürlichkeit', text: 'Ein gutes Ergebnis fällt nicht auf. Es wirkt ausgeruht, harmonisch und unverändert eigen.' },
    { title: 'Aufrichtigkeit', text: 'Wir benennen Grenzen klar und lehnen Behandlungen ab, die keinen medizinischen oder ästhetischen Nutzen bringen.' },
    { title: 'Diskretion', text: 'Terminvereinbarung, ruhige Räume und vertraulicher Umgang mit allen Informationen.' },
  ],
  en: [
    { title: 'Medicine first', text: 'History, indication, informed consent, and follow-up are part of every aesthetic treatment for us — without exception.' },
    { title: 'Naturalness', text: 'A good result does not draw attention. It appears rested, harmonious, and authentically your own.' },
    { title: 'Sincerity', text: 'We state limits clearly and decline treatments that offer no medical or aesthetic benefit.' },
    { title: 'Discretion', text: 'Appointments, calm rooms, and confidential handling of all information.' },
  ],
};

export const ARRIVAL = {
  de: [
    { label: 'S-Bahn', text: 'Bahnhof Zürich Enge — wenige Gehminuten zur Praxis. Anbindung an alle S-Bahn-Linien des Zürcher Verkehrsverbunds.' },
    { label: 'Tram & Bus', text: 'Haltestellen an der Seestrasse und am Bahnhof Enge. Direkte Verbindungen aus der Innenstadt und vom linken Seeufer.' },
    { label: 'Auto', text: 'Zufahrt über die Seestrasse oder die General-Wille-Strasse. Öffentliche Parkhäuser in unmittelbarer Umgebung.' },
    { label: 'Vom Flughafen', text: 'Ab Zürich Flughafen rund 25 Minuten mit der S-Bahn über den Hauptbahnhof.' },
  ],
  en: [
    { label: 'Train', text: 'Zurich Enge station — a few minutes’ walk to the practice. Connections to all S-Bahn lines of the Zurich transport network.' },
    { label: 'Tram & bus', text: 'Stops along Seestrasse and at Enge station. Direct connections from the city centre and the left lakeshore.' },
    { label: 'Car', text: 'Access via Seestrasse or General-Wille-Strasse. Public car parks in the immediate vicinity.' },
    { label: 'From the airport', text: 'About 25 minutes from Zurich Airport by S-Bahn via the main station.' },
  ],
};
