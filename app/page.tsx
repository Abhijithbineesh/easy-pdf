import DemoSection from "@/components/home/demoSection";
import HeroSection from "@/components/home/heroSection";

export default function Home() {
  return <div className="relative w-full">
    <div className="flex flex-col">
    <HeroSection/>
    <DemoSection/>
    </div>
    </div>;
}
