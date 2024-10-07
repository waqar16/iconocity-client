import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectContext } from "@/context/ProjectProvider";
import { UseChangeProjectName } from "@/hooks/mutation/useChangeProjectName";
import { UseGetProjectList } from "@/hooks/query/useGetProjectList";
import { cn } from "@/lib/utils";
import { ChevronDown, LoaderIcon, SquareCheckBig } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";

const ProjectList = () => {
  // context
  const { setSelectedProjectId, selectedProjectId } =
    useContext(ProjectContext);

  //states
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [updatedProjectName, setUpdatedProjectName] = useState<string>("");
  const [isEditing, setIsEditing] = useState("");
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleShowMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  //  hight animate
  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.style.height = showMoreProjects
        ? `${projectsRef.current.scrollHeight}px`
        : "130px";
    }
  }, [showMoreProjects]);

  // project show list api
  const { data, isSuccess, isLoading } = UseGetProjectList();
  useEffect(() => {
    if (!selectedProjectId && data && data?.length) {
      setSelectedProjectId(data[0].id);
    }
  }, [isSuccess]);

  // Function to handle edit button click
  const handleEditClick = (id: string, name: string) => {
    setIsEditing(id);
    setUpdatedProjectName(name);
  };

  // project name changed api
  const { mutateAsync } = UseChangeProjectName();

  const handleSave = async (id: string) => {
    try {
      await mutateAsync({ project_id: id, new_name: updatedProjectName });
      setIsEditing(""); // Exit editing mode after save
    } catch (error) {
      console.error("Error updating project name:", error);
    }
  };
  return (
    <div className="border-b border-[#1C2037] pb-4 2xl:pb-7 px-6 mt-5 2xl:mt-10">
      {/* title */}
      <h2 className="flex items-center gap-2 text-base text-[#BAC0DD] font-medium px-5">
        <Icons.file />
        Your projects
      </h2>

      {/* project list container */}
      {isLoading ? (
        <div className="py-16 flex justify-center">
          <LoaderIcon className="size-8 animate-spin" />
        </div>
      ) : !!data?.length ? (
        <div
          ref={projectsRef}
          className="overflow-hidden transition-all duration-500 ease-in-out mt-3"
          style={{ height: "130px" }}
        >
          {data &&
            data?.map(({ id, name }) => (
              <div
                key={id}
                onClick={() => setSelectedProjectId(id)}
                className={cn(
                  "flex items-center gap-5 justify-between rounded-md hover:bg-[#22263e] cursor-pointer pl-14 pr-5 py-3 ",
                  selectedProjectId === id ? "bg-[#22263e]" : "bg-transparent"
                )}
              >
                <Input
                  value={isEditing === id ? updatedProjectName || "" : name}
                  onChange={(e) => setUpdatedProjectName(e.target.value)}
                  className={cn(
                    "h-0 text-base bg-transparent   px-0",
                    isEditing === id
                      ? "border border-white py-4 cursor-pointer px-2"
                      : " border-none"
                  )}
                  readOnly={isEditing !== id}
                />

                {/* editing and save buttons */}
                <div className="flex items-center">
                  {/* edit button */}
                  {isEditing !== id && (
                    <Button
                      onClick={() => handleEditClick(id, name)}
                      className="h-0 px-0"
                    >
                      <Icons.Edit className="w-4 h-auto hover:scale-125" />
                    </Button>
                  )}

                  {/* save button */}
                  {isEditing === id && (
                    <Button
                      onClick={() => handleSave(id)}
                      className="h-0 px-0 text-sm"
                    >
                      <SquareCheckBig className="w-5 h-auto hover:scale-125" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p className=" text-center py-10">No Project !</p>
      )}

      {/* see mor button */}
      {!isLoading && data && data?.length > 3 && (
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
      )}
    </div>
  );
};

export default ProjectList;
