import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Umbrella = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.25 7.5h1.5v4.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 1.5 0 2.25 2.25 0 0 1-4.5 0V7.5Z"
      />
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75.75a.75.75 0 0 0-1.5 0v.801A5.5 5.5 0 0 0 1.5 7a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5 5.5 5.5 0 0 0-4.75-5.449V.75Z"
      />
    </Svg>
  );
};
