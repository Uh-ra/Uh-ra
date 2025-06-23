import { colors } from "@/constants";
import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";

export const Menu = ({ size = 24, color = "black" }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 17h14M5 12h14M5 7h14"
      />
    </Svg>
  );
};
