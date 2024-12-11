import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { CircleHelp, X } from "lucide-react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UploadFile = ({
  onFileUpload,
  uploadedFiles,
  setUploadedFiles,
  isDisabled,
  url,
  setUrl,
  addedLink,
  setAddedLink
}: {
  uploadedFiles: File | null;
  setUploadedFiles: React.Dispatch<React.SetStateAction<File | null>>;
  onFileUpload: (file: File) => void;
  isDisabled: boolean;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  addedLink: string | null;
  setAddedLink: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload"); 

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  };

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

  const handleAddUrl = () => {
    if (url.trim()) {
      alert(`File URL added: ${url}`);
      setUrl("");
    }
  };
  const addLink = () => {
    if (url) {
      setAddedLink(url);
      setUrl("");
    }
  };
  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="flex items-center justify-between px-4">
        <h1 className="text-sm text-[#BAC0DD]">Upload Design</h1>
        <CircleHelp className="w-4 h-4 text-[#7C7F99]" />
      </div>

      {/* Toggler */}
      <div className="flex justify-center gap-2 px-4">
        <button
          onClick={() => setActiveTab("upload")}
          className={cn(
            "px-4 py-2 rounded-lg border text-sm",
            activeTab === "upload"
              ? "bg-[#1C223F] text-white border-white"
              : "bg-transparent text-[#7C7F99] border-[#7C7F99]"
          )}
        >
          Upload File
        </button>
        <button
          onClick={() => setActiveTab("url")}
          className={cn(
            "px-4 py-2 rounded-lg border text-sm",
            activeTab === "url"
              ? "bg-[#1C223F] text-white border-white"
              : "bg-transparent text-[#7C7F99] border-[#7C7F99]"
          )}
        >
          Add File URL
        </button>
      </div>

      {/* Content */}
      {activeTab === "upload" ? (
        <>
          {/* Upload File */}
          <div
            {...getRootProps()}
            className={cn(
              "border-2 border-dashed border-white rounded-lg py-3 mx-4",
              isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            )}
          >
            <input {...getInputProps()} />
            <p className="text-[10px] text-[#7C7F99] text-center ">
              Drag & Drop or Choose a file to upload
            </p>
            <Icons.Upload className="w-3 h-3 mx-auto" />
            
          </div>

          {/* Uploaded File Display */}
          {uploadedFiles && (
            <div className="flex items-start justify-between bg-link-added-gradient border border-[#32344A] rounded-lg mx-4 mt-4 p-3">
              {/* File Info */}
              <div className="flex items-center gap-3">
                {uploadedFiles.type.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(uploadedFiles)}
                    alt="Uploaded Thumbnail"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                ) : (
                  <Icons.UploadFile />
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white">{uploadedFiles.name}</span>
                  <span className="text-[10px] text-[#BAC0DD]">
                    {(uploadedFiles.size / 1024).toFixed(2)} KB
                  </span>
                </div>
              </div>

              {/* Remove File */}
              <X
                className="cursor-pointer w-4 h-4 hover:scale-110 text-white"
                onClick={handleRemoveFile}
              />
            </div>
          )}
        </>
      ) : (
        <div className=" ">
          {/* Add File URL */}
          <div className="flex gap-4 items-center bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 py-1 2xl:py-2 px-5">
        <Input
          type="url"
          placeholder="image/figma URL"

          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={!!uploadedFiles}
          className="placeholder:text-[#7C7F99] border-none bg-transparent px-0"
        />
        <Button
          onClick={addLink}
          disabled={!url}
          className="text-base bg-transparent hover:bg-transparent px-0"
        >
          Upload
        </Button>
      </div>
      {addedLink && addedLink.length > 0 && (
        <div className="flex flex-col gap-3 bg-link-added-gradient border border-[#32344A] rounded-lg mt-4 mx-6  p-3">
          <div className="flex items-start justify-between gap-3">
            <p className="scrollbar-hide w-[85%] text-[10px] text-blue-400 overflow-auto">
              {addedLink}
            </p>
            <Button
              onClick={() => setAddedLink(null)}
              className="text-sm text-red-400 px-0 bg-transparent hover:bg-transparent h-0"
            >
              <X className="w-4 h-auto text-white hover:scale-125" />
            </Button>
          </div>
        </div>
      )}
          {/* <div className="flex flex-col gap-2">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter file URL"
              className="bg-[#1C223F] text-white text-sm rounded-lg px-4 py-2 border border-[#32344A] focus:outline-none"
            />
             <Button
          onClick={addLink}
          disabled={!url}
          className="text-base bg-transparent hover:bg-transparent px-0"
        >
          Upload
        </Button>
            
          </div> */}
        </div>
      )}
    </div>
  );
};

export default UploadFile;
