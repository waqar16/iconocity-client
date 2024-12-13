import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SketchPicker } from "react-color";
import { Button } from "./ui/button";
import { Icons } from "./icons";

// Color and shape data
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

const STAR_ICON = [
  { icon: <Icons.OutlineStar />, text: "Outline", id: "outline" },
  { icon: <Icons.FillStar />, text: "Fill", id: "fill" },
  { icon: <Icons.LinerColorStar />, text: "Lineal color", id: "lineal-color" },
  { icon: <Icons.HandDrownStar />, text: "HandDrawn", id: "hand-drawn" },
];

type ThemeColorProps = {
  themeColor: string | undefined;
  setThemeColor: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedIconStyle: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedIconStyle: string | undefined;
};

const ThemeColor: React.FC<ThemeColorProps> = ({
  themeColor,
  setThemeColor,
  setSelectedIconStyle,
  selectedIconStyle,
}) => {
  const [isColorVisible, setIsColorVisible] = useState(true);
  const [isShapeVisible, setIsShapeVisible] = useState(false);

  // Toggle visibility handlers
  const toggleColors = () => {
    setIsColorVisible((prev) => !prev);
    setIsShapeVisible(false); // Hide shapes when showing colors
  };

  const toggleShapes = () => {
    setIsShapeVisible((prev) => !prev);
    setIsColorVisible(false); // Hide colors when showing shapes
  };

  // Icon style handler
  const handleIconStyle = (id: string) => {
    setSelectedIconStyle(id);
  };

  return (
    <div className="bg-colorPicker-gradient border border-[#1C2037] rounded-2xl p-3 xl:p-5">
      {/* Toggle Buttons */}
      <div className="flex justify-between items-center mb-5">
        <Button
          onClick={toggleColors}
          className={cn(
            "px-4 py-2 rounded-lg",
            isColorVisible ? "bg-[#080e28] text-white" : "bg-[#1C223F] text-[#BAC0DD]"
          )}
        >
          Select Colors
        </Button>
        <Button
          onClick={toggleShapes}
          className={cn(
            "px-4 py-2 rounded-lg",
            isShapeVisible ? "bg-[#080e28] text-white" : "bg-[#1C223F] text-[#BAC0DD]"
          )}
        >
          Select Shapes
        </Button>
      </div>

      {/* Color Picker */}
    {isColorVisible &&   <div
        className={cn(
          "transition-all duration-300 overflow-hidden h-[100px]" )}
      >
        {/* <h1 className="text-base text-[#BAC0DD]">Select Colors</h1> */}
        <div className="flex flex-wrap gap-2 mt-2">
          {defaultColor.map((color, i) => (
            <div
              key={i}
              className={cn(
                "w-6 2xl:w-8 h-6 2xl:h-8 rounded-full cursor-pointer",
                themeColor === color ? "border-2 border-white scale-110" : ""
              )}
              style={{ backgroundColor: color }}
              onClick={() => setThemeColor(color)}
            />
          ))}
        </div>
      </div>}

      {/* Shape Selector */}
   {isShapeVisible &&    <div
        className={cn(
          "transition-all duration-300 overflow-hidden mt-5  h-[100px]" )}
      >
        {/* <h1 className="text-base text-[#BAC0DD]">Select Shapes</h1> */}
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
      </div>}
    </div>
  );
};

export default ThemeColor;
