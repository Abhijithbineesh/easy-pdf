import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavigationControls({
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSectionSelect,
}: {
  currentSection: number;
  totalSections: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-blue-700/20">
      <div className="flex items-center justify-between">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onPrevious}
          disabled={currentSection === 0}
          className={cn(
            "rounded-full w-10 h-10 transition-all duration-200 bg-blue-700/20 hover:bg-blue-700/40 border border-blue-700/40 text-blue-600",
            currentSection === 0 && "opacity-40 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalSections }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                currentSection === index
                  ? "bg-blue-600 shadow-md"
                  : "bg-blue-600/40 hover:bg-blue-600/70"
              )}
            />
          ))}
        </div>

        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onNext}
          disabled={currentSection === totalSections - 1}
          className={cn(
            "rounded-full w-10 h-10 transition-all duration-200 bg-blue-700/20 hover:bg-blue-700/40 border border-blue-700/40 text-blue-600",
            currentSection === totalSections - 1 && "opacity-40 cursor-not-allowed"
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
