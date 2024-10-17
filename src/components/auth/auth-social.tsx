"use client";

import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { useRouter } from "next/navigation";
import { UseSignUpWithGoogle } from "@/hooks/mutation/useSignUpWithGoogle";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import Cookies from "js-cookie";
import axios from "axios";

// Define the Google User Info type
interface GoogleUserInfo {
  email: string;
  name: string;
  picture: string;
  access_token: string;
}

const AuthSocial: React.FC = () => {
  const router = useRouter();
  const { mutate: signUpWithGoogle, isLoading } = UseSignUpWithGoogle();

  // Google login
  const getGoogleUserInfo = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Fetch profile info
        const userData = await getProfileInfo(response.access_token);
        if (userData) {
          checkingCredentials(userData);
        }
      } catch (error) {
        toast.error("Failed to fetch profile information.");
      }
    },
    onError: (error: any) => toast.error(`Login Failed: ${error.message}`),
  });

  // Get Google Profile Info
  const getProfileInfo = async (accessToken: string) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      );
      return response.data as GoogleUserInfo;
    } catch (error) {
      console.error("Error fetching profile info", error);
      return null;
    }
  };

  // Check credentials and signup with Google
  const checkingCredentials = (userData: GoogleUserInfo) => {
    signUpWithGoogle(
      {
        email: userData.email,
        full_name: userData.name,
        profile_image: userData.picture,
      },
      {
        onSuccess: (data) => {
          Cookies.set("token", data.token);
          Cookies.set("email", userData.email);
          Cookies.set("full_name", userData.name);
          Cookies.set("profile_image", userData.picture);

          // toast.success(`Welcome ${data.full_name || "User"}`);
          router.push("/dashboard/generate");
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.error || "An error occurred.");
        },
      }
    );
  };

  const handleGoogleLogin = () => {
    getGoogleUserInfo();
  };

  return (
    <Button
      className="w-[300px] h-14 flex gap-3 text-base text-[#000] hover:text-white bg-[#F8F8F8] hover:bg-transparent hover:border border-white rounded-[8px] mt-16"
      onClick={handleGoogleLogin}
      disabled={isLoading}
    >
      <Icons.AuthGoogleIcon />
      Signup with Google
    </Button>
  );
};

export default AuthSocial;
