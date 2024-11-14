"use client";

import React, { useContext, useState } from "react";
import { Loader2 } from "lucide-react";
import ThemeColor from "@/components/theme-color";
import UploadFile from "./upload-file";
import { Button } from "@/components/ui/button";
import { UseFigmaLink } from "@/hooks/mutation/useFigmaLink";
import { UseUploadImage } from "@/hooks/mutation/useUploadImage";
import AddFigmaLink from "./add-figma-link";
import { cn } from "@/lib/utils";
import { ProjectContext } from "@/context/ProjectProvider";
interface GenerateRightSideBarProps {
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}
const GenerateRightSideBar:React.FC<GenerateRightSideBarProps> = ({setKeywords}) => {
  // context
  const { setSelectedProjectId } = useContext(ProjectContext);

  // states
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [themeColor, setThemeColor] = useState<string | undefined>();
  const [url, setUrl] = useState<string>("");
  const [addedLink, setAddedLink] = useState<string | null>(null);
  const [selectedIconStyle, setSelectedIconStyle] = useState<
    string | undefined
  >();

  //file
  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  //link api
  const { mutateAsync: addLinkApi, isLoading: linkLoading } = UseFigmaLink();

  // image api
  const { mutateAsync: upLoadImageApi, isLoading: imageLoading } =
    UseUploadImage();  
  // submit
  const onSubmit = async () => {
    try {
      const linkPayload: {
        screen_link: string | null;
        icon_color?: string;
        icon_style?: string;
      } = {
        screen_link: addedLink,
      };
      if (themeColor) {
        linkPayload["icon_color"] = themeColor;
      }
      if (selectedIconStyle) {
        linkPayload["icon_style"] = selectedIconStyle;
      }

      //     image upload api
      if (uploadedFile) {
        const formData = new FormData();
        formData.append("image", uploadedFile);
        if (themeColor) {
          formData.append("icon_color", themeColor);
        }
        if (selectedIconStyle) {
          formData.append("icon_style", selectedIconStyle);
        }

       const data2 = await upLoadImageApi(formData, {
          onSuccess(data) {
            setSelectedProjectId(data.id);
            setThemeColor("");
            setSelectedIconStyle("");
          },
        }
      );
      setKeywords(data2?.attributes?.keywords.slice(1,4))
      console.log("data2?.attributes?.keywords.slice(1,4)",data2?.attributes?.keywords.slice(1,4)) 

      localStorage.setItem("keywords", JSON.stringify(data2?.attributes?.keywords.slice(1,4)))
      
      }
      
      //  add link API
      if (addedLink) {
        const link_api = await addLinkApi(linkPayload, {
          onSuccess(data) {
            setSelectedProjectId(data.id);
            setThemeColor("");
            setSelectedIconStyle("");
          },
        });
        setKeywords(link_api?.attributes?.keywords.slice(1,4))
      console.log("data2?.attributes?.keywords.slice(1,4)",link_api?.attributes?.keywords.slice(1,4)) 
      const cleanedKeywords = link_api?.attributes?.keywords.slice(1, 4).map((keyword: string) => keyword.replace(/['"]+/g, '').trim());

      localStorage.setItem("keywords", JSON.stringify(cleanedKeywords));
      }

      setUploadedFile(null);
      setAddedLink(null);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="h-[calc(100vh-74px)] w-72 xl:w-80 2xl:w-96 bg-[#080e28] text-white rounded-tl-[24px] p-4 xl:p-5 overflow-y-auto hide-scrollbar">
      {/* color picker tab and select style */}

      <ThemeColor
        setThemeColor={setThemeColor}
        themeColor={themeColor}
        setSelectedIconStyle={setSelectedIconStyle}
        selectedIconStyle={selectedIconStyle}
      />

      {/* upload file tab and add link tab */}
      <div className="bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl py-4 mt-6">
        {/* upload file tab */}
        <UploadFile
          onFileUpload={handleFileUpload}
          uploadedFiles={uploadedFile}
          setUploadedFiles={setUploadedFile}
          isDisabled={!!addedLink ? true : false}
        />

        {/* or line */}
        <div className="flex items-center gap-3 my-4">
          <div className="w-full h-[1px] bg-[#1C2037]" />
          <span className="text-sm text-[#7C7F99]">or</span>
          <div className="w-full h-[1px] bg-[#1C2037]" />
        </div>

        {/* Add link tab */}

        <AddFigmaLink
          url={url}
          setUrl={setUrl}
          addedLink={addedLink}
          setAddedLink={setAddedLink}
          uploadedFile={uploadedFile}
        />
      </div>

      {/* submit button */}
      <div className="px-4 mt-7">
        <Button
          type="submit"
          onClick={onSubmit}
          disabled={
            linkLoading || imageLoading || (!uploadedFile && !addedLink)
          }
          className={cn(
            "flex gap-2 text-base w-full h-10 2xl:h-12 ",
            linkLoading || imageLoading || (!uploadedFile && !addedLink)
              ? "border border-[#04ADA3] bg-transparent cursor-not-allowed"
              : "border-none bg-generate-button-gradient"
          )}
        >
          {(linkLoading || imageLoading) && (
            <Loader2 className="w-4 h-4 animate-spin" />
          )}
          Generate
        </Button>
      </div>
    </div>
  );
};

export default GenerateRightSideBar;
