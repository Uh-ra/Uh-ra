import React from "react";
import { Svg, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const Laptop = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
      <Path
        clipPath="url(#a)"
        fill={selected ? "#f87171" : "#d1d5db"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.635 10.577a.5.5 0 0 1 .47-.332h1.79a.5.5 0 0 1 .47.332l.687 1.918H10a.75.75 0 1 1 0 1.5H4a.75.75 0 0 1 0-1.5h.948l.686-1.918Z"
      />
      <Path
        clipPath="url(#a)"
        fill={selected ? "#faa9a9" : "#e3e5e9"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.457.5C.652.5 0 1.152 0 1.957v7.586C0 10.348.652 11 1.457 11h11.086C13.348 11 14 10.348 14 9.543V1.957C14 1.152 13.348.5 12.543.5H1.457Z"
      />
    </Svg>
  );
};
