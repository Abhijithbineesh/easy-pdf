import { Clapperboard } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex flex-col items-center text-center space-y-4">
            <Clapperboard className="w-10 h-10 text-blue-600"/>
            <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm;px-6">Watch how Easy transforms<span className="text-blue-600"> a PDF</span> into an easy-to-read summary! </h3>
            </div>
            <div className="flex justify-center items-center px-2 sm:ox-4 lg:px-6 md:px-5">
                <h1>Pdf summary</h1>

            </div>
        </div>

      </div>
    </section>
  );
}
