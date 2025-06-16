import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Tissue = ({ size = 24, selected = false }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <G>
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        d="M0.5 22V6a6 6 0 0 1 6-6h11c-2.21 0-4 2.686-4 6v16H0.5Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        d="M21.5 6c0 3.314-1.79 6-4 6h-4V6c0-3.314 1.79-6 4-6s4 2.686 4 6Z"
      />
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 7V5h2v2h-2Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 15.75h-3v-1.5h3v1.5Zm5 0h-3v-1.5h3v1.5Zm5-1.5h-3v1.5h3v-1.5Z"
      />
    </G>
  </Svg>
);
