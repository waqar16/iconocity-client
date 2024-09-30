import axiosClient from "@/lib/axiosClient";
import { useQuery } from "react-query";

interface ProjectSvg {
  id: string;
  url: string;
}

const GetProjectIconListApi = async (project_id: string | null) => {
  if (!project_id) {
    throw new Error("Project ID is required");
  }

  const res = await axiosClient.post<ProjectSvg[]>("app/getProjectIconList/", {
    project_id,
  });
  return res.data;
};

export const UseGetProjectIconList = (project_id: string | null) => {
  return useQuery({
    queryKey: ["projectIcons", project_id],
    queryFn: () => GetProjectIconListApi(project_id),
    enabled: !!project_id,
  });
};
