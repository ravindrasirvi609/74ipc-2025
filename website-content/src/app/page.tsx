import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import OrganizationInfo from "@/components/sections/OrganizationInfo";
import PresidentAppeal from "@/components/sections/PresidentAppeal";
import FederatingAssociations from "@/components/sections/FederatingAssociations";
import KeyFeatures from "@/components/sections/KeyFeatures";
import Speakers from "@/components/sections/Speakers";
import Sponsors from "@/components/sections/Sponsors";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to the 74th Indian Pharmaceutical Congress 2025 featuring AI & Technology in Pharma: Educate, Innovate, Empower. December 19-21, 2025, Bangalore.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <OrganizationInfo />
      <PresidentAppeal />
      <KeyFeatures />
      <FederatingAssociations />
      <Speakers />
      <Sponsors />
    </div>
  );
}
