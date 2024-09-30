import axiosClient from "@/lib/axiosClient";
import { useQuery } from "react-query";
import { toast } from "sonner";

interface Project {
  id: string;
  name: string;
}

const GetProjectListApi = async () => {
  const res = await axiosClient.get<Project[]>("app/getProjectList");
  return res.data;
};

export const UseGetProjectList = () => {
  return useQuery({
    queryKey: ["get-project-list"],
    queryFn: GetProjectListApi,
    onError: (error: any) => {
      toast.error(error?.response?.data?.error || error?.message);
    },
  });
};
