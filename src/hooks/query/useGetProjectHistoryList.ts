import axiosClient from "@/lib/axiosClient";
import { useQuery } from "react-query";
import { toast } from "sonner";

type ProjectHistory = {
  history_id: number;
  name: string;
  history_date: string;
};

const GetProjectHistoryListApi = async (project_id: string | null) => {
  const res = await axiosClient.post<ProjectHistory[]>(
    "app/getProjectHistoryList/",
    {
      project_id,
    }
  );
  return res.data;
};

export const UseGetProjectHistoryList = (project_id: string | null) => {
  return useQuery({
    queryKey: ["project-history", project_id],
    queryFn: () => GetProjectHistoryListApi(project_id),
    enabled: !!project_id,
    onError: (error: any) => {
      toast.error(error?.response?.data?.error || error?.message);
    },
  });
};
