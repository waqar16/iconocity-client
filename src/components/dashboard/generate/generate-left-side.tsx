"use client";

import React from "react";
import ProjectList from "./project-list";
import ProjectHistory from "./project-history";
 
interface GenerateLeftSideBarProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
const GenerateLeftSide:React.FC<GenerateLeftSideBarProps> = ({setPageNumber}) => {
  return (
    <div className="w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]">
      {/* Your Projects */}
      <ProjectList setPageNumber={setPageNumber}/>

      {/* History */}
      <ProjectHistory />
    </div>
  );
};

export default GenerateLeftSide;
