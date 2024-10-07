import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

const UploadImageApi = async (formData: FormData) => {
  const res = await axiosClient.post("app/uploadImage/", formData);
  return res.data;
};

export const UseUploadImage = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: UploadImageApi,

    onSuccess: (data) => {
      toast.success("Image has been processed Successfully!");
      qc.invalidateQueries({ queryKey: ["get-project-list"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.error || error?.message);
    },
  });
};
