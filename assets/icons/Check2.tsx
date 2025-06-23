import { Svg, Rect } from "react-native-svg";
import { IconProps } from "../types";
import { colors } from "@/constants";

export const Check2 = ({ size = 24, color = "black" }: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Rect
        width="8"
        height="4"
        x="10.828"
        y="8"
        fill={colors[color]}
        rx="2"
        transform="rotate(45 10.828 8)"
      />
    </Svg>
  );
};
