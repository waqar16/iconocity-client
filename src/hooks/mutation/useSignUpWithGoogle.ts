import axiosClient from "@/lib/axiosClient";
import { useMutation } from "react-query";

export interface UserData {
  email: string;
  full_name: string;
  profile_image: string;
}

const SignUpWithGoogleApi = async (userData: UserData) => {
  const res = await axiosClient.post("auth/signUpWithGoogle/", userData);
  return res.data;
};

export const UseSignUpWithGoogle = () => {
  return useMutation({
    mutationFn: SignUpWithGoogleApi,
  });
};
