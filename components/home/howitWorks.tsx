import { BrainCircuit, DockIcon, FileAxis3d } from "lucide-react";
import { ReactNode } from "react";
import { MotionH2, MotionH3 } from "../common/motion-wrapper";

export default function HowItWorks() {
  type Step = {
    icon: ReactNode;
    label: string;
    description: string;
  };

  const steps: Step[] = [
    {
      icon: <DockIcon size={64} strokeWidth={1.5} />,
      label: "Upload your pdf",
      description: "Upload your pdf file to get started",
    },

    {
      icon: <BrainCircuit size={64} strokeWidth={1.5} />,
      label: "AI Analysis",
      description:
        "Our advanced AI processes and analyzes your document instantly",
    },

    {
      icon: <FileAxis3d size={64} strokeWidth={1.5} />,
      label: "Get Summary",
      description: "Receive a clear,concide summary of your Document",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="text-center mb-16">
          <MotionH2 initial={{opacity:1,y:0}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,ease:"easeInOut"}}
          className="text-blue-600 font-bold text-xl uppercase mb-4 ">
            HOW IT WORKS
          </MotionH2>
          <MotionH3 
          initial={{opacity:1,y:0}} 
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,ease:"easeInOut"}}
          className="font-bold text-3xl max-w-2xl mx-auto">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </MotionH3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl  mx-auto relative">
          {steps.map((step, idx) => (
            <StepItem key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Step) {
  return (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-blue-600 transition-colors group-w-full">
      <div className="flex flex-col gap-4 h-full ">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-blue-600/10 to-transparent group-hover:from-blue-600/20 transition-colors">
          <div className="text-blue-600">{icon}</div>
        </div>
        <div className="flex flex-col flex-1 gap-1 justify-between ">
          <h4 className="text-center font-bold text-xl">{label}</h4>
          <p className="text-center text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
