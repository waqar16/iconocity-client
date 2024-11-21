import axiosClient from "@/lib/axiosClient";
import { useQuery } from "react-query";
import { toast } from "sonner";
import Cookies from "js-cookie";

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
      if (error?.response?.status === 401) {
        // Redirect on 401 error
        // window.location.href = "/auth/signup";
        Cookies.remove("token");
        window.location.href = "/auth/signup";
      } else {
        // Show other errors
        toast.error(error?.response?.data?.error || error?.message);
      }

    },
  });
};
