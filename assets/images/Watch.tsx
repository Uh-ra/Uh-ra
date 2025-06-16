import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Watch = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.44.44A1.5 1.5 0 0 1 5.5 0h3A1.5 1.5 0 0 1 10 1.5V2H4v-.5c0-.398.158-.78.44-1.06ZM4 12v.5A1.5 1.5 0 0 0 5.5 14h3a1.5 1.5 0 0 0 1.5-1.5V12H4Z"
      />
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v7A1.5 1.5 0 0 0 3.5 12h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 10.5 2h-7Z"
      />
    </Svg>
  );
};
