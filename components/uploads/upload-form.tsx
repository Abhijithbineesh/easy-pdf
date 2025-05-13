"use client";

import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "file must be a pdf"
    ),
});

export default function Uploadform() {
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
    },
    onUploadError: (err) => {
      console.error("error occurred while uploading", err);
      toast("error occurred while uploading");
    },
    onUploadBegin: ({ file }) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;
    const validatedFields = schema.safeParse({ file });
    console.log(validatedFields);

    if (!validatedFields.success) {
      toast("❌ Something went wrong", {
        description:
          validatedFields.error.flatten().fieldErrors.file?.[0] ??
          "Invalid file.",
        style: { color: "red" },
      });
      return;
    }

    toast("📄 Uploading PDF...", {
      description: "We are uploading your PDF! ",
    });

    const resp = await startUpload([file]);
    console.log(resp);
    if (!resp) {
      toast("Something went wrong", {
        description: "Please use a different file",
        style: { color: "red" },
      });

      return;
    }
    toast("⏳ Processing PDF...", {
      description: "Hang tight! Our AI is reading through your document! ✨",
    });

    const summary=await generatePdfSummary(resp);
  };

  

  





  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
}
