import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SketchPicker } from "react-color";
import { Button } from "./ui/button";
import { Icons } from "./icons";

// color theme array
export const defaultColor = ["#F6515B", "#FECA3C", "#0886EC", "#fff"];

const beautifulColors = [
  "#FF6633", // Coral
  "#FFB399", // Light Salmon
  "#FF33FF", // Pink
  "#FFAA00", // Orange
  "#99FF99", // Light Green
  "#66B2FF", // Sky Blue
  "#AA00AA", // Purple
  "#FF33CC", // Fuchsia
  "#99E6E6", // Light Blue
  "#6680B3", // Steel Blue
  "#FF0000", // Red
  "#FFD700", // Gold
  "#FF9933", // Deep Saffron
  "#FF8C00", // Dark Orange
  "#FFFF66", // Yellow
  "#008000", // Green
  "#0000FF", // Blue
  "#800080", // Purple
  "#808080", // Gray
  "#FFFFFF", // White
  "#000000", // Black
  "#FF1493", // Deep Pink
  "#9370DB", // Medium Purple
  "#8A2BE2", // Blue Violet
  "#A52A2A", // Brown
  "#1E90FF", // Dodger Blue
  "#7FFF00", // Chartreuse
  "#20B2AA", // Light Sea Green
  "#32CD32", // Lime Green
  "#6B8E23", // Olive Drab
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
  { icon: <Icons.LinerColorStar />, text: "Lineal color", id: "lineal-color" },
  { icon: <Icons.HandDrownStar />, text: "Hand drown ", id: "hand-drawn" },
];

type ThemeColorProps = {
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
  setSelectedIconStyle: React.Dispatch<React.SetStateAction<string>>;
  selectedIconStyle: string;
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
      <h1 className="text-base text-[#BAC0DD] " style={{ color: themeColor }}>
        Select colors
      </h1>

      {/* color picker */}
      <div className="flex justify-between mt-2 2xl:mt-3">
        {/* default color */}
        <div className="flex gap-2">
          {defaultColor.map((color, i) => (
            <div
              key={i}
              className={cn(
                "w-6 2xl:w-8 h-6 2xl:h-8  rounded-full cursor-pointer",
                themeColor === color ? "border border-white" : ""
              )}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setThemeColor(color)}
            />
          ))}
        </div>
        {/* color picker*/}
        <div className="relative flex items-center gap-2">
          <span className="text-xs text-white font-medium">Open editor</span>
          <Image
            src={"/generate/palette.webp"}
            width={40}
            height={40}
            alt="colorSvg"
            className="w-6 2xl:w-8 h-auto cursor-pointer"
            onClick={() => setIsColorPicker(!isColorPicker)}
          />

          {/* absolute SketchPicker color */}
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
        </div>
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
                  : ""
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
