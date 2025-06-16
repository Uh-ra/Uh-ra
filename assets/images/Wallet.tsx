import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Wallet = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        d="M3.5.855a3.5 3.5 0 0 0-3.5 3.5V12.5A1.5 1.5 0 0 0 1.5 14h9.712a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-.214a.632.632 0 0 1-.058.003H3.355a.625.625 0 0 1 0-1.25H10.5V1.355a.5.5 0 0 0-.5-.5H3.5Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        d="M13.263 7.666h-3.5c-.276 0-.5.2-.5.445v1.778c0 .246.224.445.5.445h3.5c.276 0 .5-.2.5-.445V8.111c0-.246-.224-.445-.5-.445Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 4.003v-1.25H3.355a.625.625 0 1 0 0 1.25H10.5Z"
      />
    </Svg>
  );
};
