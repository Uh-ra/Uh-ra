import React from "react";
import { Svg, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const EyeDrops = ({ size = 24, selected = false }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <G>
        <Path
          fill={selected ? "#FAA9A9" : "#e3e5e9"}
          d="m.329 11.409 1.253-1.253a3.425 3.425 0 0 1 .6-3.993l2.96-2.96 5.655 5.656-2.96 2.96a3.425 3.425 0 0 1-3.993.599L2.591 13.67a1.131 1.131 0 0 1-1.595 0l-.667-.667a1.131 1.131 0 0 1 0-1.595Z"
        />
        <Path
          fill={selected ? "#F87171" : "#d1d5db"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.91 1.223C8.51-.39 11.18-.39 12.78 1.22c1.61 1.6 1.61 4.27-.002 5.869l-.813.813L13.03 8.97a.75.75 0 1 1-1.06 1.06l-8-8A.75.75 0 0 1 5.03.97l1.067 1.066.813-.813Z"
        />
      </G>
    </G>
  </Svg>
);
