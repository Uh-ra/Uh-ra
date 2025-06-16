import React from "react";
import { Svg, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const Earphone = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
      <Path
        clipPath="url(#a)"
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.46.707a3.146 3.146 0 0 0-1.742-.523 3.146 3.146 0 0 0-3.145 3.145v9.217a1.31 1.31 0 0 0 2.621 0V6.475c.174.016.35.016.524 0 .623 0 1.229-.183 1.742-.524.238-.157.355-.436.355-.721V1.428c0-.285-.117-.564-.354-.722ZM.54.707A3.146 3.146 0 0 1 2.281.184a3.146 3.146 0 0 1 3.145 3.145v9.217a1.31 1.31 0 0 1-2.621 0V6.475c-.174.016-.35.016-.524 0A3.146 3.146 0 0 1 .539 5.95c-.237-.156-.354-.435-.354-.72V1.429c0-.285.117-.564.354-.722Z"
      />
    </Svg>
  );
};
