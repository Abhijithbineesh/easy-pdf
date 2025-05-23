import BgGradient from "@/components/common/bg-gradient";
import { MotionDiv } from "@/components/common/motion-wrapper";
import Uploadform from "@/components/uploads/upload-form";
import UploadHeader from "@/components/uploads/upload-Header";
import { containerVariants } from "@/utils/constants";


export default function Uploadpage() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <MotionDiv 
      variants={containerVariants}
      initial="hidden"
      animate="visible"

      className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col text-center justify-center gap-6 items-center">
        <UploadHeader/>
        <Uploadform/>
        </div>

      </MotionDiv>
    </section>
  );
}
