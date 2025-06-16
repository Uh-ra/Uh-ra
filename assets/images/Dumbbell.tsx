import React from "react";
import { Svg, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const Dumbbell = ({ selected = false, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Defs>
        <ClipPath id="clip">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip)" scale={22 / 24}>
        <Rect
          width="15.415"
          height="3.854"
          x="13.009"
          fill={selected ? "#faa9a9" : "#e5e7eb"}
          rx="1.927"
          transform="rotate(45 13.009 0)"
        />
        <Path
          fill={selected ? "#faa9a9" : "#e5e7eb"}
          d="m18.459 0 5.45 5.45-2.726 2.725-5.45-5.45z"
        />
        <Rect
          width="15.415"
          height="3.854"
          x="10.9"
          y="23.914"
          fill={selected ? "#faa9a9" : "#e5e7eb"}
          rx="1.927"
          transform="rotate(-135 10.9 23.914)"
        />
        <Path
          fill={selected ? "#faa9a9" : "#e5e7eb"}
          d="M5.45 23.914 0 18.464l2.726-2.725 5.45 5.45z"
        />
        <Path
          fill={selected ? "#f87171" : "#d1d5db"}
          d="m14.371 6.812 2.725 2.725-7.58 7.58-2.725-2.725z"
        />
      </G>
    </Svg>
  );
};
