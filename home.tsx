import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TeamSection from "@/components/team-section";
import FloatingElements from "@/components/floating-elements";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-800 overflow-x-hidden">
      <FloatingElements />
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
    </div>
  );
}
