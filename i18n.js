// French is written in index.html; English lives here, keyed by data-i18n.
const EN = {
  'nav.about': 'About',
  'nav.exp': 'Experience',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.edu': 'Education',
  'nav.contact': 'Contact',

  'hero.eyebrow': 'Available for a final-year internship · 4 to 6 months',
  'hero.role': 'Engineering student in <strong>Materials & Process Engineering</strong>',
  'hero.tagline': 'Understanding matter to transform it better — from characterization to quality control, for industrial processes that are more',
  'hero.cta1': 'Contact me',
  'hero.cta2': 'See my journey ↓',
  'hero.loc': '📍 Marrakesh, Morocco',
  'hero.badge1': '<b>2</b> industry internships',
  'hero.badge2': '<b>3</b> technical visits',

  'about.kicker': '01 — About',
  'about.title': 'Where fundamental science meets <em>industry</em>.',
  'about.p1': 'I am an engineering student in Process and Materials Engineering at the Faculty of Sciences and Techniques of Marrakesh. This field fascinates me because it brings together fundamental sciences and practical applications: analyzing and designing industrial processes, and improving the performance of materials.',
  'about.p2': 'I am especially interested in metallurgy and corrosion — understanding how metals and alloys behave in order to make them last longer. My goal: turning raw materials into valuable products efficiently, sustainably and with respect for the environment.',
  'about.quote': 'Serious, motivated and a true team player.',
  'stats.1': 'Internships in industry and laboratory',
  'stats.2': 'Engineering projects',
  'stats.3': 'Volunteer commitments',
  'stats.4': 'Languages spoken',

  'exp.kicker': '02 — Experience',
  'exp.title': 'In the field.',
  'exp.intern': 'Intern',
  'exp.1.date': 'Jul. – Aug. 2026',
  'exp.1.loc': 'Industrial District, Marrakesh',
  'exp.1.sub': 'Soil analysis laboratory',
  'exp.1.list': '<li>Carried out mechanical and physical soil analyses to assess their properties and behavior.</li><li>Performed soil characterization tests, including Atterberg limits and the Proctor test.</li>',
  'exp.1.tags': '<span>Characterization</span><span>Mechanical testing</span><span>Geotechnics</span>',
  'exp.2.date': 'Aug. 2025',
  'exp.2.sub': 'Office Chérifien des Phosphates · Introductory internship',
  'exp.2.list': '<li>Gained a solid understanding of the phosphoric acid manufacturing process and its industrial stages.</li><li>Analyzed corrosion issues and contributed to suitable technical solutions.</li><li>Took part in process optimization studies to improve production efficiency.</li>',
  'exp.2.tags': '<span>Corrosion</span><span>Process engineering</span><span>Optimization</span>',

  'visits.title': 'Technical visits',
  'visits.1.date': 'May 2025',
  'visits.1.sector': 'Aerospace',
  'visits.2.date': 'Nov. 2025',
  'visits.2.name': 'Technical Analysis Laboratory',
  'visits.2.sector': 'Cadi Ayyad Innovation City',
  'visits.3.date': 'Dec. 2025',
  'visits.3.sector': 'Plastics industry',

  'proj.kicker': '03 — Projects',
  'proj.title': 'Engineering projects.',
  'proj.1.title': 'Corrosion of metallic materials',
  'proj.1.desc': 'Study of the corrosion of metallic materials and of protection methods to extend their service life.',
  'proj.1.tags': '<span>Metallurgy</span><span>Electrochemistry</span>',
  'proj.2.title': 'Materials in the automotive industry',
  'proj.2.desc': 'Study of the materials used in the automotive industry and the criteria behind their selection.',
  'proj.2.tags': '<span>Materials</span><span>Automotive</span>',
  'proj.3.title': 'Material for an aerospace structure',
  'proj.3.desc': 'Selection approach for a material suited to an aerospace structure, based on performance, weight and cost criteria.',
  'proj.3.tags': '<span>Materials selection</span><span>Aerospace</span>',
  'proj.4.title': 'Synthesis of Nylon 6,6',
  'proj.4.desc': 'Synthesis and preparation of a polymer material, Nylon 6,6: from the chemical reaction to the final material.',
  'proj.4.tags': '<span>Polymers</span><span>Chemistry</span>',

  'skills.kicker': '04 — Skills',
  'skills.title': 'Toolbox.',
  'skills.charac': 'Characterization & testing',
  'skills.charac.list': '<li>Mechanical characterization</li><li>Thermal characterization</li><li>XRD</li><li>NMR</li><li>IR</li><li>SEM</li><li>TEM</li><li>Dye penetrant</li><li>Ultrasonic</li><li>Radiography</li>',
  'skills.charac.note': 'Non-destructive testing (NDT) and materials analysis techniques.',
  'skills.quality': 'Quality & continuous improvement',
  'skills.quality.list': '<li>Ishikawa (5M)</li><li>5S</li><li>Pareto</li><li>Quality control</li>',
  'skills.software': 'Software',
  'skills.software.list': '<li>OriginPro</li><li>Matlab</li><li>Python</li><li>CES EduPack</li><li>Advanced Excel</li><li>Word</li><li>PowerPoint</li><li>LaTeX</li>',
  'skills.software.note': 'Basic knowledge: CATIA, ANSYS, Power BI.',
  'skills.lang': 'Languages',
  'lang.ar': 'Arabic',
  'lang.ar.lvl': 'Native',
  'lang.fr': 'French',
  'lang.fr.lvl': 'Advanced',
  'lang.en': 'English',
  'skills.soft': 'Soft skills',
  'skills.soft.list': '<li>Teamwork</li><li>Organization</li><li>Communication</li><li>Rigor</li>',

  'edu.kicker': '05 — Education',
  'edu.title': 'Education.',
  'edu.1.title': 'Engineering Degree — Materials & Process Engineering',
  'edu.1.desc': 'Faculty of Sciences and Techniques, Marrakesh · 3rd year in 2026–2027',
  'edu.2.title': 'DEUG — Material Sciences, Chemistry',
  'edu.2.desc': 'Faculty of Sciences Semlalia, Marrakesh',
  'edu.3.title': 'Scientific Baccalaureate — Physics & Chemistry',
  'edu.3.desc': 'Imam El Boukhari High School, Chichaoua · French option',
  'edu.4.title': 'Technician Diploma — Building Electrical Systems',

  'eng.kicker': '06 — Involvement',
  'eng.title': 'Beyond the classroom.',
  'eng.1.date': 'Nov. 2024 — Feb. 2026',
  'eng.1.title': 'General Secretary — IGMP Club',
  'eng.1.desc': 'Organized meetings and wrote minutes, handled administration, coordinated members and external communication, planned events.',
  'eng.2.date': 'Since Feb. 2025',
  'eng.2.desc': 'Social and humanitarian actions, collections and distributions for people in need, charity and educational events.',
  'eng.3.date': 'Jan. 2025 — Feb. 2026',
  'eng.3.desc': 'Youth awareness and engagement projects, organization of educational and civic activities.',
  'eng.4.date': 'Active member',
  'eng.4.desc': 'Member of the communication team.',

  'contact.kicker': '07 — Contact',
  'contact.title': "Let's work <em>together</em>.",
  'contact.lead': "I am looking for a <strong>4 to 6-month final-year internship</strong> in materials, processes, quality or testing. Let's put my curiosity to work on your projects.",
  'contact.copy': 'Copy e-mail address',
  'footer.credit': 'Website by',
};

const I18N_META = {
  fr: {
    title: 'Ghizlane Fakkar — Ingénieure Matériaux & Procédés',
    description: "Portfolio de Ghizlane Fakkar, élève ingénieure en Génie des Matériaux et Procédés à la FST Marrakech. À la recherche d'un stage PFE de 4 à 6 mois.",
    words: ['efficaces', 'durables', 'innovants', 'sûrs'],
    copied: 'Adresse copiée ✓',
  },
  en: {
    title: 'Ghizlane Fakkar — Materials & Process Engineering',
    description: 'Portfolio of Ghizlane Fakkar, engineering student in Materials & Process Engineering at FST Marrakesh. Looking for a 4 to 6-month final-year internship.',
    words: ['efficient', 'sustainable', 'innovative', 'safe'],
    copied: 'Address copied ✓',
  },
};

const FR = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
  FR[el.dataset.i18n] = el.innerHTML;
});

const i18n = {
  lang: 'fr',
  meta() { return I18N_META[this.lang]; },
  t(key) { return (this.lang === 'en' ? EN : FR)[key]; },
  set(lang) {
    this.lang = lang === 'en' ? 'en' : 'fr';
    const dict = this.lang === 'en' ? EN : FR;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const html = dict[el.dataset.i18n];
      if (html !== undefined) el.innerHTML = html;
    });
    document.documentElement.lang = this.lang;
    document.title = this.meta().title;
    document.querySelector('meta[name="description"]').content = this.meta().description;
    document.querySelectorAll('.lang-switch button').forEach(b =>
      b.setAttribute('aria-pressed', b.dataset.lang === this.lang));
    try { localStorage.setItem('lang', this.lang); } catch {}
    document.dispatchEvent(new CustomEvent('langchange'));
  },
};

// Initial language: ?lang=en in the URL, then the saved choice, then the browser's language.
(() => {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch {}
  const fromUrl = new URLSearchParams(location.search).get('lang');
  const browser = (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  const initial = fromUrl || saved || browser;
  if (initial === 'en') i18n.set('en');
})();

document.querySelectorAll('.lang-switch button').forEach(b =>
  b.addEventListener('click', () => i18n.set(b.dataset.lang)));
