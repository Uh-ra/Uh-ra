import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Bag = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        d="M10 6V5h4v1h2V5a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v1h2zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14H8.837z"
      />
    </Svg>
  );
};
