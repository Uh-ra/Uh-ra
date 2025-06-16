import { colors } from "@/constants";
import { IconProps } from "../types";
import { Svg, Path } from "react-native-svg";

export const Close = ({ size = 24, color = "black" }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      />
    </Svg>
  );
};
