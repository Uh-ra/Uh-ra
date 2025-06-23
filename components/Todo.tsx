import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Txt } from "./Txt";
import { Check, Check2 } from "@/assets/icons";
import { colors } from "@/constants";

interface TodoProps {
  text: string;
  type?: "normal" | "important";
  checked?: boolean;
  onPress: () => void;
}

export const Todo = ({
  text,
  type = "normal",
  checked = false,
  onPress,
}: TodoProps) => {
  const isImportant = type === "important";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        styles.todo,
        {
          backgroundColor: isImportant
            ? checked
              ? colors.red100
              : colors.red300
            : checked
            ? colors.gray100
            : colors.gray100,
        },
      ]}
    >
      <View
        style={[
          styles.checkButton,
          {
            backgroundColor: isImportant
              ? checked
                ? colors.white
                : colors.red200
              : checked
              ? colors.gray50
              : colors.white,
          },
        ]}
      >
        {checked ? (
          <Check size={20} color="red500" />
        ) : (
          <Check2 size={24} color={isImportant ? "red300" : "gray100"} />
        )}
      </View>
      <Txt type="medium18" color="black" style={[checked && { opacity: 0.2 }]}>
        {text}
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  checkButton: {
    width: 28,
    height: 28,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
