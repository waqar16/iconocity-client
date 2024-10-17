"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Settings, Star, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SettingDropMenu from "./setting-drop-menu";
import Cookies from "js-cookie";

const TABS = [
  {
    text: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-auto" />,
    url: "/dashboard",
    disabled: true,
  },
  {
    text: "Generate",
    icon: <Star className="fill-white w-5 h-auto" />,
    url: "/dashboard/generate",
    disabled: false,
  },
  {
    text: "Account",
    icon: <User className="w-5 h-auto" />,
    url: "/dashboard/account",
    disabled: true,
  },
  {
    text: "Favorite",
    icon: <Star className="w-5 h-auto" />,
    url: "/dashboard/favorite",
    disabled: true,
  },
  {
    text: "Setting",
    icon: <Settings className="w-5 h-auto" />,
    url: "/dashboard/setting",
    disabled: true,
  },
];

const DashboardHeader = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");

  useEffect(() => {
    const name = Cookies.get("full_name") || "Guest";
    const email = Cookies.get("email") || "guest@example.com";
    const image = Cookies.get("profile_image") || "/profile.svg";

    setUserName(name);
    setUserEmail(email);
    setProfileImage(image);
  }, []);

  return (
    <div className="flex  items-center  justify-between text-black py-4 px-10">
      {/* logo */}
      <Image src={"/logo.png"} width={130} height={130} alt="logo" />

      {/* links */}
      <div className="flex gap-5 xl:gap-14 3xl:gap-32">
        {TABS.map((tab, index) => {
          return (
            <Link
              href={tab.url}
              key={index}
              className={cn(
                "flex items-center gap-2 text-white",
                tab.disabled && "pointer-events-none opacity-50"
              )}
            >
              {tab.icon}
              {tab.text}
            </Link>
          );
        })}
      </div>

      {/* profile info */}
      <div className="flex items-center gap-3">
        <div className="text-white">
          {/* name */}
          <h3 className="text-xs 2xl:text-sm font-bold text-end">{userName}</h3>
          <p className="text-xs 2xl:text-sm">{userEmail}</p>
        </div>
        <Image
          src={profileImage || "/profile.svg"}
          width={130}
          height={130}
          alt="logo"
          className="w-8 h-8 3xl:w-10 3xl:h-10 rounded-full object-cover"
        />
        <SettingDropMenu />
      </div>
    </div>
  );
};

export default DashboardHeader;
