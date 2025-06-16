import { colors } from "@/constants";

export interface IconProps {
  size?: number;
  color?: keyof typeof colors;
  fill?: boolean;
  onPress?: () => void;
  selected?: boolean;
  rotate?: "up" | "down" | "right" | "left";
}
