import React from "react";
import { Svg, G, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Mask = ({ size = 24, selected = false }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <G>
      <G>
        <Path
          fill={selected ? "#F87171" : "#d1d5db"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.03 5.837c0-1.365 1.047-2.56 2.442-2.56h9.056c1.396 0 2.442 1.195 2.442 2.56 0 .553-.17 1.092-.488 1.535a2.353 2.353 0 0 1-.479.479l-1.838 1.438a6.75 6.75 0 0 1-8.304.01L1.002 7.855a2.356 2.356 0 0 1-.487-.487 2.642 2.642 0 0 1-.485-1.53Zm2.442-1.06c-.474 0-.942.427-.942 1.06 0 .245.076.477.207.66a.94.94 0 0 0 .186.173l1.86 1.446a5.25 5.25 0 0 0 6.458-.009l1.838-1.438a.939.939 0 0 0 .183-.17c.132-.183.208-.416.208-.662 0-.633-.468-1.06-.942-1.06H2.472Z"
        />
        <Path
          fill={selected ? "#FAA9A9" : "#e3e5e9"}
          d="M4.267 3.278a1 1 0 0 0-1 1V9.18a1 1 0 0 0 .428.82l.572-.82c-.572.82-.57.822-.57.822l.002.002.004.002.01.007.022.015.06.037c.047.027.108.06.183.098.15.074.358.161.628.245.54.167 1.324.316 2.394.316s1.854-.149 2.394-.316a4.35 4.35 0 0 0 .628-.245 2.704 2.704 0 0 0 .243-.135l.022-.015.01-.006.004-.003.002-.002s.002-.001-.57-.822l.572.82a1 1 0 0 0 .428-.82V4.278a1 1 0 0 0-1-1H4.267Z"
        />
        <Path
          fill={selected ? "#F87171" : "#d1d5db"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.684 5.781c0-.345.28-.625.625-.625h1.383a.625.625 0 0 1 0 1.25H6.309a.625.625 0 0 1-.625-.625Z"
        />
      </G>
    </G>
  </Svg>
);
