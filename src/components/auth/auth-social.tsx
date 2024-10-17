"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { useRouter } from "next/navigation";
import { UseSignUpWithGoogle } from "@/hooks/mutation/useSignUpWithGoogle";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import Cookies from "js-cookie";
import axios from "axios";

const AuthSocial = () => {
  //states
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [profileInfo, setProfileInfo] = useState<any>(null);

  //api
  const { mutate: signUpWithGoogle, isLoading } = UseSignUpWithGoogle();

  useEffect(() => {
    if (userInfo) {
      getProfileInfo();
    }
  }, [userInfo]);

  const getGoolgeUserInfo = useGoogleLogin({
    onSuccess: (response) => {
      setUserInfo(response);
    },
    onError: (error) => console.log(`Login Failed: ${error}`),
  });

  //google api
  const getProfileInfo = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
            Accept: "application/json",
          },
        }
      );
      setProfileInfo(response.data);
      checkingCredentials(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //submit
  const checkingCredentials = async (userData: any) => {
    signUpWithGoogle(
      {
        email: userData?.email,
        full_name: userData?.name,
        profile_image: userData?.picture,
      },
      {
        onSuccess: (data) => {
          Cookies.set("token", data.token);
          Cookies.set("email", userData?.email);
          Cookies.set("full_name", userData?.name);
          Cookies.set("profile_image", userData?.picture);

          // toast.success(`Welcome ${data.full_name || "User"}`);
          router.push("/dashboard/generate");
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.error || "An error occurred.");
        },
      }
    );
  };

  return (
    <>
      <Button
        className="w-[300px] h-14 flex gap-3 text-base text-[#000] hover:text-white bg-[#F8F8F8] hover:bg-transparent hover:border border-white rounded-[8px] mt-16 "
        onClick={() => getGoolgeUserInfo()}
        disabled={isLoading}
      >
        <Icons.AuthGoogleIcon />
        Signup with google
      </Button>
    </>
  );
};

export default AuthSocial;
