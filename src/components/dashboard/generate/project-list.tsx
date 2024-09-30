import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseGetProjectList } from "@/hooks/query/useGetProjectList";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";

const ProjectList = () => {
  // context
  const { setSelectedProjectId, selectedProjectId } =
    useContext(ProjectContext);

  //states
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleShowMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  //  hight animate
  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.style.height = showMoreProjects
        ? `${projectsRef.current.scrollHeight}px`
        : "120px";
    }
  }, [showMoreProjects]);

  // project show list api
  const { data, isSuccess } = UseGetProjectList();
  useEffect(() => {
    if (!selectedProjectId && data && data?.length) {
      setSelectedProjectId(data[0].id);
    }
  }, [isSuccess]);
  return (
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
        <div>
          {data &&
            data?.map(({ id, name }) => (
              <div
                onClick={() => setSelectedProjectId(id)}
                className="flex items-center justify-between rounded-md cursor-pointer bg-[#22263e] px-5 py-3"
              >
                <Input
                  key={id}
                  value={name}
                  className="flex justify-start h-0 text-sm xl:text-base bg-transparent border border-none  px-0"
                  readOnly
                />

                <Button
                  onClick={() => alert("hello world")}
                  className="h-0 px-0"
                >
                  <Icons.Edit />
                </Button>
              </div>
            ))}
        </div>
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
  );
};

export default ProjectList;
