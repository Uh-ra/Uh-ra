import React from "react";
import { Svg, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const Pouch = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Defs>
        <ClipPath id="clip">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip)">
        <G>
          <Path
            fill={selected ? "#faa9a9" : "#e3e5e9"}
            d="M7 5a7 7 0 0 0-7 7 2 2 0 0 0 2 2h10a2 2 0 0 0 2-2 7 7 0 0 0-7-7Z"
          />
          <Path
            fill={selected ? "#f87171" : "#d1d5db"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.75 1a.75.75 0 0 0-1.5 0c0 .557.17 1.097.479 1.55A9.577 9.577 0 0 0 .232 5.079a.75.75 0 1 0 1.06 1.062 8.077 8.077 0 0 1 11.416 0 .75.75 0 1 0 1.06-1.062A9.577 9.577 0 0 0 9.27 2.551 2.75 2.75 0 0 0 9.75 1a.75.75 0 0 0-1.5 0 1.25 1.25 0 0 1-2.5 0Z"
          />
        </G>
      </G>
    </Svg>
  );
};
