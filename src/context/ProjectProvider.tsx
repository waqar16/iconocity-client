import { UseGetProjectIconList } from "@/hooks/query/useGetProjectIconList";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ProjectContextType {
  selectedProjectId: string | null;
  setSelectedProjectId: Dispatch<SetStateAction<string | null>>;
}

// Create the context with default values
export const ProjectContext = createContext<ProjectContextType>({
  selectedProjectId: null,
  setSelectedProjectId: () => {},
});
export const ProjectProvider = ({ children }: any) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  console.log(selectedProjectId, "hhhhhhhhhhh");
  return (
    <ProjectContext.Provider
      value={{ selectedProjectId, setSelectedProjectId }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
