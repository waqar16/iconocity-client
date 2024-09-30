import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Clock4, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProjectList from "./project-list";

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
  //states
  const [showMoreHistory, setShowMoreHistory] = useState(false);
  const historyRef = useRef<HTMLDivElement | null>(null);

  const handleShowMoreHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  return (
    <div className="w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]">
      {/* Your Projects */}
      <ProjectList />

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
