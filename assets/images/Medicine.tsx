import React from "react";
import { Svg, G, Path, Defs, ClipPath } from "react-native-svg";
import { IconProps } from "../types";

export const Medicine = ({ size = 24, selected = false }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <G>
        <Path
          fill={selected ? "#FAA9A9" : "#E3E5E9"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="m5.618 3.203-.707-.707-.708.707-2.718 2.719a4.662 4.662 0 1 0 6.593 6.593l2.719-2.718.707-.708-.707-.707-5.18-5.179Z"
        />
        <Path
          fill={selected ? "#F87171" : "#d1d5db"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.218.12a4.662 4.662 0 0 0-3.296 1.365L4.204 3.203l-.708.708.708.707 5.178 5.179.708.707.707-.707 1.718-1.719A4.662 4.662 0 0 0 9.218.12Z"
        />
      </G>
    </G>
  </Svg>
);
