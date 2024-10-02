"use client";

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

const GenerateSvg = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const PAGE_SIZE = 16;

  // context
  const { selectedProjectHistoryId } = useContext(ProjectContext);

  //api
  const { data, isLoading } = UseGetHistoryByHistoryId({
    history_id: selectedProjectHistoryId,
    page_size: PAGE_SIZE,
    page: pageNumber,
  });

  useEffect(() => {
    if (data?.count) {
      setTotalPages(Math.ceil(data?.count / PAGE_SIZE));
    }
  }, [data, PAGE_SIZE]);

  // prev button
  const handlePreviousBtn = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  // next  button
  const handleNextBtn = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5">
      {/* download tab */}
      <div className="flex items-center justify-between">
        <Link
          href={`${baseURL}/app/downloadFreePik?history_id=${selectedProjectHistoryId}&page=${pageNumber}&page_size=${PAGE_SIZE}`}
          className={cn(buttonVariants({ variant: "link" }), "h-0  px-0")}
        >
          <Icons.Download />

          <h3 className="text-white ml-1">Download PNG</h3>
        </Link>
      </div>

      {/* icons show */}
      <div className="w-[340px] xl:w-[500px] 3xl:w-[600px] min-h-[352px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-5 xl:py-10 3xl:py-7 mt-6">
        {isLoading ? (
          <LoaderIcon className="text-white size-8 animate-spin" />
        ) : !!data?.results.length ? (
          <div className=" w-[310px] xl:w-[300px] 2xl:w-[400px]  grid grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4 3xl:gap-6">
            {data?.results &&
              data?.results.map(({ url, id }) => (
                <Image
                  key={id}
                  src={url}
                  width={300}
                  height={300}
                  alt="svg"
                  className="w-14 h-14 mx-auto"
                />
              ))}
          </div>
        ) : (
          <p className=" text-white mx-auto text-center">No SVGs found!</p>
        )}
      </div>

      {/* pagination tab */}
      <div className="flex justify-end mt-5">
        <div className="flex items-center gap-4">
          <p className="text-white">{data?.count} icons</p>
          <div className="flex items-center gap-2">
            <Button
              onClick={handlePreviousBtn}
              disabled={pageNumber === 1}
              className="h-0 text-black bg-transparent hover:bg-transparent rounded  px-0"
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
              disabled={pageNumber === totalPages}
              className="h-0 text-white bg-transparent hover:bg-transparent rounded px-0 "
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
