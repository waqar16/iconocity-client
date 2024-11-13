import React, { useContext, useEffect, useState } from "react";
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

const GenerateSvg = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [visibleIcons, setVisibleIcons] = useState([]); // State to manage displayed icons
  const [isShowingSimilarIcons, setIsShowingSimilarIcons] = useState(false); // State to track icon source
  const PAGE_SIZE = 20;

  const { selectedProjectHistoryId } = useContext(ProjectContext);

  const { data, isLoading } = UseGetHistoryByHistoryId({
    history_id: selectedProjectHistoryId,
    page_size: PAGE_SIZE,
    page: pageNumber,
  });

  const result = data?.results;

  useEffect(() => {
    if (data?.count) {
      setTotalPages(Math.ceil(data?.count / PAGE_SIZE));
      setVisibleIcons(result); // Set default icons on data load
    }
  }, [data, PAGE_SIZE]);

  // API for fetching similar icons
  const { mutate: fetchIconById, isLoading: isFetching, data: similarIconData } = UseFetchIconById();

  // Handle search for similar icon
  const handleSearchForSimilarIcon = (id) => {
    fetchIconById(id);
    setIsShowingSimilarIcons(true); // Set flag to true when similar icons are displayed
  };

  // Update visible icons with similar icons when data is fetched
  useEffect(() => {
    if (similarIconData?.similar_icons) {
      setVisibleIcons(similarIconData.similar_icons); // Display similar icons
    }
  }, [similarIconData]);

  // Reset to paginated results on page change
  useEffect(() => {
    if (!isShowingSimilarIcons && result) {
      setVisibleIcons(result); // Reset to paginated results
    }
  }, [pageNumber, result, isShowingSimilarIcons]);

  // Pagination handlers
  const handlePreviousBtn = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setIsShowingSimilarIcons(false); // Reset to paginated results
    }
  };

  const handleNextBtn = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      setIsShowingSimilarIcons(false); // Reset to paginated results
    }
  };

  return (
    <div className="bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5">
      {/* download tab */}
      <div className="flex items-center justify-between">
        <Link
          href={`${baseURL}app/downloadFreePik?history_id=${selectedProjectHistoryId}&page=${pageNumber}&page_size=${PAGE_SIZE}`}
          className={cn(buttonVariants({ variant: "link" }), "h-0 px-0")}
        >
          <Icons.Download />
          <h3 className="text-white ml-1">Download PNG</h3>
        </Link>
      </div>

      {/* icons show */}
      <div className="w-11/12 min-h-[352px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-5 xl:py-10 3xl:py-7 mt-6">
        {isLoading || isFetching ? (
          <LoaderIcon className="text-white size-8 animate-spin" />
        ) : !!(visibleIcons.length) ? (
          <div className="w-10/12 grid grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4 3xl:gap-6">
            {visibleIcons.map(({ url, id }) => (
              <div className="relative flex flex-col items-center justify-center group" key={id}>
                {/* Image */}
                <Image key={id} src={url} width={300} height={300} alt="svg" className="w-14 h-14 mx-auto m-2" />

                {/* Popup content */}
                <div className="flex flex-col items-center w-4 h-4 bg-black rounded-full absolute left-[90%] bottom-[160%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-xl p-4 relative h-[40px] w-[180px] flex items-center justify-center">
                    <button
                      onClick={() => handleSearchForSimilarIcon(id)}
                      className="text-xs font-bold"
                    >
                      {isFetching ? "Searching..." : "Search for similar icon"}
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

      {/* pagination */}
      <div className="flex justify-end mt-5">
        <div className="flex items-center gap-4">
          <p className="text-white">{data?.count} icons</p>
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePreviousBtn}
              disabled={pageNumber === 1 || isShowingSimilarIcons} // Disable pagination if showing similar icons
              className="h-0 text-black bg-transparent hover:bg-transparent rounded px-0"
            >
              <ChevronLeft className="text-white" />
            </Button>
            <span className="text-white">
              <strong>
                {pageNumber} of {totalPages}
              </strong>
            </span>
            <Button
              onClick={handleNextBtn}
              disabled={pageNumber === totalPages || isShowingSimilarIcons} // Disable pagination if showing similar icons
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
