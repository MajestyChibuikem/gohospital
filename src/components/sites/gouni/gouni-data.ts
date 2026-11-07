import { InstitutionPageData } from "@/types/institution";

export const GOUNI_DATA: InstitutionPageData = {
  id: "gouni",
  parentOrganization: "Godfrey Okoye University • Unity of Knowledge",
  institutionName: "Godfrey Okoye University Teaching Hospital",
  tagline: "Ntasi Obi ('Comfort of the Heart') • Enugu, Nigeria",
  motto: "Unity of Knowledge — Uniting Faith, Reason & Clinical Compassion",
  sourceUrl: "https://gouni.edu.ng",
  alertBanner: {
    badge: "NTASI OBI • 24/7 EMERGENCY & CARE",
    text: "\"Where Knowledge Heals the Body and Comforts the Heart\" — 24-Hour Accident & Emergency (A&E), 2D Echocardiography, Endoscopy, and Specialist Clinics are open daily at Trans-Ekulu, Enugu.",
    linkLabel: "Review Patient & Visitor Guidelines",
    linkHref: "#visitors-portals",
  },
  utilityLinks: [
    { label: "Request an Appointment", href: "#appointment-modal", highlight: true },
    { label: "Find a Doctor or Specialist", href: "#services-faculties" },
    { label: "24/7 Emergency (A&E)", href: "#teaching-hospital" },
    { label: "Patients & Visitors Guide", href: "#visitors-portals" },
    { label: "Billing, NHIA & HMO", href: "#visitors-portals" },
    { label: "Directions & Hospital Map", href: "#locations" },
  ],
  hero: {
    breadcrumbs: [
      { label: "Godfrey Okoye University (Unity of Knowledge)", href: "/" },
      { label: "Godfrey Okoye University Teaching Hospital (Ntasi Obi)", href: "/" },
    ],
    title: "Godfrey Okoye University Teaching Hospital",
    subtitle:
      "Rooted in Godfrey Okoye University's founding motto—\"Unity of Knowledge\"—and our timeless hospital creed, \"Ntasi Obi\" (Comfort of the Heart), GOUNITH unites faith and reason, bedside compassion, 24/7 emergency and trauma care, and clinical medical training in the heart of Enugu.",
    address:
      "Ntasi Obi Specialist Hospital Complex, Enugu-Onitsha Expressway, Trans-Ekulu, Enugu 400001, Nigeria",
    phone: "+234 913 427 3215",
    secondaryContact:
      "Emergency Triage & Patient Inquiries: 07061756730 • 09121767243 • info@gouni.edu.ng",
    hoursBadge: "Emergency Room (A&E): Open 24/7 • Visiting Hours: 8:00 a.m. – 9:00 p.m. Daily",
    imageSrc: "/sites/gouni/teaching-hospital.jpg",
    imageAlt:
      "Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi) main entrance and outpatient complex in Trans-Ekulu, Enugu",
    actions: [
      {
        label: "Request an Appointment",
        sublabel: "Schedule a specialist consultation, 2D Echo, Endoscopy, or checkup",
        href: "#appointment-modal",
        primary: true,
        actionType: "modal-appointment",
      },
      {
        label: "Find a Doctor or Clinical Unit",
        sublabel: "Search consultant physicians, surgeons, paediatricians & OB/GYN",
        href: "#services-faculties",
        actionType: "anchor",
      },
      {
        label: "Directions & Hospital Map",
        sublabel: "Trans-Ekulu Hospital Complex, 24/7 A&E Entrance & Parking",
        href: "#locations",
        actionType: "anchor",
      },
      {
        label: "Patients & Visitors Guide",
        sublabel: "Visiting hours, inpatient stay, NHIA/HMO insurance & billing",
        href: "#visitors-portals",
        actionType: "anchor",
      },
    ],
  },
  overview: {
    eyebrow: "Unity of Knowledge • Ntasi Obi ('Comfort of the Heart')",
    heading: "Where Epistemic Dialogue, Faith & Reason Meet Clinical Healing",
    leadParagraph:
      "Guided by Godfrey Okoye University's motto—\"Unity of Knowledge\"—and the emblem of the Heart, the Clay Pot, and the Open Book, Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi) brings together Christian compassion, African hospitality, and modern medical science.",
    bodyParagraphs: [
      "At GOUNI, we believe that true healing requires the unity of knowledge: no medical specialty exists in isolation from the whole human person—body, mind, and spirit. Strategically located in the Trans-Ekulu and Thinkers Corner axis of Enugu, GOUNITH serves as both a premier tertiary referral hospital for South-East Nigeria and the flagship clinical teaching hospital of the Godfrey Okoye University College of Medicine.",
      "Powered by a decentralized 24-hour solar energy infrastructure across the green hills of Enugu, the hospital delivers uninterrupted 24/7 Accident & Emergency resuscitation, modular surgical theatres, diagnostic radiology, medical laboratory services, non-invasive cardiology (2D Echocardiography), upper and lower GI endoscopy, maternal-child care, and molecular DNA diagnostics.",
    ],
    calloutBox: {
      badge: "The GOUNI Creed & Clinical Distinction",
      title: "\"Excel in Learning, Character & Clinical Compassion\"",
      subtitle:
        "Inspired by our crest—the Heart of Love, the Vessel of Heritage, and the Book of Science under the Green Hills of Enugu:",
      accolades: [
        {
          title: "\"Ntasi Obi\" — 24/7 Comfort of the Heart & Emergency Care",
          detail:
            "Round-the-clock emergency physicians, ambulance triage, surgical intervention, and 24-hour blood bank, laboratory, and radiology support.",
        },
        {
          title: "\"Unity of Knowledge\" — Bedside Epistemic Dialogue",
          detail:
            "Multidisciplinary collaboration uniting Cardiology (2D Echo), Endoscopy, Neurosurgery, Paediatrics, and Obstetrics with holistic patient care.",
        },
        {
          title: "Teaching Hospital of the GOUNI College of Medicine",
          detail:
            "Forming outstanding doctors and nurses who excel in clinical learning, ethical character, and service to humanity.",
        },
        {
          title: "Global Science — Cold Spring Harbor Lab DNA Partnership",
          detail:
            "Integrated with GOUNI's Centre for DNA Forensics (CeDFoCI), uniting international genomic science with local clinical diagnostics.",
        },
      ],
      ctaLabel: "Explore All Medical Specialties & Clinics",
      ctaHref: "#services-faculties",
    },
  },
  guidesSection: {
    eyebrow: "Patients & Visitors Guide",
    heading: "Planning Your Visit or Stay at GOUNITH",
    subheading:
      "Everything patients, families, and care partners need before arriving at Godfrey Okoye University Teaching Hospital in Trans-Ekulu, Enugu.",
    cards: [
      {
        id: "appointments-referrals",
        badge: "Outpatient Care",
        title: "Appointments & Specialist Referrals",
        description:
          "Book a consultation with our consultant physicians, surgeons, cardiologists, obstetricians, or paediatricians, or bring a referral from your primary care clinic.",
        bullets: [
          { label: "Book a Specialist Outpatient Consultation", href: "#appointment-modal" },
          { label: "Direct Booking for 2D Echo, Ultrasound & Endoscopy", href: "#teaching-hospital" },
          { label: "Pre-Employment, Executive & Antenatal Checkups", href: "#services-faculties" },
        ],
        ctaLabel: "Request an Appointment",
        ctaHref: "#appointment-modal",
        iconName: "calendar",
      },
      {
        id: "emergency-trauma-care",
        badge: "Urgent & Critical Care",
        title: "24/7 Accident & Emergency (A&E)",
        description:
          "Our Accident & Emergency Department at Trans-Ekulu is staffed 24 hours a day by emergency physicians, trauma nurses, and on-call surgical and medical teams.",
        bullets: [
          { label: "Immediate Emergency Triage & Resuscitation Bay", href: "#locations" },
          { label: "24/7 Emergency Laboratory, Blood Bank & Digital X-Ray", href: "#services-faculties" },
          { label: "Emergency Hotline: +234 913 427 3215", href: "tel:+2349134273215" },
        ],
        ctaLabel: "View Emergency Directions",
        ctaHref: "#locations",
        iconName: "stethoscope",
      },
      {
        id: "visiting-hours-guidelines",
        badge: "Care Partners & Family",
        title: "Visiting Hours & Ward Guidelines",
        description:
          "We welcome family members and care partners as essential members of the healing process while maintaining a quiet, infection-safe environment for all inpatients.",
        bullets: [
          { label: "General Ward Visiting Hours: 8:00 a.m. – 9:00 p.m. Daily", href: "#about" },
          { label: "Maternity, Neonatal (SCBU) & Post-Op Recovery Protocols", href: "#services-faculties" },
          { label: "Pastoral Care, Hospital Chapel & Family Support", href: "#about" },
        ],
        ctaLabel: "Read Visitor Policies",
        ctaHref: "#about",
        iconName: "users",
      },
      {
        id: "billing-insurance-nhia",
        badge: "Billing & Insurance",
        title: "NHIA, HMO Insurance & Hospital Billing",
        description:
          "GOUNITH provides transparent hospital billing and partners with national and private health insurance providers so patients can access timely, affordable care.",
        bullets: [
          { label: "National Health Insurance Authority (NHIA) Desk", href: "#visitors-portals" },
          { label: "Accredited Private HMOs & Corporate Medical Retainers", href: "#visitors-portals" },
          { label: "Itemized Inpatient & Diagnostic Fee Estimates", href: "#appointment-modal" },
        ],
        ctaLabel: "Inquire About Insurance Coverage",
        ctaHref: "#appointment-modal",
        iconName: "credit-card",
      },
      {
        id: "inpatient-stay-amenities",
        badge: "During Your Stay",
        title: "Inpatient Wards, Pharmacy & Amenities",
        description:
          "Our inpatient rooms—ranging from private executive suites to specialized medical, surgical, maternity, and paediatric wards—are backed by 24/7 solar power.",
        bullets: [
          { label: "Private, Semi-Private & General Inpatient Wards", href: "#locations" },
          { label: "24-Hour Hospital Pharmacy & Clinical Nutrition", href: "#services-faculties" },
          { label: "Round-the-Clock Security & Patient Escort Service", href: "#locations" },
        ],
        ctaLabel: "Explore Hospital Facilities",
        ctaHref: "#locations",
        iconName: "shield-check",
      },
      {
        id: "medical-records-diagnostics",
        badge: "Results & Documentation",
        title: "Medical Records, Lab & Imaging Reports",
        description:
          "Access verified diagnostic laboratory results, radiology imaging films, discharge summaries, medical fitness certificates, and immunization records.",
        bullets: [
          { label: "Laboratory, Histopathology & Blood Chemistry Reports", href: "#services-faculties" },
          { label: "2D Echocardiography, ECG & Radiology Imaging Reports", href: "#teaching-hospital" },
          { label: "DNA Paternity & Molecular Diagnostic Certification", href: "#teaching-hospital" },
        ],
        ctaLabel: "Contact Health Records Desk",
        ctaHref: "#appointment-modal",
        iconName: "book-open",
      },
    ],
  },
  directorySection: {
    eyebrow: "Clinical Specialties & Centres",
    heading: "Medical Services & Clinical Departments at GOUNITH",
    subheading:
      "Search or filter across Godfrey Okoye University Teaching Hospital's clinical departments, surgical specialties, maternal-child units, and diagnostic laboratories.",
    searchPlaceholder:
      "Search Cardiology, 2D Echo, Endoscopy, Surgery, Neurosurgery, Maternity, Paediatrics, Radiology...",
    categories: [
      { id: "all", label: "All Clinical Departments (10)" },
      { id: "medical", label: "Internal Medicine, Cardiology & GI" },
      { id: "sciences", label: "Surgery, Emergency & Diagnostics" },
      { id: "humanities", label: "Maternity, Paediatrics & Outpatient" },
      { id: "postgraduate", label: "Medical Education & DNA Forensics" },
    ],
    items: [
      {
        id: "emergency-and-trauma",
        category: "sciences",
        categoryLabel: "24/7 Emergency & Critical Care",
        name: "Department of Accident & Emergency (A&E) and Trauma",
        shortCode: "A&E",
        rankingOrBadge: "Open 24 Hours Daily",
        leadOrDean: "24/7 Emergency Triage, Resuscitation & Acute Care Team",
        description:
          "Provides immediate life-saving resuscitation, acute medical and surgical stabilization, trauma management, and ambulance reception 24 hours a day, 7 days a week.",
        departments: [
          "24/7 Emergency Triage & Acute Resuscitation Unit",
          "Road Traffic & Orthopaedic Trauma Stabilization",
          "Acute Medical, Cardiac & Stroke Emergency Response",
          "24-Hour Emergency Pharmacy, Blood Bank & Point-of-Care Diagnostics",
        ],
        location: "Main Hospital Ground Floor, Trans-Ekulu, Enugu",
        ctaLabel: "Request Urgent Consultation",
        ctaHref: "#appointment-modal",
      },
      {
        id: "internal-medicine-cardiology",
        category: "medical",
        categoryLabel: "Internal Medicine & Heart Care",
        name: "Department of Internal Medicine & Cardiology (2D Echo Unit)",
        shortCode: "CARD-MED",
        rankingOrBadge: "2D Echocardiography & Specialist Clinics",
        leadOrDean: "Consultant Cardiologists, Nephrologists, Endocrinologists & Neurologists",
        description:
          "Delivers comprehensive diagnosis and long-term management of cardiovascular, renal, metabolic, endocrine, respiratory, and neurological conditions.",
        departments: [
          "Non-Invasive Cardiology, 2D Doppler Echocardiography & 12-Lead ECG",
          "Hypertension, Heart Failure & Preventive Cardiology Clinic",
          "Endocrinology, Diabetes Mellitus & Thyroid Disorder Clinic",
          "Nephrology, Pulmonology, Infectious Diseases & Adult Neurology",
        ],
        location: "Specialist Medical Wing, GOUNITH Trans-Ekulu",
        ctaLabel: "Book Cardiology / 2D Echo",
        ctaHref: "#appointment-modal",
      },
      {
        id: "endoscopy-gastroenterology",
        category: "medical",
        categoryLabel: "Digestive & Liver Care",
        name: "Endoscopy & Gastroenterology Unit",
        shortCode: "GI-ENDO",
        rankingOrBadge: "Diagnostic & Therapeutic Endoscopy",
        leadOrDean: "Specialist Gastroenterology & Endoscopic Surgery Team",
        description:
          "A dedicated modern endoscopy suite offering minimally invasive visualization, biopsy, and treatment for gastrointestinal and hepatobiliary conditions.",
        departments: [
          "Diagnostic & Therapeutic Upper GI Endoscopy (Oesophagogastroduodenoscopy)",
          "Lower GI Endoscopy (Colonoscopy & Flexible Sigmoidoscopy)",
          "Peptic Ulcer Disease, GI Bleeding & Acid Reflux Management",
          "Hepatology Clinic (Viral Hepatitis Screening & Liver Care)",
        ],
        location: "Diagnostic & Endoscopy Suite, GOUNITH Trans-Ekulu",
        ctaLabel: "Schedule an Endoscopy",
        ctaHref: "#appointment-modal",
      },
      {
        id: "surgery-neurosurgery-orthopaedics",
        category: "sciences",
        categoryLabel: "Surgical Specialties",
        name: "Department of Surgery, Neurosurgery, Orthopaedics & Urology",
        shortCode: "SURG",
        rankingOrBadge: "Modular Solar-Powered Operating Theatres",
        leadOrDean: "Consultant General Surgeons, Neurosurgeons, Orthopaedic Surgeons & Urologists",
        description:
          "Performs elective and emergency surgical procedures supported by modern anaesthesia, modular operating theatres, and dedicated post-operative recovery wards.",
        departments: [
          "General, Laparoscopic & Gastrointestinal Surgery",
          "Neurosurgery (Cranial, Spine & Neuro-Trauma Care)",
          "Orthopaedic Surgery, Fracture Fixation & Joint Reconstruction",
          "Urology, Prostate Care, Paediatric Surgery & Anaesthesiology",
        ],
        location: "Surgical Block & Operating Theatre Complex, GOUNITH",
        ctaLabel: "Book Surgical Clinic",
        ctaHref: "#appointment-modal",
      },
      {
        id: "obstetrics-gynaecology",
        category: "humanities",
        categoryLabel: "Maternal & Women's Health",
        name: "Department of Obstetrics & Gynaecology (Maternity & Antenatal)",
        shortCode: "OB/GYN",
        rankingOrBadge: "24/7 Labour Ward & Comprehensive Antenatal Care",
        leadOrDean: "Consultant Obstetricians, Gynaecologists & Certified Midwives",
        description:
          "Provides safe, compassionate care for expectant mothers and women at every stage of life, from routine antenatal classes to high-risk obstetrics and gynaecological surgery.",
        departments: [
          "Comprehensive Antenatal Booking, Foetal Monitoring & Ultrasound",
          "24/7 Labour & Delivery Suites and Emergency Caesarean Section",
          "High-Risk Pregnancy & Maternal-Foetal Medicine Clinic",
          "Gynaecological Surgery, Fertility Evaluation & Cervical Screening",
        ],
        location: "Maternity & Women's Pavilion, GOUNITH Trans-Ekulu",
        ctaLabel: "Book Antenatal / OB-GYN",
        ctaHref: "#appointment-modal",
      },
      {
        id: "paediatrics-child-health",
        category: "humanities",
        categoryLabel: "Children's Health",
        name: "Department of Paediatrics & Child Health",
        shortCode: "PAED",
        rankingOrBadge: "Neonatal Care (SCBU) & Paediatric Emergency",
        leadOrDean: "Consultant Paediatricians, Neonatologists & Paediatric Nurses",
        description:
          "Dedicated to the health, growth, and development of newborns, infants, children, and adolescents in a warm, family-centered clinical setting.",
        departments: [
          "Special Care Baby Unit (SCBU) & Neonatal Incubator Care",
          "24/7 Children's Emergency Room & Inpatient Paediatric Ward",
          "Well-Baby Clinic, Routine Childhood Immunization & Nutrition",
          "Paediatric Sickle Cell, Asthma & Infectious Disease Clinics",
        ],
        location: "Children's Wing, GOUNITH Trans-Ekulu",
        ctaLabel: "Book Paediatric Clinic",
        ctaHref: "#appointment-modal",
      },
      {
        id: "radiology-diagnostic-imaging",
        category: "sciences",
        categoryLabel: "24/7 Medical Imaging",
        name: "Department of Radiology & Diagnostic Imaging",
        shortCode: "RAD",
        rankingOrBadge: "24-Hour Digital Imaging & Ultrasound",
        leadOrDean: "Consultant Radiologists & Certified Medical Imaging Scientists",
        description:
          "Operates 24/7 diagnostic imaging services providing rapid, accurate radiological interpretation for emergency, inpatient, and outpatient care.",
        departments: [
          "24/7 Digital X-Ray & Contrast Radiological Studies",
          "Abdominal, Pelvic, Obstetric (3D/4D) & Small-Parts Ultrasound",
          "Vascular Color Doppler & Musculoskeletal Ultrasonography",
          "Echocardiography & Cross-Sectional CT/MRI Referral Coordination",
        ],
        location: "Diagnostic Imaging Ground Floor, GOUNITH",
        ctaLabel: "Book Imaging / Scan",
        ctaHref: "#appointment-modal",
      },
      {
        id: "medical-laboratory-pathology",
        category: "sciences",
        categoryLabel: "24/7 Laboratory Medicine",
        name: "Department of Medical Laboratory Services & Blood Bank",
        shortCode: "LAB",
        rankingOrBadge: "24/7 Automated Clinical Pathology",
        leadOrDean: "Consultant Pathologists & Licensed Medical Laboratory Scientists",
        description:
          "Provides round-the-clock diagnostic testing with strict quality control, rapid turnaround times, and safe blood banking for surgical and obstetric care.",
        departments: [
          "24/7 Haematology, Coagulation & Safe Blood Transfusion Bank",
          "Clinical Chemistry (Renal, Liver, Lipid, Cardiac & Hormone Profiles)",
          "Medical Microbiology, Culture & Sensitivity Testing",
          "Histopathology, Cytopathology & Pre-Marital/Pre-Employment Screening",
        ],
        location: "Central Diagnostic Laboratory, GOUNITH Trans-Ekulu",
        ctaLabel: "Schedule Lab Test",
        ctaHref: "#appointment-modal",
      },
      {
        id: "ophthalmology-ent-family-medicine",
        category: "humanities",
        categoryLabel: "Outpatient & Rehabilitative Care",
        name: "Ophthalmology, ENT, Psychiatry, Physiotherapy & Family Medicine",
        shortCode: "OPD",
        rankingOrBadge: "Integrated Multi-Specialty Outpatient Clinics",
        leadOrDean: "Multidisciplinary Specialist Consultants & Therapists",
        description:
          "Comprehensive outpatient clinics serving individuals, families, and corporate organizations with primary care, sensory specialty care, and physical rehabilitation.",
        departments: [
          "Family & Occupational Medicine (General Outpatient & NHIA/HMO Clinic)",
          "Ophthalmology (Comprehensive Eye Exams, Glaucoma & Cataract Care)",
          "Ear, Nose & Throat (ENT / Otorhinolaryngology) & Audiology",
          "Mental Health / Psychiatry & Physiotherapy / Rehabilitation",
        ],
        location: "Outpatient Clinic Complex, GOUNITH Trans-Ekulu",
        ctaLabel: "Book Outpatient Clinic",
        ctaHref: "#appointment-modal",
      },
      {
        id: "college-of-medicine-and-dna-forensics",
        category: "postgraduate",
        categoryLabel: "Academic Medicine & Molecular Science",
        name: "GOUNI College of Medicine & Centre for DNA Forensics (CeDFoCI)",
        shortCode: "COM-DNA",
        rankingOrBadge: "Cold Spring Harbor Lab NY Partner • NUC Accredited",
        leadOrDean: "Provost: Prof. Dr. Frank Akpuaka • Deputy Provost: Prof. Dr. Marian Unachukwu",
        description:
          "Unites bedside clinical instruction for MBBS Medicine and Nursing students with advanced molecular PCR, genomic sequencing, and forensic DNA profiling.",
        departments: [
          "Clinical Medical Education (MBBS Medicine & Surgery Rotations)",
          "Faculty of Allied Health Sciences (B.N.Sc. Nursing & B.MLS Clinical Posting)",
          "Certified DNA Paternity, Kinship & Forensic Profiling (CeDFoCI)",
          "Molecular Infectious Disease Surveillance & PCR Diagnostics",
        ],
        location: "GOUNITH Trans-Ekulu & Ugwuomu-Nike Medical Complex",
        ctaLabel: "Inquire About DNA / Medical Training",
        ctaHref: "#appointment-modal",
      },
    ],
    directoratesTitle: "Hospital Clinical Units & Patient Support Services",
    directoratesList: [
      "24/7 Accident & Emergency (A&E) Triage",
      "Non-Invasive Cardiology & 2D Echocardiography",
      "Diagnostic & Therapeutic Endoscopy Unit",
      "Modular Operating Theatres & Anaesthesia",
      "Antenatal, Labour & Maternity Suites",
      "Special Care Baby Unit (SCBU) & Paediatrics",
      "24/7 Digital Radiology & Ultrasound",
      "24/7 Medical Laboratory & Blood Bank",
      "24-Hour Hospital Pharmacy & Dispensary",
      "NHIA & HMO Health Insurance Desk",
      "Physiotherapy & Orthopaedic Rehabilitation",
      "Ophthalmology & Optometry Eye Clinic",
      "Ear, Nose & Throat (ENT) Clinic",
      "DNA Forensics & Molecular Diagnostics (CeDFoCI)",
      "Pastoral Care, Ethics & Patient Relations",
    ],
  },
  spotlightsSection: {
    eyebrow: "Centres of Clinical & Scientific Excellence",
    heading: "Advanced Diagnostics, Tertiary Care & Medical Discovery",
    subheading:
      "Combining 24-hour specialist hospital care at Trans-Ekulu with clinical medical education and molecular genomics in Enugu State.",
    features: [
      {
        id: "gounith-spotlight",
        eyebrow: "Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi)",
        title: "24/7 Emergency, Cardiology (2D Echo), Endoscopy & Specialist Surgical Care",
        subtitle: "Trans-Ekulu / Thinkers Corner Medical Corridor, Enugu State",
        description:
          "Godfrey Okoye University Teaching Hospital (formerly Ntasi Obi Hospital) operates round-the-clock emergency, diagnostic, surgical, and maternal-child services. Powered by a dedicated 24-hour solar energy microgrid, our operating theatres, intensive care monitors, blood bank, and imaging suites run without interruption.",
        imageSrc: "/sites/gouni/hero-campus.jpg",
        imageAlt:
          "Godfrey Okoye University Teaching Hospital (GOUNITH) courtyard and emergency ambulance fleet in Trans-Ekulu, Enugu",
        highlights: [
          { label: "Emergency & Lab", value: "24/7 A&E, Lab & Radiology" },
          { label: "Heart & GI Suites", value: "2D Echo & Endoscopy Unit" },
          { label: "Hospital Power", value: "100% 24-Hour Solar Grid" },
        ],
        servicesList: [
          "24/7 Accident & Emergency (A&E), Medical Laboratory & Digital Radiology",
          "Cardiology Clinic & 2D Doppler Echocardiography Investigations",
          "Endoscopy Suite for Upper GI Endoscopy & Colonoscopy",
          "General Surgery, Neurosurgery, Orthopaedics & Urology",
          "Maternity, Antenatal, Gynaecology & Special Care Baby Unit (SCBU)",
          "Ophthalmology, ENT, Nephrology, Endocrinology & Family Medicine",
        ],
        primaryCta: { label: "Book a Hospital Appointment", href: "#appointment-modal" },
        secondaryCta: { label: "View All Clinical Departments", href: "#services-faculties" },
      },
      {
        id: "dna-forensics-spotlight",
        eyebrow: "Academic Medicine & Molecular Diagnostics",
        title: "GOUNI College of Medicine & Centre for DNA Forensics (CeDFoCI)",
        subtitle: "Partnered with Cold Spring Harbor Laboratory & DNA Learning Center, New York",
        description:
          "As a university teaching hospital, GOUNITH is directly integrated with the Godfrey Okoye University College of Medicine and the Centre for DNA Forensics and Criminal Investigation (CeDFoCI)—bringing next-generation PCR testing, genomic sequencing, paternity verification, and clinician-scientist training directly to patient care.",
        imageSrc: "/sites/gouni/dna-research-lab.jpg",
        imageAlt:
          "Godfrey Okoye University Center for DNA Forensics and Criminal Investigation (CeDFoCI) facility and molecular laboratory team",
        highlights: [
          { label: "Medical Training", value: "MBBS & Nursing Clinical Hub" },
          { label: "Global Partner", value: "Cold Spring Harbor Lab NY" },
          { label: "Molecular Lab", value: "DNA Profiling & PCR Testing" },
        ],
        servicesList: [
          "Bedside Clinical Training for MBBS Medicine & B.N.Sc. Nursing Students",
          "Certified DNA Paternity, Kinship & Forensic Genetic Identification",
          "Molecular PCR Diagnostics & Infectious Disease Surveillance",
          "Interdisciplinary Clinical Research & Medical Ethics Governance",
        ],
        primaryCta: { label: "Schedule DNA / Specialist Inquiry", href: "#appointment-modal" },
        secondaryCta: { label: "Explore Hospital Locations", href: "#locations" },
      },
    ],
  },
  statsSection: {
    eyebrow: "GOUNI Teaching Hospital By the Numbers",
    heading: "A Commitment to Clinical Excellence & Patient Safety",
    subheading:
      "Delivering continuous, technology-enabled tertiary healthcare and medical training in Enugu State.",
    metrics: [
      {
        value: "24/7",
        label: "Emergency & Diagnostics",
        detail: "Round-the-clock Accident & Emergency (A&E), Medical Laboratory, Blood Bank, and Radiology.",
      },
      {
        value: "15+",
        label: "Clinical Specialties",
        detail: "Spanning Cardiology (2D Echo), Endoscopy, Neurosurgery, Orthopaedics, OB/GYN, and Paediatrics.",
      },
      {
        value: "200+",
        label: "Hospital Beds & Wards",
        detail: "Private executive suites, general medical/surgical wards, maternity suites, and SCBU.",
      },
      {
        value: "100%",
        label: "Solar-Powered Reliability",
        detail: "Decentralized solar energy ensuring uninterrupted operating theatre and life-support power.",
      },
      {
        value: "8am–9pm",
        label: "Daily Visiting Hours",
        detail: "Welcoming family members and care partners daily across inpatient wards in Trans-Ekulu.",
      },
    ],
  },
  locationsSection: {
    eyebrow: "Locations, Buildings & Getting Here",
    heading: "Navigating Godfrey Okoye University Teaching Hospital",
    subheading:
      "Find directions, emergency entrances, outpatient clinics, parking, and affiliated medical campuses across Enugu.",
    campuses: [
      {
        id: "gounith-main-complex",
        name: "GOUNITH Main Hospital Complex (Trans-Ekulu)",
        badge: "Flagship Teaching Hospital & 24/7 A&E",
        address:
          "Ntasi Obi Specialist Hospital Complex, Enugu-Onitsha Expressway, Trans-Ekulu, Enugu 400001, Nigeria",
        phone: "+234 913 427 3215 • +234 706 175 6730",
        hours: "Accident & Emergency, Lab & Radiology: Open 24/7 • Visiting Hours: 8:00 a.m. – 9:00 p.m.",
        description:
          "Our primary tertiary hospital complex in Trans-Ekulu housing the 24/7 Accident & Emergency Department, inpatient medical and surgical wards, modular operating theatres, 24-hour laboratory and blood bank, digital radiology, and central hospital pharmacy.",
        keyFacilities: [
          "24/7 Accident & Emergency (A&E) Entrance & Ambulance Triage Bay",
          "Main Modular Operating Theatres, Anaesthesia & Post-Op Recovery",
          "24/7 Diagnostic Radiology, Ultrasound & Central Medical Laboratory",
          "Inpatient Medical/Surgical Wards & 24-Hour Hospital Pharmacy",
        ],
        transitAndParking: [
          "Direct ambulance and emergency drop-off lane at the A&E entrance off Enugu-Onitsha Expressway",
          "Secure on-site patient and visitor parking within the walled hospital compound",
          "5 minutes from Thinkers Corner / Abakaliki Road and New Market junction",
        ],
        coordinatesLabel: "Trans-Ekulu, Enugu North LGA, Enugu State",
        mapEmbedUrl: "https://www.google.com/maps?q=Ntasi+Obi+Hospital+Trans+Ekulu+Enugu&output=embed",
      },
      {
        id: "cardiology-endoscopy-outpatient",
        name: "Specialist Outpatient, 2D Echo & Endoscopy Wing",
        badge: "Specialist Clinics & Diagnostics",
        address: "GOUNITH Specialist Outpatient Block, Trans-Ekulu, Enugu 400001, Nigeria",
        phone: "+234 913 427 3215 • +234 912 176 7243",
        hours: "Specialist Clinics: Mon–Sat, 8:00 a.m. – 5:00 p.m. (Emergency Consults 24/7)",
        description:
          "Dedicated outpatient consultation suites and specialized diagnostic procedure rooms for Cardiology, Gastroenterology, Internal Medicine, Neurosurgery, Orthopaedics, Ophthalmology, and ENT.",
        keyFacilities: [
          "Non-Invasive Cardiology Suite (2D Doppler Echocardiography & 12-Lead ECG)",
          "Endoscopy Unit (Upper GI Oesophagogastroduodenoscopy & Colonoscopy)",
          "Ophthalmology, ENT, Nephrology, Endocrinology & Neurology Consultation Rooms",
          "NHIA / HMO Health Insurance Verification & Patient Billing Desk",
        ],
        transitAndParking: [
          "Step-free wheelchair-accessible ground-floor entrance from the main hospital courtyard",
          "Central patient reception and medical records desk at the lobby entrance",
        ],
        coordinatesLabel: "Specialist Wing, GOUNITH Trans-Ekulu, Enugu",
        mapEmbedUrl: "https://www.google.com/maps?q=Ntasi+Obi+Hospital+Trans+Ekulu+Enugu&output=embed",
      },
      {
        id: "maternity-children-pavilion",
        name: "Maternity, Antenatal & Children's Pavilion",
        badge: "Mother & Child Healthcare",
        address: "GOUNITH Maternal & Child Health Block, Trans-Ekulu, Enugu 400001, Nigeria",
        phone: "+234 913 427 3215",
        hours: "Labour Ward & Paediatric Emergency: Open 24/7 • Antenatal & Immunization: Mon–Sat",
        description:
          "A dedicated maternal and paediatric wing providing antenatal classes, 24-hour obstetric delivery suites, gynaecological care, neonatal incubator support, and paediatric inpatient and outpatient clinics.",
        keyFacilities: [
          "Antenatal Clinic, Foetal Cardiotocography (CTG) & Obstetric Ultrasound",
          "24/7 Labour & Delivery Suites and Dedicated Obstetric Theatre",
          "Special Care Baby Unit (SCBU) & Phototherapy / Incubator Nursery",
          "Paediatric Outpatient Clinic, Immunization Unit & Children's Ward",
        ],
        transitAndParking: [
          "Priority maternity drop-off zone directly in front of the Labour & Delivery entrance",
          "24-hour security escort for expectant mothers and families arriving at night",
        ],
        coordinatesLabel: "Maternal & Child Wing, GOUNITH Trans-Ekulu",
        mapEmbedUrl: "https://www.google.com/maps?q=Ntasi+Obi+Hospital+Trans+Ekulu+Enugu&output=embed",
      },
      {
        id: "college-of-medicine-dna-complex",
        name: "College of Medicine & DNA Forensics Complex (Ugwuomu-Nike)",
        badge: "Medical School & Genomics Lab",
        address: "Godfrey Okoye University Main Campus, Ugwuomu-Nike, Enugu State, Nigeria",
        phone: "+234 913 427 3215 • info@gouni.edu.ng",
        hours: "Mon–Sat, 8:00 a.m. – 6:00 p.m. (24/7 Solar-Powered Research Campus)",
        description:
          "Home to the GOUNI College of Medicine basic medical science laboratories, clinical simulation facilities, and the solar-powered Centre for DNA Forensics and Criminal Investigation (CeDFoCI).",
        keyFacilities: [
          "College of Medicine (Anatomy, Physiology, Biochemistry & Pathology Labs)",
          "Centre for DNA Forensics and Criminal Investigation (CeDFoCI)",
          "Faculty of Allied Health Sciences (Nursing & Medical Laboratory Science)",
          "Medical Library & Clinical Skills Simulation Center",
        ],
        transitAndParking: [
          "Regular hospital-to-campus shuttle buses connecting Trans-Ekulu, Thinkers Corner, and Ugwuomu-Nike",
          "Visitor parking adjacent to the College of Medicine and DNA Forensics complex",
        ],
        coordinatesLabel: "Ugwuomu-Nike Medical Campus, Enugu",
        mapEmbedUrl: "https://www.google.com/maps?q=Godfrey+Okoye+University+Ugwuomu+Nike+Enugu&output=embed",
      },
    ],
  },
  aboutSection: {
    eyebrow: "Our Heritage, Emblem & University Sayings",
    heading: "\"Unity of Knowledge\" & \"Ntasi Obi\" — The Soul of GOUNITH",
    leaderSpotlight: {
      name: "Very Rev. Fr. Prof. Dr. Christian Anieke & Prof. Dr. Frank Akpuaka",
      role: "Founding Vice-Chancellor, GOUNI & Provost, College of Medicine",
      quote:
        "Knowledge is one. When we unite faith and reason, scientific precision and human love, our hospital becomes a true Ntasi Obi—a place where knowledge heals the body and comforts the heart.",
      bio: "Founded under the Catholic Diocese of Enugu and led by Founding Vice-Chancellor Very Rev. Fr. Prof. Dr. Christian Anieke alongside College of Medicine Provost Prof. Dr. Frank Akpuaka and Deputy Provost Prof. Dr. Marian Unachukwu, GOUNITH embodies Godfrey Okoye University's commitment to epistemic dialogue, character formation, and world-class clinical service.",
      credentials: [
        "Motto: 'Unity of Knowledge' — Uniting Faith, Reason & Medical Science",
        "Hospital Creed: 'Ntasi Obi' (Comfort of the Heart) in Every Patient Encounter",
        "Vision: Excelling in Learning, Character, and Compassionate Healing",
      ],
    },
    historyParagraphs: [
      "Named in honour of Bishop Godfrey Mary Paul Okoye, CSSp—the visionary second Catholic Bishop of Enugu—Godfrey Okoye University was founded on the conviction that all branches of human inquiry belong to a single 'Unity of Knowledge'. Our official crest (/images/logo.png) depicts the Indigo Heart of Love and the African Clay Vessel (Udu) resting together upon the Open Book of Science beneath the Golden Sun and the Green Hills of Enugu.",
      "At Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi), that symbol comes alive every day: the Open Book represents rigorous evidence-based medicine and clinical teaching; the Clay Vessel represents respect for life and community heritage; and the Heart represents 'Ntasi Obi'—consoling and healing every patient who walks through our doors.",
    ],
    values: [
      {
        title: "Unity of Knowledge",
        description:
          "\"Knowledge is One\" — uniting medical science, nursing, molecular genomics, ethics, and faith for complete human healing.",
      },
      {
        title: "Ntasi Obi (Comfort of the Heart)",
        description:
          "\"Heart to Heart\" — treating every patient and family with warmth, dignity, empathy, and Catholic healthcare hospitality.",
      },
      {
        title: "Epistemic & Bedside Dialogue",
        description:
          "\"Mind to Mind\" — fostering dialogue across clinical specialties, cultures, and religions so every patient receives holistic care.",
      },
      {
        title: "Learning, Character & Service",
        description:
          "\"Notice How We Shine\" — forming clinician-scientists and caregivers who excel in clinical competence, discipline, and ethical integrity.",
      },
    ],
    faqs: [
      {
        question: "How do I book an outpatient appointment or specialist consultation at GOUNITH?",
        answer:
          "You can request an appointment directly on this page using the 'Request an Appointment' button, call our hospital reception desk at +234 913 427 3215 (or 07061756730), or walk into our Specialist Outpatient Wing at Trans-Ekulu, Enugu between 8:00 a.m. and 5:00 p.m. Monday through Saturday. Emergency cases are attended 24/7 at the Accident & Emergency (A&E) entrance.",
      },
      {
        question: "What are the visiting hours at Godfrey Okoye University Teaching Hospital?",
        answer:
          "General inpatient ward visiting hours at GOUNITH are 8:00 a.m. to 9:00 p.m. daily. Specialized units such as the Special Care Baby Unit (SCBU), Labour & Delivery suites, and Post-Operative Recovery rooms maintain structured visiting guidelines to protect patient rest and infection control.",
      },
      {
        question: "Can I schedule a 2D Echocardiogram, Upper GI Endoscopy, Colonoscopy, or Ultrasound directly?",
        answer:
          "Yes. GOUNITH accepts both in-house specialist referrals and direct diagnostic referrals from external hospitals and clinics for 2D Doppler Echocardiography, 12-Lead ECG, Upper GI Endoscopy, Colonoscopy, Digital X-Ray, Ultrasound, and 24/7 Medical Laboratory investigations.",
      },
      {
        question: "Does GOUNITH accept NHIA and private HMO health insurance plans?",
        answer:
          "Yes. Our dedicated NHIA and HMO Desk in the Outpatient Lobby assists enrollees with eligibility verification, referral codes, and claims processing alongside transparent self-pay billing options.",
      },
    ],
  },
  newsSection: {
    eyebrow: "Hospital News & Clinical Updates",
    heading: "Latest Announcements from GOUNI Teaching Hospital",
    subheading:
      "Updates on specialist clinical services, diagnostic expansions, medical training milestones, and community health outreach in Enugu.",
    items: [
      {
        id: "cardiology-endoscopy-expansion",
        type: "Clinical Care",
        date: "2026 Clinical Update",
        title: "GOUNITH Expands Non-Invasive Cardiology (2D Echo) and Diagnostic Endoscopy Services",
        excerpt:
          "Patients across Enugu and South-East Nigeria can now access daily 2D Doppler Echocardiography, Upper GI Endoscopy, and Colonoscopy at our Trans-Ekulu complex.",
        locationOrTag: "Trans-Ekulu Hospital Complex",
        href: "#teaching-hospital",
      },
      {
        id: "solar-hospital-infrastructure",
        type: "Infrastructure",
        date: "2026 Operations",
        title: "24/7 Decentralized Solar Energy Guarantees Uninterrupted Surgical & Emergency Care",
        excerpt:
          "GOUNITH's clean solar power infrastructure ensures continuous electricity for operating theatres, neonatal incubators, blood storage, and 24-hour imaging.",
        locationOrTag: "Hospital Engineering & Safety",
        href: "#overview",
      },
      {
        id: "clinical-training-rotations",
        type: "Academic Medicine",
        date: "2026 Medical Session",
        title: "GOUNI College of Medicine & Allied Health Students Advance Clinical Training at GOUNITH",
        excerpt:
          "Medical and nursing students train alongside consultant physicians and surgeons at Godfrey Okoye University Teaching Hospital.",
        locationOrTag: "College of Medicine & GOUNITH",
        href: "#services-faculties",
      },
      {
        id: "dna-molecular-diagnostics",
        type: "Diagnostics",
        date: "Research & Forensics",
        title: "Molecular PCR & Forensic DNA Services Integrated with Cold Spring Harbor Lab Partnership",
        excerpt:
          "Through CeDFoCI, patients and institutions have access to certified DNA paternity testing, PCR diagnostics, and genomic research.",
        locationOrTag: "Molecular Diagnostics",
        href: "#teaching-hospital",
      },
    ],
  },
  footer: {
    organizationTitle: "Godfrey Okoye University Teaching Hospital (GOUNITH)",
    addressLines: [
      "Hospital Complex: Ntasi Obi Specialist Hospital Complex, Enugu-Onitsha Expressway, Trans-Ekulu, Enugu 400001, Nigeria",
      "College of Medicine Campus: Ugwuomu-Nike Main Campus, Enugu State, Nigeria",
      "University Administrative HQ: Jideofor Street, Thinkers Corner, Enugu State",
    ],
    phones: ["+234 913 427 3215", "+234 706 175 6730", "+234 912 176 7243"],
    email: "info@gouni.edu.ng",
    radioOrSpecialNote: "24/7 Accident & Emergency (A&E) • Radiology • Laboratory • Pharmacy",
    columns: [
      {
        title: "Clinical Specialties",
        links: [
          { label: "24/7 Accident & Emergency (A&E)", href: "#services-faculties" },
          { label: "Internal Medicine & Cardiology (2D Echo)", href: "#services-faculties" },
          { label: "Endoscopy & Gastroenterology Unit", href: "#services-faculties" },
          { label: "Surgery, Neurosurgery & Orthopaedics", href: "#services-faculties" },
          { label: "Obstetrics, Gynaecology & Maternity", href: "#services-faculties" },
          { label: "Paediatrics & Special Care Baby Unit", href: "#services-faculties" },
          { label: "24/7 Radiology & Medical Laboratory", href: "#services-faculties" },
        ],
      },
      {
        title: "For Patients & Visitors",
        links: [
          { label: "Request an Appointment", href: "#appointment-modal" },
          { label: "Find a Doctor or Clinical Unit", href: "#services-faculties" },
          { label: "Visiting Hours & Ward Guidelines", href: "#visitors-portals" },
          { label: "NHIA, HMO & Hospital Billing", href: "#visitors-portals" },
          { label: "Directions, Entrances & Parking", href: "#locations" },
          { label: "Medical Records & Lab Reports", href: "#visitors-portals" },
        ],
      },
      {
        title: "Academic Medicine & Research",
        links: [
          { label: "GOUNI College of Medicine (MBBS)", href: "#services-faculties" },
          { label: "Faculty of Allied Health & Nursing", href: "#services-faculties" },
          { label: "DNA Forensics & Molecular Lab (CeDFoCI)", href: "#teaching-hospital" },
          { label: "Hospital Leadership & Mission", href: "#about" },
          { label: "Hospital News & Announcements", href: "#news" },
          { label: "Godfrey Okoye University (gouni.edu.ng)", href: "https://gouni.edu.ng" },
        ],
      },
    ],
    copyright:
      "© 2026 Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi), Enugu. All rights reserved.",
  },
};
