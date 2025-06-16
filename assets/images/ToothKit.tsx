import React from "react";
import { Svg, G, Path } from "react-native-svg";
import { IconProps } from "../types";

export const ToothKit = ({ size = 24, selected = false }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <G>
        <G>
          <Path
            fill={selected ? "#faa9a9" : "#e3e5e9"}
            d="M.887 4.861c.359-3.27 3.235-3.585 5.194-2.45.616.357 1.222.357 1.837 0 1.96-1.135 4.836-.82 5.195 2.45.36 3.28-1.486 6.751-2.476 8.08-.225.302-.588.447-.965.447a1.464 1.464 0 0 1-1.378-.969l-.35-.971a1.003 1.003 0 0 0-1.887 0l-.35.971c-.21.582-.762.969-1.38.969-.376 0-.74-.145-.965-.447-.989-1.329-2.836-4.8-2.475-8.08Z"
          />
          <Path
            stroke={selected ? "#f87171" : "#d1d5db"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
            d="M8.666 4.697c-1.368.499-2.103.489-3.332 0"
          />
        </G>
      </G>
    </Svg>
  );
};
