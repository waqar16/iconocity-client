import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

// API function to fetch similar icon by ID
const FetchIconByIdApi = async (icon_id: number) => {
  const res = await axiosClient.post('app/similarIconSearch/', {
    icon_id,
  });
  return res.data;
};

// Custom hook for fetching similar icon by ID
export const UseFetchIconById = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: FetchIconByIdApi,
    onSuccess: (data) => {

      console.log("Icon fetched successfully:", data);
      qc.invalidateQueries({ queryKey: ["similar-icons"] });
      return data
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.error || error?.message);
      console.log(error?.response?.data?.error || error?.message);
    },
  });
};
