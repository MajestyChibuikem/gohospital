import { InstitutionPageData } from "@/types/institution";

export const JHH_DATA: InstitutionPageData = {
  id: "jhh",
  parentOrganization: "Johns Hopkins Medicine • Baltimore, Maryland",
  institutionName: "The Johns Hopkins Hospital",
  tagline: "Academic Medical Center & Teaching Hospital of the Johns Hopkins University School of Medicine",
  motto: "Setting the Standard of Excellence in Patient Care, Research and Education Since 1889",
  sourceUrl: "https://www.hopkinsmedicine.org/the-johns-hopkins-hospital",
  alertBanner: {
    badge: "U.S. News & World Report 2026–27",
    text: "The Johns Hopkins Hospital is named to the Best Hospitals Honor Roll and ranked #1 in Maryland and the Baltimore metro area.",
    linkLabel: "Review Visitor & Care Partner Guidelines",
    linkHref: "#visitors-portals",
  },
  utilityLinks: [
    { label: "MyChart Login", href: "https://mychart.hopkinsmedicine.org", external: true, highlight: true },
    { label: "Schedule an Appointment", href: "#visitors-portals" },
    { label: "Find a Doctor", href: "#services-faculties" },
    { label: "Pay Your Bill", href: "https://www.hopkinsmedicine.org/patient-care/billing-insurance", external: true },
    { label: "Find a Clinical Trial", href: "https://trials.johnshopkins.edu", external: true },
    { label: "Give", href: "https://secure.jhu.edu/form/jhm", external: true },
  ],
  hero: {
    breadcrumbs: [
      { label: "Johns Hopkins Medicine Home", href: "/" },
      { label: "The Johns Hopkins Hospital", href: "/the-johns-hopkins-hospital" },
    ],
    title: "The Johns Hopkins Hospital",
    subtitle:
      "Located in the heart of East Baltimore, The Johns Hopkins Hospital is a world-renowned academic medical center, Level I Trauma Center, and teaching hospital of the Johns Hopkins University School of Medicine—home to the Johns Hopkins Children's Center and the Sidney Kimmel Comprehensive Cancer Center.",
    address: "1800 Orleans St., Baltimore, MD 21287",
    phone: "410-955-5000",
    secondaryContact: "Guest Services: 410-614-5100 • Protective Escorts: 410-955-5585",
    hoursBadge: "Emergency Room: Open 24/7 • Visiting Hours: 8:00 a.m. – 9:00 p.m. Daily",
    imageSrc: "/sites/jhh/hero-jhh.jpg",
    imageAlt:
      "The Johns Hopkins Hospital historic Billings Administration Building and iconic dome at 601 N. Broadway in Baltimore, Maryland",
    actions: [
      {
        label: "Schedule an Appointment",
        sublabel: "Online via MyChart, Regional & International Scheduling",
        href: "#appointment-modal",
        primary: true,
        actionType: "modal-appointment",
      },
      {
        label: "Find a Doctor or Specialist",
        sublabel: "Search 2,400+ Full-Time Attending Physicians",
        href: "#services-faculties",
        actionType: "anchor",
      },
      {
        label: "Directions, Parking & Valet",
        sublabel: "1800 Orleans St., Garages, MTA Subway & Campus Maps",
        href: "#locations",
        actionType: "anchor",
      },
      {
        label: "Patients & Visitors Guide",
        sublabel: "Visiting Hours, Care Partner Policies, MyChart & Billing",
        href: "#visitors-portals",
        actionType: "anchor",
      },
    ],
  },
  overview: {
    eyebrow: "Overview • East Baltimore Medical Campus",
    heading: "More Than 135 Years of Pioneering Medicine",
    leadParagraph:
      "Opened in 1889 through the historic bequest of Baltimore merchant and philanthropist Johns Hopkins, The Johns Hopkins Hospital revolutionized American medicine by uniting rigorous biomedical research and medical education directly with bedside patient care.",
    bodyParagraphs: [
      "As the flagship hospital of Johns Hopkins Medicine and the primary teaching hospital for the Johns Hopkins University School of Medicine, our East Baltimore campus encompasses more than 1,100 licensed patient beds, the Charlotte R. Bloomberg Children's Center, the Sheikh Zayed Tower, and the Sidney Kimmel Comprehensive Cancer Center.",
      "From introducing the modern medical residency and house staff rounds to performing the first 'blue baby' cardiac surgery and developing modern CPR, our multidisciplinary teams care for patients from across Baltimore, the United States, and around the globe with complex and rare conditions.",
    ],
    calloutBox: {
      badge: "Rankings, Safety & Nursing Excellence",
      title: "U.S. News 2026–27 Best Hospitals Honor Roll",
      subtitle:
        "The Johns Hopkins Hospital is consistently recognized among the nation's premier medical institutions:",
      accolades: [
        {
          title: "Top 20 National Honor Roll & #1 in Maryland",
          detail:
            "Named to the U.S. News & World Report 2026–27 Best Hospitals Honor Roll and ranked #1 in Maryland and Baltimore.",
        },
        {
          title: "#1 in Nation: Rheumatology & Obstetrics/Gynecology",
          detail:
            "National #1 rankings in Rheumatology and Obstetrics & Gynecology, with top-tier placements across Diabetes, GI, Geriatrics & Pulmonology.",
        },
        {
          title: "ANCC Magnet Recognition for Nursing Excellence",
          detail:
            "In 2003, our nursing program became the first in Maryland to achieve prestigious Magnet designation—a distinction maintained ever since.",
        },
        {
          title: "Leapfrog 'A' Hospital Safety Grade & Joint Commission",
          detail:
            "Awarded an 'A' Hospital Safety Grade and Advanced Comprehensive Stroke Center certification by The Joint Commission.",
        },
      ],
      ctaLabel: "Explore Medical Services & Specialties",
      ctaHref: "#services-faculties",
    },
  },
  guidesSection: {
    eyebrow: "Patients and Visitors",
    heading: "Patient & Visitor Information at The Johns Hopkins Hospital",
    subheading:
      "Prepare for your appointment, hospital stay, or campus visit with visitor guidelines, parking directions, MyChart portal access, and guest services.",
    cards: [
      {
        id: "visiting-policies",
        badge: "Visiting Information",
        title: "Visiting Hours & Care Partner Policies",
        description:
          "General visiting hours are 8:00 a.m. – 9:00 p.m. daily. Review unit-specific guidelines for adult inpatient rooms, ICUs, and the Johns Hopkins Children's Center.",
        bullets: [
          { label: "Care Partner & Visitor Welcoming System Guidelines", href: "#about" },
          { label: "Weapons-Detection & Campus Security Screening Info", href: "#about" },
          { label: "Pediatric & Intensive Care Unit (ICU) Visiting Rules", href: "#services-faculties" },
        ],
        ctaLabel: "Read Visitor Policies",
        ctaHref: "#about",
        iconName: "users",
      },
      {
        id: "getting-here-parking",
        badge: "Campus Navigation",
        title: "Getting Here, Parking & Campus Maps",
        description:
          "Navigate to 1800 Orleans Street with valet parking, self-park garages, the full-service MTA Subway concourse station, and the Find Your Way mobile app.",
        bullets: [
          { label: "Valet Parking: Main Entrance, Outpatient Center & Weinberg", href: "#locations" },
          { label: "Orleans & McElderry Garages + Discounted Stay Coupons", href: "#locations" },
          { label: "24/7 Campus Shuttles & Walking Escorts (410-955-5585)", href: "#locations" },
        ],
        ctaLabel: "Directions & Parking Guide",
        ctaHref: "#locations",
        iconName: "map-pin",
      },
      {
        id: "mychart-appointments",
        badge: "Digital Health Portal",
        title: "Appointments & MyChart Portal",
        description:
          "Schedule appointments, view diagnostic test results, message your Johns Hopkins care team, and manage prescriptions online through MyChart.",
        bullets: [
          { label: "Log in to MyChart Patient Portal", href: "https://mychart.hopkinsmedicine.org" },
          { label: "New Patient & Second Opinion Appointment Scheduling", href: "#appointment-modal" },
          { label: "Request Medical Records & Imaging Copies", href: "https://www.hopkinsmedicine.org" },
        ],
        ctaLabel: "Manage Appointments",
        ctaHref: "#appointment-modal",
        iconName: "calendar",
      },
      {
        id: "billing-insurance",
        badge: "Financial Resources",
        title: "Billing, Insurance & Financial Assistance",
        description:
          "Pay your hospital or physician bill online, verify participating insurance plans, request cost estimates, and apply for financial assistance.",
        bullets: [
          { label: "Online Bill Pay & Paperless Statements", href: "https://www.hopkinsmedicine.org" },
          { label: "Participating Insurance Plans & Medicare/Medicaid", href: "https://www.hopkinsmedicine.org" },
          { label: "Financial Assistance & Charity Care Guidelines", href: "https://www.hopkinsmedicine.org" },
        ],
        ctaLabel: "Billing & Insurance Info",
        ctaHref: "https://www.hopkinsmedicine.org",
        iconName: "credit-card",
      },
      {
        id: "amenities-accommodations",
        badge: "Hospital Stay & Comfort",
        title: "Accommodations, Dining & Guest Services",
        description:
          "Information desks in the Zayed/Nelson lobbies (410-614-5100), on-campus dining at Cobblestone Café, outpatient pharmacies, and nearby family hotels.",
        bullets: [
          { label: "Cobblestone Café & Campus Dining Locations", href: "#locations" },
          { label: "Short-Term Housing & Hotel Concierge for Families", href: "#locations" },
          { label: "Admission, Discharge & Patient Rights Guide", href: "#about" },
        ],
        ctaLabel: "Explore Campus Amenities",
        ctaHref: "#locations",
        iconName: "building",
      },
      {
        id: "international-language",
        badge: "Global & Accessible Care",
        title: "International Patients & Interpreter Services",
        description:
          "Dedicated medical concierge coordination for out-of-state and international patients alongside 24/7 sign language and interpretation in 30+ languages.",
        bullets: [
          { label: "Johns Hopkins Medicine International Concierge", href: "https://www.hopkinsmedicine.org" },
          { label: "24/7 Free Language & Sign Language Interpretation", href: "#about" },
          { label: "Accessibility & Mobility Assistance at Entrances", href: "#locations" },
        ],
        ctaLabel: "International & Language Services",
        ctaHref: "#about",
        iconName: "globe",
      },
    ],
  },
  directorySection: {
    eyebrow: "Medical Services and Care",
    heading: "Clinical Specialties & Centers of Excellence",
    subheading:
      "Explore comprehensive adult and pediatric specialties, surgical institutes, emergency trauma services, and supportive diagnostic care at The Johns Hopkins Hospital.",
    searchPlaceholder: "Search specialties, Cancer Center, Children's Center, Cardiology, Neurology...",
    categories: [
      { id: "all", label: "All Medical Services (8)" },
      { id: "medical", label: "Centers of Excellence" },
      { id: "sciences", label: "Top-Ranked Specialties" },
      { id: "humanities", label: "Emergency & Primary Care" },
      { id: "postgraduate", label: "Supportive & Diagnostic Services" },
    ],
    items: [
      {
        id: "childrens-center",
        category: "medical",
        categoryLabel: "Pediatric Center of Excellence",
        name: "Johns Hopkins Children's Center",
        shortCode: "JHCC",
        rankingOrBadge: "Charlotte R. Bloomberg Children's Center",
        leadOrDean: "1800 Orleans Street • Dedicated Pediatric Emergency & ICU",
        description:
          "Nationally ranked pediatric acute care and teaching hospital offering more than 30 pediatric medical and surgical subspecialties in family-centered private suites.",
        departments: [
          "Pediatric Emergency Department & Level I Pediatric Trauma",
          "Pediatric Cardiology, Cardiac Surgery & Neonatal ICU (NICU)",
          "Pediatric Oncology, Neurology, Neurosurgery & Cystic Fibrosis Center",
          "Child Life Services, Family Resource Library & Ronald McDonald Liaison",
        ],
        location: "The Charlotte R. Bloomberg Children's Center, 1800 Orleans St.",
        ctaLabel: "Explore Children's Center",
        ctaHref: "https://www.hopkinsmedicine.org",
      },
      {
        id: "kimmel-cancer-center",
        category: "medical",
        categoryLabel: "NCI-Designated Comprehensive Cancer Center",
        name: "Sidney Kimmel Comprehensive Cancer Center",
        shortCode: "SKCCC",
        rankingOrBadge: "NCI Comprehensive Designation",
        leadOrDean: "Harry and Jeanette Weinberg Building • 401 N. Broadway",
        description:
          "Global leader in cancer research, precision immunotherapy, proton therapy, bone marrow transplantation, and multidisciplinary surgical oncology.",
        departments: [
          "Medical, Radiation & Surgical Oncology Clinics",
          "Precision Genomics, Immunotherapy & Early-Phase Clinical Trials",
          "Hematologic Malignancies & Bone Marrow Transplant Program",
          "Patient & Family Cancer Support Services and Outpatient Infusion",
        ],
        location: "Weinberg Building (Jefferson St. & Broadway) & Viragh Building",
        ctaLabel: "Explore Kimmel Cancer Center",
        ctaHref: "https://www.hopkinsmedicine.org",
      },
      {
        id: "heart-vascular",
        category: "medical",
        categoryLabel: "Cardiovascular Institute",
        name: "Heart and Vascular Institute (Cardiology & Cardiac Surgery)",
        shortCode: "HVI",
        rankingOrBadge: "Sheikh Zayed Tower Cardiovascular Hub",
        leadOrDean: "Integrated Cardiology, Electrophysiology, Vascular & Transplant Care",
        description:
          "Delivers minimally invasive structural heart procedures, complex aortic surgery, heart transplant care, and preventive cardiology inside the Sheikh Zayed Tower.",
        departments: [
          "Interventional Cardiology, Structural Heart & TAVR",
          "Cardiac Surgery, Heart Failure & Mechanical Circulatory Support",
          "Cardiac Arrhythmia / Electrophysiology & Vascular Surgery",
          "Advanced Non-Invasive Cardiac Imaging & Echocardiography",
        ],
        location: "Sheikh Zayed Tower, 1800 Orleans St., Baltimore",
        ctaLabel: "Explore Heart & Vascular",
        ctaHref: "https://www.hopkinsmedicine.org",
      },
      {
        id: "neurology-neurosurgery",
        category: "sciences",
        categoryLabel: "Neurosciences",
        name: "Neurology and Neurosurgery",
        shortCode: "NEURO",
        rankingOrBadge: "Advanced Comprehensive Stroke Center",
        leadOrDean: "Birthplace of Modern American Neurosurgery",
        description:
          "Provides world-renowned surgical and medical treatment for complex brain tumors, cerebrovascular disorders, ALS, epilepsy, movement disorders, and spine conditions.",
        departments: [
          "Comprehensive Stroke Center & Neurocritical Care Unit",
          "Brain Tumor Center, Skull Base & Pituitary Neurosurgery",
          "Comprehensive Spine Center & Peripheral Nerve Surgery",
          "Epilepsy, Multiple Sclerosis, Parkinson's & Neuromuscular Clinics",
        ],
        location: "Sheikh Zayed Tower & Outpatient Center, 601 N. Caroline St.",
        ctaLabel: "Explore Neurology & Neurosurgery",
        ctaHref: "https://www.hopkinsmedicine.org",
      },
      {
        id: "obgyn-rheumatology",
        category: "sciences",
        categoryLabel: "#1 Nationally Ranked Specialties",
        name: "Obstetrics & Gynecology (#1) and Rheumatology (#1)",
        shortCode: "TOP-1",
        rankingOrBadge: "#1 in the Nation (U.S. News 2026–27)",
        leadOrDean: "National #1 Ranked Clinical & Research Programs",
        description:
          "Home to the nation's #1 ranked Gynecology & Obstetrics department and #1 ranked Rheumatology division treating high-risk pregnancies and complex autoimmune diseases.",
        departments: [
          "Maternal-Fetal Medicine, High-Risk Obstetrics & Labor/Delivery",
          "Gynecologic Oncology, Minimally Invasive Surgery & Fertility Center",
          "Rheumatology: Lupus, Scleroderma, Vasculitis, Myositis & Arthritis Centers",
          "Multidisciplinary Autoimmune & Women's Health Clinical Trials",
        ],
        location: "Zayed Tower & Johns Hopkins Outpatient Center",
        ctaLabel: "Explore #1 Ranked Specialties",
        ctaHref: "https://www.hopkinsmedicine.org",
      },
      {
        id: "gi-pulm-endo-geriatrics",
        category: "sciences",
        categoryLabel: "Medical & Surgical Subspecialties",
        name: "Gastroenterology, Pulmonology, Endocrinology & Geriatrics",
        shortCode: "MED",
        rankingOrBadge: "Honor Roll Specialty Leaders",
        leadOrDean: "Department of Medicine & Department of Surgery",
        description:
          "Top-ranked specialty programs in digestive diseases, complex hepatobiliary surgery, lung transplantation, diabetes management, and healthy aging.",
        departments: [
          "Gastroenterology & GI Surgery (IBD, Pancreas, Liver & Therapeutic Endoscopy)",
          "Pulmonology & Lung Surgery (Interstitial Lung Disease, interventional Pulmonology)",
          "Diabetes, Endocrinology & Metabolic Disorders",
          "Geriatric Medicine, Orthopedics, Psychiatry & Wilmer Eye Institute (Ophthalmology)",
        ],
        location: "1800 Orleans St. & Johns Hopkins Outpatient Center",
        ctaLabel: "View All Medical Departments",
        ctaHref: "https://www.hopkinsmedicine.org",
      },
      {
        id: "emergency-trauma-primary",
        category: "humanities",
        categoryLabel: "Emergency & Primary Care",
        name: "Emergency Department (Level I Trauma) & Primary Care",
        shortCode: "EMERG",
        rankingOrBadge: "Designated Level I Trauma Center • 94,000+ Visits/Yr",
        leadOrDean: "24/7 Adult & Pediatric Emergency Entrances at 1800 Orleans St.",
        description:
          "Immediate 24/7 emergency and trauma stabilization alongside comprehensive internal medicine, family practice, and preventive wellness clinics.",
        departments: [
          "Adult Emergency Department & Level I Trauma Resuscitation",
          "Pediatric Emergency Department (Bloomberg Children's Center)",
          "General Internal Medicine & Comprehensive Primary Care",
          "Lifeline Critical Care Transport & Air/Ground Ambulance Coordination",
        ],
        location: "Main Hospital Entrance, 1800 Orleans St., Baltimore",
        ctaLabel: "Emergency & Primary Care Info",
        ctaHref: "#locations",
      },
      {
        id: "supportive-diagnostic-services",
        category: "postgraduate",
        categoryLabel: "Supportive & Ancillary Care",
        name: "Outpatient Pharmacies, Radiology, Lab & Rehabilitation",
        shortCode: "DIAG",
        rankingOrBadge: "Integrated On-Campus Diagnostics",
        leadOrDean: "Full-Service Outpatient & Inpatient Clinical Support",
        description:
          "Seamless diagnostic imaging, pathology laboratory testing, physical medicine and rehabilitation, and full-service on-campus pharmacies.",
        departments: [
          "Johns Hopkins Outpatient Pharmacies (Arcade, Outpatient Center, Weinberg)",
          "Diagnostic Radiology, MRI, CT, PET & Interventional Radiology",
          "Pathology & Clinical Laboratory Testing Services",
          "Physical Medicine, Rehabilitation, Occupational & Speech Therapy (Meyer Building)",
        ],
        location: "Zayed Arcade, Meyer Building & Outpatient Center",
        ctaLabel: "Explore Diagnostic Services",
        ctaHref: "#locations",
      },
    ],
    directoratesTitle: "Johns Hopkins Medicine Integrated Health System Network",
    directoratesList: [
      "The Johns Hopkins Hospital (East Baltimore)",
      "Johns Hopkins Children's Center",
      "Sidney Kimmel Comprehensive Cancer Center",
      "Johns Hopkins Bayview Medical Center",
      "Howard County Medical Center",
      "Suburban Hospital (Bethesda, MD)",
      "Sibley Memorial Hospital (Washington, D.C.)",
      "Johns Hopkins All Children's Hospital (St. Petersburg, FL)",
      "Johns Hopkins Community Physicians",
      "Johns Hopkins Care at Home",
      "Johns Hopkins Medicine International",
      "Johns Hopkins University School of Medicine",
    ],
  },
  spotlightsSection: {
    eyebrow: "Campus Architecture & Clinical Discovery",
    heading: "Inside The Johns Hopkins Hospital Campus",
    subheading:
      "Designed around patient healing, family comfort, and rapid translation of scientific breakthroughs from bench to bedside.",
    features: [
      {
        id: "zayed-bloomberg-spotlight",
        eyebrow: "Sheikh Zayed Tower & Charlotte R. Bloomberg Children's Center",
        title: "1.6 Million Square Feet of State-of-the-Art Adult & Pediatric Care",
        subtitle: "1800 Orleans Street, East Baltimore Campus",
        description:
          "The twin clinical towers along Orleans Street feature all-private, sound-buffered patient rooms, indoor healing gardens, curated museum-grade artwork, intraoperative MRI suites, and dedicated adult and pediatric emergency departments.",
        imageSrc: "/sites/jhh/campus-jhh.jpg",
        imageAlt: "The Johns Hopkins Hospital East Baltimore entrance gates and historic medical pavilions",
        highlights: [
          { label: "Patient Rooms", value: "All-Private Healing Suites" },
          { label: "Operating Suites", value: "33 Advanced ORs + Intra-op MRI" },
          { label: "Emergency Care", value: "Dedicated Adult & Pediatric ERs" },
        ],
        servicesList: [
          "Heart and Vascular Institute & Cardiovascular Surgical Suites",
          "Neurosciences, Comprehensive Stroke Center & Neuro-ICU",
          "Charlotte R. Bloomberg Children's Center & Level IV NICU",
          "Main Concourse Arcade, Cobblestone Café, Healing Gardens & Family Lounges",
        ],
        primaryCta: { label: "Schedule an Appointment", href: "#appointment-modal" },
        secondaryCta: { label: "View Campus Map & Parking", href: "#locations" },
      },
      {
        id: "clinical-research-spotlight",
        eyebrow: "Academic Medicine & Biomedical Research",
        title: "Translating Johns Hopkins School of Medicine Discovery into Patient Cures",
        subtitle: "Over 2,400 Full-Time Attending Physicians & Physician-Scientists",
        description:
          "Every clinical department at The Johns Hopkins Hospital is directly integrated with the research laboratories of the Johns Hopkins University School of Medicine, giving patients immediate access to pioneering clinical trials, genomic medicine, and multidisciplinary tumor and specialty boards.",
        imageSrc: "/sites/jhh/hero-jhh.jpg",
        imageAlt: "The historic dome and medical research campus of The Johns Hopkins Hospital",
        highlights: [
          { label: "Medical Faculty", value: "2,400+ Attending Physicians" },
          { label: "Heritage", value: "Founded 1889 (School of Medicine 1893)" },
          { label: "Recognition", value: "ANCC Magnet & Honor Roll" },
        ],
        servicesList: [
          "Early-phase and phase III clinical trials across oncology, neurology, and immunology",
          "Multidisciplinary precision medicine clinics and genetic counseling",
          "Residency and fellowship training that shaped modern American medical education",
          "Community health programs serving East Baltimore and Maryland neighborhoods",
        ],
        primaryCta: { label: "Explore Clinical Specialties", href: "#services-faculties" },
        secondaryCta: { label: "Read Hospital History & Facts", href: "#about" },
      },
    ],
  },
  statsSection: {
    eyebrow: "The Johns Hopkins Hospital By the Numbers",
    heading: "At a Glance: Scale, Excellence & Impact",
    subheading:
      "Key institutional metrics reflecting our commitment to patient care, emergency medicine, and academic leadership.",
    metrics: [
      {
        value: "1889",
        label: "Year Founded",
        detail: "Established by Johns Hopkins' bequest; School of Medicine opened in 1893.",
      },
      {
        value: "1,100+",
        label: "Licensed Beds",
        detail: "All-private adult and pediatric inpatient beds across our East Baltimore campus.",
      },
      {
        value: "2,400+",
        label: "Attending Physicians",
        detail: "Full-time Johns Hopkins University School of Medicine faculty physicians.",
      },
      {
        value: "43,000+",
        label: "Annual Admissions",
        detail: "Inpatient admissions cared for each year from Maryland and around the world.",
      },
      {
        value: "94,000+",
        label: "Emergency Visits",
        detail: "Annual adult and pediatric visits at our Level I Trauma & Emergency Department.",
      },
    ],
  },
  locationsSection: {
    eyebrow: "Locations & Getting Here",
    heading: "Navigating the East Baltimore Medical Campus",
    subheading:
      "Find entrances, valet and garage parking, MTA subway connections, and guest services across 1800 Orleans Street.",
    campuses: [
      {
        id: "zayed-bloomberg-main",
        name: "Main Entrance: Sheikh Zayed Tower & Bloomberg Children's Center",
        badge: "Main Hospital & Emergency Entrance",
        address: "1800 Orleans Street, Baltimore, MD 21287",
        phone: "410-955-5000 • Guest Services: 410-614-5100",
        hours: "Hospital & Emergency Room: Open 24/7 • General Visiting Hours: 8:00 a.m. – 9:00 p.m.",
        description:
          "The primary inpatient and emergency complex of The Johns Hopkins Hospital, housing adult and pediatric inpatient towers, surgical suites, main admitting, the Arcade, and the Emergency Department.",
        keyFacilities: [
          "Sheikh Zayed Tower (Adult Inpatient, Heart & Vascular, Neurosciences, Obstetrics)",
          "The Charlotte R. Bloomberg Children's Center (Pediatric Inpatient, NICU, PICU)",
          "Adult & Pediatric Emergency Departments (adjacent to 1800 Orleans St. main loop)",
          "The Arcade, Cobblestone Café, Outpatient Pharmacy & Cashier Office",
        ],
        transitAndParking: [
          "Valet Parking available directly at the 1800 Orleans Street main entrance drive",
          "Orleans Street Garage (connected via enclosed pedestrian skybridge to Level 3 Concourse)",
          "Full-service Baltimore Metro Subway station at the concourse level between the Hospital and Outpatient Center",
        ],
        coordinatesLabel: "1800 Orleans St., East Baltimore, MD 21287",
        mapEmbedUrl: "https://www.google.com/maps?q=The+Johns+Hopkins+Hospital+1800+Orleans+St+Baltimore+MD&output=embed",
      },
      {
        id: "outpatient-center",
        name: "Johns Hopkins Outpatient Center (JHOC)",
        badge: "Specialty Clinics & Diagnostics",
        address: "601 N. Caroline Street, Baltimore, MD 21287",
        phone: "410-955-5000",
        hours: "Mon–Fri, 7:00 a.m. – 6:00 p.m. (Select weekend imaging & lab hours)",
        description:
          "Multi-story ambulatory care center hosting dozens of specialty consultation clinics, outpatient surgery, diagnostic radiology, phlebotomy, and outpatient pharmacy services.",
        keyFacilities: [
          "Outpatient Specialty Clinics (Orthopedics, Otolaryngology, Surgery, Urology, Medicine)",
          "Diagnostic Imaging, Outpatient Laboratory & Pre-Operative Evaluation",
          "Outpatient Pharmacy & Optical Shop",
        ],
        transitAndParking: [
          "Valet Parking at the Outpatient Center circle on N. Caroline Street",
          "McElderry Garage self-parking with direct skywalk access",
          "Direct underground concourse link to the Johns Hopkins Metro Subway station",
        ],
        coordinatesLabel: "601 N. Caroline St., Baltimore, MD 21287",
        mapEmbedUrl: "https://www.google.com/maps?q=601+N+Caroline+St+Baltimore+MD+21287&output=embed",
      },
      {
        id: "weinberg-cancer-center",
        name: "Harry and Jeanette Weinberg Building (Kimmel Cancer Center)",
        badge: "Comprehensive Cancer Care",
        address: "401 N. Broadway (Entrance on Jefferson Street), Baltimore, MD 21231",
        phone: "410-955-8964",
        hours: "Inpatient Units: 24/7 • Outpatient Clinics: Mon–Fri, 7:30 a.m. – 5:30 p.m.",
        description:
          "Clinical headquarters of the Sidney Kimmel Comprehensive Cancer Center, providing surgical oncology, radiation oncology, infusion suites, and specialized oncology inpatient units.",
        keyFacilities: [
          "Weinberg Admitting Office, Radiation Oncology & Outpatient Chemotherapy Infusion",
          "Oncology Inpatient Units & Bone Marrow Transplant Unit",
          "Skip Viragh Outpatient Cancer Building (201 N. Broadway)",
        ],
        transitAndParking: [
          "Valet Parking at the Weinberg Building Jefferson Street entrance",
          "Underground Weinberg Garage & Orleans Street Garage access",
          "Discounted extended-stay parking coupons available at Weinberg Admitting Office",
        ],
        coordinatesLabel: "401 N. Broadway / Jefferson St., Baltimore, MD",
        mapEmbedUrl: "https://www.google.com/maps?q=401+N+Broadway+Baltimore+MD+21231&output=embed",
      },
      {
        id: "nelson-meyer-billings",
        name: "Nelson, Harvey, Meyer & Historic Billings Buildings",
        badge: "Medicine, Rehabilitation & Heritage",
        address: "600 N. Wolfe Street, Baltimore, MD 21287",
        phone: "410-955-5000 • Nelson Info Desk: 410-614-5100",
        hours: "Visiting Hours: 8:00 a.m. – 9:00 p.m. • Protective Escorts: 24/7 (410-955-5585)",
        description:
          "Connecting the Wolfe Street corridor of the hospital campus, including internal medicine and psychiatric inpatient care, physical medicine and rehabilitation, and the historic 1889 Billings Building dome.",
        keyFacilities: [
          "Meyer Building (Psychiatry, Physical Medicine & Rehabilitation, Neurology)",
          "Nelson / Harvey Tower (Internal Medicine, Pulmonary & Infectious Diseases)",
          "Historic Billings Administration Building (1889 Iconic Dome & Heritage Exhibits)",
        ],
        transitAndParking: [
          "Wolfe Street drop-off loop and Washington Street Garage",
          "24/7 on-call campus shuttle and Protective Services walking escorts (410-955-5585)",
          "Connected to Zayed Tower via the indoor hospital concourse corridor",
        ],
        coordinatesLabel: "600 N. Wolfe St., Baltimore, MD 21287",
        mapEmbedUrl: "https://www.google.com/maps?q=600+N+Wolfe+St+Baltimore+MD+21287&output=embed",
      },
    ],
  },
  aboutSection: {
    eyebrow: "About The Johns Hopkins Hospital",
    heading: "Mission, History & Core Values",
    leaderSpotlight: {
      name: "The Vision of Johns Hopkins (1889)",
      role: "Tripartite Mission: Patient Care, Research & Education",
      quote:
        "To improve the health of the community and the world by setting the standard of excellence in medical education, research and clinical care.",
      bio: "Born from a $7 million bequest by 19th-century Quaker philanthropist Johns Hopkins—who mandated a hospital and medical school that would care for all people regardless of sex, age, or race—The Johns Hopkins Hospital opened in May 1889 and forever transformed the practice of medicine.",
      credentials: [
        "Founded May 1889 • School of Medicine Opened 1893",
        "First Hospital in Maryland to Achieve ANCC Magnet Recognition (2003)",
        "U.S. News & World Report 2026–27 Best Hospitals Honor Roll",
      ],
    },
    historyParagraphs: [
      "Under its founding 'Big Four' physicians—William Osler, William Halsted, Howard Kelly, and William Welch—The Johns Hopkins Hospital established the modern model of medical training: structured bedside rounds, the residency system, and rigorous integration of laboratory pathology with clinical medicine.",
      "Over more than a century, Johns Hopkins clinicians and scientists have pioneered landmark breakthroughs including the first successful 'blue baby' heart operation, the development of closed-chest cardiopulmonary resuscitation (CPR), the discovery of restriction enzymes and natural brain opiates, and transformative advances in neurosurgery, oncology, and rheumatology.",
    ],
    values: [
      {
        title: "Excellence & Discovery",
        description:
          "Be the best. Commit to exceptional quality and service by encouraging curiosity, seeking information, and creating innovative solutions.",
      },
      {
        title: "Leadership & Integrity",
        description:
          "Be a role model. Inspire others to achieve their best and have the courage to do the right thing in every clinical and scientific decision.",
      },
      {
        title: "Diversity & Inclusion",
        description:
          "Be open. Embrace and value different backgrounds, opinions, and experiences across our patients, care teams, and East Baltimore neighbors.",
      },
      {
        title: "Respect & Collegiality",
        description:
          "Be kind. Listen to understand and embrace others' unique skills and knowledge in a collaborative healing environment.",
      },
    ],
    faqs: [
      {
        question: "What are the visiting hours and care partner guidelines at The Johns Hopkins Hospital?",
        answer:
          "General visiting hours at The Johns Hopkins Hospital are 8:00 a.m. to 9:00 p.m. daily. All visitors check in through our Visitor Welcoming System and pass through weapons-detection screening at main entrances. Hours and care partner allowances may vary in the Johns Hopkins Children's Center, Labor & Delivery, and intensive care units.",
      },
      {
        question: "Where should patients and visitors park at 1800 Orleans Street?",
        answer:
          "Self-parking is available in the Orleans Street Garage (connected via skybridge to the main hospital concourse), McElderry Garage (for the Outpatient Center), and Weinberg Garage. Valet parking is available at the 1800 Orleans Street main entrance, the Outpatient Center circle, and the Weinberg Building on Jefferson Street. Discounted multi-day coupons can be purchased at campus cashier offices.",
      },
      {
        question: "How do I schedule an appointment or access my records on MyChart?",
        answer:
          "You can schedule appointments, view lab and imaging results, and message your care team online 24/7 via MyChart (mychart.hopkinsmedicine.org) or by calling 410-955-5000. Out-of-state and international patients can also connect with Johns Hopkins Medicine International.",
      },
      {
        question: "Are interpreter and accessibility services available on campus?",
        answer:
          "Yes. Professional medical interpretation (including American Sign Language and translation for more than 30 spoken languages) is provided 24/7 at no cost. Wheelchairs and mobility assistance are available at all hospital entrances and Guest Services desks (410-614-5100).",
      },
    ],
  },
  newsSection: {
    eyebrow: "News, Rankings & Community Health",
    heading: "Highlights from The Johns Hopkins Hospital",
    subheading:
      "Recent honors, clinical innovations, and community health initiatives across our East Baltimore campus.",
    items: [
      {
        id: "jhh-honor-roll-2026",
        type: "Ranking",
        date: "2026–2027 Report",
        title: "The Johns Hopkins Hospital Named to U.S. News Best Hospitals Honor Roll & #1 in Maryland",
        excerpt:
          "Recognized among the top 20 hospitals nationwide, with #1 national rankings in Rheumatology and Obstetrics & Gynecology.",
        locationOrTag: "National Honor Roll",
        href: "https://www.hopkinsmedicine.org/the-johns-hopkins-hospital",
      },
      {
        id: "jhh-magnet-safety",
        type: "Clinical Milestone",
        date: "2026 Quality Update",
        title: "Sustaining ANCC Magnet Nursing Excellence and Leapfrog 'A' Hospital Safety Grade",
        excerpt:
          "Continuing a tradition begun in 2003 as Maryland's first Magnet-designated hospital alongside top marks for patient safety.",
        locationOrTag: "Nursing & Patient Safety",
        href: "https://www.hopkinsmedicine.org/the-johns-hopkins-hospital",
      },
      {
        id: "jhh-find-your-way",
        type: "News",
        date: "Campus Experience",
        title: "Enhanced Campus Wayfinding, Visitor Welcoming System & MyChart Digital Check-In",
        excerpt:
          "Helping patients and care partners navigate the Sheikh Zayed Tower, Bloomberg Children's Center, and Outpatient Center with turn-by-turn guidance.",
        locationOrTag: "East Baltimore Campus",
        href: "https://www.hopkinsmedicine.org/the-johns-hopkins-hospital",
      },
      {
        id: "jhh-community-east-baltimore",
        type: "Event",
        date: "Ongoing Initiative",
        title: "Community Health & East Baltimore Neighborhood Partnership Programs",
        excerpt:
          "Expanding preventive screenings, maternal health outreach, and youth STEM/healthcare career pathways across Baltimore.",
        locationOrTag: "Community Health",
        href: "https://www.hopkinsmedicine.org/the-johns-hopkins-hospital",
      },
    ],
  },
  footer: {
    organizationTitle: "The Johns Hopkins Hospital • Johns Hopkins Medicine",
    addressLines: [
      "The Johns Hopkins Hospital: 1800 Orleans St., Baltimore, MD 21287",
      "Johns Hopkins Outpatient Center: 601 N. Caroline St., Baltimore, MD 21287",
      "Sidney Kimmel Comprehensive Cancer Center: 401 N. Broadway, Baltimore, MD 21231",
    ],
    phones: ["Main: 410-955-5000", "Guest Services: 410-614-5100", "Protective Services Escort: 410-955-5585"],
    email: "hopkinsmedicine.org/the-johns-hopkins-hospital",
    radioOrSpecialNote: "Emergency Department: Open 24 Hours at 1800 Orleans Street",
    columns: [
      {
        title: "Patients & Visitors",
        links: [
          { label: "Visiting Hours & Policies", href: "#visitors-portals" },
          { label: "Getting Here & Parking", href: "#locations" },
          { label: "Schedule an Appointment", href: "#appointment-modal" },
          { label: "MyChart Patient Portal", href: "https://mychart.hopkinsmedicine.org" },
          { label: "Billing, Insurance & Financial Aid", href: "#visitors-portals" },
          { label: "Accommodations & Dining", href: "#locations" },
          { label: "International Patients", href: "#visitors-portals" },
        ],
      },
      {
        title: "Medical Services & Care",
        links: [
          { label: "Johns Hopkins Children's Center", href: "#services-faculties" },
          { label: "Sidney Kimmel Cancer Center", href: "#services-faculties" },
          { label: "Heart and Vascular Institute", href: "#services-faculties" },
          { label: "Neurology & Neurosurgery", href: "#services-faculties" },
          { label: "Obstetrics & Gynecology (#1)", href: "#services-faculties" },
          { label: "Rheumatology (#1)", href: "#services-faculties" },
          { label: "Emergency & Level I Trauma Care", href: "#services-faculties" },
        ],
      },
      {
        title: "About The Hospital",
        links: [
          { label: "Mission, Vision & Values", href: "#about" },
          { label: "Hospital History (Founded 1889)", href: "#about" },
          { label: "By the Numbers & Fast Facts", href: "#by-the-numbers" },
          { label: "Rankings & Magnet Recognition", href: "#overview" },
          { label: "Community Health Initiatives", href: "#news" },
          { label: "Switch to GOUNI Adaptation (/)", href: "/" },
        ],
      },
    ],
    copyright:
      "© 2026 The Johns Hopkins University, The Johns Hopkins Hospital, and Johns Hopkins Health System. All rights reserved.",
  },
};
