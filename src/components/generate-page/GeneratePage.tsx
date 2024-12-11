"use client"
import React from "react";
import ChatBot from "@/components/dashboard/generate/chat-bot";
import GenerateLeftSide from "@/components/dashboard/generate/generate-left-side";
import GenerateRightSideBar from "@/components/dashboard/generate/generate-right-side-bar";
import { ProjectProvider } from "@/context/ProjectProvider";
import GenerateSvg from "@/components/dashboard/generate/generate-svg";
import CreateVariations from "@/components/dashboard/generate/create-variations";
import Cookies from 'js-cookie' 
import { baseURL } from "@/lib/axiosClient";
import axios from "axios";
import { useSearchParams } from "next/navigation";
 
const GeneratePageComponent  = () => { 
  const searchParams = useSearchParams();
  const [code, setCode] = React.useState<string | null>(null);
  const [figmaToken, setFigmaToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const codeParam = searchParams.get('code');
      if (codeParam) {
        try {
          const response = await axios.post(
            `${baseURL}/app/exchangeFigmaCodeForToken/`,
            { code: codeParam },
            {
              headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
              },
            }
          );
          console.log('Response:', response.data.token_data.access_token);
          setFigmaToken(response.data.token_data.access_token);
          Cookies.set('figma_token',response.data.token_data.access_token)
        } catch (error) {
          console.error('Error fetching token:', error);
        } finally { 
        }
      }
    };
  
    fetchData(); 
  }, [searchParams]);
   
  const [activeIcon, setActiveIcon] = React.useState<{id: number;
    url: string;
    showMenu?:boolean;
    } | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [enableVariation, setEnableVariation] = React.useState<boolean>(false);
  const [showChat, setShowChat] = React.useState<boolean>(false);
  const [isShowingSimilarIcons, setIsShowingSimilarIcons] = React.useState<boolean>(false);  

  const [keywords, setKeywords] = React.useState<string[]>([])
  React.useEffect(() => {
    // This code will only run on the client side
    const savedKeywords = localStorage.getItem('#keywords');
    if (savedKeywords) {
      setKeywords(JSON.parse(savedKeywords));
    }
  }, []);
  return (
    <ProjectProvider>
      <div className="relative flex gap-5 h-full  ">
      <div className="rounded-full bg-white h-[70px] w-[70px] absolute z-[1000] bottom-10 right-10 flex flex-col items-center justify-center  ">
  <svg 
    onClick={() => { setShowChat(true); }} 
    className="cursor-pointer w-10 h-auto absolute z-10" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z" fill="#1C274C"/>
    <path opacity="0.5" d="M15.2347 2.53476C14.2201 2.1881 13.132 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39938 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88836 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.868 21.8119 9.77987 21.4652 8.76526C20.7572 9.22981 19.9101 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.08987 14.7702 3.24284 15.2347 2.53476Z" fill="#1C274C"/>
  </svg>
  <div className="absolute z-0">
  <svg viewBox="0 0 120 120" className="w-full h-full">
    <path
      id="curve"
      d="M20,60a40,40 0 1,1 80,0a40,40 0 1,1 -80,0"
      fill="transparent"
    />
    <text fontWeight="bold" fontSize="16">
      <textPath href="#curve" startOffset="25%" textAnchor="middle" fill="#000" fontWeight="700">
        Generate with AI
      </textPath>
    </text>
  </svg>
</div>
  {showChat && (
    <div className="flex flex-row items-center relative">
      <ChatBot setShowChat={setShowChat} keywords={keywords} setPageNumber={setPageNumber} />
    </div>
  )}
</div>
        <GenerateLeftSide />
        {/* center*/}
        <div className="h-[calc(100vh-74px)] flex-1 overflow-y-auto hide-scrollbar pb-10">
          <GenerateSvg isShowingSimilarIcons = {isShowingSimilarIcons} setIsShowingSimilarIcons={setIsShowingSimilarIcons} activeIcon={activeIcon} setActiveIcon={setActiveIcon} pageNumber={pageNumber} setPageNumber={setPageNumber} setEnableVariation={setEnableVariation}/>
          {enableVariation && <CreateVariations activeIcon={activeIcon} setPageNumber={setPageNumber} enableVariation = {enableVariation}/>}
          {/* <ChatBot  keywords={keywords} setPageNumber={setPageNumber}/> */}
        </div>
        <GenerateRightSideBar figmaToken={figmaToken}  setIsShowingSimilarIcons={setIsShowingSimilarIcons} setKeywords={setKeywords} setPageNumber={setPageNumber}/>
      </div>
    </ProjectProvider>
  );
};

export default GeneratePageComponent;
