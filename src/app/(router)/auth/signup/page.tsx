import AuthSocial from "@/components/auth/auth-social";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-[#161A30] h-screen">
      <AuthSocial />
    </div>
  );
};

export default page;
