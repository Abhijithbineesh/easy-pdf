"use client";

import React, { forwardRef } from "react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

interface UploadFormInputProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// Use forwardRef to allow ref forwarding to the <form>
const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(
  ({ isLoading, onSubmit }, ref) => {
    return (
      <form className="flex flex-col gap-6" onSubmit={onSubmit} ref={ref}>
        <div className="flex justify-end items-center gap-1.5">
          <Input
            type="file"
            id="file"
            name="file"
            accept="application/pdf"
            required
            disabled={isLoading}
          />
          <Button disabled={isLoading}>
            {isLoading ? "Uploading..." : "Upload your PDF"}
          </Button>
        </div>
      </form>
    );
  }
);

UploadFormInput.displayName = "UploadFormInput";

export default UploadFormInput;
