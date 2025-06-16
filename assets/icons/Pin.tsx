import { colors } from "@/constants";
import { IconProps } from "../types";
import { Svg, Path } from "react-native-svg";

export const Pin = ({
  size = 24,
  color = "black",
  fill = false,
}: IconProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 20 20">
      <Path
        fill={fill ? colors[color] : "transparent"}
        stroke={colors[color]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.027 12.978-4.314 4.313M14.952 5.063l2.035 2.035a1.017 1.017 0 0 1-.123 1.546l-1.464.193c-.294.04-.568.173-.783.377-.6.58-1.211 1.19-2.229 2.197a1.355 1.355 0 0 0-.355.641l-.784 3.144a1.017 1.017 0 0 1-1.648.316l-2.533-2.544-2.544-2.533a1.017 1.017 0 0 1 .316-1.648l3.123-.804a1.5 1.5 0 0 0 .641-.366c1.15-1.13 1.567-1.546 2.217-2.249a1.37 1.37 0 0 0 .357-.752l.193-1.486a1.017 1.017 0 0 1 1.546-.122l2.035 2.055Z"
      />
    </Svg>
  );
};
