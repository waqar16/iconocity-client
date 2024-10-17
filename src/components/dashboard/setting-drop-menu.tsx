"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import Cookies from "js-cookie";

const SettingDropMenu = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = "/auth/signup";
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="bg-transparent hover:bg-transparent  border-none px-0 ">
          <ChevronDown className="text-white hover:scale-125" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] bg-[#080E28] border border-[#1C2037] rounded-[8px] py-3 px-2 mt-1"
      >
        <DropdownMenuItem
          onClick={handleLogout}
          className=" text-white bg-transparent hover:bg-[#11172f] px-2 py-2"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingDropMenu;
