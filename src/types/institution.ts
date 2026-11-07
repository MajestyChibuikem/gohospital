export interface QuickUtilityLink {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

export interface HeroActionItem {
  label: string;
  sublabel: string;
  href: string;
  primary?: boolean;
  actionType?: "modal-apply" | "modal-appointment" | "anchor" | "external";
}

export interface GuideCardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  bullets: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
  iconName:
    | "calendar"
    | "map-pin"
    | "shield-check"
    | "credit-card"
    | "building"
    | "globe"
    | "graduation-cap"
    | "stethoscope"
    | "book-open"
    | "users";
}

export interface SpecialtyOrFacultyItem {
  id: string;
  category: "medical" | "sciences" | "humanities" | "postgraduate" | "directorate";
  categoryLabel: string;
  name: string;
  shortCode?: string;
  rankingOrBadge: string;
  leadOrDean?: string;
  description: string;
  departments: string[];
  location: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface SpotlightFeature {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: { label: string; value: string }[];
  servicesList: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface StatMetric {
  value: string;
  label: string;
  detail: string;
}

export interface CampusLocationItem {
  id: string;
  name: string;
  badge: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  keyFacilities: string[];
  transitAndParking: string[];
  coordinatesLabel: string;
  mapEmbedUrl: string;
}

export interface CoreValueItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NewsEventItem {
  id: string;
  type:
    | "News"
    | "Event"
    | "Conference"
    | "Ranking"
    | "Clinical Milestone"
    | "Clinical Care"
    | "Infrastructure"
    | "Academic Medicine"
    | "Diagnostics";
  date: string;
  title: string;
  excerpt: string;
  locationOrTag: string;
  href: string;
}

export interface InstitutionPageData {
  id: "gouni" | "jhh";
  parentOrganization: string;
  institutionName: string;
  tagline: string;
  motto: string;
  sourceUrl: string;
  alertBanner: {
    badge: string;
    text: string;
    linkLabel: string;
    linkHref: string;
  };
  utilityLinks: QuickUtilityLink[];
  hero: {
    breadcrumbs: { label: string; href: string }[];
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    secondaryContact: string;
    hoursBadge: string;
    imageSrc: string;
    imageAlt: string;
    actions: HeroActionItem[];
  };
  overview: {
    eyebrow: string;
    heading: string;
    leadParagraph: string;
    bodyParagraphs: string[];
    calloutBox: {
      badge: string;
      title: string;
      subtitle: string;
      accolades: { title: string; detail: string }[];
      ctaLabel: string;
      ctaHref: string;
    };
  };
  guidesSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    cards: GuideCardItem[];
  };
  directorySection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    categories: { id: string; label: string }[];
    items: SpecialtyOrFacultyItem[];
    directoratesTitle?: string;
    directoratesList?: string[];
  };
  spotlightsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    features: SpotlightFeature[];
  };
  statsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    metrics: StatMetric[];
  };
  locationsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    campuses: CampusLocationItem[];
  };
  aboutSection: {
    eyebrow: string;
    heading: string;
    leaderSpotlight: {
      name: string;
      role: string;
      quote: string;
      bio: string;
      credentials: string[];
    };
    historyParagraphs: string[];
    values: CoreValueItem[];
    faqs: FaqItem[];
  };
  newsSection: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: NewsEventItem[];
  };
  footer: {
    organizationTitle: string;
    addressLines: string[];
    phones: string[];
    email: string;
    radioOrSpecialNote: string;
    columns: {
      title: string;
      links: { label: string; href: string }[];
    }[];
    copyright: string;
  };
}
