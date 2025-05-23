"use client";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

interface UploadFormInputProps {
  isLoading: boolean;   // <-- Add isLoading here
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ isLoading, onSubmit }: UploadFormInputProps) {
  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex justify-end items-center gap-1.5">
        <Input
          type="file"
          id="file"
          name="file"
          accept="application/pdf"
          required
          disabled={isLoading}  // disable input when loading
        />
        <Button disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload your PDF"}
        </Button>
      </div>
    </form>
  );
}
