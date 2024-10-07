import axiosClient from "@/lib/axiosClient";
import { useQuery } from "react-query";

interface payload {
  page: number;
  page_size: number;
  history_id: number | null;
}

interface ProjectSvg {
  id: string;
  url: string;
}

interface ProjectSvgResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProjectSvg[];
}

const GetHistoryByHistoryIdApi = async ({
  history_id,
  page_size,
  page,
}: payload) => {
  const res = await axiosClient.post<ProjectSvgResponse>(
    "app/getHistoryByHistoryId/",
    {
      history_id,
      page_size,
      page,
    }
  );
  return res.data;
};

export const UseGetHistoryByHistoryId = ({
  history_id,
  page_size,
  page,
}: payload) => {
  return useQuery({
    queryKey: ["projectIcons", history_id, page_size, page],
    queryFn: () => GetHistoryByHistoryIdApi({ history_id, page_size, page }),
    enabled: !!history_id,
  });
};
