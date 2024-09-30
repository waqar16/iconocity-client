import React from "react";
import { useDropzone } from "react-dropzone";
import { CircleHelp, X } from "lucide-react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const UploadFile = ({
  onFileUpload,
  uploadedFiles,
  setUploadedFiles,
  isDisabled,
}: {
  uploadedFiles: File | null;
  setUploadedFiles: React.Dispatch<React.SetStateAction<File | null>>;
  onFileUpload: (file: File) => void;
  isDisabled: boolean;
}) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  };

  // Use the onDrop function in the useDropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    multiple: false,
    disabled: isDisabled,
  });

  const handleRemoveFile = () => {
    setUploadedFiles(null);
  };

  return (
    <>
      {/* title */}
      <div className="flex items-center justify-between px-6 pb-6">
        <h1 className="text-base text-[#BAC0DD]">Upload Design</h1>
        <CircleHelp />
      </div>
      {/* upload file */}
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed border-white rounded-lg py-6 mx-6",
          isDisabled === true ? "cursor-not-allowed" : "cursor-pointer"
        )}
      >
        <input {...getInputProps()} />

        <Icons.Upload className="w-7 h-auto mx-auto" />
        <p className="text-xs text-[#7C7F99] text-center mt-2">
          Drag & Drop or Choose file to upload
        </p>
        <div className="flex gap-2 justify-center text-xs text-[#BAC0DD] text-center mt-2">
          <span>PNG </span>
          <span>JPG </span>
        </div>
      </div>

      {/* upload file show */}
      {uploadedFiles && (
        <div className="flex items-start justify-between bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 mt-6 p-3">
          {/* file info */}
          <div className="flex items-center gap-3 ">
            <Icons.UploadFile />
            <div className="flex flex-col gap-1">
              <span className="text-sm text-white">{uploadedFiles.name}</span>
              <span className="text-[12px] text-[#BAC0DD]">
                {(uploadedFiles.size / 1024).toFixed(2)} KB
              </span>
            </div>
          </div>
          {/* close file */}
          <X
            className="cursor-pointer hover:scale-125"
            onClick={handleRemoveFile}
          />
        </div>
      )}
    </>
  );
};

export default UploadFile;
