import { StyleSheet, TouchableOpacity } from "react-native";
import { Txt } from "./Txt";
import { colors } from "@/constants";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

export const Button = ({ text, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.primary} onPress={onPress}>
      <Txt color="white">{text}</Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    padding: 16,
    backgroundColor: colors.gray900,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
