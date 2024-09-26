import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Clock4, File, Plus, Search } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const projects = [
  "# System icons",
  "# Icon Abc company",
  "# Crypto icons",
  "# Techno icons",
];

const historyItems = [
  {
    date: "Nov 15, 3:52 PM",
    name: "Tomas Baker",
    img: "/generate/profile4.png",
  },
  {
    date: "Nov 15, 1:22 PM",
    name: "Tomas Baker",
    img: "/generate/profile4.png",
  },
  {
    date: "Nov 14, 5:45 PM",
    name: "Tomas Baker",
    img: "/generate/profile4.png",
  },
];

const GenerateLeftSide = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreHistory, setShowMoreHistory] = useState(false);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);

  const handleShowMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  const handleShowMoreHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.style.height = showMoreProjects
        ? `${projectsRef.current.scrollHeight}px`
        : "140px"; // Adjust this value according to your needs
    }
  }, [showMoreProjects]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.style.height = showMoreHistory
        ? `${historyRef.current.scrollHeight}px`
        : "140px"; // Adjust this value according to your needs
    }
  }, [showMoreHistory]);

  return (
    <div className="w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]">
      {/* Search Bar */}
      {/* <div className="flex items-center gap-2 border-b border-[#1C2037] px-10 py-2 xl:py-3">
        <Search className="w-8 h-auto text-[#7C7F99]" />
        <Input
          type="text"
          placeholder="Search"
          className="placeholder:text-gray-500 text-base bg-transparent border-none h-0 px-0"
        />
      </div> */}

      {/* create new button */}
      {/* <div className="px-6 pt-4 xl:pt-6">
        <Button
          variant="outline"
          className="w-full h-10 xl:h-12 text-xs xl:text-base text-[#5bbf9d] hover:bg-[#5bbf9d] tracking-[1px] flex items-center gap-2 bg-transparent border border-[#5bbf9d]"
        >
          Create new project <Plus />
        </Button>
      </div> */}

      {/* Your Projects */}
      <div className="border-b border-[#1C2037] pb-4 2xl:pb-7 px-6 mt-5 2xl:mt-10">
        <h2 className="flex items-center gap-2 text-base text-[#BAC0DD] font-medium px-5">
          <Icons.file />
          Your projects
        </h2>
        <div
          ref={projectsRef}
          className="overflow-hidden transition-all duration-500 ease-in-out mt-1"
          style={{ height: "120px" }} // Adjust the initial height according to your needs
        >
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm xl:text-base flex items-center rounded-md hover:bg-[#22263e] px-14 py-3"
                >
                  <span>{project}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleShowMoreProjects}
            className="flex gap-3 text-white bg-transparent hover:bg-[#22263e] 2xl:mt-2"
          >
            {showMoreProjects ? "Show less" : "See all"}
            <ChevronDown
              className={cn(
                "transition-all duration-500 ease-in-out",
                showMoreProjects && "rotate-180"
              )}
            />
          </Button>
        </div>
      </div>

      {/* History */}
      <div className=" pb-7 px-6 mt-5 2xl:mt-10">
        {/* title */}
        <div className="flex items-center justify-between text-[#BAC0DD]">
          <h2 className="flex items-center gap-2 text-base font-normal px-5">
            <Clock4 className="w-4 h-auto" />
            History
          </h2>
          <Plus className="w-5 h-auto" />
        </div>

        {/* user info */}
        <div
          ref={historyRef}
          className="overflow-hidden transition-all duration-500 ease-in-out mt-1 2xl:mt-3"
          style={{ height: "80px" }} // Adjust the initial height according to your needs
        >
          {historyItems
            .slice(0, showMoreHistory ? historyItems.length : 2)
            .map((item, index) => (
              <div
                key={index}
                className="hover:bg-[#22263e] rounded-md px-10 py-2"
              >
                <h1 className="text-sm font-bold">{item.date}</h1>
                <div className="flex gap-2 mt-2">
                  <Image
                    src={item.img}
                    width={40}
                    height={40}
                    alt="profile"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleShowMoreHistory}
            className="flex gap-3 text-white bg-transparent hover:bg-[#22263e] mt-2"
          >
            {showMoreHistory ? "Show less" : "See all"}
            <ChevronDown
              className={cn(
                "transition-all duration-500 ease-in-out",
                showMoreHistory && "rotate-180"
              )}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateLeftSide;
