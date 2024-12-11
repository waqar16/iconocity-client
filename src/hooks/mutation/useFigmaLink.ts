import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "sonner";
import Cookies from "js-cookie";
const FigmaLinkApi = async ({ screen_link, icon_color, icon_style }: any) => {
  const res = await axiosClient.post("app/imageLink/", {
    screen_link,
    figma_token: Cookies.get('figma_token'),
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
      toast.success(data.success || "Url has been processed Successfully!");
      qc.invalidateQueries({ queryKey: ["get-project-list"] });
    },
    onError: (error: any) => {
      console.log(error?.response?.data?.oauth_url)
      if (error?.response?.data?.oauth_url) {
        toast(error?.response?.data?.error, {
          action: {
            label: 'Allow Access',
            onClick: () => {
              window.open(error?.response?.data?.oauth_url, "_blank");

            }
          },
        })
        // window.open(error?.response?.data?.oauth_url, "_blank");
      }
    },


  });

};
