import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

const UpdateIconsByQueryApi = async ({
  project_id,
  query,
}: {
  project_id: string | null;
  query: string;
}) => {
  const res = await axiosClient.post("query/UpdateIconsByQuery/", {
    project_id,
    query,
  });
  return res.data;
};
export const UseUpdateIconsByQuery = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: UpdateIconsByQueryApi,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["project-history"] });
    },
    onError: (error: any) => {
      // toast.error(error?.response?.data?.error || error?.message);
      console.log(error?.response?.data?.error || error?.message);
    },
  });
};
