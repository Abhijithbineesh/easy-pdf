import BgGradient from "@/components/common/bg-gradient";
import Uploadform from "@/components/uploads/upload-form";
import UploadHeader from "@/components/uploads/upload-Header";


export default function Uploadpage() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col text-center justify-center gap-6 items-center">
        <UploadHeader/>
        <Uploadform/>
        </div>

      </div>
    </section>
  );
}
