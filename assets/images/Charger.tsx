import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Charger = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        d="M5.25.813a.75.75 0 0 0-1.5 0V3.53h1.5V.812Zm5 2.718h-1.5V.812a.75.75 0 0 1 1.5 0v2.72Zm-4 7h1.5v2.688a.75.75 0 0 1-1.5 0V10.53Z"
        clipRule="evenodd"
      />
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        d="M9 10.531H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3Z"
      />
    </Svg>
  );
};
