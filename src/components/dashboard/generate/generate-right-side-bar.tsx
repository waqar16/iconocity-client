import { Icons } from "@/components/icons";
import ThemeColor from "@/components/theme-color";
import { ChevronDown, CircleHelp, X } from "lucide-react";
import React, { useState } from "react";
import UploadFile from "./upload-file";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STAR_ICON = [
  { icon: <Icons.OutlineStar />, text: "Outline" },
  { icon: <Icons.FillStar />, text: "Fill" },
  { icon: <Icons.LinerColorStar />, text: "Lineal color" },
  { icon: <Icons.HandDrownStar />, text: "Hand drown " },
];

const GenerateRightSideBar = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [themeColor, setThemeColor] = useState("");
  const [urlList, setUrlList] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");

  //link
  const addLink = () => {
    if (url && !urlList.includes(url)) {
      setUrlList([...urlList, url]);
      setUrl("");
    }
  };

  const removeLink = (link: string) => {
    setUrlList(urlList.filter((l) => l !== link));
  };

  //file
  const handleFileUpload = (file: any) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  };

  return (
    <div className="h-[calc(100vh-74px)] w-72 xl:w-80 2xl:w-96 bg-[#080e28] text-white rounded-tl-[24px] p-4 xl:p-5 overflow-y-auto hide-scrollbar">
      {/* color picker tab */}
      <div className="bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl p-3 xl:p-5">
        {/* color picker */}
        <ThemeColor setThemeColor={setThemeColor} themeColor={themeColor} />

        {/* select style */}
        <div className="mt-5 xl:mt-7">
          <h1 className="text-base text-[#BAC0DD]">Select shape</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {STAR_ICON.map(({ text, icon }, i) => (
              <div
                key={i}
                className="flex gap-1 bg-[#1C223F] rounded-3xl px-3 2xl:px-4 py-2"
              >
                {icon}
                <span className="text-xs 2xl:text-sm text-white">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* upload file tab */}
      <div className="bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl py-4 mt-6">
        {/* title */}
        <div className="flex items-center justify-between px-6 pb-6">
          <h1 className="text-base text-[#BAC0DD]">Upload Design</h1>
          <CircleHelp />
        </div>

        {/* upload file tab */}
        <UploadFile
          onFileUpload={handleFileUpload}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
        />

        {/* or line */}
        <div className="flex items-center gap-3 my-4">
          <div className="w-full h-[1px] bg-[#1C2037]" />
          <span className="text-sm text-[#7C7F99]">or</span>
          <div className="w-full h-[1px] bg-[#1C2037]" />
        </div>

        {/* add link tab  */}
        <div className="flex gap-4 items-center  bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 py-1 2xl:py-2 px-5">
          <Input
            type="url"
            placeholder="Add file URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="placeholder:text-[#7C7F99] border-none bg-transparent px-0"
          />
          <Button
            onClick={addLink}
            className="text-base bg-transparent hover:bg-transparent px-0"
          >
            Upload
          </Button>
        </div>

        {/* Links list */}

        {urlList.length > 0 && (
          <div className="flex flex-col gap-3 bg-link-added-gradient border border-[#32344A] rounded-lg mt-4 mx-6  p-3">
            {urlList.map((link, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-blue-400"
                >
                  {link}
                </a>
                <Button
                  onClick={() => removeLink(link)}
                  className="text-sm text-red-400 px-0 bg-transparent hover:bg-transparent h-0"
                >
                  <X className="w-4 h-auto text-white hover:scale-125" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* submit button */}
      <div className="px-4 mt-7">
        <Button className="text-base w-full h-10 2xl:h-12 bg-generate-button-gradient">
          Generate
        </Button>
      </div>
      {/* footer */}
      {/* <p className="lg:hidden xl:block text-sm text-[#BAC0DD] text-center mt-3">
        You have available 8 credits
      </p> */}
    </div>
  );
};

export default GenerateRightSideBar;
