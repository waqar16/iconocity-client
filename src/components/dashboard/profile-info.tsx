"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ProfileInfo = () => {
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
    <div className="flex gap-3">
      <div>
        {/* name */}
        <h3 className="text-xs 2xl:text-sm text-white font-bold text-end">
          {userName}
        </h3>
        {/* email */}
        <p className="text-xs 2xl:text-sm text-white">{userEmail}</p>
      </div>

      {/* profile pic */}
      <Image
        src={profileImage || "/profile.svg"}
        width={130}
        height={130}
        alt="logo"
        className="w-8 h-8 3xl:w-10 3xl:h-10 rounded-full object-cover"
      />
    </div>
  );
};

export default ProfileInfo;
