import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionH2, MotionSection, MotionSpan } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

   const buttonVariants={
        scale:1.05,
        transition:{
          type:"spring",
          stiffness:300,
          damping:10,

        }
      }


export default function HeroSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative mx-auto flex flex-col  z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl"
    >
      <MotionDiv
        variants={itemVariants}
        className="relative p-[1px] overflow-hidden rounded-full transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-black hover:shadow-md "
      >
        <Badge
          variant="secondary"
          className="relative px-6 py-2 text-base font-medium bg-black rounded-full  cursor-pointer"
        >
          <Sparkles className="w-6 h-6 mr-2 m-1 lg:w-8 lg:h-8 animate-pulse  text-blue-400" />
          <p className="text-base  text-blue-400">Powered By AI</p>
        </Badge>
      </MotionDiv>

      <MotionH1 variants={itemVariants} className="font-bold py-6 text-center">
        Transform your PDFs into well structured{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">summaries</span>
          <span
            className="absolute inset-0 bg-blue-400/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>
        quickly and efficiently.
      </MotionH1>
      <MotionH2 variants={itemVariants}    className="text lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
        Turn your document into a stunning short reel effortlessly
      </MotionH2>

   
      <MotionDiv variants={itemVariants} whileHover={buttonVariants} >
        <Button
          variant={"link"}
          className="text-blue-400  mt-6  text-base sm:text-lg lg:text-xl  rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 hover:no-underline hover:bg-indigo-950 hover:text-blue-300"
        >
          <Link href="/" className="flex gap-2 items-center">
            <MotionSpan whileHover={buttonVariants} className="text-blue-400">Try Easy</MotionSpan>
            <ArrowRight className="animate-pulse text-blue-400" />
          </Link>
        </Button>
      </MotionDiv>
    </MotionSection>
  );
}
