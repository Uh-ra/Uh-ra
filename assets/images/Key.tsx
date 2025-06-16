import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Key = ({ size = 24, selected }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <G>
      <G>
        <Path
          fill={selected ? "#faa9a9" : "#e3e5e9"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L11 3.414 9.914 4.5l1.293 1.293a1 1 0 0 1-1.414 1.414L8.5 5.914 7.446 6.968a4 4 0 1 1-1.414-1.414l1.757-1.757.004-.004.004-.004 2.496-2.496ZM2 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        />
      </G>
    </G>
  </Svg>
);
