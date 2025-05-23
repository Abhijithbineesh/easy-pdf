import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { MotionDiv } from "../common/motion-wrapper";
import { itemVariants } from "@/utils/constants";
export default function UploadHeader(){

    return(
        <div className="flex flex-col items-center justify-center gap-6 text-center  ">
          <MotionDiv 
          variants={itemVariants} className="relative p-[1px] overflow-hidden rounded-full transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-black hover:shadow-md animate-gradient-x group">
            <Badge
              variant="secondary"
              className="relative px-6 py-2 text-base font-medium bg-black rounded-full  cursor-pointer "
            >
              <Sparkles className="w-6 h-6 mr-2 m-1 lg:w-8 lg:h-8 animate-pulse  text-blue-400" />
              <p className="text-base  text-blue-400">AI-Powered Summary</p>
            </Badge>
          </MotionDiv>
          <div className="capitalize text-3xl font-bold tracking-tight text-grey-900 sm:text-4xl">
            <h1 className="font-bold py-6 text-center">
              Start uploading{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-2">Your pdf</span>
                <span
                  className="absolute inset-0 bg-blue-400/50 -rotate-2 rounded-lg transform -skew-y-1"
                  aria-hidden="true"
                ></span>
              </span>{" "}
            </h1>
            <MotionDiv variants={itemVariants} className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
              <p className="text lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
                Upload your PDF and let our AI do the magic
              </p>
            </MotionDiv>
          </div>
        </div>
    )
}