import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Camera = ({ size = 24, selected = false }: IconProps) => {
  const primary = selected ? "#f87171" : "#d1d5db"; // 본체 색상
  const secondary = selected ? "#faa9a9" : "#e5e7eb"; // 렌즈/포인트 색상

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill={primary}
        d="M20 5h-3.17l-1.42-1.42A2 2 0 0 0 13.17 3h-2.34a2 2 0 0 0-1.41.58L8 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
      />
      <Path
        fill={secondary}
        d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </Svg>
  );
};
