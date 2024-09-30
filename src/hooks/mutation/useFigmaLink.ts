import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";

const FigmaLinkApi = async ({ screen_link, icon_color, icon_style }: any) => {
  const res = await axiosClient.post("app/figmaLink/", {
    screen_link,
    icon_color,
    icon_style,
  });
  return res.data;
};

export const UseFigmaLink = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: FigmaLinkApi,
    onSuccess: (data) => {
      toast.success("Url has been processed Successfully!");
      qc.invalidateQueries({ queryKey: ["get-project-list"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.error || error?.message);
    },
  });
};
