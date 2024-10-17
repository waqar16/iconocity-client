import React from "react";
import { LayoutDashboard, Settings, Star, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

const NavList = () => {
  return (
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
  );
};

export default NavList;
