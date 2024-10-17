import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SketchPicker } from "react-color";
import { Button } from "./ui/button";
import { Icons } from "./icons";

// color theme array
export const defaultColor = [
  "#000",
  "#0000FF",
  "#7FFF00",
  "#00FFFF",
  "#808080",
  "#008000",
  "#FFA500",
  "#FF0000",
  "#FF007F",
  "#00FF7F",
  "#EE82EE",
  "#ffffff",
  "#FFFF00",
];

const beautifulColors = [
  "#000",
  "#0000FF",
  "#7FFF00",
  "#00FFFF",
  "#808080",
  "#008000",
  "#FFA500",
  "#FF0000",
  "#FF007F",
  "#00FF7F",
  "#EE82EE",
  "#ffffff",
  "#FFFF00",
];

// icon style array
interface IconData {
  text: string;
  icon: JSX.Element;
  id: string;
}

const STAR_ICON: IconData[] = [
  { icon: <Icons.OutlineStar />, text: "Outline", id: "outline" },
  { icon: <Icons.FillStar />, text: "Fill", id: "fill" },
  { icon: <Icons.LinerColorStar />, text: "Linear color", id: "lineal-color" },
  { icon: <Icons.HandDrownStar />, text: "HandDrawn ", id: "hand-drawn" },
];

type ThemeColorProps = {
  themeColor: string | undefined;
  setThemeColor: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedIconStyle: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  selectedIconStyle: string | undefined;
};

const ThemeColor: React.FC<ThemeColorProps> = ({
  themeColor,
  setThemeColor,
  setSelectedIconStyle,
  selectedIconStyle,
}) => {
  const [isColorPicker, setIsColorPicker] = useState(false);

  // Icon Style
  const handleIconStyle = (text: string) => {
    setSelectedIconStyle(text);
  };

  return (
    <div className="bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl p-3 xl:p-5">
      <h1 className="text-base text-[#BAC0DD] ">Select colors</h1>

      {/* color picker */}
      <div className="flex justify-between mt-2 2xl:mt-3">
        {/* default color */}
        <div className="flex flex-wrap gap-2">
          {defaultColor.map((color, i) => (
            <div
              key={i}
              className={cn(
                "w-6 2xl:w-8 h-6 2xl:h-8  rounded-full cursor-pointer",
                themeColor === color ? "border-2 border-white scale-110" : ""
              )}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setThemeColor(color)}
            />
          ))}
        </div>
        {/* color picker*/}
        {/* <div className="relative flex items-center gap-2">
          <span className="text-xs text-white font-medium">Open editor</span>
          <Image
            src={"/generate/palette.webp"}
            width={40}
            height={40}
            alt="colorSvg"
            className="w-6 2xl:w-8 h-auto cursor-pointer"
            onClick={() => setIsColorPicker(!isColorPicker)}
          />

          {isColorPicker && (
            <div className="absolute top-10 right-0">
              <SketchPicker
                presetColors={beautifulColors}
                onChange={(color) => {
                  setThemeColor(color.hex);
                }}
                color={themeColor ? themeColor : "#C54EC9"}
              />
            </div>
          )}
        </div> */}
      </div>

      {/* select style */}
      <div className="mt-5 xl:mt-7">
        <h1 className="text-base text-[#BAC0DD]">Select shape</h1>
        <div className="flex flex-wrap gap-3 mt-2">
          {STAR_ICON.map(({ text, icon, id }, i) => (
            <Button
              key={i}
              onClick={() => handleIconStyle(id)}
              className={cn(
                "flex gap-1 bg-[#1C223F] hover:bg-[#080e28] rounded-3xl px-3 2xl:px-4 py-2",
                selectedIconStyle === id
                  ? "bg-[#080e28] border border-white"
                  : "border border-transparent"
              )}
            >
              {icon}
              <span className="text-xs 2xl:text-sm text-white">{text}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeColor;
