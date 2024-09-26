import { Icons } from "@/components/icons";
import { X } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

const UploadFile = ({
  onFileUpload,
  uploadedFiles,
  setUploadedFiles,
}: {
  uploadedFiles: File[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  onFileUpload: React.Dispatch<React.SetStateAction<never[]>>;
}) => {
  // Define the onDrop function
  const onDrop = (acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      console.log(file);
      onFileUpload(file);
    });
  };

  // Use the onDrop function in the useDropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/svg+xml": [".svg"],
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  });

  // file remove function
  const handleRemoveFile = (fileToRemove: any) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToRemove)
    );
  };

  return (
    <>
      {/* upload file */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-white rounded-lg cursor-pointer py-6 mx-6"
      >
        <input {...getInputProps()} />

        <Icons.Upload className="w-7 h-auto mx-auto" />
        <p className="text-xs text-[#7C7F99] text-center mt-2">
          Drag & Drop or Choose file to upload
        </p>
        <div className="flex gap-4 justify-center text-xs text-[#BAC0DD] text-center mt-2">
          <span>PNG </span>
          <span>JPG </span>
          {/* <span>SVG </span>
          <span> PDF</span> */}
        </div>
      </div>

      {/* upload file show */}
      {uploadedFiles.length > 0 && (
        <div>
          {uploadedFiles.map((file, index) => {
            const fileNameWithoutExtension = file.name
              .split(".")
              .slice(0, -1)
              .join(".");
            return (
              <div
                key={index}
                className="flex items-start justify-between bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 mt-6 p-3"
              >
                {/* file info */}
                <div className="flex items-center gap-3 ">
                  <Icons.UploadFile />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-white ">
                      {fileNameWithoutExtension}
                    </span>
                    <span className="text-[12px] text-[#BAC0DD]">
                      {(file.size / 1024).toFixed(2)} KB
                    </span>
                  </div>
                </div>
                {/* close file */}
                <X
                  className="cursor-pointer hover:scale-125"
                  onClick={() => handleRemoveFile(file)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default UploadFile;
