import type { Metadata } from "next";
import { InstitutionPortal } from "@/components/sites/shared/institution-portal";
import { GOUNI_DATA } from "@/components/sites/gouni/gouni-data";

export const metadata: Metadata = {
  title: "Godfrey Okoye University Teaching Hospital (GOUNITH) | Enugu, Nigeria",
  description:
    "Official landing page of Godfrey Okoye University Teaching Hospital (GOUNITH — Ntasi Obi) in Trans-Ekulu, Enugu, Nigeria—24/7 Accident & Emergency, 2D Echocardiography, Endoscopy, Specialist Surgery, Maternity, Paediatrics, and College of Medicine clinical care.",
};

export default function GouniHomePage() {
  return <InstitutionPortal data={GOUNI_DATA} />;
}
