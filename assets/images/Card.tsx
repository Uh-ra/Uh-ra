import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Card = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        d="M0 5v5.75a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V5H0Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 1.75A1.5 1.5 0 0 0 0 3.25V5h14V3.25a1.5 1.5 0 0 0-1.5-1.5h-11Zm8 6.875a.625.625 0 1 0 0 1.25H11a.625.625 0 1 0 0-1.25H9.5Z"
      />
    </Svg>
  );
};
