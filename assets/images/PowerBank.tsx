import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const PowerBank = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        d="M13.5 5.5A.5.5 0 0 0 13 5h-.5V3.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9h.5a.5.5 0 0 0 .5-.5v-3Z"
      />
      <Path
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.361 4.28a.625.625 0 0 1 .13.875l-.919 1.243H7.5a.625.625 0 0 1 .546.928l-1.182 2.13A.625.625 0 1 1 5.77 8.85l.667-1.202H5.332a.625.625 0 0 1-.503-.997l1.658-2.24a.625.625 0 0 1 .874-.13Z"
      />
    </Svg>
  );
};
