import DemoSection from "@/components/home/demo-section";
import HeroSection from "@/components/home/heroSection";
import HowItWorks from "@/components/home/howitWorks";
import CTAsection from "@/components/home/cta-section";
export default function Home() {
  return <div className="relative w-full">
    <div className="flex flex-col">
    <HeroSection/>
    <DemoSection/>
    <HowItWorks/>
    <CTAsection/>
    </div>
    </div>;
}
