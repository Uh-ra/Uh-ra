import { colors, fonts } from "@/constants";
import { StyleProp, Text, TextStyle } from "react-native";

interface TxtProps {
  type?: keyof typeof fonts;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const Txt = ({
  type = "medium16",
  color = "black",
  children,
  style,
}: TxtProps) => {
  return (
    <Text style={[{ color: colors[color] }, fonts[type], style]}>
      {children}
    </Text>
  );
};
