import Image from "next/image";
import SettingDropMenu from "./setting-drop-menu";
import ProfileInfo from "./profile-info";
import NavList from "./nav-list";

const DashboardHeader = () => {
  return (
    <div className="flex  items-center  justify-between text-black py-4 px-10">
      {/* logo */}
      <Image src={"/logo.png"} width={130} height={130} alt="logo" />

      {/* Nav List */}
      {/* <NavList /> */}

      {/* profile info */}
      <div className="flex items-center gap-3">
        <ProfileInfo />
        <SettingDropMenu />
      </div>
    </div>
  );
};

export default DashboardHeader;
