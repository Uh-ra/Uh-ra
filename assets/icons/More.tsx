import { Svg, Path } from "react-native-svg";
import { colors } from "@/constants";
import { IconProps } from "../types";

export const More = ({ size = 24, color = "black" }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      />
    </Svg>
  );
};
