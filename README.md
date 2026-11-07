# Godfrey Okoye University Teaching Hospital (GOUNITH)

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Official web portal for **Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi Specialist Hospital)** in Trans-Ekulu, Enugu, Nigeria. 

Engineered on modern **Next.js 16 (App Router)** and styled according to the authoritative institutional design system of **The Johns Hopkins Hospital**, the portal provides clinical care navigation, emergency directions, specialist clinic scheduling, and integration with the GOUNI College of Medicine and the Centre for DNA Forensics and Criminal Investigation (CeDFoCI).

---

## Table of Contents

- [Overview & Heritage](#overview--heritage)
- [Key Features](#key-features)
- [Routes & Architecture](#routes--architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Available Scripts](#available-scripts)
- [Accessibility & Quality Standards](#accessibility--quality-standards)
- [License](#license)

---

## Overview & Heritage

Godfrey Okoye University Teaching Hospital (Ntasi Obi) unites clinical excellence with Christian compassion under the university's guiding philosophy:

> **"Unity of Knowledge"** (*Epistemic Dialogue — Uniting Faith, Reason & Compassionate Healing*)  
> **"Ntasi Obi"** (*Comfort of the Heart — Where Knowledge Heals the Body and Comforts the Spirit*)

### Core Pillars
- **Tertiary Hospital Complex (Trans-Ekulu, Enugu):** 24/7 Accident & Emergency (A&E), modular operating theatres, inpatient wards, intensive care, and 24-hour pharmacy.
- **Specialist Diagnostic Suites:** Non-invasive cardiology (2D Doppler echocardiography, 12-lead ECG), upper GI and lower GI video endoscopy, digital radiology, ultrasound, and automated hematology/microbiology.
- **Mother & Child Pavilion:** 24/7 maternity suites, special care baby unit (SCBU) with neonatal incubators, phototherapy, and dedicated paediatric care.
- **Academic Medicine & Genomics (Ugwuomu-Nike):** GOUNI College of Medicine (MBBS) laboratories and the solar-powered Centre for DNA Forensics and Criminal Investigation (CeDFoCI).

---

## Key Features

1. **24/7 Emergency & Hospital Wayfinding**
   - Direct emergency hotline links (`+234 913 427 3215`, `+234 706 175 6730`).
   - Interactive **Google Maps** integration embedded per facility tab with instant turn-by-turn driving and transit directions.
2. **Clinical Specialties & Departments**
   - Dynamic clinical explorer across Emergency, Internal Medicine, Cardiology, Surgery, Paediatrics, Obstetrics & Gynaecology, Radiology, Laboratory, and DNA Forensics.
3. **Online Appointment Request Modal**
   - Streamlined, accessible dialog to book outpatient consultations, specialist reviews, and diagnostic tests.
4. **Doctor & Consultant Directory**
   - Profiles of chief medical directors, consultant cardiologists, surgeons, paediatricians, and clinical professors with qualifications and clinic days.
5. **Patient & Visitor Guidelines**
   - Visiting hours policy, patient admission checklist, NHIA and private HMO health insurance desk, and medical records retrieval.
6. **Academic Medicine & DNA Forensics Spotlight**
   - Dedicated coverage of the GOUNI College of Medicine curriculum, research partnerships (including Cold Spring Harbor Laboratory), and forensic DNA paternity testing.
7. **Hospital News & Video Milestone Showcase**
   - Accreditation updates, surgical milestones, community medical outreach, and an embedded hospital overview video player.

---

## Routes & Architecture

| Route | Description |
| :--- | :--- |
| **`/`** | **Godfrey Okoye University Teaching Hospital (GOUNITH)** flagship portal |
| **`/the-johns-hopkins-hospital`** | Reference institutional clone (**The Johns Hopkins Hospital**) |

Both routes share a modular, data-driven architecture (`src/components/sites/shared/institution-portal.tsx`) parameterized by strictly typed dataset definitions (`gouni-data.ts` and `jhh-data.ts`).

---

## Tech Stack

- **Framework:** [Next.js 16.3](https://nextjs.org/) (App Router, Turbopack, standalone output)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **Primitives:** [shadcn/ui](https://ui.shadcn.com/) (`@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Maps:** Google Maps Embed & Navigation API

---

## Project Structure

```
gohospital/
├── .github/
│   ├── workflows/
│   │   └── ci.yml               # GitHub Actions CI (lint, typecheck, build)
│   └── PULL_REQUEST_TEMPLATE.md # Standard PR checklist
├── public/
│   ├── images/
│   │   └── logo.png             # Official Godfrey Okoye University logo
│   └── sites/
│       ├── gouni/               # Hospital and campus imagery
│       └── jhh/                 # Reference hospital imagery
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css          # Tailwind CSS v4 & custom Hopkins tokens
│   │   ├── layout.tsx           # Root layout (metadata, fonts, skip-link)
│   │   ├── page.tsx             # GOUNITH Teaching Hospital page
│   │   └── the-johns-hopkins-hospital/
│   │       └── page.tsx         # Reference Johns Hopkins Hospital page
│   ├── components/
│   │   ├── sites/
│   │   │   ├── gouni/
│   │   │   │   └── gouni-data.ts # Complete GOUNITH hospital content dataset
│   │   │   ├── jhh/
│   │   │   │   └── jhh-data.ts   # Johns Hopkins Hospital dataset
│   │   │   └── shared/
│   │   │       ├── brand-logos.tsx        # Institutional brand emblems
│   │   │       └── institution-portal.tsx # Shared accessible portal engine
│   │   └── ui/
│   │       └── button.tsx       # shadcn/ui button primitive
│   ├── lib/
│   │   └── utils.ts             # cn() class merging utility
│   └── types/
│       └── institution.ts       # Comprehensive TypeScript data interfaces
├── Dockerfile                   # Multi-stage production container build
├── Dockerfile.dev               # Development container
├── docker-compose.yml           # Compose orchestration for app and dev
├── eslint.config.mjs            # ESLint flat configuration
├── next.config.ts               # Next.js configuration (standalone enabled)
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js:** v20.9.0 or v24+ (recommended)
- **npm:** v10+

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd gohospital
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

### Vercel (Recommended)
This repository is pre-configured for instant zero-configuration deployment on [Vercel](https://vercel.com):
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`

### Docker Deployment
Run production in an isolated container using the pre-configured `Dockerfile`:

```bash
# Build and run with Docker Compose
docker compose up -d app

# Verify container health
docker compose ps
```

The container runs on port `3000` (configurable via `PORT=...`).

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs Next.js development server with Turbopack |
| `npm run build` | Compiles optimized production bundle |
| `npm run start` | Starts production server from built output |
| `npm run lint` | Runs ESLint analysis across TypeScript and JSX |
| `npm run typecheck` | Validates TypeScript types with `tsc --noEmit` |
| `npm run check` | Runs lint + typecheck + build pipeline in one pass |

---

## Accessibility & Quality Standards

- **WCAG 2.1 AA / AAA Compliance:** Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), accessible `<dialog>` modals with focus restoration, and accessible skip links.
- **Keyboard Usability:** All interactive components are keyboard-focusable with high-visibility focus indicators.
- **Screen Reader Support:** Clean heading hierarchy (`h1`–`h4`), ARIA labels, descriptive image alt text, and accessible `title` attributes on all embedded iframes.
- **Responsive Design:** Mobile-first layout fully tested from small mobile viewports (360px) to ultra-wide 4K displays.

---

## License

This project is licensed under the [MIT License](LICENSE).
