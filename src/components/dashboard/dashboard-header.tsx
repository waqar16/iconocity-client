"use client";
import Image from "next/image";
import SettingDropMenu from "./setting-drop-menu";
import ProfileInfo from "./profile-info";
import NavList from "./nav-list";
import React from "react";

const DashboardHeader = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <div className="flex  items-center  justify-between text-black py-4 px-10">
      {/* logo */}
      <Image src={"/logo.png"} width={130} height={130} alt="logo" />

      {/* Nav List */}
      {/* <NavList /> */}

      {/* profile info */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center gap-3">
          <button
            onClick={() => {
              setShowVideo(true);
            }}
            onMouseEnter={() => setShowVideo(true)}
            className="flex flex-row items-center p-2 border border-white text-white hover:bg-white hover:text-[#1C274C] transition-colors duration-300 rounded-md relative"
          >
            <p className="text-sm">Show video </p>
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-auto ml-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                fill="#1C274C"
              />
            </svg>
          </button>

          {showVideo && (
            <div
              onMouseEnter={() => setShowVideo(true)}
              onMouseLeave={() => setShowVideo(false)}
              className=" flex flex-col items-center absolute  right-0 top-[30px] mt-2 w-96 bg-white p-1 rounded-lg shadow-lg z-50"
            >
              <div className="w-full flex flex-row items-center justify-end">
                <svg
                  onClick={() => {
                    setShowVideo(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 my-2 h-auto cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.225 6.225a.75.75 0 0 1 1.06 0L12 10.94l4.715-4.715a.75.75 0 1 1 1.06 1.06L13.06 12l4.715 4.715a.75.75 0 1 1-1.06 1.06L12 13.06l-4.715 4.715a.75.75 0 1 1-1.06-1.06L10.94 12 6.225 7.285a.75.75 0 0 1 0-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <video
                src={"/tutorial.mp4"}
                // src="../../../public/tutorial.mp4" // Replace with your actual video path
                autoPlay
                loop
                muted
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("guideShown");
            window.location.reload();
          }}
          className={`flex flex-row items-center p-2 border border-white text-white hover:bg-white hover:text-[#1C274C] transition-colors duration-300 rounded-md`}
        >
          <p className="text-sm">View Guide</p>
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-4 h-auto ml-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
              fill="#1C274C"
            />
          </svg>
        </button>
        <ProfileInfo />
        <SettingDropMenu />
      </div>
    </div>
  );
};

export default DashboardHeader;
