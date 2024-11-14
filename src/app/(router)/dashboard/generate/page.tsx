"use client"
import React from "react";
import ChatBot from "@/components/dashboard/generate/chat-bot";
import GenerateLeftSide from "@/components/dashboard/generate/generate-left-side";
import GenerateRightSideBar from "@/components/dashboard/generate/generate-right-side-bar";
import { ProjectProvider } from "@/context/ProjectProvider";
import GenerateSvg from "@/components/dashboard/generate/generate-svg";

const GeneratePage = () => {
  const [keywords, setKeywords] = React.useState<string[]>(JSON.parse(localStorage.getItem('#keywords') || '[]'));
  return (
    <ProjectProvider>
      <div className="flex gap-5 h-full">
        <GenerateLeftSide />
        {/* center*/}
        <div className="h-[calc(100vh-74px)] flex-1 overflow-y-auto hide-scrollbar pb-10">
          <GenerateSvg/>
          <ChatBot  keywords={keywords}/>
        </div>
        <GenerateRightSideBar setKeywords={setKeywords}/>
      </div>
    </ProjectProvider>
  );
};

export default GeneratePage;
