import { colors } from "@/constants";
import { IconProps } from "../types";
import { Svg, Path } from "react-native-svg";

export const Arrow = ({
  size = 24,
  color = "black",
  rotate = "right",
}: IconProps) => {
  const direction = {
    right: "0deg",
    down: "90deg",
    left: "180deg",
    up: "-90deg",
  };
  return (
    <Svg
      width={size}
      height={size}
      style={{ transform: [{ rotate: direction[rotate] }] }}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m15 5 7 7-7 7"
      />
    </Svg>
  );
};
