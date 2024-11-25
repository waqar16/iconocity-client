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
};
type GenerateSvgProps = {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};
const GenerateSvg:React.FC<GenerateSvgProps> = ({pageNumber,setPageNumber}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const [similarPageNumber, setSimilarPageNumber] = useState(1);
  const [totalSimilarPages, setTotalSimilarPages] = useState(0);

  const [visibleIcons, setVisibleIcons] = useState<ProjectSvg[]>([]); 
  const [visibleSimilarIcons, setVisibleSimilarIcons] = useState<ProjectSvg[]>([]);  
  const [isShowingSimilarIcons, setIsShowingSimilarIcons] = useState(false);  
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

  return (
    <div className="bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5">
      {/* download tab */}
      <div className="flex items-center justify-between">
        {!isShowingSimilarIcons?
       
       <button
       onClick={async () => {
         const url = `${baseURL}app/downloadFreePik?history_id=${selectedProjectHistoryId}&page=${pageNumber}&page_size=${PAGE_SIZE}`;
         const response = await axios.get(url, { responseType: 'blob' });
   
         const link = document.createElement('a');
         link.href = URL.createObjectURL(response.data);
         link.download = 'icons.zip';
         link.click();
       }}
       className={cn(buttonVariants({ variant: "link" }), "h-0 px-0")}
     >
       <Icons.Download />
       <h3 className="text-white ml-1">Download PNG</h3>
     </button>
       :
      <button
      onClick={async() =>
      {
        const icons =visibleSimilarIcons.slice(pageNumber + 20, pageNumber + 40)
        try {
          setLoading(true);
          const response = await axios.post(
            `${baseURL}/app/downloadIcons`,
            { icons }, 
            { responseType: 'blob' } 
          );
    
           const link = document.createElement('a');
          link.href = URL.createObjectURL(response.data);
          link.download = 'icons.zip'; 
          link.click();
          setLoading(false);
    
          } catch (error) {
          setLoading(false);
           console.error(error);
        } finally {
          setLoading(false);
        }
      }
    }
      className={cn(buttonVariants({ variant: "link" }), "h-0 px-0")}
    >
      <Icons.Download />
      {loading ? <h3 className="text-white ml-1">Downloading...</h3> : <h3 className="text-white ml-1">Download PNG</h3>}
     </button>}
      </div>

       <div className="w-11/12 min-h-[352px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-5 xl:py-10 3xl:py-7 mt-6">
        {isLoading || isFetching ? (
          <LoaderIcon className="text-white size-8 animate-spin" />
        ) : !!(isShowingSimilarIcons ? visibleSimilarIcons : visibleIcons).length ? (
          <div className="w-10/12 grid grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4 3xl:gap-6">
            {(isShowingSimilarIcons ? visibleSimilarIcons.slice((similarPageNumber-1) * 20  + 1, similarPageNumber * 20 +1) : visibleIcons).map(({ url, id }) => (
              <div className="relative flex flex-col items-center justify-center group" key={id}>
                <Image key={id} src={url} width={300} height={300} alt="svg" className="w-14 h-14 mx-auto m-2" />

                <div className={`${isShowingSimilarIcons && "hidden"} flex flex-col items-center w-4 h-4 bg-black rounded-full absolute left-[90%] bottom-[160%] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="bg-white rounded-xl p-4 relative h-[40px] w-[180px] flex items-center justify-center">
                    <button
                      onClick={() => {
                        
                          handleSearchForSimilarIcon(id) 
                        }}
                      className="text-xs font-bold"
                    >
                      { isFetching ? "Searching..." : "Search for similar icon"}
                    </button>
                    <div className="absolute left-7 bottom-[-6px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-white border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
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
