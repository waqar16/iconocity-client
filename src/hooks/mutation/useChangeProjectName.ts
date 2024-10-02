import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

const ChangeProjectNameApi = async ({ project_id, new_name }: any) => {
  const res = await axiosClient.post("app/changeProjectName/", {
    project_id,
    new_name,
  });
  return res.data;
};

export const UseChangeProjectName = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ChangeProjectNameApi,
    onSuccess: (data) => {
      toast.success(data.success || "Update project name!");
      qc.invalidateQueries({ queryKey: ["get-project-list"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.error || error?.message);
    },
  });
};
