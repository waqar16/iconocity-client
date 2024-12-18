// "use client";

// import React from "react";
// import ProjectList from "./project-list";
// import ProjectHistory from "./project-history";
 
// interface GenerateLeftSideBarProps {
//   setPageNumber: React.Dispatch<React.SetStateAction<number>>;
// }
// const GenerateLeftSide:React.FC<GenerateLeftSideBarProps> = ({setPageNumber}) => {
//   return (
//     <div className="w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]">
 
//       <ProjectList setPageNumber={setPageNumber}/>
 
//       <ProjectHistory />
//     </div>
//   );
// };

// export default GenerateLeftSide;


"use client";

import React from "react";
import ProjectList from "./project-list";
import ProjectHistory from "./project-history";
import Joyride, { Step } from "react-joyride";

interface GenerateLeftSideBarProps {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const GenerateLeftSide: React.FC<GenerateLeftSideBarProps> = ({ setPageNumber }) => {
  
  return (
    <div className="w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]">
    

      {/* Your Projects */}
      <div className="project-list">
        <ProjectList setPageNumber={setPageNumber} />
      </div>

      {/* History */}
      <div className="project-history">
        <ProjectHistory />
      </div>
    </div>
  );
};

export default GenerateLeftSide;