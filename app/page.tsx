import DemoSection from "@/components/home/demoSection";
import HeroSection from "@/components/home/heroSection";
import HowItWorks from "@/components/home/howitWorks";

export default function Home() {
  return <div className="relative w-full">
    <div className="flex flex-col">
    <HeroSection/>
    <DemoSection/>
    <HowItWorks/>
    </div>
    </div>;
}
