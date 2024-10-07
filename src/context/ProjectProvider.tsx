"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ProjectContextType {
  selectedProjectId: string | null;
  setSelectedProjectId: Dispatch<SetStateAction<string | null>>;
  selectedProjectHistoryId: number | null;
  setSelectedProjectHistoryId: Dispatch<SetStateAction<number | null>>;
}

// Create the context with default values
export const ProjectContext = createContext<ProjectContextType>({
  selectedProjectId: null,
  setSelectedProjectId: () => {},
  selectedProjectHistoryId: null,
  setSelectedProjectHistoryId: () => {},
});
export const ProjectProvider = ({ children }: any) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const [selectedProjectHistoryId, setSelectedProjectHistoryId] = useState<
    number | null
  >(null);

  return (
    <ProjectContext.Provider
      value={{
        selectedProjectId,
        setSelectedProjectId,
        selectedProjectHistoryId,
        setSelectedProjectHistoryId,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
