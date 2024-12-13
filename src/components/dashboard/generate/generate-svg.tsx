import React, {Dispatch, SetStateAction ,useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseGetHistoryByHistoryId } from "@/hooks/query/useGetHistoryByHistoryId";
import { ChevronLeft, ChevronRight, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { baseURL } from "@/lib/axiosClient";
import { cn } from "@/lib/utils";
import { UseFetchIconById } from "@/hooks/mutation/useSimilarIconByFamily";
import axios from "axios";
type ProjectSvg = {
  id: number;
  url: string;
  similar_icon_id?:number
};
type GenerateSvgProps = {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  setEnableVariation:Dispatch<SetStateAction<boolean>>;
  activeIcon:ProjectSvg | null;
  setActiveIcon:Dispatch<SetStateAction<ProjectSvg | null>>;
  setIsShowingSimilarIcons:Dispatch<SetStateAction<boolean>>;
  isShowingSimilarIcons:boolean
};
const GenerateSvg:React.FC<GenerateSvgProps> = ({isShowingSimilarIcons,setIsShowingSimilarIcons,activeIcon,setActiveIcon,pageNumber,setPageNumber,setEnableVariation}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [similarPageNumber, setSimilarPageNumber] = useState(1);
  const [totalSimilarPages, setTotalSimilarPages] = useState(0);

  const [visibleIcons, setVisibleIcons] = useState<ProjectSvg[]>([]); 
  const [visibleSimilarIcons, setVisibleSimilarIcons] = useState<ProjectSvg[]>([]);  
  // const [isShowingSimilarIcons, setIsShowingSimilarIcons] = useState(false);  
  const PAGE_SIZE = 20;
  const { selectedProjectHistoryId } = useContext(ProjectContext);
  const { data, isLoading } = UseGetHistoryByHistoryId({
    history_id: selectedProjectHistoryId,
    page_size: PAGE_SIZE,
    page: pageNumber,
  });

  const result: ProjectSvg[] = data?.results?.map((icon: any) => ({
    id: Number(icon.id),
    url: icon.url,
  })) ?? [];

  useEffect(() => {
    if (data?.count) {
      setTotalPages(Math.ceil(data?.count / PAGE_SIZE));
      if (result) {
        setVisibleIcons(result);
      }
    }
  }, [data, PAGE_SIZE]);

  const { mutate: fetchIconById, isLoading: isFetching, data: similarIconData } = UseFetchIconById();

  const handleSearchForSimilarIcon = (id: number) => {
    setPageNumber(1)
    setSimilarPageNumber(1)
    fetchIconById(id);
    setIsShowingSimilarIcons(true); // Set flag to true when similar icons are displayed
  };

  useEffect(() => {
    if (similarIconData?.similar_icons) {
      setTotalSimilarPages(Math.ceil(similarIconData?.similar_icons.length / PAGE_SIZE));
      setVisibleSimilarIcons(similarIconData.similar_icons ); // Display similar icons
    }
  }, [similarIconData]);

  useEffect(() => {
    
    if (!isShowingSimilarIcons && result) {
      setVisibleIcons(result); 
    }
  }, [pageNumber, result, isShowingSimilarIcons]);

  useEffect(() => {
    if (isShowingSimilarIcons) {
      setVisibleIcons([]); 
    }
  }, [isShowingSimilarIcons]);

  const handlePreviousBtn = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setIsShowingSimilarIcons(false);
    }
  };

  const handleNextBtn = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      setIsShowingSimilarIcons(false);
    }
  };

  const handleSimilarPreviousBtn = () => {
    if (similarPageNumber > 1) {
      setSimilarPageNumber(similarPageNumber - 1);
    }
  };

  const handleSimilarNextBtn = () => {
    if (similarPageNumber < totalSimilarPages) {
      setSimilarPageNumber(similarPageNumber + 1);
    }
  };

  // Prepare the icons to download from the similar icons on the current page
  const getIconsToDownload = () => {
    if (isShowingSimilarIcons) {
      const startIndex = (similarPageNumber - 1) * PAGE_SIZE;
      const endIndex = similarPageNumber * PAGE_SIZE;
      return visibleSimilarIcons.slice(startIndex, endIndex);
    }
    return []; // Return empty if no similar icons are being displayed
  };
  const menuRef = React.useRef<HTMLDivElement | null>(null); // Ref for menu container

  // Other state and hooks...

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) // Check if the click is outside the menu
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5 ">
      {/* download tab */}
      <div className="flex flex-col items-center my-2 w-full">
        <div className="flex flex-row items-center justify-center">
        <h1 className="text-white font-bold text-3xl">{'Welcome'}</h1>
<svg   viewBox="0 0 1024 1024" className="w-12 h-12" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M506.8 185.8c-164.6 0-298.1 132.4-298.1 295.8 0 104.8 55 196.8 137.8 249.3L288.7 825l137.1-58.8a300.6 300.6 0 0 0 81 11.1c164.6 0 298.1-132.4 298.1-295.8S671.4 185.8 506.8 185.8z" fill="#F68F3B" /><path d="M703.9 361.5c-4.9 0-9.7-2.5-12.3-7.1-31.7-54.8-90.6-73.2-91.2-73.4-7.5-2.3-11.7-10.1-9.4-17.6 2.3-7.4 10.2-11.6 17.6-9.4 2.8 0.8 70.1 21.5 107.6 86.3 3.9 6.7 1.6 15.4-5.2 19.2-2.2 1.4-4.7 2-7.1 2zM551.7 268.8c-1.2 0-2.5-0.1-3.7-0.5-21.3-5.7-38.9-3.2-39.1-3.2-7.8 1.2-15-4.1-16.1-11.8-1.2-7.7 4.1-14.8 11.8-16 1-0.1 23.4-3.5 50.8 3.8 7.6 2 12 9.8 10 17.3-1.7 6.2-7.4 10.4-13.7 10.4z" fill="#FFFFFF" /><path d="M506.8 167c-174.8 0-317 141.1-317 314.6 0 101.7 48.7 195.7 131.3 254.9l-48.6 78.9c-4.2 6.9-3.5 15.8 1.8 21.9 3.7 4.3 9 6.6 14.4 6.6 2.4 0 4.8-0.5 7.1-1.4L427 786c26.1 6.7 52.9 10.1 79.8 10.1 174.8 0 317-141.1 317-314.6 0-173.4-142.2-314.5-317-314.5z m0 591.6c-25.5 0-51.1-3.5-75.9-10.4-4.1-1.2-8.4-0.9-12.3 0.7l-84.4 37.5 28.4-45.8c5.3-8.7 2.6-20-6-25.5-80.8-51.3-129-138.6-129-233.5 0-152.7 125.2-277 279.1-277s279.1 124.3 279.1 277c0.1 152.7-125.1 277-279 277z" fill="#211F1E" /><path d="M661.5 423.4c0-20.7-16.9-37.6-37.9-37.6-20.9 0-37.8 16.8-37.8 37.6 0 20.7 16.9 37.6 37.8 37.6 21 0 37.9-16.8 37.9-37.6zM433.1 423.4c0-20.7-16.9-37.6-37.9-37.6-20.9 0-37.8 16.8-37.8 37.6 0 20.7 16.9 37.6 37.8 37.6 21 0 37.9-16.8 37.9-37.6zM597.5 531.6c-9.7-3.9-20.7 0.7-24.7 10.3-0.2 0.4-16.2 38-63.4 38-48.6 0-61.6-32.8-62.9-36.8-3.2-9.8-13.9-15.1-23.7-12-10 3.1-15.5 13.7-12.3 23.6 0.8 2.6 21 62.8 98.9 62.8 72.3 0 97.4-58.8 98.4-61.3 4-9.7-0.6-20.6-10.3-24.6zM303.2 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zM336.8 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM320 525.1c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.2-7.3-7.3-7.3zM353.7 525.1c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM336.8 546.9c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM374.8 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM654.7 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM688.4 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM671.6 525.1c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM705.3 525.1c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM688.4 546.9c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM726.4 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3z" fill="#211F1E" /></svg>
        </div>
        <p className="text-gray-500">{(isShowingSimilarIcons ? visibleSimilarIcons : visibleIcons).length?'Click on icons to view more options':'Upload Image/figma file on bottom right side to generate icons'}</p>
      </div>

       

      <div className="w-11/12 min-h-[352px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-5 xl:py-10 3xl:py-7 mt-4">
      {isLoading || isFetching ? (
        <LoaderIcon className="text-white size-8 animate-spin" />
      ) : !!(isShowingSimilarIcons ? visibleSimilarIcons : visibleIcons).length ? (
        <div className="w-10/12 grid grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4 3xl:gap-6">
          {(isShowingSimilarIcons
            ? visibleSimilarIcons.slice(
                (similarPageNumber - 1) * 20 + 1,
                similarPageNumber * 20 + 1
              )
            : visibleIcons
          ).map((icon,index) => (
            <div className="relative flex flex-col items-center justify-center" key={icon.id}>
              <Image
                key={icon.id}
                src={icon.url}
                width={300}
                height={300}
                alt="svg"
                className="w-14 h-14 mx-auto m-2 cursor-pointer"
                onClick={() =>{
                  console.log(activeIcon?.id)
                  console.log(icon?.id)
                  if (activeIcon?.id === ( icon.id || icon.similar_icon_id) ) {
                    // If the same icon is clicked again, toggle the menu visibility
                    setShowMenu(!showMenu);
                  } else {
                    // If a different icon is clicked, update the active icon and show the menu
                    setActiveIcon({ id:   icon.id || icon?.similar_icon_id || 0, url: icon.url });
                    setShowMenu(true);
                  }
                  console.log(activeIcon )
                }}
                  
              />
               
              {showMenu && activeIcon?.id == (icon.similar_icon_id ||   icon.id) &&  ( // Show options if the clicked icon matches the active icon
                <div
                ref={menuRef}
                className={`   flex flex-col items-center w-4 h-4 bg-black rounded-full absolute left-[100%] top-[-120px] z-[4000]`}>
                  <div className="bg-white rounded-xl p-4 relative h-auto w-[180px] flex flex-col items-center justify-center">
                   
                    <button
                      onClick={() => {
                        handleSearchForSimilarIcon( icon.id || icon.similar_icon_id || 0);
                        setShowMenu(false)
                        setEnableVariation(false);
                        setActiveIcon(null)

                      }}
                      className="w-full hover:bg-gray-400 hover:text-white p-2 rounded-md bg-gray-200 text-xs font-bold"
                    >
                      {isFetching ? "Searching..." : "Search for similar icon"}
                    </button>
                    <button
                      onClick={() => { 
                        setEnableVariation(false);            
                        setActiveIcon(null)

                        setShowMenu(false)  
                            window.open(`https://www.freepik.com/icon/${icon.id || icon.similar_icon_id}#fromView=keyword&page=1&position=0&uuid=31cbda18-5c8f-4ebb-8baf-7db46b2eaa4b`, '_blank', 'noopener,noreferrer');
                         
                           }}
                      className="w-full mt-[2px] hover:bg-gray-400 hover:text-white p-2 rounded-md bg-gray-200 text-xs font-bold"
                    >
                      {"Download Icon"}
                    </button>
                    <button
                      onClick={() => {
                        setEnableVariation(true);
                        setShowMenu(false) 
                        setActiveIcon({id: icon.id ||icon.similar_icon_id ||0,url:icon.url})


                      }}
                      className="w-full mt-[2px] hover:bg-gray-400 hover:text-white p-2 rounded-md bg-gray-200 text-xs font-bold"
                    >
                      {"Variations"}
                    </button>
                    <div className="absolute left-7 bottom-[-6px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-white border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white mx-auto text-center">No Icons found!</p>
      )}
    </div>

      {isShowingSimilarIcons && <div className="w-full flex flex-row items-center justify-end">
      <button
        onClick={()=>setIsShowingSimilarIcons(false)}
        className="text-white mt-5  mr-6 p-3 bg-[#1C2038] rounded-xl">Go Back</button> </div>}
      <div className="flex justify-end mt-2">
        <div className="flex items-center gap-4">
          <p className="text-white">
            {isShowingSimilarIcons ? similarIconData?.count : data?.count} icons
          </p>
          <div className="flex items-center gap-2">
            <Button
              onClick={isShowingSimilarIcons ? handleSimilarPreviousBtn : handlePreviousBtn}
              disabled={isShowingSimilarIcons ? similarPageNumber === 1 : pageNumber === 1}
              className="h-0 text-black bg-transparent hover:bg-transparent rounded px-0"
            >
              <ChevronLeft className="text-white" />
            </Button>
            <span className="text-white">
              <strong> 
                {`${isShowingSimilarIcons ? similarPageNumber : pageNumber} of ${isShowingSimilarIcons ? totalSimilarPages : totalPages}`}
          
                
              </strong>
            </span>
            <Button
              onClick={isShowingSimilarIcons ? handleSimilarNextBtn : handleNextBtn}
              disabled={
                isShowingSimilarIcons
                  ? similarPageNumber === totalSimilarPages
                  : pageNumber === totalPages
              }
              className="h-0 text-white bg-transparent hover:bg-transparent rounded px-0"
            >
              <ChevronRight className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateSvg;
