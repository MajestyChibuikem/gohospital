"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  CreditCard,
  ExternalLink,
  Globe,
  GraduationCap,
  HeartPulse,
  MapPin,
  Menu,
  Microscope,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { InstitutionPageData, GuideCardItem } from "@/types/institution";
import { GouniCrestSvg, HopkinsShieldSvg } from "@/components/sites/shared/brand-logos";

interface InstitutionPortalProps {
  data: InstitutionPageData;
}

const SECTION_NAV_ITEMS = [
  { id: "overview", labelGouni: "Overview", labelJhh: "Overview" },
  { id: "visitors-portals", labelGouni: "Patients & Visitors", labelJhh: "Patients & Visitors" },
  { id: "services-faculties", labelGouni: "Medical Specialties", labelJhh: "Medical Services" },
  { id: "teaching-hospital", labelGouni: "Centres of Excellence", labelJhh: "Campus Spotlight" },
  { id: "by-the-numbers", labelGouni: "By the Numbers", labelJhh: "By the Numbers" },
  { id: "locations", labelGouni: "Locations & Directions", labelJhh: "Locations & Parking" },
  { id: "about", labelGouni: "About & Leadership", labelJhh: "About & History" },
  { id: "news", labelGouni: "Hospital News", labelJhh: "News & Rankings" },
];

function GuideCardIcon({ name }: { name: GuideCardItem["iconName"] }) {
  const iconProps = { className: "w-5 h-5 text-[#005eb8]", "aria-hidden": true as const };
  switch (name) {
    case "graduation-cap":
      return <GraduationCap {...iconProps} />;
    case "stethoscope":
      return <Stethoscope {...iconProps} />;
    case "globe":
      return <Globe {...iconProps} />;
    case "credit-card":
      return <CreditCard {...iconProps} />;
    case "shield-check":
      return <ShieldCheck {...iconProps} />;
    case "book-open":
      return <BookOpen {...iconProps} />;
    case "calendar":
      return <Calendar {...iconProps} />;
    case "map-pin":
      return <MapPin {...iconProps} />;
    case "building":
      return <Building2 {...iconProps} />;
    case "users":
    default:
      return <Users {...iconProps} />;
  }
}

export function InstitutionPortal({ data }: InstitutionPortalProps) {
  const isGouni = data.id === "gouni";
  const baseId = useId();

  // Interactive states
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [directoryQuery, setDirectoryQuery] = useState<string>("");
  const [activeCampusId, setActiveCampusId] = useState<string>(data.locationsSection.campuses[0]?.id ?? "");
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [showAllDirectorates, setShowAllDirectorates] = useState<boolean>(false);

  // Native <dialog> refs
  const searchDialogRef = useRef<HTMLDialogElement | null>(null);
  const menuDialogRef = useRef<HTMLDialogElement | null>(null);
  const actionDialogRef = useRef<HTMLDialogElement | null>(null);

  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<{
    referenceCode: string;
    fullName: string;
    selection: string;
  } | null>(null);

  // Form controlled values
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>(
    isGouni
      ? "Cardiology & 2D Echocardiography Clinic"
      : "Cardiology & Heart and Vascular Institute"
  );
  const [notes, setNotes] = useState<string>("");

  // Track active section in sticky sub-nav via IntersectionObserver
  useEffect(() => {
    const sectionIds = SECTION_NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.4] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredDirectoryItems = useMemo(() => {
    const q = directoryQuery.trim().toLowerCase();
    return data.directorySection.items.filter((item) => {
      const matchesCat = selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      const haystack = [
        item.name,
        item.shortCode ?? "",
        item.description,
        item.categoryLabel,
        item.rankingOrBadge,
        ...item.departments,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [data.directorySection.items, directoryQuery, selectedCategory]);

  const activeCampus = useMemo(() => {
    return (
      data.locationsSection.campuses.find((c) => c.id === activeCampusId) ??
      data.locationsSection.campuses[0]
    );
  }, [activeCampusId, data.locationsSection.campuses]);

  const globalSearchResults = useMemo(() => {
    const q = globalSearchQuery.trim().toLowerCase();
    if (!q) return [];
    const results: { title: string; category: string; description: string; href: string }[] = [];

    for (const item of data.directorySection.items) {
      if (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.departments.some((d) => d.toLowerCase().includes(q))
      ) {
        results.push({
          title: item.name,
          category: item.categoryLabel,
          description: item.description,
          href: "#services-faculties",
        });
      }
    }

    for (const card of data.guidesSection.cards) {
      if (card.title.toLowerCase().includes(q) || card.description.toLowerCase().includes(q)) {
        results.push({
          title: card.title,
          category: card.badge,
          description: card.description,
          href: "#visitors-portals",
        });
      }
    }

    for (const campus of data.locationsSection.campuses) {
      if (campus.name.toLowerCase().includes(q) || campus.description.toLowerCase().includes(q)) {
        results.push({
          title: campus.name,
          category: "Campus & Location",
          description: campus.address,
          href: "#locations",
        });
      }
    }

    return results.slice(0, 8);
  }, [data, globalSearchQuery]);

  const openActionModal = () => {
    setFormSubmitted(null);
    if (isGouni) {
      setSelectedOption("Cardiology & 2D Echocardiography Clinic");
    } else {
      setSelectedOption("Heart and Vascular Institute (1800 Orleans St.)");
    }
    actionDialogRef.current?.showModal();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prefix = isGouni ? "GOUNITH-APPT" : "JHH-APPT";
    const code = `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
    setFormSubmitted({
      referenceCode: code,
      fullName: fullName.trim() || "Patient",
      selection: selectedOption,
    });
  };

  return (
    <div className="min-h-screen w-full max-w-full min-w-0 flex flex-col bg-white text-[#141b24] overflow-x-clip">
      {/* Skip link per modern-web-guidance accessibility */}
      <a href="#main-heading" className="skip-link visually-hidden">
        Skip to main content
      </a>

      {/* 1. HOSPITAL MASTHEAD & ALERT HEADER */}
      <header className="w-full max-w-full min-w-0 bg-white text-[#002d72] border-b border-[#d8e1e8]">
        {/* Primary Hospital Masthead with Official Logo, Search, Appointment & Menu */}
        <div className="bg-white border-b border-[#d8e1e8] border-t-4 border-t-[#002d72] text-[#002d72]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Identity Lockup */}
            <Link
              href={isGouni ? "/" : "/the-johns-hopkins-hospital"}
              className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0"
            >
              <div className="shrink-0 transition-transform group-hover:scale-105">
                {isGouni ? (
                  <GouniCrestSvg className="w-12 h-12 sm:w-15 sm:h-15" />
                ) : (
                  <HopkinsShieldSvg className="w-10 h-10 sm:w-14 sm:h-14" />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#005eb8] truncate">
                  {isGouni
                    ? "Godfrey Okoye University • Unity of Knowledge"
                    : "Johns Hopkins Medicine"}
                </div>
                <div className="font-serif text-base sm:text-2xl font-bold tracking-tight text-[#002d72] leading-tight">
                  {isGouni ? "Godfrey Okoye University Teaching Hospital" : "The Johns Hopkins Hospital"}
                </div>
                <div className="text-xs text-[#4a5568] hidden sm:block truncate">
                  {isGouni
                    ? "Ntasi Obi (\"Comfort of the Heart\") • Trans-Ekulu, Enugu, Nigeria"
                    : "1800 Orleans Street • Baltimore, Maryland 21287"}
                </div>
              </div>
            </Link>

            {/* Right Action Controls (Phone, Search Button, Appointment & Mega-Menu Trigger) */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              <a
                href={`tel:${data.hero.phone.replace(/[^+\d]/g, "")}`}
                className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded border border-[#d8e1e8] bg-[#f4f7fa] text-[#002d72] hover:border-[#005eb8] transition-colors text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#005eb8]" aria-hidden="true" />
                <span>{data.hero.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => searchDialogRef.current?.showModal()}
                aria-haspopup="dialog"
                aria-label="Search clinical departments, doctors, and patient services"
                className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded border border-[#cbd5e1] bg-white text-[#002d72] hover:bg-[#f4f7fa] hover:border-[#005eb8] font-semibold text-sm transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#005eb8]" aria-hidden="true" />
                <span className="hidden sm:inline">Search</span>
              </button>

              <button
                type="button"
                onClick={() => openActionModal()}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#005eb8] hover:bg-[#002d72] text-white font-bold text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>{isGouni ? "Request Appointment" : "Schedule Appointment"}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => menuDialogRef.current?.showModal()}
                aria-haspopup="dialog"
                aria-label="Open hospital navigation menu"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded bg-[#002d72] hover:bg-[#001e4d] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <Menu className="w-4 h-4 text-[#f2a900]" aria-hidden="true" />
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. INSTITUTIONAL ANNOUNCEMENT BANNER */}
        <div className="bg-[#fff9eb] text-[#141b24] border-b border-[#f2a900]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 min-w-0">
              <span className="inline-flex self-start sm:self-auto items-center px-2 py-0.5 rounded bg-[#002d72] text-white font-bold text-[11px] uppercase tracking-wider shrink-0">
                {data.alertBanner.badge}
              </span>
              <span className="font-medium text-[#1e293b]">{data.alertBanner.text}</span>
            </div>
            <a
              href={data.alertBanner.linkHref}
              target={data.alertBanner.linkHref.startsWith("http") ? "_blank" : undefined}
              rel={data.alertBanner.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 font-bold text-[#005eb8] hover:text-[#002d72] underline underline-offset-4 shrink-0"
            >
              <span>{data.alertBanner.linkLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN LANDMARK (Single <main> per page) */}
      <main id="main-content" className="flex-1 w-full max-w-full min-w-0">
        {/* 4. JOHNS HOPKINS HOSPITAL ARCHITECTURAL HERO SECTION */}
        <section className="relative w-full max-w-full min-w-0 bg-gradient-to-b from-[#002d72] via-[#002d72] to-[#001e4d] text-white overflow-hidden">
          {/* Subtle architectural grid watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #f2a900 1px, transparent 1px), radial-gradient(circle at 80% 70%, #ffffff 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-5 pb-12 lg:pb-16">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-blue-200">
                {data.hero.breadcrumbs.map((crumb, idx) => (
                  <li key={crumb.label} className="inline-flex items-center gap-2">
                    {idx > 0 && <span aria-hidden="true" className="text-blue-300/60">/</span>}
                    {idx < data.hero.breadcrumbs.length - 1 ? (
                      <Link href={crumb.href} className="hover:text-white hover:underline underline-offset-4">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white font-semibold">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Split Hero Grid: Left Institutional Overview & Contact, Right High-Priority Campus/Hospital Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 min-w-0 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#f2a900] text-[11px] sm:text-xs font-bold uppercase tracking-wider max-w-full">
                  <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{data.motto}</span>
                </div>

                <h1 id="main-heading" tabIndex={-1} className="jhh-hero-title font-bold text-white">
                  {data.hero.title}
                </h1>

                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  {data.hero.subtitle}
                </p>

                {/* Signature JHH Location & Phone Metadata Box */}
                <div className="bg-white/10 backdrop-blur-xs border-l-4 border-[#f2a900] rounded-r-md p-4 sm:p-5 space-y-2.5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f2a900] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-bold text-white block">Campus & Hospital Address:</span>
                      <span className="text-blue-100">{data.hero.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#f2a900] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="font-bold text-white">Primary Phone: </span>
                      <a
                        href={`tel:${data.hero.phone.replace(/[^+\d]/g, "")}`}
                        className="text-[#f2a900] font-bold hover:underline"
                      >
                        {data.hero.phone}
                      </a>
                      <span className="block text-xs text-blue-200 mt-0.5">
                        {data.hero.secondaryContact}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <Clock className="w-5 h-5 text-[#4cc38a] shrink-0" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-semibold text-emerald-200">
                      {data.hero.hoursBadge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Media Frame (LCP Image with fetchpriority="high" per modern-web-guidance html) */}
              <div className="lg:col-span-6 min-w-0">
                <figure className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl bg-[#001e4d]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.hero.imageSrc}
                    alt={data.hero.imageAlt}
                    width={1280}
                    height={720}
                    fetchPriority="high"
                    className="w-full aspect-16/10 object-cover"
                  />
                  <figcaption className="bg-[#00183d]/95 text-blue-100 text-xs px-4 py-2.5 flex items-center justify-between gap-2 border-t border-white/15">
                    <span>
                      {isGouni
                        ? "Godfrey Okoye University Teaching Hospital (GOUNITH) — Trans-Ekulu, Enugu"
                        : "The Johns Hopkins Hospital Campus — 1800 Orleans Street, East Baltimore"}
                    </span>
                    <span className="text-[#f2a900] font-bold shrink-0">
                      {isGouni ? "24/7 Emergency & Tertiary Care" : "Est. 1889"}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* 4-Column Quick Action Cards Bar (Signature Johns Hopkins Hospital Portal Action Strip) */}
            <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.hero.actions.map((action) => {
                const isModal =
                  action.actionType === "modal-apply" || action.actionType === "modal-appointment";

                if (isModal) {
                  return (
                    <button
                      key={action.label}
                      type="button"
                      onClick={() => openActionModal()}
                      className={`text-left rounded-md p-4 sm:p-5 transition-all cursor-pointer flex flex-col justify-between gap-3 border ${
                        action.primary
                          ? "bg-[#f2a900] text-[#001e4d] border-[#f2a900] hover:bg-[#ffba1a] shadow-lg"
                          : "bg-white text-[#002d72] border-white hover:bg-[#e8f1fa] shadow-md"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-base leading-snug">{action.label}</span>
                        <ArrowRight className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                      </div>
                      <span
                        className={`text-xs leading-normal ${
                          action.primary ? "text-[#001e4d]/85 font-medium" : "text-[#4a5568]"
                        }`}
                      >
                        {action.sublabel}
                      </span>
                    </button>
                  );
                }

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.actionType === "external" ? "_blank" : undefined}
                    rel={action.actionType === "external" ? "noopener noreferrer" : undefined}
                    className="text-left rounded-md p-4 sm:p-5 transition-all flex flex-col justify-between gap-3 bg-white text-[#002d72] border border-white hover:bg-[#e8f1fa] shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-base leading-snug">{action.label}</span>
                      {action.actionType === "external" ? (
                        <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 text-[#005eb8]" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="w-5 h-5 shrink-0 mt-0.5 text-[#005eb8]" aria-hidden="true" />
                      )}
                    </div>
                    <span className="text-xs text-[#4a5568] leading-normal">{action.sublabel}</span>
                  </a>
                );
              })}
            </div>

            {/* University Sayings & Crest Pillars Strip (for GOUNITH) */}
            {isGouni && (
              <div className="mt-7 pt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="flex items-start gap-3 bg-white/10 rounded-md p-3.5 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#f2a900] mt-1.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-[#f2a900] uppercase tracking-wider">
                      &ldquo;Unity of Knowledge&rdquo; — The Open Book
                    </div>
                    <div className="text-blue-100 mt-0.5">
                      Uniting faith and reason, bedside clinical medicine, and scientific discovery.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-md p-3.5 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#f2a900] mt-1.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-[#f2a900] uppercase tracking-wider">
                      &ldquo;Ntasi Obi&rdquo; — The Heart
                    </div>
                    <div className="text-blue-100 mt-0.5">
                      &ldquo;Comfort of the Heart&rdquo; — healing every patient with love, dignity, and empathy.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-md p-3.5 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#f2a900] mt-1.5 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="font-bold text-[#f2a900] uppercase tracking-wider">
                      &ldquo;Epistemic Dialogue&rdquo; — The Clay Vessel
                    </div>
                    <div className="text-blue-100 mt-0.5">
                      Excelling in learning, ethical character, and service to humanity across cultures.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. STICKY IN-PAGE SECTION SUB-NAVIGATION BAR */}
        <div className="sticky top-0 z-40 w-full max-w-full min-w-0 bg-white/95 backdrop-blur-md border-b border-[#d8e1e8] shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4 min-w-0">
            <nav aria-label="Section" className="min-w-0 flex-1 overflow-x-auto no-scrollbar py-1">
              <ul className="flex items-center gap-1 sm:gap-2 w-max">
                {SECTION_NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`inline-block px-3 py-3 text-xs sm:text-sm font-bold border-b-3 transition-colors ${
                          isActive
                            ? "border-[#005eb8] text-[#002d72] bg-[#f4f7fa]"
                            : "border-transparent text-[#4a5568] hover:text-[#002d72] hover:border-[#cbd5e1]"
                        }`}
                      >
                        {isGouni ? item.labelGouni : item.labelJhh}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => openActionModal()}
                className="px-3.5 py-1.5 rounded bg-[#002d72] text-white hover:bg-[#005eb8] text-xs font-bold transition-colors cursor-pointer"
              >
                {isGouni ? "Request Appointment" : "Book Appointment"}
              </button>
            </div>
          </div>
        </div>

        {/* 6. SECTION: OVERVIEW & HONOR ROLL / INSTITUTIONAL DISTINCTION CALLOUT */}
        <section id="overview" className="py-14 lg:py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left 7 Columns: Editorial Prose */}
              <div className="lg:col-span-7 space-y-5">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                  {data.overview.eyebrow}
                </div>
                <h2 className="jhh-section-title font-bold text-[#002d72]">
                  {data.overview.heading}
                </h2>
                <p className="text-lg sm:text-xl font-serif text-[#1e293b] leading-relaxed">
                  {data.overview.leadParagraph}
                </p>
                {data.overview.bodyParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-base text-[#3e4c59] leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Quick Highlight Bar */}
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-md bg-[#f4f7fa] border-l-4 border-[#002d72]">
                    <div className="text-xs font-bold uppercase text-[#005eb8]">
                      {isGouni ? "Emergency & Diagnostics" : "Clinical Care"}
                    </div>
                    <div className="font-bold text-[#002d72] mt-1 text-sm">
                      {isGouni ? "24/7 A&E, Lab & Radiology" : "Level I Trauma & Specialty Care"}
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-[#f4f7fa] border-l-4 border-[#f2a900]">
                    <div className="text-xs font-bold uppercase text-[#005eb8]">
                      {isGouni ? "Heart & GI Suites" : "Honor Roll"}
                    </div>
                    <div className="font-bold text-[#002d72] mt-1 text-sm">
                      {isGouni ? "2D Echo & Endoscopy Unit" : "#1 Hospital in Maryland"}
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-[#f4f7fa] border-l-4 border-[#1e6b45]">
                    <div className="text-xs font-bold uppercase text-[#1e6b45]">
                      {isGouni ? "Academic Medicine" : "Nursing Excellence"}
                    </div>
                    <div className="font-bold text-[#002d72] mt-1 text-sm">
                      {isGouni ? "GOUNI College of Medicine & DNA Lab" : "ANCC Magnet Designated"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: Johns Hopkins Style Honor Roll / Accreditation Box */}
              <aside
                aria-label={data.overview.calloutBox.badge}
                className="lg:col-span-5 rounded-lg bg-[#f4f7fa] border border-[#d8e1e8] border-t-4 border-t-[#f2a900] p-6 sm:p-8 shadow-md space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#002d72] text-[#f2a900] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8] block">
                      {data.overview.calloutBox.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#002d72]">
                      {data.overview.calloutBox.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#3e4c59]">{data.overview.calloutBox.subtitle}</p>

                <ul className="space-y-4">
                  {data.overview.calloutBox.accolades.map((acc) => (
                    <li key={acc.title} className="flex items-start gap-3 bg-white p-3.5 rounded border border-[#e2e8f0]">
                      <CheckCircle2 className="w-5 h-5 text-[#1e6b45] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <div className="font-bold text-sm text-[#002d72]">{acc.title}</div>
                        <p className="text-xs text-[#4a5568] mt-0.5 leading-relaxed">{acc.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={data.overview.calloutBox.ctaHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#002d72] text-white hover:bg-[#005eb8] font-bold text-sm transition-colors"
                >
                  <span>{data.overview.calloutBox.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        {/* 7. SECTION: ESSENTIAL GUIDE CARDS (CSS Subgrid + Container Queries) */}
        <section
          id="visitors-portals"
          className="py-14 lg:py-20 bg-[#f4f7fa] border-y border-[#d8e1e8] scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                {data.guidesSection.eyebrow}
              </div>
              <h2 className="jhh-section-title font-bold text-[#002d72]">
                {data.guidesSection.heading}
              </h2>
              <p className="text-base text-[#3e4c59]">{data.guidesSection.subheading}</p>
            </div>

            {/* Subgrid Card Layout per modern-web-guidance card & css-layout */}
            <div className="jhh-guide-grid">
              {data.guidesSection.cards.map((card) => (
                <article key={card.id} className="jhh-guide-card">
                  {/* Track 1: Header badge & icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-[#e8f1fa] text-[#002d72] text-xs font-bold uppercase tracking-wide">
                      {card.badge}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#f4f7fa] border border-[#d8e1e8] flex items-center justify-center">
                      <GuideCardIcon name={card.iconName} />
                    </div>
                  </div>

                  {/* Track 2: Heading */}
                  <h3 className="font-serif text-xl font-bold text-[#002d72]">{card.title}</h3>

                  {/* Track 3: Content (Description + Bulleted Deep Links grouped in single <div>) */}
                  <div className="space-y-4">
                    <p className="text-sm text-[#3e4c59] leading-relaxed">{card.description}</p>
                    <ul className="jhh-bullet-list text-sm">
                      {card.bullets.map((b) => (
                        <li key={b.label}>
                          <a
                            href={b.href}
                            target={b.href.startsWith("http") ? "_blank" : undefined}
                            rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center justify-between w-full gap-2 font-semibold text-[#005eb8] hover:text-[#002d72] group"
                          >
                            <span className="group-hover:underline underline-offset-4">{b.label}</span>
                            <ArrowRight
                              className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Track 4: Footer Action */}
                  <footer className="pt-2 border-t border-[#edf2f7] flex items-center justify-between">
                    <a
                      href={card.ctaHref}
                      target={card.ctaHref.startsWith("http") ? "_blank" : undefined}
                      rel={card.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#002d72] hover:text-[#005eb8]"
                    >
                      <span>{card.ctaLabel}</span>
                      <span className="visually-hidden"> — {card.title}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. SECTION: INTERACTIVE ACADEMIC FACULTIES / MEDICAL SERVICES DIRECTORY */}
        <section id="services-faculties" className="py-14 lg:py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                  {data.directorySection.eyebrow}
                </div>
                <h2 className="jhh-section-title font-bold text-[#002d72]">
                  {data.directorySection.heading}
                </h2>
                <p className="text-base text-[#3e4c59]">{data.directorySection.subheading}</p>
              </div>

              {/* Semantic <search> Landmark for Filtering (modern-web-guidance html) */}
              <search aria-label="Filter faculties and clinical services" className="w-full lg:w-96">
                <form onSubmit={(e) => e.preventDefault()} className="relative">
                  <label htmlFor={`${baseId}-directory-search`} className="visually-hidden">
                    Search faculties, departments, or medical services
                  </label>
                  <Search
                    className="w-4 h-4 text-[#616e7c] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id={`${baseId}-directory-search`}
                    type="search"
                    value={directoryQuery}
                    onChange={(e) => setDirectoryQuery(e.target.value)}
                    placeholder={data.directorySection.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[#cbd5e1] bg-[#f4f7fa] text-sm text-[#141b24] placeholder:text-[#616e7c] focus:bg-white"
                  />
                </form>
              </search>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 border-b border-[#d8e1e8] pb-4" role="tablist" aria-label="Directory categories">
              {data.directorySection.categories.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                      active
                        ? "bg-[#002d72] text-white shadow-xs"
                        : "bg-[#f4f7fa] text-[#3e4c59] hover:bg-[#e8f1fa] hover:text-[#002d72]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Region for Search Count */}
            <div aria-live="polite" className="text-xs font-semibold text-[#616e7c]">
              Showing {filteredDirectoryItems.length} of {data.directorySection.items.length}{" "}
              clinical specialties &amp; hospital departments
            </div>

            {/* Directory Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDirectoryItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-lg border border-[#d8e1e8] bg-white p-6 shadow-xs hover:shadow-md hover:border-[#005eb8] transition-all flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8]">
                        {item.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#fff9eb] border border-[#f2a900]/60 text-[#002d72] text-xs font-bold">
                        {item.rankingOrBadge}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-xl font-bold text-[#002d72]">{item.name}</h3>
                      {item.shortCode && (
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#f4f7fa] text-[#4a5568] shrink-0">
                          {item.shortCode}
                        </span>
                      )}
                    </div>

                    {item.leadOrDean && (
                      <div className="text-xs font-semibold text-[#1e6b45] bg-[#eef8f2] px-3 py-1.5 rounded">
                        {item.leadOrDean}
                      </div>
                    )}

                    <p className="text-sm text-[#3e4c59] leading-relaxed">{item.description}</p>

                    <div className="pt-1">
                      <div className="text-xs font-bold uppercase tracking-wide text-[#4a5568] mb-2">
                        Clinical Services &amp; Units:
                      </div>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm text-[#1e293b]">
                        {item.departments.map((dept) => (
                          <li key={dept} className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#005eb8] mt-2 shrink-0" aria-hidden="true" />
                            <span>{dept}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <footer className="pt-4 border-t border-[#edf2f7] flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[#4a5568] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#005eb8]" aria-hidden="true" />
                      {item.location}
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openActionModal()}
                        className="font-bold text-[#005eb8] hover:text-[#002d72] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{item.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </footer>
                </article>
              ))}
            </div>

            {/* Hospital Clinical Units & Support Services Panel */}
            {data.directorySection.directoratesList && (
              <div className="mt-8 rounded-lg bg-[#f4f7fa] border border-[#d8e1e8] p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8] block">
                      {isGouni ? "Integrated Hospital Care & Diagnostics" : "Integrated Health System"}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#002d72]">
                      {data.directorySection.directoratesTitle}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAllDirectorates((prev) => !prev)}
                    aria-expanded={showAllDirectorates}
                    className="px-3.5 py-2 rounded border border-[#002d72] text-[#002d72] hover:bg-[#002d72] hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {showAllDirectorates ? "Show Compact View" : `View All (${data.directorySection.directoratesList.length})`}
                  </button>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {(showAllDirectorates
                    ? data.directorySection.directoratesList
                    : data.directorySection.directoratesList.slice(0, 9)
                  ).map((dir) => (
                    <li
                      key={dir}
                      className="flex items-center gap-2.5 bg-white px-3.5 py-2.5 rounded border border-[#e2e8f0] text-xs sm:text-sm font-semibold text-[#002d72]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#f2a900] shrink-0" aria-hidden="true" />
                      <span>{dir}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* 9. SECTION: TEACHING HOSPITAL (GOUNITH) & DNA FORENSICS SPOTLIGHT */}
        <section
          id="teaching-hospital"
          className="py-14 lg:py-20 bg-[#f4f7fa] border-t border-[#d8e1e8] scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                {data.spotlightsSection.eyebrow}
              </div>
              <h2 className="jhh-section-title font-bold text-[#002d72]">
                {data.spotlightsSection.heading}
              </h2>
              <p className="text-base text-[#3e4c59]">{data.spotlightsSection.subheading}</p>
            </div>

            <div className="space-y-12">
              {data.spotlightsSection.features.map((feat, idx) => (
                <article
                  key={feat.id}
                  className="rounded-xl bg-white border border-[#d8e1e8] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 relative bg-[#001e4d] ${
                      idx % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={feat.imageSrc}
                      alt={feat.imageAlt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full min-h-72 object-cover"
                    />
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8]">
                        {idx === 0 ? (
                          <HeartPulse className="w-4 h-4 text-[#005eb8]" aria-hidden="true" />
                        ) : (
                          <Microscope className="w-4 h-4 text-[#1e6b45]" aria-hidden="true" />
                        )}
                        <span>{feat.eyebrow}</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002d72] leading-tight">
                        {feat.title}
                      </h3>

                      <div className="text-xs sm:text-sm font-semibold text-[#1e6b45]">
                        {feat.subtitle}
                      </div>

                      <p className="text-sm sm:text-base text-[#3e4c59] leading-relaxed">
                        {feat.description}
                      </p>

                      {/* 3-Column Highlight Metrics */}
                      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {feat.highlights.map((h) => (
                          <div
                            key={h.label}
                            className="p-3 rounded bg-[#f4f7fa] border border-[#e2e8f0]"
                          >
                            <dt className="text-[11px] font-bold uppercase text-[#616e7c]">
                              {h.label}
                            </dt>
                            <dd className="text-sm font-bold text-[#002d72] mt-0.5">{h.value}</dd>
                          </div>
                        ))}
                      </dl>

                      {/* Bulleted Services List */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs sm:text-sm text-[#1e293b]">
                        {feat.servicesList.map((srv) => (
                          <li key={srv} className="flex items-start gap-2">
                            <CheckCircle2
                              className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#edf2f7] flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openActionModal()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#002d72] text-white hover:bg-[#005eb8] text-sm font-bold transition-colors cursor-pointer"
                      >
                        <span>{feat.primaryCta.label}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>

                      <a
                        href={feat.secondaryCta.href}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#cbd5e1] text-[#002d72] hover:bg-[#f4f7fa] text-sm font-bold transition-colors"
                      >
                        <span>{feat.secondaryCta.label}</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 10. SECTION: BY THE NUMBERS (Johns Hopkins Signature Heritage Blue Impact Band) */}
        <section id="by-the-numbers" className="py-16 lg:py-20 bg-[#002d72] text-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#f2a900]">
                {data.statsSection.eyebrow}
              </div>
              <h2 className="jhh-section-title font-bold text-white">
                {data.statsSection.heading}
              </h2>
              <p className="text-base text-blue-100">{data.statsSection.subheading}</p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {data.statsSection.metrics.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#001e4d]/80 border border-white/15 border-t-4 border-t-[#f2a900] rounded-md p-6 flex flex-col justify-between gap-3"
                >
                  <div>
                    <dd className="jhh-stat-number font-bold text-white">{stat.value}</dd>
                    <dt className="text-sm font-bold uppercase tracking-wider text-[#f2a900] mt-2">
                      {stat.label}
                    </dt>
                  </div>
                  <p className="text-xs text-blue-100 leading-relaxed">{stat.detail}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 11. SECTION: CAMPUSES, LOCATIONS & GETTING HERE */}
        <section id="locations" className="py-14 lg:py-20 bg-white scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                {data.locationsSection.eyebrow}
              </div>
              <h2 className="jhh-section-title font-bold text-[#002d72]">
                {data.locationsSection.heading}
              </h2>
              <p className="text-base text-[#3e4c59]">{data.locationsSection.subheading}</p>
            </div>

            {/* Interactive Campus / Building Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" role="tablist" aria-label="Campus locations">
              {data.locationsSection.campuses.map((campus) => {
                const isSelected = activeCampus?.id === campus.id;
                return (
                  <button
                    key={campus.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCampusId(campus.id)}
                    className={`text-left p-4 rounded-md border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#002d72] text-white border-[#002d72] shadow-md"
                        : "bg-[#f4f7fa] text-[#002d72] border-[#d8e1e8] hover:bg-[#e8f1fa]"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isSelected ? "text-[#f2a900]" : "text-[#005eb8]"
                      }`}
                    >
                      {campus.badge}
                    </span>
                    <span className="font-serif font-bold text-base mt-1 block leading-snug">
                      {campus.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Campus Detail View */}
            {activeCampus && (
              <div className="rounded-xl border border-[#d8e1e8] bg-[#f4f7fa] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-[#002d72] text-[#f2a900] text-xs font-bold uppercase tracking-wider">
                      {activeCampus.badge}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#002d72] mt-2">
                      {activeCampus.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#3e4c59] mt-2 leading-relaxed">
                      {activeCampus.description}
                    </p>
                  </div>

                  <div className="bg-white rounded-md border border-[#d8e1e8] p-4 sm:p-5 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="font-bold text-[#002d72]">Address: </span>
                        <span className="text-[#3e4c59]">{activeCampus.address}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="font-bold text-[#002d72]">Phone: </span>
                        <span className="text-[#3e4c59]">{activeCampus.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#1e6b45] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="font-bold text-[#002d72]">Hours: </span>
                        <span className="text-[#3e4c59]">{activeCampus.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-[#002d72] mb-2.5">
                        Key Buildings & Facilities
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#3e4c59]">
                        {activeCampus.keyFacilities.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8] mt-2 shrink-0" aria-hidden="true" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider text-[#002d72] mb-2.5">
                        Parking, Shuttles & Transit
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#3e4c59]">
                        {activeCampus.transitAndParking.map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1e6b45] mt-2 shrink-0" aria-hidden="true" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Google Maps Wayfinding & Directions */}
                <div className="lg:col-span-5 bg-white rounded-lg border border-[#d8e1e8] p-5 shadow-xs space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#002d72]">
                        Google Maps Location & Wayfinding
                      </span>
                      <span className="text-xs font-mono text-[#005eb8] truncate max-w-[200px]" title={activeCampus.coordinatesLabel}>
                        {activeCampus.coordinatesLabel}
                      </span>
                    </div>

                    {/* Google Maps Interactive Embed */}
                    <div className="rounded-md overflow-hidden border border-[#cbd5e1] bg-[#e8f1fa] w-full relative h-[300px] sm:h-[340px]">
                      <iframe
                        title={`Interactive Google Maps location for ${activeCampus.name}`}
                        src={
                          activeCampus.mapEmbedUrl.includes("&z=")
                            ? activeCampus.mapEmbedUrl
                            : `${activeCampus.mapEmbedUrl}&z=15`
                        }
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        activeCampus.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#002d72] text-white hover:bg-[#005eb8] text-xs font-bold transition-colors shadow-xs"
                    >
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>Get Driving / Transit Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        activeCampus.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded border border-[#cbd5e1] bg-white text-[#002d72] hover:bg-[#f4f7fa] text-xs font-semibold transition-colors shadow-xs"
                    >
                      <span>View Full Map</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 12. SECTION: ABOUT, LEADERSHIP, CORE VALUES & NATIVE <details> ACCORDION FAQ */}
        <section
          id="about"
          className="py-14 lg:py-20 bg-[#f4f7fa] border-t border-[#d8e1e8] scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
            {/* Leadership & History Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                  {data.aboutSection.eyebrow}
                </div>
                <h2 className="jhh-section-title font-bold text-[#002d72]">
                  {data.aboutSection.heading}
                </h2>
                {data.aboutSection.historyParagraphs.map((p, idx) => (
                  <p key={idx} className="text-base text-[#3e4c59] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Leadership Quote & Credentials Card */}
              <div className="lg:col-span-6 rounded-xl bg-[#002d72] text-white p-6 sm:p-8 border-t-4 border-t-[#f2a900] shadow-lg space-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="shrink-0">
                    {isGouni ? (
                      <GouniCrestSvg className="w-12 h-12" />
                    ) : (
                      <HopkinsShieldSvg className="w-12 h-12" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#f2a900]">
                      {data.aboutSection.leaderSpotlight.role}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      {data.aboutSection.leaderSpotlight.name}
                    </h3>
                  </div>
                </div>

                <blockquote
                  cite={data.sourceUrl}
                  className="font-serif italic text-base sm:text-lg text-blue-50 border-l-3 border-[#f2a900] pl-4 py-1"
                >
                  &ldquo;{data.aboutSection.leaderSpotlight.quote}&rdquo;
                </blockquote>

                <p className="text-sm text-blue-100 leading-relaxed">
                  {data.aboutSection.leaderSpotlight.bio}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-white/15 text-xs text-blue-100">
                  {data.aboutSection.leaderSpotlight.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#f2a900] shrink-0" aria-hidden="true" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 Core Values Grid */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#002d72]">
                {isGouni
                  ? "Core Clinical Values of GOUNI Teaching Hospital"
                  : "Johns Hopkins Medicine Shared Core Values"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.aboutSection.values.map((val, i) => (
                  <div
                    key={val.title}
                    className="bg-white rounded-lg border border-[#d8e1e8] p-5 space-y-2 shadow-2xs"
                  >
                    <span className="font-mono text-xs font-bold text-[#005eb8]">0{i + 1}</span>
                    <h4 className="font-serif text-lg font-bold text-[#002d72]">{val.title}</h4>
                    <p className="text-sm text-[#3e4c59] leading-relaxed">{val.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Native Exclusive Accordion FAQ (<details name="institution-faq"> per modern-web-guidance html) */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#002d72]">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {data.aboutSection.faqs.map((faq, idx) => (
                  <details
                    key={faq.question}
                    name="institution-faq"
                    open={idx === 0}
                    className="jhh-faq-item"
                  >
                    <summary className="jhh-faq-summary">
                      <span className="text-base">{faq.question}</span>
                      <ChevronDown
                        className="w-5 h-5 text-[#005eb8] shrink-0 transition-transform jhh-faq-chevron"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#3e4c59] border-t border-[#edf2f7]">
                      <p className="pt-3 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 13. SECTION: LATEST NEWS, CONFERENCES & CAMPUS MILESTONES */}
        <section id="news" className="py-14 lg:py-20 bg-white border-t border-[#d8e1e8] scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-3xl space-y-2">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#005eb8]">
                  {data.newsSection.eyebrow}
                </div>
                <h2 className="jhh-section-title font-bold text-[#002d72]">
                  {data.newsSection.heading}
                </h2>
                <p className="text-base text-[#3e4c59]">{data.newsSection.subheading}</p>
              </div>

              <a
                href={data.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#002d72] text-[#002d72] hover:bg-[#002d72] hover:text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <span>{isGouni ? "Visit Official GOUNI Newsroom" : "Visit Johns Hopkins Newsroom"}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.newsSection.items.map((news) => (
                <article
                  key={news.id}
                  className="rounded-lg border border-[#d8e1e8] bg-[#f4f7fa] p-5 flex flex-col justify-between gap-4 hover:border-[#005eb8] hover:bg-white transition-all shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded bg-[#002d72] text-white font-bold">
                        {news.type}
                      </span>
                      <span className="font-semibold text-[#616e7c]">{news.date}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#002d72] leading-snug">
                      {news.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#3e4c59] leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>

                  <footer className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs">
                    <span className="font-medium text-[#4a5568]">{news.locationOrTag}</span>
                    <a
                      href={news.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#005eb8] hover:text-[#002d72] inline-flex items-center gap-1"
                    >
                      <span>Read Details</span>
                      <span className="visually-hidden">: {news.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 14. COMPREHENSIVE INSTITUTIONAL FOOTER (#001E4D Deep Heritage Navy) */}
      <footer className="w-full max-w-full min-w-0 bg-[#001e4d] text-white border-t-4 border-[#f2a900]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand & Address Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                {isGouni ? (
                  <GouniCrestSvg className="w-12 h-12 shrink-0" />
                ) : (
                  <HopkinsShieldSvg className="w-12 h-12 shrink-0" />
                )}
                <div>
                  <div className="font-serif text-lg font-bold text-white leading-snug">
                    {data.footer.organizationTitle}
                  </div>
                  <div className="text-xs text-[#f2a900] font-semibold">{data.motto}</div>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-blue-100 leading-relaxed">
                {data.footer.addressLines.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#f2a900] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 space-y-1.5 text-xs text-blue-100">
                <div className="font-bold text-white">Telephone / WhatsApp Hotlines:</div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {data.footer.phones.map((ph) => (
                    <a
                      key={ph}
                      href={`tel:${ph.replace(/[^+\d]/g, "")}`}
                      className="text-[#f2a900] font-semibold hover:underline"
                    >
                      {ph}
                    </a>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-white">Email / Web: </span>
                  <span>{data.footer.email}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/10 text-xs font-semibold text-blue-100">
                <Radio className="w-4 h-4 text-[#f2a900]" aria-hidden="true" />
                <span>{data.footer.radioOrSpecialNote}</span>
              </div>
            </div>

            {/* 3 Navigation Columns */}
            <nav
              aria-label="Footer"
              className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {data.footer.columns.map((col) => (
                <div key={col.title} className="space-y-3">
                  <h2 className="font-serif text-base font-bold text-[#f2a900] border-b border-white/15 pb-2">
                    {col.title}
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-blue-100 hover:text-white hover:underline underline-offset-4 inline-flex items-center gap-1"
                        >
                          <span>{link.label}</span>
                          {link.href.startsWith("http") && (
                            <ExternalLink className="w-3 h-3 opacity-75" aria-hidden="true" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
            <p>{data.footer.copyright}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={data.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-4"
              >
                {isGouni ? "Official GOUNI Portal (gouni.edu.ng)" : "Johns Hopkins Medicine"}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* NATIVE <dialog> 1: GLOBAL SEARCH MODAL (with closedby="any" per modern-web-guidance html) */}
      <dialog
        ref={searchDialogRef}
        aria-labelledby={`${baseId}-search-dialog-title`}
        className="jhh-dialog"
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between gap-4 border-b border-[#d8e1e8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8] block">
                {isGouni ? "Godfrey Okoye University Teaching Hospital" : "Johns Hopkins Medicine"}
              </span>
              <h2 id={`${baseId}-search-dialog-title`} className="font-serif text-xl font-bold text-[#002d72]">
                Search Clinical Departments, Doctors &amp; Services
              </h2>
            </div>
            <form method="dialog">
              <button
                type="submit"
                aria-label="Close search dialog"
                className="p-2 rounded-full text-[#4a5568] hover:bg-[#f4f7fa] hover:text-[#002d72] cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </form>
          </div>

          <search aria-label="Hospital directory search">
            <label htmlFor={`${baseId}-modal-search-input`} className="block text-xs font-bold text-[#002d72] mb-1.5">
              Enter keywords (e.g., {isGouni ? "Cardiology, 2D Echo, Endoscopy, Emergency, Maternity, Paediatrics, Radiology" : "Cardiology, Cancer, Parking, MyChart, Pediatrics"})
            </label>
            <input
              id={`${baseId}-modal-search-input`}
              type="search"
              value={globalSearchQuery}
              onChange={(e) => setGlobalSearchQuery(e.target.value)}
              placeholder={data.directorySection.searchPlaceholder}
              className="w-full px-4 py-3 rounded border border-[#005eb8] text-sm text-[#141b24]"
            />
          </search>

          <div aria-live="polite" className="space-y-2.5 max-h-80 overflow-y-auto">
            {globalSearchQuery.trim() === "" ? (
              <div className="text-xs text-[#616e7c] py-3">
                Start typing above to search across all {isGouni ? "GOUNITH clinical departments, diagnostic units, and patient guides" : "Johns Hopkins Hospital services, guides, and locations"}.
              </div>
            ) : globalSearchResults.length === 0 ? (
              <div className="text-sm text-[#4a5568] py-4">
                No direct matches found for &ldquo;{globalSearchQuery}&rdquo;. Try searching for{" "}
                <strong>{isGouni ? "Cardiology, Endoscopy, Surgery, or Maternity" : "Cancer, Children, or Parking"}</strong>.
              </div>
            ) : (
              globalSearchResults.map((res) => (
                <a
                  key={res.title}
                  href={res.href}
                  onClick={() => searchDialogRef.current?.close()}
                  className="block p-3.5 rounded border border-[#d8e1e8] hover:border-[#005eb8] hover:bg-[#f4f7fa] transition-colors"
                >
                  <span className="text-[11px] font-bold uppercase text-[#005eb8]">{res.category}</span>
                  <div className="font-bold text-sm text-[#002d72]">{res.title}</div>
                  <p className="text-xs text-[#4a5568] line-clamp-2 mt-0.5">{res.description}</p>
                </a>
              ))
            )}
          </div>
        </div>
      </dialog>

      {/* NATIVE <dialog> 2: MEGA-MENU NAVIGATION MODAL */}
      <dialog
        ref={menuDialogRef}
        aria-labelledby={`${baseId}-menu-dialog-title`}
        className="jhh-dialog"
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between gap-4 border-b border-[#d8e1e8] pb-4">
            <div className="flex items-center gap-3">
              {isGouni ? <GouniCrestSvg className="w-10 h-10" /> : <HopkinsShieldSvg className="w-10 h-10" />}
              <div>
                <h2 id={`${baseId}-menu-dialog-title`} className="font-serif text-lg font-bold text-[#002d72]">
                  {data.institutionName}
                </h2>
                <span className="text-xs text-[#4a5568]">Hospital Navigation &amp; Patient Services</span>
              </div>
            </div>
            <form method="dialog">
              <button
                type="submit"
                aria-label="Close navigation menu"
                className="p-2 rounded-full text-[#4a5568] hover:bg-[#f4f7fa] hover:text-[#002d72] cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2.5">
                Hospital Sections
              </h3>
              <ul className="space-y-2 text-sm">
                {SECTION_NAV_ITEMS.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={() => menuDialogRef.current?.close()}
                      className="flex items-center justify-between py-1.5 px-2.5 rounded hover:bg-[#f4f7fa] font-semibold text-[#002d72]"
                    >
                      <span>{isGouni ? sec.labelGouni : sec.labelJhh}</span>
                      <ArrowRight className="w-4 h-4 text-[#005eb8]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2.5">
                  Patient &amp; Visitor Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  {data.utilityLinks.map((u) => (
                    <li key={u.label}>
                      <a
                        href={u.href}
                        target={u.external ? "_blank" : undefined}
                        rel={u.external ? "noopener noreferrer" : undefined}
                        onClick={() => menuDialogRef.current?.close()}
                        className="flex items-center justify-between py-1.5 px-2.5 rounded bg-[#f4f7fa] hover:bg-[#e8f1fa] font-semibold text-[#002d72]"
                      >
                        <span>{u.label}</span>
                        {u.external ? (
                          <ExternalLink className="w-3.5 h-3.5 text-[#005eb8]" aria-hidden="true" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-[#005eb8]" aria-hidden="true" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </dialog>

      {/* NATIVE <dialog> 3: HOSPITAL APPOINTMENT MODAL */}
      <dialog
        ref={actionDialogRef}
        aria-labelledby={`${baseId}-action-dialog-title`}
        className="jhh-dialog"
        {...({ closedby: "any" } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      >
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4 border-b border-[#d8e1e8] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8] block">
                {isGouni
                  ? "Godfrey Okoye University Teaching Hospital (GOUNITH)"
                  : "The Johns Hopkins Hospital • 1800 Orleans St."}
              </span>
              <h2 id={`${baseId}-action-dialog-title`} className="font-serif text-xl sm:text-2xl font-bold text-[#002d72]">
                {isGouni
                  ? "Request a Clinical Appointment at GOUNITH"
                  : "Request an Appointment at The Johns Hopkins Hospital"}
              </h2>
            </div>
            <form method="dialog">
              <button
                type="submit"
                aria-label="Close dialog"
                className="p-2 rounded-full text-[#4a5568] hover:bg-[#f4f7fa] hover:text-[#002d72] cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </form>
          </div>

          {formSubmitted ? (
            <div role="status" aria-live="polite" className="rounded-lg bg-[#eef8f2] border border-[#1e6b45] p-6 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-[#1e6b45] shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#002d72]">
                    Appointment Request Registered
                  </h3>
                  <p className="text-xs text-[#1e6b45] font-mono font-bold">
                    Booking Reference: {formSubmitted.referenceCode}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#1e293b]">
                Thank you, <strong>{formSubmitted.fullName}</strong>. Your appointment request for{" "}
                <strong>{formSubmitted.selection}</strong> has been received by our Patient Scheduling Desk.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <form method="dialog">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-[#002d72] text-white text-xs font-bold cursor-pointer"
                  >
                    Done
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor={`${baseId}-full-name`}
                  className="block text-xs font-bold text-[#002d72] mb-1"
                >
                  Patient Full Name (Required)
                </label>
                <input
                  id={`${baseId}-full-name`}
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#cbd5e1] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`${baseId}-email`}
                    className="block text-xs font-bold text-[#002d72] mb-1"
                  >
                    Email Address (Required)
                  </label>
                  <input
                    id={`${baseId}-email`}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-[#cbd5e1] text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${baseId}-phone`}
                    className="block text-xs font-bold text-[#002d72] mb-1"
                  >
                    Telephone / WhatsApp (Required)
                  </label>
                  <input
                    id={`${baseId}-phone`}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded border border-[#cbd5e1] text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={`${baseId}-programme-select`}
                  className="block text-xs font-bold text-[#002d72] mb-1"
                >
                  {isGouni
                    ? "Select GOUNITH Clinical Department / Diagnostic Service"
                    : "Select Johns Hopkins Clinical Department"}
                </label>
                <p id={`${baseId}-programme-hint`} className="text-xs text-[#616e7c] mb-1.5">
                  Emergency cases are attended 24/7 at the Accident &amp; Emergency (A&amp;E) entrance in Trans-Ekulu.
                </p>
                <select
                  id={`${baseId}-programme-select`}
                  aria-describedby={`${baseId}-programme-hint`}
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-[#cbd5e1] bg-white text-sm"
                >
                  {isGouni ? (
                    <>
                      <option>Cardiology &amp; 2D Echocardiography Clinic</option>
                      <option>Endoscopy &amp; Gastroenterology Unit (Upper GI &amp; Colonoscopy)</option>
                      <option>General Surgery, Neurosurgery &amp; Orthopaedics</option>
                      <option>Obstetrics, Gynaecology &amp; Antenatal Booking</option>
                      <option>Paediatrics &amp; Child Health Clinic</option>
                      <option>24/7 Radiology, Ultrasound &amp; Medical Laboratory</option>
                      <option>Ophthalmology, ENT, Physiotherapy &amp; Family Medicine</option>
                      <option>DNA Forensics &amp; Paternity Testing (CeDFoCI)</option>
                    </>
                  ) : (
                    <>
                      <option>Heart and Vascular Institute (1800 Orleans St.)</option>
                      <option>Sidney Kimmel Comprehensive Cancer Center</option>
                      <option>Johns Hopkins Children&apos;s Center</option>
                      <option>Neurology &amp; Neurosurgery</option>
                      <option>Obstetrics &amp; Gynecology (#1) / Rheumatology (#1)</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label
                  htmlFor={`${baseId}-notes`}
                  className="block text-xs font-bold text-[#002d72] mb-1"
                >
                  Symptoms, Referral Note, or Preferred Date (Optional)
                </label>
                <textarea
                  id={`${baseId}-notes`}
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded border border-[#cbd5e1] text-sm"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => actionDialogRef.current?.close()}
                  className="px-4 py-2.5 rounded border border-[#cbd5e1] text-[#4a5568] text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded bg-[#002d72] text-white hover:bg-[#005eb8] text-xs sm:text-sm font-bold cursor-pointer"
                >
                  Confirm Hospital Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
}
