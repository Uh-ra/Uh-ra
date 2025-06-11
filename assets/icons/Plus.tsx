import { colors } from "@/constants";
import { IconProps } from "../types";
import { Svg, Path } from "react-native-svg";

export const Plus = ({ size = 24, color = "black" }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 12h6m0 0h6m-6 0v6m0-6V6"
      />
    </Svg>
  );
};
