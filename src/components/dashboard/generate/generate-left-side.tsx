"use client";

import React from "react";
import ProjectList from "./project-list";
import ProjectHistory from "./project-history";

const GenerateLeftSide = () => {
  return (
    <div className="w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]">
      {/* Your Projects */}
      <ProjectList />

      {/* History */}
      <ProjectHistory />
    </div>
  );
};

export default GenerateLeftSide;
