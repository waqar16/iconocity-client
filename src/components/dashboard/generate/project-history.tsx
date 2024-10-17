"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { ChevronDown, Clock4, LoaderIcon, Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseGetProjectHistoryList } from "@/hooks/query/useGetProjectHistoryList";
import { cn } from "@/lib/utils";

const ProjectHistory = () => {
  // context
  const {
    selectedProjectId,
    setSelectedProjectHistoryId,
    selectedProjectHistoryId,
  } = useContext(ProjectContext);

  //states
  const [showMoreHistory, setShowMoreHistory] = useState(false);
  const historyRef = useRef<HTMLDivElement | null>(null);

  //  hight animate
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.style.height = showMoreHistory
        ? `${historyRef.current.scrollHeight}px`
        : "250px";
    }
  }, [showMoreHistory]);

  const handleShowMoreHistory = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  //   project list history api
  const { data, isSuccess, isLoading } =
    UseGetProjectHistoryList(selectedProjectId);
  useEffect(() => {
    if (data && data?.length) {
      setSelectedProjectHistoryId(data[0].history_id);
    }
  }, [isSuccess, data]);
  console.log(data);
  return (
    <div className=" pb-7 px-6 mt-5 2xl:mt-10">
      {/* title */}
      <div className="flex items-center justify-between text-[#BAC0DD]">
        <h2 className="flex items-center gap-2 text-base font-normal px-5">
          <Clock4 className="w-4 h-auto" />
          History
        </h2>
        {/* <Plus className="w-5 h-auto" /> */}
      </div>

      {/* user info */}
      {isLoading ? (
        <div className="py-16 flex justify-center">
          <LoaderIcon className="size-8 animate-spin" />
        </div>
      ) : !!data?.length ? (
        <div
          ref={historyRef}
          className="overflow-hidden transition-all duration-500 ease-in-out mt-4 "
          style={{ height: "250px" }}
        >
          {data &&
            data
              .slice(0, showMoreHistory ? data.length : 3)
              .map(({ history_id, history_date, name }) => (
                <div
                  key={history_id}
                  onClick={() => setSelectedProjectHistoryId(history_id)}
                  className={cn(
                    "hover:bg-[#22263e] rounded-md px-10 py-3 mb-2",
                    selectedProjectHistoryId === history_id
                      ? "bg-[#22263e]"
                      : "bg-transparent"
                  )}
                >
                  <h1 className="text-sm font-bold">
                    {new Date(history_date).toLocaleString()}
                  </h1>
                  <div className="flex gap-2 mt-2">
                    <Image
                      src={"/generate/profile4.png"}
                      width={40}
                      height={40}
                      alt="profile"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <p className="text-sm">{name}</p>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <p className=" text-center py-10">No Project history !</p>
      )}

      {/* see mor button */}
      {!isLoading && data && data?.length > 3 && (
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
      )}
    </div>
  );
};

export default ProjectHistory;
