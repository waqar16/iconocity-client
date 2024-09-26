"use client";

import React from "react";
import { Icons } from "@/components/icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ChatBot from "@/components/dashboard/generate/chat-bot";
import GenerateLeftSide from "@/components/dashboard/generate/generate-left-side";
import GenerateRightSideBar from "@/components/dashboard/generate/generate-right-side-bar";

const ICONS = [
  "/generate/svg/Activity.svg",
  "/generate/svg/Creative materials.svg",
  "/generate/svg/Discovery.svg",
  "/generate/svg/E-commerce.svg",
  "/generate/svg/Entertainment.svg",
  "/generate/svg/Loyalty system.svg",
  "/generate/svg/Notification.svg",
  "/generate/svg/Online education.svg",
  "/generate/svg/Payments.svg",
  "/generate/svg/Productivity.svg",
  "/generate/svg/Projects Gallery.svg",
  "/generate/svg/Report time.svg",
  "/generate/svg/Security.svg",
  "/generate/svg/Social media.svg",
  "/generate/svg/Support.svg",
  "/generate/svg/Winning team.svg",
];

const GeneratePage = () => {
  return (
    <div className="flex gap-5 h-full">
      {/* LeftSideBar */}
      <GenerateLeftSide />
      {/* center*/}
      <div className="h-[calc(100vh-74px)] flex-1 overflow-y-auto hide-scrollbar pb-10">
        {/* SVG Icons Section */}
        <div className="bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5">
          {/* download tab */}
          <div className="flex items-center justify-between">
            {/* right download icons */}
            <div className="flex items-center gap-1.5">
              <Icons.Download />
              <h3 className="text-white">Download SVG</h3>
            </div>
          </div>
          {/* icons show */}
          <div className="w-[280px] xl:w-[500px] 3xl:w-[700px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-4 3xl:py-7 mt-6">
            <div className=" w-[250px] xl:w-[300px] 2xl:w-[400px] grid grid-cols-4 xl:grid-cols-4 gap-0 xl:gap-4 3xl:gap-6">
              {ICONS.map((url, i) => (
                <Image
                  key={i}
                  src={url}
                  width={300}
                  height={300}
                  alt="svg"
                  className="w-14 h-14"
                />
              ))}
            </div>
          </div>
          {/* pagination tab */}
          <div className="flex justify-end mt-5">
            <div className="flex items-center gap-4">
              <p className="text-white">55 icons</p>
              <div className="flex items-center gap-2">
                <span className="text-[#7C7F99] font-semibold">1 0f 3</span>
                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Chat Bot Section */}
        <ChatBot />
      </div>
      {/* RightSideBAr */}
      <GenerateRightSideBar />
    </div>
  );
};

export default GeneratePage;
