import { Svg, Path } from "react-native-svg";
import { IconProps } from "../types";
import { colors } from "@/constants";

export const Check = ({ size = 24, color = "black" }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 12 13">
      <Path
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m3 6.5 2.121 2.121L9.364 4.38"
      />
    </Svg>
  );
};
