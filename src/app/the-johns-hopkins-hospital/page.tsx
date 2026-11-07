import type { Metadata } from "next";
import { InstitutionPortal } from "@/components/sites/shared/institution-portal";
import { JHH_DATA } from "@/components/sites/jhh/jhh-data";

export const metadata: Metadata = {
  title: "The Johns Hopkins Hospital | Johns Hopkins Medicine (Baltimore, MD)",
  description:
    "Explore patient and visitor information, clinical specialties, directions to 1800 Orleans Street, and U.S. News Honor Roll excellence at The Johns Hopkins Hospital in East Baltimore, Maryland.",
};

export default function JohnsHopkinsHospitalClonePage() {
  return <InstitutionPortal data={JHH_DATA} />;
}
